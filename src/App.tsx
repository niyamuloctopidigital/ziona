import Nav from './components/Nav';
import Hero from './components/Hero';
import DemosSection from './components/DemosSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import WhySection from './components/WhySection';
import PricingSection from './components/PricingSection';
import CTABand from './components/CTABand';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <Hero />
      <DemosSection />
      <FeaturesSection />
      <HowItWorks />
      <WhySection />
      <PricingSection onGetStarted={scrollToContact} />
      <CTABand onBook={scrollToContact} />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
