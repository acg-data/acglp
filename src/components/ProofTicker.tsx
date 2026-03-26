import { motion } from 'framer-motion';

export function ProofTicker() {
  const stats = [
    { value: '$500M+', label: 'Enterprise Value Built' },
    { value: '40+', label: 'Companies Acquired' },
    { value: '3.2x', label: 'Avg. Multiple' },
    { value: '12', label: 'Industries Deployed' },
  ];

  return (
    <section className="py-12 px-6 bg-ink-900 border-y border-ink-800 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex gap-16 md:gap-24 items-center justify-center"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-serif text-3xl md:text-4xl font-bold text-white">
              <em className="italic text-aryo">{stat.value}</em>
            </div>
            <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}