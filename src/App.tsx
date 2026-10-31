import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnnouncementTicker } from '@/components/home/AnnouncementTicker';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { ProductTrio } from '@/components/home/ProductTrio';
import { BrandStory } from '@/components/home/BrandStory';
import { SplitSticky } from '@/components/home/SplitSticky';
import { ScienceTeaser } from '@/components/home/ScienceTeaser';
import { BenefitsCarousel } from '@/components/home/BenefitsCarousel';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import { Testimonials } from '@/components/home/Testimonials';
import { QuizBand } from '@/components/home/QuizBand';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { Footer } from '@/components/home/Footer';
import { SciencePage } from '@/pages/SciencePage';
import { LabReportsPage } from '@/pages/LabReportsPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <AnnouncementTicker />
      <Navbar />
      <main>
        <Hero />
        <ProductTrio />
        <BrandStory />
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/lab-reports" element={<LabReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
