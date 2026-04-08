import REHero from '../components/realestate/REHero';
import REDemos from '../components/realestate/REDemos';
import REFeatures from '../components/realestate/REFeatures';
import REHowItWorks from '../components/realestate/REHowItWorks';
import REWhy from '../components/realestate/REWhy';
import REPricing from '../components/realestate/REPricing';
import REContact from '../components/realestate/REContact';
import REFooter from '../components/realestate/REFooter';

export default function RealEstatePage() {
  const scrollToContact = () => {
    document.getElementById('re-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <REHero onCTA={scrollToContact} />
      <REDemos />
      <REFeatures onBook={scrollToContact} />
      <REHowItWorks onBook={scrollToContact} />
      <REWhy onTry={scrollToContact} />
      <REPricing onGetStarted={scrollToContact} />
      <REContact />
      <REFooter />
    </>
  );
}
