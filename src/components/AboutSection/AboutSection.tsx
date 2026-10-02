import { motion } from "framer-motion";
import { Code2, Globe2, GraduationCap, Workflow } from "lucide-react";

const stats = [
  { icon: <Code2 className="w-6 h-6" />, value: "7+ Years", label: "Learning & Building" },
  { icon: <Workflow className="w-6 h-6" />, value: "12+", label: "Projects Built" },
  { icon: <GraduationCap className="w-6 h-6" />, value: "3", label: "Education Stages" },
  { icon: <Globe2 className="w-6 h-6" />, value: "8", label: "Newsroom Channels" },
];

export const AboutSection = () => (
  <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 scroll-mt-32">
    <motion.div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <div className="flex-1 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">About</p>
          <h2 className="text-[clamp(2.05rem,8.5vw,3rem)] md:text-5xl font-bold tracking-tight mb-4 leading-[1.05]">Business thinking with a <span className="text-gradient-primary">technology mindset</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">I'm Sudipto Kumar, a BBA student specializing in Finance and Banking at Patuakhali Science and Technology University (PSTU). I combine quantitative financial analysis with hands-on software development across automation, full-stack web, and AI-assisted tooling projects. I enjoy turning business ideas into practical digital products, useful workflows, and systems that can be tested in real use.</p>
        </div>
        <div className="glass-panel rounded-2xl p-6 border border-foreground/10">
          <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Current direction:</span> building a strong foundation in finance and business while continuing hands-on work with web development, AI-assisted workflows, Telegram automation, business research, and digital product ideas. My interests include financial markets, corporate finance, equity research, business technology, automation, and AI.</p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-3.5 sm:gap-4 w-full auto-rows-fr items-stretch">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="glass-panel h-full min-h-[165px] sm:min-h-[180px] p-4 sm:p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
            <div className="relative text-primary mb-4 sm:mb-5 p-2.5 sm:p-3 bg-primary/10 w-max rounded-xl">{stat.icon}</div>
            <p className="relative text-[clamp(1.7rem,7vw,2.25rem)] sm:text-4xl font-extrabold tracking-tight text-foreground leading-none min-h-[42px] flex items-end whitespace-nowrap">{stat.value}</p>
            <p className="relative text-sm sm:text-base font-medium text-muted-foreground leading-snug mt-2 min-h-[42px] flex items-start">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
