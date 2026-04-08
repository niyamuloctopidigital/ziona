import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import IndustriesSection from './components/IndustriesSection';
import DemosSection from './components/DemosSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import WhySection from './components/WhySection';
import PricingSection from './components/PricingSection';
import CTABand from './components/CTABand';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RealEstatePage from './pages/RealEstatePage';

type Page = 'home' | 'realestate';

function App() {
  const [page, setPage] = useState<Page>('home');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav page={page} onNavigate={setPage} />
      {page === 'home' ? (
        <>
          <Hero />
          <IndustriesSection />
          <DemosSection />
          <FeaturesSection />
          <HowItWorks />
          <WhySection />
          <PricingSection onGetStarted={scrollToContact} />
          <CTABand onBook={scrollToContact} />
          <ContactSection />
          <Footer />
        </>
      ) : (
        <RealEstatePage />
      )}
    </>
  );
}

export default App;
