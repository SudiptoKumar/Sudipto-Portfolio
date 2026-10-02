const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const detectDevice = (ua = "") =>
  /mobile|android|iphone|ipad|ipod/i.test(ua)
    ? "Mobile"
    : /tablet/i.test(ua)
      ? "Tablet"
      : "Desktop";

const detectBrowser = (ua = "") => {
  if (/edg\//i.test(ua)) return "Edge";
  if (/opr\//i.test(ua)) return "Opera";
  if (/firefox\//i.test(ua)) return "Firefox";
  if (/chrome\//i.test(ua) && !/edg\//i.test(ua)) return "Chrome";
  if (/safari\//i.test(ua) && !/chrome\//i.test(ua)) return "Safari";
  return "Unknown";
};

const getClientIp = (req) => {
  const forwarded = req.headers?.["x-forwarded-for"];
  if (forwarded) return String(forwarded).split(",")[0].trim();

  const realIp = req.headers?.["x-real-ip"];
  if (realIp) return String(realIp).split(",")[0].trim();

  const vercelIp = req.headers?.["x-vercel-forwarded-for"];
  if (vercelIp) return String(vercelIp).split(",")[0].trim();

  return "Unavailable";
};

const sendJson = (res, status, body) => {
  res.status(status).setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.status(status).json(body);
};

export default async (req, res) => {
  if (req.method !== "POST") {
    return sendJson(res, 405, { success: false, error: "Method not allowed." });
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload || "{}");
    } catch {
      return sendJson(res, 400, { success: false, error: "Invalid request." });
    }
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return sendJson(res, 400, { success: false, error: "Invalid request." });
  }

  const fullname = String(payload.fullname || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();
  const website = String(payload.website || "").trim();

  if (website) return sendJson(res, 400, { success: false, error: "Invalid submission." });
  if (!fullname || !email || !message) {
    return sendJson(res, 400, { success: false, error: "Please complete all required fields." });
  }
  if (fullname.length > 100 || email.length > 254 || message.length > 4000) {
    return sendJson(res, 400, { success: false, error: "One or more fields are too long." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return sendJson(res, 400, { success: false, error: "Please enter a valid email address." });
  }

  const botToken = String(process.env.TELEGRAM_BOT_TOKEN || "").trim();
  const chatId = String(process.env.TELEGRAM_CHAT_ID || "").trim();
  if (!botToken || !chatId) {
    console.error("Missing Telegram configuration.");
    return sendJson(res, 503, { success: false, error: "Contact service is temporarily unavailable." });
  }

  const ua = String(req.headers?.["user-agent"] || "");
  const clientIp = getClientIp(req);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");
  const safeEmail = escapeHtml(email);

  const text = [
    "📩 <b>NEW MESSAGE</b>",
    "",
    `👤 ${escapeHtml(fullname)}`,
    `📧 <a href="mailto:${safeEmail}">${safeEmail}</a>`,
    "",
    `<blockquote>${safeMessage}</blockquote>`,
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "📍 <b>Portfolio Contact Form</b>",
    `📱 ${escapeHtml(detectDevice(ua))} • ${escapeHtml(detectBrowser(ua))}`,
    `🌐 IP: ${escapeHtml(clientIp)}`,
    `🕐 ${new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date())}`,
  ].join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(`https://api.telegram.org/bot${encodeURIComponent(botToken)}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) {
      console.error("Telegram send failed:", response.status, result?.description || "Unknown Telegram error");
      return sendJson(res, 502, { success: false, error: "Message delivery failed." });
    }

    console.log("Telegram notification sent:", result.result?.message_id);
    return sendJson(res, 200, { success: true, message: "Message sent successfully. Thank you." });
  } catch (error) {
    console.error("Contact function failed:", error?.name || error);
    return sendJson(res, 502, { success: false, error: "Message delivery failed." });
  } finally {
    clearTimeout(timeout);
  }
};
