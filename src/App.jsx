import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const ProductCategories = lazy(() => import('./components/ProductCategories'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const FeaturedProducts = lazy(() => import('./components/FeaturedProducts'));
const Stats = lazy(() => import('./components/Stats'));
const Industries = lazy(() => import('./components/Industries'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Stats />
          <ProductCategories />
          <FeaturedProducts />
          <WhyChooseUs />
          <Industries />
          <Testimonials />
          <Gallery />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
