import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainSection from "@/components/PainSection";
import Specialties from "@/components/Specialties";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Coverage from "@/components/Coverage";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PainSection />
        <Specialties />
        <Differentials />
        <About />
        <Testimonials />
        <FAQ />
        <Coverage />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
};

export default Index;
