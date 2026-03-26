import { motion } from 'framer-motion';
import { reveal } from '../utils/motion';

export function AssetClass() {
  const tableData = [
    { factor: "Timeline", diy: "5–10 yrs", diyClass: "text-red-600 font-bold", consult: "Ongoing", consultClass: "text-red-600 font-bold", pe: "2–5 yrs", peClass: "text-ink-400", aryo: "6–18 mo", aryoClass: "text-aryo font-bold" },
    { factor: "Total Cost", diy: "Sweat equity", diyClass: "text-ink-400", consult: "$200K–$1M+", consultClass: "text-red-600 font-bold", pe: "20–30% carry", peClass: "text-red-600 font-bold", aryo: "Fixed program", aryoClass: "text-aryo font-bold" },
    { factor: "Equity Given Up", diy: "0%", diyClass: "text-aryo font-bold", consult: "0%", consultClass: "text-aryo font-bold", pe: "50–80%", peClass: "text-red-600 font-bold", aryo: "0%", aryoClass: "text-aryo font-bold" },
    { factor: "Knowledge Retained", diy: "High", diyClass: "text-aryo font-bold", consult: "Low", consultClass: "text-red-600 font-bold", pe: "None", peClass: "text-red-600 font-bold", aryo: "100%", aryoClass: "text-aryo font-bold" },
    { factor: "Exit Multiple", diy: "1–2x", diyClass: "text-ink-400", consult: "N/A", consultClass: "text-red-600 font-bold", pe: "3–5x", peClass: "text-aryo font-bold", aryo: "3–5x", aryoClass: "text-aryo font-bold" },
    { factor: "Scalable Framework", diy: "No", diyClass: "text-red-600 font-bold", consult: "Partially", consultClass: "text-ink-400", pe: "Yes", peClass: "text-aryo font-bold", aryo: "Yes", aryoClass: "text-aryo font-bold" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4"
      >
        <div className="w-5 h-px bg-aryo/70"></div>
        The Opportunity
      </motion.div>
      
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold max-w-4xl"
      >
        Most business owners have never<br/>considered <em className="italic text-aryo font-medium">the rollup.</em><br/>That's the edge.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-16 items-start">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
          className="prose prose-lg text-ink-500 leading-relaxed"
        >
          <p className="text-[17px]">
            Every industry has fragmentation. Dozens of small players competing for the same customers, duplicating overhead, and capping their own growth. Private equity has known this for decades — and has built trillion-dollar empires by consolidating these fragments into platforms.
          </p>
          <p className="text-[17px] mt-4">
            The problem? That playbook has been locked inside PE firms, available only to partners with MBAs from Wharton and $500M funds. Until now.
          </p>
          
          <div className="mt-10 p-8 border-l-4 border-aryo bg-aryo-50 shadow-sm">
            <p className="font-serif text-2xl font-medium leading-[1.4] text-ink-900 italic m-0">
              "The best business opportunities are the ones most people overlook — not because they're risky, but because the playbook has been gatekept."
            </p>
            <cite className="block mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-aryo not-italic">
              — Aryo Rollup Thesis
            </cite>
          </div>
          
          <p className="text-[17px] mt-8">
            Aryo exists to change that. We teach you the complete PE rollup methodology — how to identify fragmented markets, acquire businesses at a discount, integrate operations, and exit at a multiple. You keep 100% of the equity.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}
        >
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-4">How the Aryo program compares</div>
          <div className="overflow-x-auto shadow-sm border border-ink-100">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-ink-900">
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10 w-1/5">Factor</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">DIY Growth</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">Consultants</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-white/70 border-r border-white/10">PE Firm</th>
                  <th className="p-4 text-[11px] font-bold tracking-[0.1em] uppercase text-aryo">Aryo</th>
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