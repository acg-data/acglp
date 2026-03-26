import { motion } from 'framer-motion';

export function CaseStudies() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cases = [
    {
      industry: "Medical Practices",
      before: "12 separate practices, $8M combined revenue",
      after: "Rollup to 23 locations, $42M revenue, 3.8x value",
      timeframe: "24 months"
    },
    {
      industry: "Home Services",
      before: "7 fragmented HVAC/plumbing companies",
      after: "Platform with 89 routes, $31M revenue",
      timeframe: "18 months"
    },
    {
      industry: "SaaS Tools",
      before: "4 disconnected niche software products",
      after: "Integrated suite, $28M ARR, acquired at 8x",
      timeframe: "36 months"
    },
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-ink-900" id="case-studies">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
            <div className="w-5 h-px bg-aryo/70"></div>
            Proof Points
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-white font-semibold">
            Rollups that<br/><em className="italic text-aryo">actually worked.</em>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-aryo mb-2">{study.industry}</div>
                  <div className="text-white/40 text-sm mb-2">Before: {study.before}</div>
                  <div className="text-white font-semibold text-lg">After: {study.after}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-serif text-2xl font-bold text-white"><em className="italic text-aryo">{study.timeframe}</em></div>
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40">Timeline</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}