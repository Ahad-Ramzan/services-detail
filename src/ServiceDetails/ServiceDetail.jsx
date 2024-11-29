import HeroSection from "../components/HeroSection";
import Home from "../components/Home";
import Services from "../components/Services";

export default function ServiceDetail() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col-reverse lg:flex-row  sm:mx-[8%] xl:mx-[10%] ">
        <Services />

        <Home />
      </div>
    </div>
  );
}
