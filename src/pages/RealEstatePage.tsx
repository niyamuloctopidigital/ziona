import REHero from '../components/realestate/REHero';
import REDemos from '../components/realestate/REDemos';
import REWhy from '../components/realestate/REWhy';
import REAdvantages from '../components/realestate/REAdvantages';
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
      <REWhy onTry={scrollToContact} />
      <REAdvantages onTry={scrollToContact} />
      <REPricing onGetStarted={scrollToContact} />
      <REContact />
      <REFooter />
    </>
  );
}
