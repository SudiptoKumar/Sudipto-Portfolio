import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  ["Campus Duty", "Web Development", "/assets/project-1.webp", "https://campusduty.netlify.app/"],
  ["Study Campus OS", "Digital Product", "/assets/project-2.webp", null],
  ["StudyMart", "Web Development", "/assets/project-3.webp", null],
  ["Business Newsroom", "Automation", "/assets/project-4.webp", "https://t.me/BusinessNewsroom"],
  ["Gaming Newsroom", "Automation", "/assets/project-5.webp", "https://t.me/GamingNewsroom"],
  ["Tech Newsroom", "Automation", "/assets/project-6.webp", "https://t.me/TheTechNewsroom"],
  ["Entertainment Newsroom", "Automation", "/assets/project-7.webp", "https://t.me/EntertainmentNewsroom"],
  ["Science Newsroom", "Automation", "/assets/project-8.webp", "https://t.me/ScienceNewsroom"],
  ["Telegram News Automation", "Automation", "/assets/project-9.webp", null],
] as const;

export const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-32 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="mb-12 md:mb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Portfolio</p>
      <h2 className="text-[clamp(2.05rem,8.5vw,3rem)] md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left leading-[1.05]">Selected <span className="text-gradient-primary">Projects</span></h2>
      <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">A practical mix of business-focused ideas, web projects, digital products, and Telegram automation systems.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {projects.map(([title, category, image, href], i) => {
        const linkProps = href ? { href, target: "_blank" as const, rel: "noreferrer" as const } : {};
        return (
          <motion.a
            key={title}
            {...linkProps}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.55 }}
            viewport={{ once: true, amount: 0.08 }}
            className={`group glass-panel overflow-hidden rounded-3xl border border-foreground/10 shadow-xl transition-colors duration-500 ${href ? "hover:border-primary/30" : "cursor-default"}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
              <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span className="text-[11px] uppercase tracking-widest text-white/85 bg-black/25 backdrop-blur rounded-full px-3 py-1 border border-white/10">{category}</span>
                {href && (
                  <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                    <ArrowUpRight size={18} className="text-white group-hover:text-slate-900 transition-colors duration-300" />
                  </span>
                )}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{href ? "Open project or channel ↗" : "Project details coming soon."}</p>
            </div>
          </motion.a>
        );
      })}
    </div>
  </section>
);
