import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceTimes from "@/components/ServiceTimes";
import Mission from "@/components/Mission";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceTimes />
        <Mission />
        <Events />
        <Gallery />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
