import { useState, useEffect } from 'react';
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
import DemoPopup from './components/DemoPopup';

function getPage(): 'home' | 'realestate' {
  return window.location.pathname === '/realestate' ? 'realestate' : 'home';
}

function App() {
  const [page, setPage] = useState<'home' | 'realestate'>(getPage);

  useEffect(() => {
    const onPop = () => setPage(getPage());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (p: 'home' | 'realestate') => {
    const path = p === 'realestate' ? '/realestate' : '/';
    window.history.pushState({}, '', path);
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <DemoPopup delay={3000} />
      <Nav page={page} onNavigate={navigate} />
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
