import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface QuizFunnelProps {
  onComplete: () => void;
}

export function QuizFunnel({ onComplete }: QuizFunnelProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    { q: "What's your primary goal?", options: ["Learn the rollup strategy", "Execute my first acquisition", "Scale existing portfolio", "Build a holdco"] },
    { q: "What's your business stage?", options: ["Pre-revenue / Idea", "$0-1M revenue", "$1-10M revenue", "$10M+ revenue"] },
    { q: "What's your timeline?", options: ["Just exploring", "6-12 months", "1-2 years", "2+ years"] },
  ];

  const handleAnswer = (option: string) => {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <section className="py-24 px-6 md:px-14 bg-ink-900" id="quiz">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">Find Your Fit</div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold">
            Which Aryo program<br/><em className="italic text-aryo">matches you?</em>
          </h2>
        </motion.div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8"
        >
          <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-ink-300 mb-4">
            Question {step + 1} of {questions.length}
          </div>
          <h3 className="font-serif text-xl font-bold text-ink-900 mb-6">{questions[step].q}</h3>
          <div className="space-y-3">
            {questions[step].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left border border-ink-100 hover:border-aryo hover:bg-aryo-50 transition-all flex items-center justify-between group"
              >
                <span className="text-ink-700 group-hover:text-aryo">{option}</span>
                <ChevronRight className="w-5 h-5 text-ink-300 group-hover:text-aryo" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}