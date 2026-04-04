import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TentangSection from "@/components/TentangSection";
import ProdukSection from "@/components/ProdukSection";
import KeunggulanSection from "@/components/KeunggulanSection";
import CaraPesanSection from "@/components/CaraPesanSection";
import TestimoniSection from "@/components/TestimoniSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TentangSection />
    <ProdukSection />
    <KeunggulanSection />
    <CaraPesanSection />
    <TestimoniSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
