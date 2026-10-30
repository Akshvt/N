import { AnnouncementTicker } from '@/components/home/AnnouncementTicker';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { ProductTrio } from '@/components/home/ProductTrio';
import { SplitSticky } from '@/components/home/SplitSticky';
import { ScienceTeaser } from '@/components/home/ScienceTeaser';
import { BenefitsCarousel } from '@/components/home/BenefitsCarousel';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import { Testimonials } from '@/components/home/Testimonials';
import { QuizBand } from '@/components/home/QuizBand';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { Footer } from '@/components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <AnnouncementTicker />
      <Navbar />
      <main>
        <Hero />
        <ProductTrio />
        <SplitSticky />
        <ScienceTeaser />
        <BenefitsCarousel />
        <ComparisonTable />
        <Testimonials />
        <QuizBand />
        <FaqAccordion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
