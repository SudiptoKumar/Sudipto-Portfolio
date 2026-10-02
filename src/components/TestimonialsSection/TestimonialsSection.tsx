import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Community-style sample perspectives, not verified endorsements from identifiable individuals.
const feedback = [
  ["Bangladesh · Student Peer", "Academic & Campus", "Sudipto turns academic ideas into practical tools. The combination of business thinking and usable technology makes the work easy to relate to."],
  ["Bangladesh · Business Student", "Business & Technology", "His projects connect finance, research, digital products, and automation in a structured way that feels useful beyond coursework."],
  ["India · Developer Peer", "Automation & Systems", "The newsroom work shows careful attention to scheduling, duplicate protection, image fallback, and reliable publishing workflows."],
  ["India · Tech Community", "Web & AI Workflows", "Sudipto's projects explore web development, AI-assisted workflows, and automation with a clear focus on practical problem solving."],
] as const;

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 text-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">Community Perspectives</p>
        <h2 className="text-[clamp(2.05rem,8.5vw,3rem)] md:text-5xl font-bold tracking-tight mb-4 leading-[1.05]">What the work <span className="text-gradient-primary">communicates</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Sample peer-style perspectives from Bangladesh and India, presented as portfolio context rather than verified testimonials.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {feedback.map(([name, role, content], i) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="glass-panel rounded-[2rem] border border-foreground/10 p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-xl"
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
            <Quote className="absolute top-6 right-6 w-9 h-9 text-foreground/80 fill-foreground/80" aria-hidden="true" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="pr-12 mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 inline-flex">Perspective</span>
              </div>
              <blockquote className="text-muted-foreground text-[16px] md:text-[17px] leading-8 italic flex-grow">{content}</blockquote>
              <div className="mt-7 pt-5 border-t border-border/60">
                <p className="text-foreground font-extrabold text-base">{name}</p>
                <p className="text-primary text-xs font-semibold mt-1">{role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
