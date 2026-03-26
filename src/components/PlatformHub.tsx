import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Users } from 'lucide-react';

interface PlatformHubProps {
  onResourceClick: () => void;
}

export function PlatformHub({ onResourceClick }: PlatformHubProps) {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const resources = [
    { icon: BookOpen, title: "Playbook", desc: "Complete rollup methodology" },
    { icon: FileText, title: "Templates", desc: "Deal docs, LOIs, DD checklists" },
    { icon: Video, title: "Module Library", desc: "50+ hours of instruction" },
    { icon: Users, title: "Advisors", desc: "Ex-PE operators at your service" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 bg-white border-y border-ink-100" id="curriculum">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
            <div className="w-5 h-px bg-aryo/70"></div>
            Included
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold">
            Everything you need<br/><em className="italic text-aryo font-medium">to execute.</em>
          </h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, i) => (
            <div key={i} className="p-6 bg-cream border border-ink-100 hover:border-aryo/20 transition-colors group cursor-pointer" onClick={onResourceClick}>
              <item.icon className="w-8 h-8 text-aryo mb-4" />
              <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
              <p className="text-sm text-ink-500">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}