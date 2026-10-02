import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, Building2, Sparkles } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

export const EducationSection = () => {
  const education = [
    {
      degree: "BBA (Honours), Finance and Banking",
      school: "Patuakhali Science and Technology University",
      year: "2023 – 2028 (Expected)",
      badge: "Current Study",
      badgeIcon: GraduationCap,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: GraduationCap,
      details: [
        "Studying Finance and Banking within the Faculty of Business Administration",
        "Coursework includes quantitative business analysis, strategic management, organizational behavior, sociology, cost accounting, and business research methodology",
        "Connecting business concepts with practical technology and digital product projects",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "New Government Degree College, Rajshahi",
      year: "2019 – 2020",
      badge: "GPA 5.00",
      badgeIcon: Sparkles,
      badgeColor: "text-primary bg-primary/10 border-primary/30",
      icon: BookOpen,
      details: [
        "Business Studies background",
        "Completed Higher Secondary Certificate level education with a Business Studies background",
        "Built the academic foundation for business and finance studies",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Mainam Bahumukhy High School & College",
      year: "2017 – 2018",
      badge: "GPA 4.78",
      badgeIcon: Award,
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      icon: Award,
      details: [
        "Business Studies background",
        "Completed Secondary School Certificate level education with a Business Studies background",
        "Developed early interest in business, technology, and digital tools",
      ],
    },
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-14 md:space-y-20">
      <div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md"><GraduationCap className="w-6 h-6" /></div>
            <h2 className="text-[clamp(2.05rem,8.5vw,3rem)] md:text-5xl font-extrabold tracking-tight leading-[1.05]">Academic <span className="text-gradient-primary">Background</span></h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">Building a strong foundation in business, finance, research, and practical digital problem solving.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3">
          {education.map((edu, i) => {
            const DegreeIcon = edu.icon;
            const BadgeIcon = edu.badgeIcon;
            return (
              <motion.div key={edu.school} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.5 }} viewport={{ once: true }}>
                <MagicCard className="h-full p-8 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl" gradientSize={300} gradientColor="rgba(139, 92, 246, 0.12)" gradientFrom="#8b5cf6" gradientTo="#38bdf8">
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm"><DegreeIcon className="w-7 h-7 text-primary" /></div>
                        <span className={`px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}><BadgeIcon className="w-3.5 h-3.5" />{edu.badge}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground tracking-tight mb-2">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground mb-6 pb-4 border-b border-border/60">
                        <span className="flex items-center gap-1.5 text-foreground font-bold"><Building2 className="w-3.5 h-3.5 text-primary" /> {edu.school}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 font-mono text-primary font-bold"><Calendar className="w-3.5 h-3.5" /> {edu.year}</span>
                      </div>
                      <ul className="space-y-3.5">
                        {edu.details.map((detail, j) => <li key={j} className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-foreground/90 font-medium">{detail}</span></li>)}
                      </ul>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SkillCategory />
    </section>
  );
};
