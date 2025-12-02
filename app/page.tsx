import HomeHero from "@/components/site/HomeHero";
import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";
import Founder from "@/components/site/Founder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <ValueProps />
      <AppShowcase />
      <Founder />
      <Footer />
    </main>
  );
}
