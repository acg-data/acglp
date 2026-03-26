import { motion } from 'framer-motion';
import { Shield, Clock } from 'lucide-react';

interface FinalCTAProps {
  onQuizClick: () => void;
}

export function FinalCTA({ onQuizClick }: FinalCTAProps) {
  const reveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-ink-900 py-24 px-6 md:px-14 relative overflow-hidden text-center border-t border-ink-800">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(20,137,180,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(20,137,180,0.3) 0%, transparent 60%)'
      }}></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <div className="flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-6">
            <div className="w-5 h-px bg-aryo/70"></div>
            Limited Availability
            <div className="w-5 h-px bg-aryo/70"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-white font-semibold text-balance mx-auto">
            Learn to build enterprise<br/><em className="italic text-aryo">value like the pros.</em>
          </h2>
          
          <p className="text-[17px] text-white/50 mt-6 leading-relaxed max-w-2xl mx-auto">
            Private equity firms have used the rollup playbook for decades to build billion-dollar enterprises. Now you can learn it — without giving up equity or paying PE-level fees.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-white/5 mt-12 mb-10 divide-x divide-y md:divide-y-0 divide-white/10 backdrop-blur-sm"
        >
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-aryo">8</em> mo</div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Program Duration</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-aryo">50+</em> hrs</div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Video Content</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-aryo">Live</em></div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Coaching Calls</div>
          </div>
          <div className="p-6 text-center">
            <div className="font-serif text-3xl font-bold text-white leading-none"><em className="italic text-aryo">Alumni</em></div>
            <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-white/40 mt-2">Network Access</div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="flex flex-col items-center">
          <button 
            onClick={onQuizClick}
            className="font-sans text-[15px] font-bold tracking-[0.06em] uppercase text-white bg-aryo hover:bg-aryo-light px-12 py-5 transition-all duration-300 shadow-[0_0_30px_rgba(20,137,180,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transform hover:-translate-y-1"
          >
            Book Your Strategy Call &rarr;
          </button>
          <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-white/30 mt-4 flex items-center gap-2">
            <Clock className="w-3 h-3" /> 30 min &middot; No obligation &middot; Limited spots
          </div>
          
          <div className="mt-12 p-5 bg-aryo/10 border border-aryo/20 max-w-lg flex items-start gap-4 text-left">
            <Shield className="w-5 h-5 text-aryo shrink-0 mt-0.5" />
            <p className="text-[12px] text-white/50 leading-[1.6]">
              <strong className="text-aryo font-semibold">No Pressure:</strong> The call is a conversation — not a sales pitch. We'll see if there's a fit, and if not, we'll point you to alternatives that might help.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}