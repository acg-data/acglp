import { motion } from 'framer-motion';

export function TrustBar() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const items = [
    "Top-Ranked by Clutch",
    "#1 on Upwork for Management Consulting",
    "500+ Engagements Completed",
    "$500M+ Enterprise Value Unlocked",
  ];

  return (
    <section className="py-16 px-6 md:px-14 bg-cream border-y border-ink-100">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-ink-400">{item}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}