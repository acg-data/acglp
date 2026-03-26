import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { reveal } from '../utils/motion';

export function Returns() {
  const differentiators = [
    { title: "No equity dilution — you own 100%", text: "Unlike PE firms that take 50-80% of your business, the Aryo playbook keeps you in full control. You learn the strategy. You execute. You keep the upside." },
    { title: "Works across fragmented industries", text: "Healthcare, home services, SaaS, manufacturing, professional services — the rollup thesis adapts to any market with 50+ small competitors and no dominant player." },
    { title: "Full visibility into every deal", text: "We teach you to evaluate deals like a PE associate — cap tables, EBITDA multiples, integration risk, and synergy maps. No black box." },
    { title: "Proven framework, not theory", text: "Every module is drawn from deals that actually closed. Real LOIs, real DD checklists, real integration playbooks. Not MBA case studies — execution blueprints." },
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
            What You Build
            <div className="w-5 h-px bg-aryo/70" aria-hidden="true"></div>
          </motion.div>
          
          <motion.h2 
            id="returns-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold"
          >
            The outcome profile.<br/><em className="italic text-aryo font-medium">Plainly stated.</em>
          </motion.h2>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="mt-16 flex flex-col items-center"
          >
            <div className="font-serif text-[6rem] md:text-[8.5rem] font-bold leading-[0.85] tracking-tight text-ink-900" aria-label="3 to 5x target equity multiple">
              <em className="italic text-aryo">3</em>&ndash;<em className="italic text-aryo">5</em>x
            </div>
            <div className="text-sm font-bold tracking-[0.14em] uppercase text-ink-300 mt-6">Target Equity Multiple Over Hold Period*</div>
            <p className="text-base text-ink-500 mt-4 max-w-xl leading-relaxed">
              By acquiring at 3-4x EBITDA and building a platform valued at 8-12x, you create a multiple arbitrage that generates outsized returns — without organic growth alone.
            </p>
            <p className="text-[10px] text-ink-300 mt-4 max-w-xl">
              *Targets only. Not guarantees. Based on typical PE rollup outcomes in fragmented industries. Individual results depend on execution, market conditions, and deal quality.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-1 md:grid-cols-3 border border-ink-100 shadow-sm mt-16 bg-cream-200"
        >
          <div className="p-8 md:p-10 text-center border-b md:border-b-0 md:border-r border-ink-100 hover:bg-aryo-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-ink-900 leading-none">
              +<em className="italic text-aryo">30%</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Target IRR*</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Annualized returns driven by multiple arbitrage, operational synergies, and revenue growth across the platform.
            </p>
          </div>
          <div className="p-8 md:p-10 text-center border-b md:border-b-0 md:border-r border-ink-100 hover:bg-aryo-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-ink-900 leading-none">
              <em className="italic text-aryo">18–36</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Month Timeline</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Most rollups reach critical mass within 18-36 months. First acquisition often closes within 90 days of program completion.
            </p>
          </div>
          <div className="p-8 md:p-10 text-center hover:bg-aryo-50 transition-colors">
            <div className="font-serif text-5xl font-bold text-ink-900 leading-none">
              <em className="italic text-aryo">M&A</em>
            </div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-3">Exit Pathway</div>
            <p className="text-[13px] text-ink-500 leading-relaxed mt-4">
              Strategic acquirer, PE buyout, or continued hold and cash flow. You choose the exit that fits your goals.
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