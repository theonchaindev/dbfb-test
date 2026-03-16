import UtilityBar from "../components/UtilityBar";
import Navigation from "../components/Navigation";
import HeroV4 from "../components/HeroV4";
import SolutionsV4 from "../components/SolutionsV4";
import WhyDBFB from "../components/WhyDBFB";
import Sectors from "../components/Sectors";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomeV5() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <UtilityBar />
      </div>

      <Navigation forceActive />

      <main>
        <HeroV4 />
        <SolutionsV4 />
        <WhyDBFB />
        <Sectors />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
