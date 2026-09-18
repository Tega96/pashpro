import HeroSection from "./_components/HeroSection"
import FeatureSection from './_components/FeatureSection';
import DiscoverSection from "./_components/DiscoverySection";
import CallToAction from "./_components/CallToAction";
import FooterSection from "./_components/FooterSection";

const Landing = () => {
  return (
    <div className="relative top-0 left-0">
      <HeroSection />
      <FeatureSection />
      <DiscoverSection />
      <CallToAction />
      <FooterSection />
    </div>
  )
}

export default Landing;