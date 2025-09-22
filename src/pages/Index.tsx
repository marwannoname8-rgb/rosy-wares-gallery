import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
