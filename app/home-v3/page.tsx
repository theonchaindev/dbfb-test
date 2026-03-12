import UtilityBar from "../components/UtilityBar";
import Navigation from "../components/Navigation";
import HeroV3 from "../components/HeroV3";
import SolutionsV3 from "../components/SolutionsV3";
import WhyDBFBV3 from "../components/WhyDBFBV3";
import SectorsV3 from "../components/SectorsV3";
import TestimonialsV3 from "../components/TestimonialsV3";
import CTASectionV3 from "../components/CTASectionV3";
import Footer from "../components/Footer";

export default function HomeV3() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <UtilityBar />
      </div>

      <Navigation forceActive />

      <main>
        <HeroV3 />
        <SolutionsV3 />
        <WhyDBFBV3 />
        <SectorsV3 />
        <TestimonialsV3 />
        <CTASectionV3 />
      </main>

      <Footer />
    </div>
  );
}
