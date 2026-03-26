import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { reveal } from '../utils/motion';

export function Returns() {
  const differentiators = [
    { title: "You keep full control of your platform", text: "Unlike PE firms that take 50-80% of your business and replace you, the Aryo playbook keeps you in the driver's seat. You learn the methodology. You execute. You stay CEO. You capture the upside." },
    { title: "Works in any market with fragmentation", text: "Healthcare, home services, manufacturing, distribution, professional services—if your industry has 50+ competitors doing $1M-$50M, the consolidation playbook applies. We've seen it work across 8+ sectors." },
    { title: "Complete operational + financial transparency", text: "We teach you to evaluate deals, run due diligence, and structure acquisitions like a PE associate—cap tables, EBITDA multiples, integration risk, synergy maps. No black box. You see everything." },
    { title: "Battle-tested in real transactions", text: "Every module comes from deals that actually closed. Real LOIs, real diligence checklists, real integration playbooks—not MBA theory. This is execution methodology from operators who've done it." },
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-ink-100" aria-labelledby="returns-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4"
          >
            <div className="w-5 h-px bg-aryo/70" aria-hidden="true"></div>
            Platform Outcomes
            <div className="w-5 h-px bg-aryo/70" aria-hidden="true"></div>
          </motion.div>
          
          <motion.h2 
            id="returns-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold"
          >
            Scale 2-3x faster<br/>than organic growth.<em className="italic text-aryo font-medium"></em>
          </motion.h2>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mt-16 flex flex-col items-center"
          >
            <div className="font-serif text-[6rem] md:text-[8.5rem] font-bold leading-[0.85] tracking-tight text-ink-900" aria-label="2 to 3 times faster growth">
              <em className="italic text-aryo">2</em>&ndash;<em className="italic text-aryo">3</em>x
            </div>
            <div className="text-sm font-bold tracking-[0.14em] uppercase text-ink-300 mt-6">Faster Than Organic Growth*</div>
            <p className="text-base text-ink-500 mt-4 max-w-xl leading-relaxed">
              By acquiring competitors at 3-4x EBITDA and integrating operations, you create a platform valued at 8-12x. Revenue compounds. Margins expand. Market share dominates.
            </p>
            <p className="text-[10px] text-ink-300 mt-4 max-w-xl">
              *Based on typical outcomes in fragmented industries. Individual results depend on market conditions, execution quality, and deal flow.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-1 md:grid-cols-3 border border-ink-100 shadow-sm mt-16 bg-cream-200"
        >
          <div className="p-8 md:p-10 text-center border-b md:border-b-0 md:border-r border-ink-100 hover:bg-aryo-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-ink-900 leading-none">
              <em className="italic text-aryo">18–36</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Months to Platform Scale*</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Most owner-operators reach critical mass within 18-36 months. First acquisition often closes within 90 days of completing the program methodology.
            </p>
          </div>
          <div className="p-8 md:p-10 text-center border-b md:border-b-0 md:border-r border-ink-100 hover:bg-aryo-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-ink-900 leading-none">
              <em className="italic text-aryo">Revenue</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Compounding Growth*</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Each acquisition adds revenue immediately. Integration unlocks cost synergies (15-25% savings). Platform scale drives pricing power.
            </p>
          </div>
          <div className="p-8 md:p-10 text-center hover:bg-aryo-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-ink-900 leading-none">
              <em className="italic text-aryo">Market</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Dominating Position</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Become the largest player in your region or vertical. Control distribution. Set prices. Attract talent. Build something nobody can replicate.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-1 md:grid-cols-2 mt-4 border border-ink-100 shadow-sm bg-white"
        >
          {differentiators.map((diff, i) => (
            <div 
              key={i} 
              className={`flex gap-4 p-6 md:p-8 hover:bg-aryo-50 transition-colors ${
                i % 2 === 0 ? 'md:border-r border-ink-100' : ''
              } ${i < 2 ? 'border-b border-ink-100' : ''}`}
            >
              <div className="w-6 h-6 shrink-0 bg-aryo-50 border border-aryo-pale rounded-full flex items-center justify-center text-aryo mt-0.5" aria-hidden="true">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold text-ink-700 mb-1.5">{diff.title}</h4>
                <p className="text-[12.5px] text-ink-500 leading-relaxed">{diff.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}