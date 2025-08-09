import HeroSection from "../components/Landing/HeroSection/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection/FeaturesSection";
import StatsSection from "../components/Landing/StatsSection/StatsSection";
import HowItWorksSection from "../components/Landing/HowItWorksSection/HowItWorksSection";
import CTASection from "../components/Landing/CTASection/CTASection";
import FooterSection from "../components/Landing/FooterSection/FooterSection";

function Landing() {
  return (
    <div className='landing-page'>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />

      <CTASection />

      <FooterSection />
    </div>
  );
}

export default Landing;
