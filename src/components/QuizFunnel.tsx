import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface QuizFunnelProps {
  onComplete: () => void;
}

const STORAGE_KEY = 'aryo-quiz-state';

export function QuizFunnel({ onComplete }: QuizFunnelProps) {
  const questions = [
    { q: "What's your primary goal?", options: ["Learn the rollup strategy from scratch", "Execute my first acquisition", "Scale an existing portfolio company", "Build a multi-company holdco"] },
    { q: "What industry are you in or targeting?", options: ["Healthcare / Medical practices", "Home Services / Trades", "Professional Services / Agencies", "SaaS / Technology", "Manufacturing / Industrial", "Other / Exploring"] },
    { q: "What's your current annual revenue?", options: ["Pre-revenue / Planning stage", "$0 – $500K", "$500K – $2M", "$2M – $10M", "$10M+"] },
    { q: "Do you have access to acquisition capital?", options: ["Yes — cash or committed financing", "Working on it — building relationships", "Need guidance on financing options", "Not yet — need to learn the basics first"] },
    { q: "What's your timeline to first deal?", options: ["Ready now — within 3 months", "6–12 months", "1–2 years", "Just exploring the strategy"] },
    { q: "How did you hear about Aryo?", options: ["Referral from someone I trust", "LinkedIn or social media", "Google search", "Podcast or media appearance", "Industry event or conference"] },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.step !== undefined) setStep(parsed.step);
        if (parsed.completed) setCompleted(true);
      }
    } catch { /* ignore */ }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers, completed }));
    } catch { /* ignore */ }
  }, [step, answers, completed]);

  const handleAnswer = (option: string) => {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
      onComplete();
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setCompleted(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  const progressPercent = completed ? 100 : (step / questions.length) * 100;

  // Disqualification check: pre-revenue + no capital + just exploring = suggest free resources
  const isEarlyStage = answers[2] === "Pre-revenue / Planning stage" && answers[3] === "Not yet — need to learn the basics first" && answers[4] === "Just exploring the strategy";

  return (
    <section className="py-24 px-6 md:px-14 bg-ink-900" id="quiz">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-aryo mb-4">Find Your Fit</div>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold">
            See if the Aryo program<br/><em className="italic text-aryo">is right for you.</em>
          </h2>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-1 bg-white/10 w-full">
            <motion.div 
              className="h-1 bg-aryo" 
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-[10px] text-white/30 mt-2 text-right font-mono">
            {completed ? 'Complete' : `${step + 1} of ${questions.length}`}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {completed ? (
            <motion.div
              key="completed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 text-center"
            >
              {isEarlyStage ? (
                <>
                  <div className="font-serif text-2xl font-bold text-ink-900 mb-4">
                    You're early — and that's <em className="italic text-aryo">smart.</em>
                  </div>
                  <p className="text-ink-500 mb-6">
                    The strategy call is best suited for owners with existing revenue or access to capital. In the meantime, we have free resources that'll help you build the foundation.
                  </p>
                  <button className="font-sans text-xs font-bold tracking-widest uppercase text-white bg-aryo px-8 py-3.5 hover:bg-aryo-dark transition-all">
                    Access Free Resources &rarr;
                  </button>
                </>
              ) : (
                <>
                  <div className="font-serif text-2xl font-bold text-ink-900 mb-4">
                    Based on your answers, you're a <em className="italic text-aryo">strong fit.</em>
                  </div>
                  <p className="text-ink-500 mb-6">
                    You have the profile of someone who can execute this strategy. The next step is a 30-minute strategy call to map out your specific rollup opportunity.
                  </p>
                  <button className="font-sans text-xs font-bold tracking-widest uppercase text-white bg-aryo px-8 py-3.5 hover:bg-aryo-dark transition-all shadow-lg shadow-aryo/30">
                    Book Your Strategy Call &rarr;
                  </button>
                </>
              )}
              <button onClick={resetQuiz} className="block mx-auto mt-4 text-xs text-ink-400 hover:text-aryo transition-colors">
                Retake quiz
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
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
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}