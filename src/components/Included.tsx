import { motion } from 'framer-motion';
import { reveal } from '../utils/motion';

export function Included() {
  const inclusions = [
    { name: "8-Month Cohort Program (Live + Recorded)", sub: "Weekly modules, live Q&A, and deal review sessions with experienced operators", tag: "Core" },
    { name: "Complete Rollup Playbook (200+ Pages)", sub: "Step-by-step methodology from industry selection through exit — drawn from real closed deals", tag: "Core" },
    { name: "Financial Modeling & Valuation Templates", sub: "Pre-built Excel models for DCF, comp analysis, synergy modeling, and pro forma P&L", tag: "Core" },
    { name: "Deal Document Templates (LOIs, DD Checklists)", sub: "Battle-tested legal templates reviewed by M&A attorneys — ready to customize and send", tag: "Core" },
    { name: "Monthly Group Coaching Calls", sub: "Bring your live deals and get real-time feedback from operators who've closed $500M+ in transactions", tag: "Bonus" },
    { name: "1:1 Strategy Session (2 Hours)", sub: "Deep-dive with a program advisor to map your specific industry, target profile, and financing strategy", tag: "Bonus" },
    { name: "Private Operator Community", sub: "Alumni network of active acquirers, lender introductions, and warm referrals to brokers and advisors", tag: "Included" },
    { name: "Lifetime Alumni Access & Updates", sub: "Program updates, new templates, and continued community access after your cohort ends", tag: "Included" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-4xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
          <div className="w-5 h-px bg-aryo/70"></div>
          Program Structure
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold">
          What you get as an<br/>Aryo <em className="italic text-aryo font-medium">program member.</em>
        </h2>
        <p className="text-[17px] text-ink-500 mt-6 mb-12">
          Everything you need to execute. No upsells. No hidden modules. Full access from day one.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="bg-white border border-ink-100 shadow-sm"
      >
        <div className="divide-y divide-ink-100">
          {inclusions.map((inc, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:px-8 hover:bg-aryo-50 transition-colors">
              <div>
                <div className="text-[14.5px] font-bold text-ink-700">{inc.name}</div>
                <div className="text-[13px] text-ink-500 mt-1">{inc.sub}</div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-aryo bg-aryo-50 px-3 py-1 border border-aryo-pale self-start md:self-auto whitespace-nowrap">
                &#10003; {inc.tag}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-ink-900 p-6 md:px-8 flex items-center justify-between border-t-2 border-aryo">
          <div className="font-serif text-2xl font-bold text-white">Investment</div>
          <div className="font-serif text-2xl font-bold text-aryo"><em className="italic">Discussed on Strategy Call</em></div>
        </div>
      </motion.div>
    </section>
  );
}