import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Send, UserRound, Laptop, Smartphone, Bot, Database, Cpu, BarChart3, Braces, Globe2, Workflow, CircleDollarSign } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";

const links = [
  [Github, "https://github.com/SudiptoKumar", "GitHub"],
  [Linkedin, "https://www.linkedin.com/in/sudipto-kumar/", "LinkedIn"],
  [Send, "https://t.me/SudiptoSarkar", "Telegram"],
  [Mail, "mailto:sudipto.karn@gmail.com", "Email"],
] as const;

const backgroundIcons = [
  { Icon: Laptop, className: "left-5 top-8 rotate-[-10deg]" },
  { Icon: Smartphone, className: "right-10 top-12 rotate-[8deg]" },
  { Icon: Bot, className: "left-12 bottom-7 rotate-[8deg]" },
  { Icon: Database, className: "right-8 bottom-8 rotate-[-9deg]" },
  { Icon: Cpu, className: "left-[42%] top-10 rotate-[5deg]" },
  { Icon: BarChart3, className: "left-2/3 bottom-10 rotate-[-6deg]" },
  { Icon: Braces, className: "left-1/4 bottom-5 rotate-[7deg]" },
  { Icon: Globe2, className: "right-1/3 top-14 rotate-[-7deg]" },
  { Icon: Workflow, className: "left-1/2 bottom-6 rotate-[10deg]" },
  { Icon: CircleDollarSign, className: "right-6 top-1/2 rotate-[5deg]" },
];

export const HeroSection = () => {
  const go = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = window.innerWidth < 768 ? 88 : 112;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col pt-28 sm:pt-32 md:pt-32 overflow-hidden bg-background scroll-mt-32">
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-9 sm:gap-12 md:gap-20 pb-10 sm:pb-12">
        <motion.div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="mb-6">
            <Badge variant="outline" size="lg" className="gap-2.5 py-1.5 px-4 glass-panel border-foreground/10">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
              <span className="text-xs font-medium text-muted-foreground">Open to opportunities & collaborations</span>
            </Badge>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-4 text-center md:text-left">
            <p className="text-[11px] sm:text-sm uppercase tracking-[0.22em] sm:tracking-[0.25em] text-muted-foreground mb-3">Finance & Banking · BBA · PSTU</p>
            <h1 className="text-[clamp(2.9rem,12vw,4.5rem)] md:text-7xl font-bold tracking-tight mb-2 leading-none">
              <span className="block">Hi, I'm</span>
              <span className="block hero-name-wrap">
                <span className="block dark:hidden hero-name-gradient-light">Sudipto Kumar</span>
                <span className="hidden dark:block"><AuroraTextEffect text="Sudipto Kumar" fontSize="clamp(3rem, 6.5vw, 5.5rem)" className="bg-transparent overflow-visible p-0 justify-start" textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold" /></span>
              </span>
            </h1>
          </motion.div>

          <motion.p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>I'm Sudipto Kumar, a BBA student specializing in Finance and Banking at Patuakhali Science and Technology University (PSTU). I build practical digital products, websites, AI-assisted workflows, Telegram automation systems, and business-focused technology projects.</motion.p>

          <motion.div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <Button type="button" size="lg" onClick={() => go("projects")} className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1">View Projects <ArrowRight className="w-4 h-4" /></Button>
            <Button type="button" size="lg" variant="outline" onClick={() => window.open("/Resume.pdf", "_blank", "noopener,noreferrer")} className="rounded-full px-7 h-12 glass-panel text-foreground font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-all hover:-translate-y-1 border-foreground/10">Resume <Download className="w-4 h-4" /></Button>
          </motion.div>

          <motion.div className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            {links.map(([Icon, href, label]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "me noreferrer" : undefined} aria-label={label} className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"><Icon className="w-5 h-5" /></a>)}
            <a href="https://x.com/SudiptoKarn" target="_blank" rel="me noreferrer" aria-label="X" className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200 text-[21px] font-semibold leading-none">𝕏</a>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 w-full max-w-md relative flex justify-center items-center py-2" initial={{ opacity: 0, y: -20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <HangingIdCard name="Sudipto Kumar" role="BBA Student · Tech Enthusiast" badgeId="SUDIPTO" accentColor="#8b5cf6" ropeLength={75} ropeColor="#27272a" cardWidth="w-72 sm:w-80 md:w-84">
            <div className="flex flex-col h-full bg-card w-full">
              <div className="relative px-5 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-[#7c3aed] via-[#a855f7] to-[#172554] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.11] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:13px_13px] pointer-events-none" />
                {backgroundIcons.map(({ Icon, className }, index) => <Icon key={index} aria-hidden="true" className={`absolute w-5 h-5 text-white/20 pointer-events-none ${className}`} strokeWidth={1.7} />)}
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                <div className="relative mt-1 w-28 h-28 rounded-full bg-white/10 backdrop-blur-md shadow-[0_0_0_5px_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.28)] border-2 border-white overflow-hidden">
                  <img src="/assets/sudipto-kumar-1x1.webp" alt="Sudipto Kumar, BBA student specializing in Finance and Banking at Patuakhali Science and Technology University" className="w-full h-full object-cover rounded-full filter contrast-105" loading="eager" fetchPriority="high" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling; if (fallback) fallback.classList.remove("hidden"); }} /><UserRound className="hidden absolute inset-0 m-auto w-10 h-10 text-white" aria-hidden="true" />
                </div>
              </div>

              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div><h3 className="text-xl font-extrabold tracking-tight text-foreground">Sudipto Kumar</h3><div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">BBA Student · Tech Enthusiast</div></div>
                <div className="w-full border-t border-border/60 my-0.5" />
                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <div className="min-w-0"><span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Specialty</span><span className="font-bold text-foreground text-xs leading-tight">Tech · Business</span></div>
                  <div className="min-w-0"><span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Location</span><span className="font-bold text-foreground text-xs">Naogaon, BD</span></div>
                  <div className="min-w-0"><span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Education</span><span className="font-bold text-foreground text-xs">BBA Finance</span></div>
                  <div className="min-w-0"><span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Status</span><span className="font-bold text-emerald-500 text-xs">● Active</span></div>
                </div>
                <div className="flex flex-col items-center mt-auto pt-1"><img src="/assets/sudipto-contact-qr.png" alt="Contact QR code for Sudipto Kumar" className="w-28 h-28 rounded-lg bg-white p-1" /></div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>
      </div>

      <div className="w-full relative z-10 mt-auto"><TechStackSection /></div>
    </section>
  );
};
