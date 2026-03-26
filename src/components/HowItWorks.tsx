import { motion } from 'framer-motion';
import { Search, Target, TrendingUp, Rocket } from 'lucide-react';
import { reveal } from '../utils/motion';

export function HowItWorks() {
  const steps = [
    { tag: "Step 01", icon: Search, title: "Identify the Fragmentation", text: "We teach you to spot industries where 50+ small players chase the same customers — creating massive consolidation opportunity. You'll learn to map market structure, identify platform candidates, and score industries by rollup potential.", cycle: "-> Industry analysis" },
    { tag: "Step 02", icon: Target, title: "Build the Acquisition Engine", text: "Learn proprietary deal sourcing, valuation frameworks, and financing strategies that make targets come to you. SBA loans, seller notes, earnouts — you'll master every lever.", cycle: "-> Deal machine" },
    { tag: "Step 03", icon: TrendingUp, title: "Optimize & Integrate", text: "Master the operational playbooks that unlock synergies, improve margins, and build defensible competitive advantages. Back-office consolidation, brand unification, shared services — the compounding starts here.", cycle: "-> Value creation" },
    { tag: "Step 04", icon: Rocket, title: "Exit for Multiple", text: "Understand when and how to harvest value — strategic buyer, PE recapitalization, or IPO pathway. You'll learn to position your platform for maximum exit multiple.", cycle: "-> Realize returns" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto" id="how-it-works">
      <div className="mb-14">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4"
        >
          <div className="w-5 h-px bg-aryo/70"></div>
          The Framework
        </motion.div>
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold"
        >
          How Aryo teaches you<br/>to <em className="italic text-aryo font-medium">roll up an industry.</em>
        </motion.h2>
      </div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-ink-100 shadow-sm"
      >
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="p-8 border-b lg:border-b-0 lg:border-r border-ink-100 bg-white relative group hover:bg-aryo-50 transition-colors duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-aryo transition-colors duration-300"></div>
            
            <div className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-ink-300 mb-6">
              {step.tag}
            </div>
            <step.icon className="w-6 h-6 text-ink-900 mb-4 stroke-[1.5]" />
            <h3 className="font-serif text-xl font-bold text-ink-900 mb-3 leading-[1.2]">
              {step.title}
            </h3>
            <p className="text-[13px] text-ink-500 leading-relaxed min-h-[120px]">
              {step.text}
            </p>
            <div className="font-mono text-[10px] text-aryo mt-6 tracking-[0.06em]">
              {step.cycle}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}