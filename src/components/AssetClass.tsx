import { motion } from 'framer-motion';
import { reveal } from '../utils/motion';

export function AssetClass() {
  const tableData = [
    { factor: "Timeline to Scale", diy: "5–10 yrs", diyClass: "text-red-600 font-bold", consult: "Ongoing fees", consultClass: "text-red-600 font-bold", pe: "2–5 yrs", peClass: "text-ink-400", aryo: "6–18 mo", aryoClass: "text-aryo font-bold" },
    { factor: "Total Investment", diy: "Sweat equity", diyClass: "text-ink-400", consult: "$200K–$1M+", consultClass: "text-red-600 font-bold", pe: "50–80% of your business", peClass: "text-red-600 font-bold", aryo: "Fixed program fee", aryoClass: "text-aryo font-bold" },
    { factor: "Control Retained", diy: "Full control", diyClass: "text-aryo font-bold", consult: "Full control", consultClass: "text-aryo font-bold", pe: "Minority stake", peClass: "text-red-600 font-bold", aryo: "100% control", aryoClass: "text-aryo font-bold" },
    { factor: "Knowledge Transfer", diy: "Trial & error", diyClass: "text-red-600 font-bold", consult: "Limited", consultClass: "text-red-600 font-bold", pe: "None—you're replaced", peClass: "text-red-600 font-bold", aryo: "Complete methodology", aryoClass: "text-aryo font-bold" },
    { factor: "Scalable System", diy: "Ad-hoc", diyClass: "text-red-600 font-bold", consult: "Partial", consultClass: "text-ink-400", pe: "Yes", peClass: "text-aryo font-bold", aryo: "Repeatable playbook", aryoClass: "text-aryo font-bold" },
    { factor: "Growth Multiple", diy: "1–2x revenue", diyClass: "text-ink-400", consult: "N/A", consultClass: "text-red-600 font-bold", pe: "3–5x platform value", peClass: "text-aryo font-bold", aryo: "3–5x platform value", aryoClass: "text-aryo font-bold" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4"
      >
        <div className="w-5 h-px bg-aryo/70"></div>
        The Growth Opportunity
      </motion.div>
      
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold max-w-4xl"
      >
        Most business owners don't realize<br/>they're sitting on a <em className="italic text-aryo font-medium">consolidation opportunity.</em>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-16 items-start">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
          className="prose prose-lg text-ink-500 leading-relaxed"
        >
          <p className="text-[17px]">
            If you're doing $5M-$100M in revenue, you're already in a fragmented market. Dozens of competitors your size—or smaller—are duplicating overhead, fighting for the same customers, and capping their growth at 10-15% annually. Meanwhile, you're trying to grow organically through more marketing or hiring salespeople.
          </p>
          <p className="text-[17px] mt-4">
            There's a faster path: acquire your competitors, consolidate operations, and build a platform that dominates the market. Private equity has used this playbook for decades. The problem? They require you to give up 50-80% of your business and replace you with their operators.
          </p>
          
          <div className="mt-10 p-8 border-l-4 border-aryo bg-aryo-50 shadow-sm">
            <p className="font-serif text-2xl font-medium leading-[1.4] text-ink-900 italic m-0">
              "The best growth strategy isn't more marketing spend or hiring salespeople. It's buying your competitors and building a platform nobody can touch."
            </p>
            <cite className="block mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-aryo not-italic">
              — Aryo Growth Thesis
            </cite>
          </div>
          
          <p className="text-[17px] mt-8">
            Aryo gives you the complete playbook—how to identify fragmented markets, evaluate acquisition targets, structure deals without PE capital, integrate operations, and build a platform you control. You keep 100% ownership. You make the decisions. You capture the upside.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        >
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-4">Growth strategy comparison</div>
          <div className="overflow-x-auto shadow-sm border border-ink-100">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-ink-900">
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10 w-1/5">Factor</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">Organic Growth</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">Consultants</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">PE Partnership</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-aryo">Aryo Self-Directed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-aryo-50 transition-colors">
                    <td className="p-4 text-[13px] font-semibold text-ink-700 border-r border-ink-100">{row.factor}</td>
                    <td className={`p-4 text-[13px] border-r border-ink-100 ${row.diyClass}`}>{row.diy}</td>
                    <td className={`p-4 text-[13px] border-r border-ink-100 ${row.consultClass}`}>{row.consult}</td>
                    <td className={`p-4 text-[13px] border-r border-ink-100 ${row.peClass}`}>{row.pe}</td>
                    <td className={`p-4 text-[13px] ${row.aryoClass}`}>{row.aryo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}