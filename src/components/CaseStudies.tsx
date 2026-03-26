import { motion } from 'framer-motion';
import { reveal } from '../utils/motion';

export function CaseStudies() {
  const cases = [
    {
      catLabel: "Medical Practices · Platform Build",
      result: "3.8x",
      resultNote: "Equity Multiple*",
      metrics: [
        { n: "23", nSuffix: " locations", l: "Platform Scale" },
        { n: "$42M", l: "Revenue Built" }
      ],
      quote: "We started with a single 4-physician practice. Within 24 months, we had rolled up 12 additional practices into a regional platform. The playbook Aryo gave us made each deal faster and more predictable than the last.",
      author: { av: "MC", name: "Marcus C.", role: "Founder, Regional Health Holdings" }
    },
    {
      catLabel: "Home Services · HVAC/Plumbing",
      result: "$31M",
      resultSuffix: " Revenue",
      metrics: [
        { n: "89", nSuffix: " routes", l: "Service Routes" },
        { n: "18", nSuffix: " mo", l: "Time to Scale" }
      ],
      quote: "I was stuck at $4M running one shop. Aryo showed me how to think like a platform builder. Seven acquisitions later, we're the largest independent in three counties. No PE partner. No dilution.",
      author: { av: "DP", name: "David P.", role: "CEO, ServicePro Holdings" }
    },
    {
      catLabel: "SaaS Tools · Vertical Software",
      result: "8x",
      resultSuffix: " Exit",
      metrics: [
        { n: "$28M", l: "ARR at Exit" },
        { n: "4", nSuffix: " products", l: "Integrated Suite" }
      ],
      quote: "Four disconnected niche products, each doing $3-7M ARR. We acquired all four, integrated into a single suite, and sold to a strategic buyer at 8x revenue. The integration playbook alone was worth 10x the program fee.",
      author: { av: "SL", name: "Sarah L.", role: "Managing Partner, Apex Software Group" }
    }
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-ink-100" id="case-studies" aria-labelledby="case-studies-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4"
        >
          <div className="w-5 h-px bg-aryo/70" aria-hidden="true"></div>
          Success Stories
        </motion.div>
        
        <motion.h2 
          id="case-studies-heading"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold mb-12"
        >
          How program alumni are<br/>building <em className="italic text-aryo font-medium">real platforms.</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-ink-100 border border-ink-100">
          {cases.map((c, i) => (
            <motion.article 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
              className="bg-white flex flex-col transition-colors duration-300 hover:bg-aryo-50"
            >
              <div className="bg-ink-900 p-4 md:px-6 flex items-center justify-between gap-4">
                <div className="text-[9px] font-bold tracking-[0.14em] uppercase text-white/50 leading-tight w-1/2">
                  {c.catLabel}
                </div>
                <div className="font-serif text-lg font-bold text-aryo leading-none text-right">
                  <em className="italic">{c.result}</em>
                  {c.resultSuffix && <span className="text-white text-sm ml-1 font-sans font-medium tracking-normal">{c.resultSuffix}</span>}
                  {c.resultNote && <span className="text-white/40 text-xs ml-1 font-sans font-medium tracking-normal">{c.resultNote}</span>}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {c.metrics.map((m: any, idx: number) => (
                    <div key={idx}>
                      <div className="font-serif text-2xl font-bold text-ink-900 leading-none">
                        <em className="italic text-aryo">{m.n}</em>
                        {m.nSuffix && <span className="text-base font-sans text-ink-900 ml-1 font-semibold">{m.nSuffix}</span>}
                      </div>
                      <div className="text-[9px] font-bold tracking-[0.08em] uppercase text-ink-300 mt-1.5">{m.l}</div>
                    </div>
                  ))}
                  <div className="col-span-2 h-px bg-ink-100 mt-2" aria-hidden="true"></div>
                </div>
                
                <blockquote className="text-[13.5px] leading-[1.68] text-ink-500 italic flex-1 mb-4 pl-3 border-l-2 border-aryo-pale">
                  "{c.quote}"
                </blockquote>

                <p className="text-[8px] text-ink-300 mb-4">*Individual result. Not representative of all participants. Results depend on execution and market conditions.</p>
                
                <div className="flex gap-3 items-center pt-4 border-t border-ink-100 mt-auto">
                  <div className="w-8 h-8 shrink-0 bg-ink-900 flex items-center justify-center font-serif text-xs font-bold text-aryo" aria-hidden="true">
                    {c.author.av}
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-ink-700">{c.author.name}</div>
                    <div className="text-[10px] text-ink-300 mt-0.5">{c.author.role}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}