import HomeHero from "@/components/site/HomeHero";
import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <ValueProps />
      <AppShowcase />
      <Footer />
    </main>
  );
}
