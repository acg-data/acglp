import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Included() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const items = [
    "8-Month Cohort Program (Live + Recorded)",
    "50+ Hours of Video Instruction",
    "Complete Deal Playbook (200+ pages)",
    "Template Library (LOIs, DD checklists, integration playbooks)",
    "Monthly Group Coaching Calls",
    "Private Community Access",
    "1:1 Strategy Session (2 hours)",
    "Post-Program Alumni Network",
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-10">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
            <div className="w-5 h-px bg-aryo/70"></div>
            Full Program
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink-900 font-semibold">
            What's<br/><em className="italic text-aryo">included.</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white border border-ink-100">
              <div className="w-6 h-6 rounded-full bg-aryo/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-aryo" />
              </div>
              <span className="text-ink-700">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}