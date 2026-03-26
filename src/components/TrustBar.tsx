import { motion } from 'framer-motion';

export function TrustBar() {
  const partners = [
    { name: "Top-Ranked by Clutch", abbr: "TOP CLUTCH" },
    { name: "#1 Upwork Management Consultant", abbr: "#1 UPWORK" },
    { name: "500+ Engagements Completed", abbr: "500+ ENGAGEMENTS" },
    { name: "$500M+ Enterprise Value Unlocked", abbr: "$500M+ VALUE" },
    { name: "100% Client Retention Rate", abbr: "100% RETENTION" },
  ];

  return (
    <section className="py-10 px-6 bg-white border-t border-b border-ink-100" aria-label="Credentials">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-300 mb-5"
        >
          Trusted Credentials
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {partners.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-xs font-bold tracking-widest uppercase text-ink-300 px-4 py-2 border border-ink-100 bg-cream"
              aria-label={item.name}
            >
              {item.abbr}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}