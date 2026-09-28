import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "" | "Sending..." | "Message sent successfully. Thank you." | "Something went wrong. Please try again or email me directly.";

export const ContactSection = () => {
  const [status, setStatus] = useState<Status>("");
  const submitting = status === "Sending...";

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullname: String(data.get("fullname") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? "").trim(),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || payload?.success !== true) throw new Error("send_failed");
      form.reset();
      setStatus("Message sent successfully. Thank you.");
    } catch {
      setStatus("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="glass-panel p-5 sm:p-6 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[3rem] border border-foreground/10 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center">
          <div className="lg:pr-4">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Contact</p>
            <h2 className="text-[clamp(2.6rem,12vw,4rem)] sm:text-6xl md:text-7xl font-extrabold tracking-[-0.05em] leading-[0.95]">Let's <span className="text-gradient-primary">Connect</span></h2>
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-xl text-base md:text-lg">Have a project idea, collaboration, question, or just want to say hello? Send a message and it will reach me through the existing portfolio contact workflow.</p>
          </div>

          <form onSubmit={submit} className="relative rounded-[1.5rem] md:rounded-[2rem] border border-foreground/10 bg-white p-5 sm:p-6 md:p-8 text-slate-900 shadow-2xl dark:bg-card dark:text-card-foreground dark:border-white/10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="field-label" htmlFor="contact-name">Your name</label><input id="contact-name" name="fullname" required maxLength={100} autoComplete="name" className="field" placeholder="Your name" /></div>
              <div><label className="field-label" htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" className="field" placeholder="you@example.com" /></div>
            </div>
            <div><label className="field-label" htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required maxLength={4000} rows={6} className="field resize-y" placeholder="Tell me what you have in mind..." /></div>
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden opacity-0"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
            <button type="submit" disabled={submitting} className="w-full rounded-xl bg-primary text-primary-foreground h-12 font-bold inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform shadow-[0_0_25px_rgba(139,92,246,.18)]">
              {submitting ? <Loader2 size={17} className="animate-spin" /> : status.startsWith("Message sent") ? <CheckCircle2 size={17} /> : status.startsWith("Something went wrong") ? <AlertCircle size={17} /> : <Send size={17} />}
              {submitting ? "Sending Message..." : status.startsWith("Message sent") ? "Message Sent" : "Send Message"}
            </button>
            <AnimatePresence mode="wait">
              {status && <motion.p key={status} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className={`text-sm text-center ${status.startsWith("Message sent") ? "text-emerald-600" : status.startsWith("Something went wrong") ? "text-rose-600" : "text-slate-500"}`} role="status">{status}</motion.p>}
            </AnimatePresence>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
