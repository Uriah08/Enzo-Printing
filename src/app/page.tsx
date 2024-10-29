import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
import Service from "@/components/pages/Service";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero/>
      <About/>
      <Service/>
    </div>
  );
}


