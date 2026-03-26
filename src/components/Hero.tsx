import { motion } from 'framer-motion';
import { ChevronDown, Lock, Eye, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';


export function Hero() {
  const [viewerCount, setViewerCount] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => Math.max(3, prev + Math.floor(Math.random() * 3) - 1));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="pt-20 pb-6 px-6 text-center max-w-4xl mx-auto relative">
      {/* Floating urgency pill */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-white border border-ink-100 shadow-lg px-4 py-2 rounded-full"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-aryo">
          <Eye className="w-3.5 h-3.5" />
          {viewerCount} business owners viewing
        </div>
        <div className="w-px h-3 bg-ink-200"></div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-ink-500">
          <Clock className="w-3.5 h-3.5" />
          Q3 cohort filling up
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-6 mt-4"
      >
        <span className="w-1.5 h-1.5 bg-aryo rounded-full animate-blink"></span>
        PE Rollup Strategy Program
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-ink-900 font-semibold text-balance mx-auto"
      >
        The growth playbook private equity<br/>uses to build <em className="italic text-aryo">dominant platforms.</em>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-ink-500 mt-6 max-w-xl mx-auto leading-relaxed"
      >
        Aryo gives owner-operators ($5M-$100M) the same methodology PE firms use to consolidate fragmented industries—without giving up equity. Learn to acquire competitors, unlock operational synergies, and build a market-dominating platform you control.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-stretch justify-center mx-auto mt-10 max-w-2xl border border-ink-100 bg-white shadow-sm"
      >
        <div className="flex-1 p-5 md:p-6 text-center border-b md:border-b-0 md:border-r border-ink-100">
          <div className="font-serif text-3xl md:text-4xl font-bold text-ink-900">
            <em className="italic text-aryo">2-3x</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Faster Growth Rate</div>
        </div>
        <div className="flex-1 p-5 md:p-6 text-center border-b md:border-b-0 md:border-r border-ink-100">
          <div className="font-serif text-3xl md:text-4xl font-bold text-ink-900">
            <em className="italic text-aryo">0%</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Keep Full Control</div>
        </div>
        <div className="flex-1 p-5 md:p-6 text-center">
          <div className="font-serif text-3xl md:text-4xl font-bold text-ink-900">
            <em className="italic text-aryo">Proven</em>
          </div>
          <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-ink-300 mt-1">Methodology You Execute</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="inline-flex items-center gap-2 bg-aryo/5 border border-aryo/10 px-4 py-2 mt-6 text-[10px] font-bold tracking-[0.1em] uppercase text-ink-500"
      >
        <Lock className="w-3 h-3" />
        For Ambitious Business Owners Only
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center gap-2 mt-10 text-[10px] font-bold tracking-[0.15em] uppercase text-ink-300"
      >
        <span>Watch the overview</span>
        <ChevronDown className="w-5 h-5 text-aryo animate-bounce" />
      </motion.div>
    </header>
  );
}