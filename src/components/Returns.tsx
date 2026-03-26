import { motion } from 'framer-motion';

export function Returns() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const outcomes = [
    { metric: "3-5x", label: "Equity Multiple", desc: "Over typical hold period" },
    { metric: "30%+", label: "IRR", desc: "Annualized returns" },
    { metric: "18-36mo", label: "Time to Exit", desc: "Based on strategy" },
    { metric: "M&A", label: "Exit Path", desc: "Strategic or financial" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-ink-100">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
            <div className="w-5 h-px bg-aryo/70"></div>
            Outcomes
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold">
            What implementing this<br/><em className="italic text-aryo font-medium">strategy produces.</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {outcomes.map((item, i) => (
            <div key={i} className="text-center p-6 bg-cream border border-ink-100">
              <div className="font-serif text-4xl font-bold text-ink-900">
                <em className="italic text-aryo">{item.metric}</em>
              </div>
              <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-aryo mt-3 mb-1">{item.label}</div>
              <div className="text-xs text-ink-400">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.p 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="text-center text-ink-500 mt-8 text-sm"
        >
          *Results not guaranteed. Past performance varies by industry, execution, and market conditions.
        </motion.p>
      </div>
    </section>
  );
}