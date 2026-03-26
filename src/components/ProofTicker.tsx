import { motion } from 'framer-motion';

export function ProofTicker() {
  const items = [
    { n: "$500M+", l: "Enterprise Value Built" },
    { n: "3.2x", l: "Avg. Equity Multiple" },
    { n: "40+", l: "Companies Rolled Up" },
    { n: "12", l: "Industries Deployed" },
    { n: "<18mo", l: "Avg. Deal Timeline" },
  ];

  const tickerItems = [...items, ...items];

  return (
    <div className="bg-white border-y border-ink-100 overflow-hidden relative shadow-sm" role="marquee" aria-label="Key program metrics ticker">
      <div className="py-5 flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2.5 px-10 md:px-16 border-r border-ink-100 shrink-0">
              <div className="font-serif text-3xl font-bold text-ink-900 leading-none">
                <em className="italic text-aryo">{item.n}</em>
              </div>
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-ink-300">
                {item.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
      
      <div className="text-center pb-2 text-[8px] text-ink-300 px-4">
        *Based on program alumni outcomes. Individual results vary. Past performance does not guarantee future results.
      </div>
    </div>
  );
}