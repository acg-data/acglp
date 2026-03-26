import { motion } from 'framer-motion';
export function PullQuote() {
  return (
    <section className="bg-ink-900 py-24 px-6 md:px-14 relative overflow-hidden" aria-label="Client testimonial">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center relative z-10">
        
        <div className="relative">
          <div className="absolute -top-10 -left-6 font-serif text-[12rem] leading-none text-aryo opacity-5 pointer-events-none select-none" aria-hidden="true">
            &ldquo;
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.38] font-medium text-white/80 text-balance">
              "I was stuck at $5M for years trying to grow organically. Aryo showed me there was a faster path—we acquired 3 competitors in 18 months and hit $18M. <em className="italic text-aryo">Same team, 3x the platform.</em> And I own 100% of it."
            </blockquote>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center font-serif text-lg font-bold text-aryo shrink-0" aria-hidden="true">
                DP
              </div>
              <div>
                <div className="text-sm font-bold text-white">David P.</div>
                <div className="text-[11.5px] text-white/40 mt-1">Founder, ServicePro Holdings &middot; $4M → $18M in 18 months</div>
              </div>
            </div>

            <p className="text-[8px] text-white/20 mt-6">*Individual result. Not representative of all participants.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-left md:text-center shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16"
        >
          <div className="font-serif text-[4rem] font-bold leading-none text-white tracking-tight">
            <em className="italic text-aryo">$42M</em>
          </div>
          <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mt-3">
            Platform Revenue Built*
          </div>
          <p className="text-[9px] text-white/25 mt-2">*Individual result. Not representative of all participants.</p>
        </motion.div>

      </div>
    </section>
  );
}