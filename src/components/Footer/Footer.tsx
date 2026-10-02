import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Send, UserRound } from "lucide-react";
import { MorphingText } from "../lightswind/morphing-text";

export const Footer = () => {
  const morphingTexts = ["BBA Student", "Finance & Banking", "Tech Enthusiast", "Automation Builder", "Sudipto Kumar"];
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const socialLinks = [
    { icon: Github, href: "https://github.com/SudiptoKumar", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sudipto-kumar/", label: "LinkedIn" },
    { icon: Send, href: "https://t.me/SudiptoSarkar", label: "Telegram" },
    { icon: Mail, href: "mailto:sudipto.karn@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-full relative z-10 pt-10 md:pt-16 pb-16 md:pb-32 bg-card/60 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-2xl rounded-t-[3rem] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-transparent border-2 border-white shadow-lg overflow-hidden"><div className="w-full h-full bg-background rounded-[11px] overflow-hidden relative"><img src="/assets/sudipto-kumar-1x1.webp" alt="Sudipto Kumar" className="w-full h-full object-cover" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling; if (fallback) fallback.classList.remove("hidden"); }} /><UserRound className="hidden absolute inset-0 m-auto w-5 h-5 text-primary" aria-hidden="true" /></div></div>
            <div className="flex flex-col text-left"><span className="font-extrabold tracking-tight text-foreground text-base leading-none">Sudipto Kumar</span><span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">BBA Student · Tech Enthusiast</span></div>
          </div>
          <motion.button type="button" onClick={scrollToTop} whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-black/5 dark:border-white/10 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"><span>Back to top</span><ArrowUp className="w-3.5 h-3.5" /></motion.button>
        </div>

        <div className="py-7 sm:py-9 md:py-12 px-4 sm:px-6 rounded-3xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-col items-center justify-center my-2 shadow-sm">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm">Learn · Build · Improve</span>
          <MorphingText texts={morphingTexts} morphTime={1.6} cooldownTime={0.8} className="text-[clamp(2rem,9vw,3rem)] sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-extrabold min-h-[56px] sm:min-h-[70px] text-center" />
        </div>

        <div className="pt-5 md:pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {socialLinks.map((social) => { const Icon = social.icon; return <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "me noreferrer" : undefined} aria-label={social.label} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-panel border border-black/5 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-110 transition-all shadow-sm"><Icon className="w-4 h-4" /></a>; })}
            <a href="https://x.com/SudiptoKarn" target="_blank" rel="me noreferrer" aria-label="X" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-panel border border-black/5 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-110 transition-all shadow-sm text-base font-semibold">𝕏</a>
          </div>
          <div className="font-medium text-center md:text-right">© {new Date().getFullYear()} Sudipto Kumar. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
