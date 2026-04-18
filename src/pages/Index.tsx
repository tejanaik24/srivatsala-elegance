import { useLenis } from "@/hooks/useLenis";
import { Marquee } from "@/components/site/Marquee";
import { Nav } from "@/components/site/Nav";
import { HeroSlider } from "@/components/site/HeroSlider";
import { AndhraTraditional } from "@/components/site/AndhraTraditional";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { CollectionsStrip } from "@/components/site/CollectionsStrip";
import { Bridal } from "@/components/site/Bridal";
import { WhyUs } from "@/components/site/WhyUs";
import { Offers } from "@/components/site/Offers";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  useLenis();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Marquee />
      <Nav />
      <main>
        <HeroSlider />
        <AndhraTraditional />
        <Categories />
        <Products />
        <CollectionsStrip />
        <Bridal />
        <WhyUs />
        <Offers />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
