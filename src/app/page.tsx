
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import BentoSpace from "@/components/BentoSpace";
import AboutSection from "@/components/AboutSection";
import InstagramSection from "@/components/InstagramSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <BentoSpace />
      <AboutSection />
      <InstagramSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
