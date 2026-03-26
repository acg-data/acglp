import { motion } from 'framer-motion';
import { Briefcase, BarChart3, GraduationCap, Globe } from 'lucide-react';
import { reveal } from '../utils/motion';

interface PlatformHubProps {
  onResourceClick: () => void;
}

export function PlatformHub({ onResourceClick }: PlatformHubProps) {
  const features = [
    { icon: Briefcase, title: "Complete Rollup Playbook", text: "200+ page methodology covering deal sourcing, valuation, LOI structure, DD checklists, integration plans, and exit strategy. Not theory — execution blueprints from real deals." },
    { icon: BarChart3, title: "Financial Modeling Templates", text: "Pre-built models for valuation, synergy analysis, debt capacity, and pro forma P&L. Built by operators who've closed $500M+ in deals." },
    { icon: GraduationCap, title: "Live Coaching & Deal Reviews", text: "Monthly group coaching calls plus deal review sessions where you bring your live opportunities and get real-time feedback from experienced operators." },
    { icon: Globe, title: "Operator Network Access", text: "Connect with program alumni, ex-PE operators, and industry specialists. Warm introductions to lenders, brokers, and integration partners." }
  ];

  const resources = [
    { type: "Guide", title: "The Fragmentation Map: How to Score Any Industry for Rollup Potential", desc: "A step-by-step framework for identifying markets where consolidation creates outsized value — and where it doesn't." },
    { type: "Template", title: "The LOI Toolkit: Letter of Intent Templates That Actually Close", desc: "Battle-tested LOI templates with built-in protections and deal terms that experienced sellers take seriously." },
    { type: "Case Study", title: "From 1 to 23 Locations: The Regional Healthcare Rollup Playbook", desc: "A deep-dive into how one program alumni built a $42M revenue platform from a single physician practice in 24 months." },
    { type: "Workshop", title: "SBA Lending for Acquisitions: How to Finance Your First Deal", desc: "For first-time acquirers — a framework for structuring SBA-backed acquisitions including seller notes, earnouts, and creative financing." }
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto" id="curriculum">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4"
      >
        <div className="w-5 h-px bg-aryo/70"></div>
        The Curriculum
      </motion.div>
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold mb-16"
      >
        Aryo is not just a course.<br/>It is <em className="italic text-aryo font-medium">the operating system</em><br/>for rollup execution.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <p className="text-[17px] text-ink-500 leading-relaxed mb-10">
            Most programs give you frameworks and leave you to figure out execution. We give you the complete toolkit — playbooks, templates, models, and live support — so you can move from learning to closing deals in months, not years.
          </p>
          <div className="flex flex-col border-t border-ink-100">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-5 py-6 border-b border-ink-100 group hover:bg-aryo-50 transition-colors -mx-4 px-4">
                <div className="w-10 h-10 shrink-0 bg-white border border-ink-100 flex items-center justify-center text-ink-900 group-hover:border-aryo/30 group-hover:text-aryo transition-colors shadow-sm">
                  <f.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-ink-700 mb-1.5">{f.title}</h4>
                  <p className="text-[13px] text-ink-500 leading-[1.6]">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="bg-cream-200/50 p-6 md:p-8 border border-ink-100">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-300 mb-6">From the resource library</div>
          <div className="flex flex-col gap-3">
            {resources.map((r, i) => (
              <div 
                key={i} 
                onClick={onResourceClick}
                className="bg-white border border-ink-100 p-5 flex items-start gap-4 cursor-pointer hover:border-aryo/40 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-aryo bg-aryo-50 border border-aryo-pale px-2.5 py-1 whitespace-nowrap shrink-0 mt-0.5">
                  {r.type}
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink-700 mb-1.5 group-hover:text-aryo transition-colors">{r.title}</h4>
                  <p className="text-[12.5px] text-ink-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}