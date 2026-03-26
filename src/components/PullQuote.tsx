import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function PullQuote() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 md:px-14 bg-cream">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="max-w-3xl mx-auto text-center"
      >
        <Quote className="w-12 h-12 text-aryo/20 mx-auto mb-8" />
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15] tracking-tight text-ink-900 font-semibold italic">
          "I spent $400K on 'strategic consultants' who gave me slide decks. Aryo gave me a blueprint I executed — we acquired 6 companies in 14 months."
        </h2>
        <div className="mt-8">
          <div className="text-ink-900 font-semibold">Marcus Chen</div>
          <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-aryo mt-1">Founder, ServicePro Holdings</div>
          <div className="text-sm text-ink-400 mt-1">Completed Aryo Program 2024</div>
        </div>
      </motion.div>
    </section>
  );
}