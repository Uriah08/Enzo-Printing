import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";
import Hero from "@/components/pages/Hero";
import Product from "@/components/pages/Product";
import Service from "@/components/pages/Service";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero/>
      <About/>
      <Service/>
      <Product/>
      <Contact/>
      <Footer/>
    </div>
  );
}


