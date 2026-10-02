import { motion } from "framer-motion";
import { Bot, Code2, LineChart, Layers3 } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

const services = [
  { icon: Code2, title: "Web & Digital Products", description: "Building responsive websites and practical web platforms with a strong focus on usability, clean structure, and maintainability." },
  { icon: LineChart, title: "Business & Finance", description: "Applying Finance and Banking knowledge to business-oriented projects, research, analysis, and decision-support ideas." },
  { icon: Bot, title: "AI & Automation", description: "Experimenting with AI-assisted workflows, intelligent content processing, API integrations, and automation systems." },
  { icon: Layers3, title: "Telegram News Systems", description: "Designing newsroom workflows, scoring pipelines, duplicate protection, image fallbacks, and scheduled Telegram publishing." },
];

export const ServicesSection = () => (
  <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Focus Areas</p>
      <h2 className="text-[clamp(2.05rem,8.5vw,3rem)] md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary leading-[1.05]">What I Build</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A practical combination of business education, web development, AI experimentation, digital products, and automation projects.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true, amount: 0.1 }}>
            <MagicCard className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80" gradientSize={280} gradientColor="rgba(139, 92, 246, 0.12)" gradientFrom="#8b5cf6" gradientTo="#38bdf8">
              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"><Icon className="w-7 h-7 text-primary" /></div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        );
      })}
    </div>
  </section>
);
