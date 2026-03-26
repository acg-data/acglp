import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { reveal } from '../utils/motion';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [helpful, setHelpful] = useState<Record<number, 'yes' | 'no' | null>>({});

  const faqs = [
    { q: "How is this different from hiring a consultant or business broker?", a: "Consultants advise from the outside and leave when the retainer ends. Brokers find you one deal and move on. Aryo teaches you the complete playbook — so you can source, evaluate, negotiate, and integrate deals repeatedly. You build a permanent capability, not a one-time transaction. And you keep 100% of the equity." },
    { q: "Do I need a specific industry background to do a rollup?", a: "No. The rollup framework is industry-agnostic. We teach the mechanics of consolidation — market mapping, deal sourcing, valuation, integration — and you apply it to your vertical. Program alumni have executed in healthcare, home services, SaaS, manufacturing, and professional services. The pattern works wherever fragmentation exists." },
    { q: "What if I've never acquired a business before?", a: "The program is designed for first-time acquirers. We start from foundations — how to read financials, structure an LOI, run due diligence, negotiate seller financing. By module 4, you'll be evaluating live deals. By program end, most participants have at least one deal in pipeline or closed." },
    { q: "How do I finance acquisitions without PE-level capital?", a: "We teach multiple financing strategies most business owners don't know exist: SBA 7(a) loans (up to $5M per deal), seller notes, earnouts, revenue-based financing, and hybrid structures. Many successful rollups start with a single SBA-backed deal before attracting outside capital. The program covers each approach in depth with real deal examples." },
    { q: "What's the time commitment during the 8-month program?", a: "Plan for 4-6 hours per week for coursework and calls. Modules are pre-recorded so you can work through them on your schedule. Live coaching calls happen monthly and are recorded for replay. Implementation work — deal sourcing, due diligence, integration — happens on your own timeline and accelerates as you progress." },
    { q: "Is this available for teams or partners, not just individuals?", a: "Yes. We offer team pricing for leadership teams and business partners who want to execute together. Shared context accelerates execution dramatically — we've seen teams close their first deal 40% faster than solo participants. Contact us for team pricing and custom onboarding." },
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-ink-100" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
            <div className="w-5 h-px bg-aryo/70"></div>
            FAQ
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold">
            Questions ambitious owners<br/><em className="italic text-aryo font-medium">always ask.</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="divide-y divide-ink-100 border-t border-b border-ink-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6 group">
              <button 
                className="w-full flex items-center justify-between gap-6 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[16px] font-bold transition-colors pr-4 ${openIdx === i ? 'text-aryo' : 'text-ink-700 group-hover:text-aryo'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${openIdx === i ? 'bg-aryo-50 border-aryo/30 text-aryo' : 'bg-transparent border-ink-200 text-ink-300 group-hover:border-aryo/30 group-hover:text-aryo'}`}>
                  {openIdx === i ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 pb-4 text-[14.5px] text-ink-500 leading-relaxed pr-10">
                      {faq.a}
                    </p>
                    <div className="flex items-center gap-4 pt-2 border-t border-ink-100">
                      <span className="text-xs text-ink-300">Was this helpful?</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setHelpful(prev => ({ ...prev, [i]: 'yes' }))}
                          className={`p-1.5 rounded transition-colors ${helpful[i] === 'yes' ? 'text-aryo bg-aryo-50' : 'text-ink-300 hover:text-aryo hover:bg-aryo-50/50'}`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setHelpful(prev => ({ ...prev, [i]: 'no' }))}
                          className={`p-1.5 rounded transition-colors ${helpful[i] === 'no' ? 'text-red-600 bg-red-50' : 'text-ink-300 hover:text-red-600 hover:bg-red-50/50'}`}
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                      {helpful[i] && (
                        <span className="text-xs text-aryo font-medium">Thanks!</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}