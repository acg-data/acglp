import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Globe } from 'lucide-react';

export function AssetClass() {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const assets = [
    { icon: Building2, title: "Manufacturing", desc: "Consolidate fragmented shop floor operations" },
    { icon: Users, title: "Professional Services", desc: "Build integrated service platforms" },
    { icon: TrendingUp, title: "Healthcare Services", desc: "Create regional care networks" },
    { icon: Globe, title: "B2B Services", desc: "Aggregate niche service providers" },
  ];

  return (
    <section className="py-24 px-6 md:px-14 max-w-6xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-14">
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">
          <div className="w-5 h-px bg-aryo/70"></div>
          The Strategy
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold">
          One thesis.<br/><em className="italic text-aryo font-medium">Every industry.</em>
        </h2>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assets.map((asset, i) => (
          <div key={i} className="p-8 bg-white border border-ink-100 hover:border-aryo/20 hover:shadow-lg transition-all duration-300 group">
            <asset.icon className="w-8 h-8 text-aryo mb-4 stroke-[1.5]" />
            <h3 className="font-serif text-xl font-bold text-ink-900 mb-2">{asset.title}</h3>
            <p className="text-sm text-ink-500 leading-relaxed">{asset.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}