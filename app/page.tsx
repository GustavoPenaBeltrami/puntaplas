import Header from "@/components/sections/header/header";
import Hero from "@/components/sections/Hero/Hero";
import Products from "@/components/sections/Products/Products";
import Services from "@/components/sections/Services/Services";
import WhyUs from "@/components/sections/WhyUs/WhyUs";
import Sustainability from "@/components/sections/Sustainability/Sustainability";
import Clients from "@/components/sections/Clients/Clients";
import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <WhyUs />
        <Sustainability />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
