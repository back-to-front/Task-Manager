import "./Landing.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import CTASection from "../../components/CTASection/CTASection";
import FooterSection from "../../components/FooterSection/FooterSection";

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
