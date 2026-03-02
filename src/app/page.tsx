import { Hero } from "@/components/sections/Hero";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { TwoWaysWeHelp } from "@/components/sections/TwoWaysWeHelp";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <PartnerStrip />
        <TwoWaysWeHelp />
        <Testimonials />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
