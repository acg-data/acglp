import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ProofTicker } from './components/ProofTicker';
import { AssetClass } from './components/AssetClass';
import { Returns } from './components/Returns';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { PullQuote } from './components/PullQuote';
import { PlatformHub } from './components/PlatformHub';
import { QuizFunnel } from './components/QuizFunnel';
import { Included } from './components/Included';
import { FAQ } from './components/FAQ';
import { TrustBar } from './components/TrustBar';
import { FinalCTA } from './components/FinalCTA';

function App() {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-ink-500">
      <Nav onQuizClick={scrollToQuiz} />
      
      <main>
        <Hero />
        <ProofTicker />
        <AssetClass />
        <Returns />
        <HowItWorks />
        <CaseStudies />
        <PullQuote />
        <PlatformHub onResourceClick={() => {}} />
        <QuizFunnel onComplete={() => {}} />
        <Included />
        <FAQ />
        <TrustBar />
        <FinalCTA onQuizClick={scrollToQuiz} />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-white py-16 px-6 md:px-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="font-serif text-2xl font-semibold text-white mb-4">Aryo</div>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Teaching business owners the institutional PE rollup strategy used by the world's most successful holdcos — without giving up equity.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Program</div>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-aryo transition-colors">Cohort Overview</a></li>
            <li><a href="#" className="hover:text-aryo transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-aryo transition-colors">Curriculum</a></li>
            <li><a href="#" className="hover:text-aryo transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#" className="hover:text-aryo transition-colors">Book Strategy Call</a></li>
            <li><a href="#" className="hover:text-aryo transition-colors">info@aryo.com</a></li>
            <li><a href="#" className="hover:text-aryo transition-colors">Boston, MA</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-[11px] text-white/30">
        © 2026 Aryo. All rights reserved.
      </div>
    </footer>
  );
}

export default App;