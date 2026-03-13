import UtilityBar from "../components/UtilityBar";
import Navigation from "../components/Navigation";
import HeroV4 from "../components/HeroV4";
import StatsV4 from "../components/StatsV4";
import SolutionsV4 from "../components/SolutionsV4";
import SectorsV4 from "../components/SectorsV4";
import TestimonialsV4 from "../components/TestimonialsV4";
import CTASectionV4 from "../components/CTASectionV4";
import Footer from "../components/Footer";

export default function HomeV4() {
  return (
    <div className="min-h-screen" style={{ background: "#170F49" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <UtilityBar />
      </div>

      <Navigation forceActive />

      <main>
        <HeroV4 />
        <StatsV4 />
        <SolutionsV4 />
        <SectorsV4 />
        <TestimonialsV4 />
        <CTASectionV4 />
      </main>

      <Footer />
    </div>
  );
}
