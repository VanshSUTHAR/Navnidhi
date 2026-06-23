import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import Stats from './components/Stats';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
