import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ClientsCarousel from "@/components/ClientsCarousel";
import SocialProof from "@/components/SocialProof";
import Methodology from "@/components/Methodology";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <ClientsCarousel />
        <SocialProof />
        <Methodology />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
