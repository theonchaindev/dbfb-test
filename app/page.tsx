import UtilityBar from "./components/UtilityBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyDBFB from "./components/WhyDBFB";
import Sectors from "./components/Sectors";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Utility bar fixed at very top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <UtilityBar />
      </div>

      {/* Navigation fixed below utility bar (~32px tall) */}
      <Navigation />

      {/* Page content */}
      <main>
        <Hero />
        <Solutions />
        <WhyDBFB />
        <Sectors />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
