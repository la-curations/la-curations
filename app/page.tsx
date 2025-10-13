import HomeHero from "@/components/site/HomeHero";
import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Newsletter from "@/components/site/Newsletter";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HomeHero />
        <ValueProps />
        <AppShowcase />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
