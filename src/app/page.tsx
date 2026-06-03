import Nav from "@/components/nav";
import Hero from "@/components/hero";
import WIG from "@/components/wig";
import Benefits from "@/components/benefits";
import Modules from "@/components/modules";
import Roadmap from "@/components/roadmap";
import Metrics from "@/components/metrics";
import Impact from "@/components/impact";
import Vision from "@/components/vision";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WIG />
        <Benefits />
        <Modules />
        <Roadmap />
        <Metrics />
        <Impact />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
