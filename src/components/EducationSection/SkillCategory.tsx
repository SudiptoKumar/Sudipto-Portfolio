import { motion, AnimatePresence } from "framer-motion";
import { Atom, Server, Code2, Database, Brain, Workflow, Users, BookOpenCheck, ChartNoAxesCombined } from "lucide-react";

export default function ProfessionalProfile() {
  const technicalSkills = [
    { name: "Financial Analysis & Modeling", icon: ChartNoAxesCombined, color: "text-cyan-400" },
    { name: "Business Research & Quantitative Analysis", icon: BookOpenCheck, color: "text-emerald-400" },
    { name: "Programming & Web Development", icon: Code2, color: "text-blue-400" },
    { name: "AI-Assisted Workflows & Automation", icon: Brain, color: "text-purple-400" },
    { name: "APIs, PostgreSQL & Data Workflows", icon: Database, color: "text-amber-400" },
  ];

  const softSkills = [
    { name: "Analytical Thinking", icon: Brain, color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
    { name: "Research", icon: BookOpenCheck, color: "text-sky-400 border-sky-500/30 bg-sky-500/10" },
    { name: "Problem Solving", icon: Workflow, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { name: "Communication & Public Speaking", icon: Users, color: "text-rose-400 border-rose-500/30 bg-rose-500/10" },
    { name: "System Thinking", icon: Server, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
    { name: "Continuous Learning", icon: Atom, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  ];

  return (
    <motion.section id="skills" className="space-y-8 scroll-mt-32" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }} viewport={{ once: true, amount: 0.2 }}>
      <div className="flex items-start gap-3 mb-2"><div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary"><Code2 className="w-5 h-5" /></div><h3 className="text-[1.45rem] sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">Expertise & Skills</h3></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div className="glass-panel p-5 sm:p-6 md:p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60"><h4 className="text-xl font-bold text-foreground flex items-center gap-2"><Server className="w-5 h-5 text-primary" /> Core Skills</h4><span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">Focus</span></div>
          <div className="space-y-3">
            {technicalSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.025] px-3.5 py-3.5 sm:px-4 sm:py-4"
                >
                  <span className="text-foreground flex items-center gap-3 min-w-0 text-sm font-semibold">
                    <span className="p-2 rounded-xl bg-foreground/5 border border-foreground/10 shrink-0">
                      <Icon className={`w-4 h-4 ${skill.color}`} />
                    </span>
                    <span className="leading-tight">{skill.name}</span>
                  </span>
                  <span className="font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider border border-primary/20 shrink-0">Core</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="glass-panel p-5 sm:p-6 md:p-8 rounded-[2rem] border border-foreground/15 shadow-xl flex flex-col justify-between">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-2 sm:gap-4 mb-7 pb-5 border-b border-border/60">
              <h4 className="text-xl md:text-2xl font-bold text-foreground flex items-start gap-2 leading-tight min-w-0"><Brain className="w-5 h-5 text-primary shrink-0 mt-1" /> <span>Professional Traits</span></h4>
              <span className="justify-self-start sm:justify-self-end text-[10px] font-extrabold uppercase tracking-[0.15em] text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/50">Core Competencies</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {softSkills.map((skill, i) => { const Icon = skill.icon; return <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.08 }} viewport={{ once: true }} className={`px-4 py-2.5 rounded-2xl border text-sm font-semibold flex items-center gap-2 shadow-sm hover:scale-105 transition-transform cursor-default ${skill.color}`}><Icon className="w-4 h-4 shrink-0" /><span>{skill.name}</span></motion.div>; })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
