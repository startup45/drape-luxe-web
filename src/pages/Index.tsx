import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Droplet, Wind } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { GroupFallingTowels } from "@/components/animation/FallingTowel";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import FeatureCard from "@/components/FeatureCard";
import ReviewCard from "@/components/ReviewCard";
import Newsletter from "@/components/Newsletter";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";
import BackgroundVideo from "@/components/BackgroundVideo";

const featuredProducts = [
  {
    id: "1",
    name: "Honeycomb Waffle Bath Towel",
    image: "https://images.pexels.com/photos/12932367/pexels-photo-12932367.jpeg",
    price: 3500,
    size: "Bath (30\" x 56\")",
    color: "Beige"
  },
  {
    id: "2",
    name: "Waffle Hand Towel Set",
    image: "https://images.pexels.com/photos/2672634/pexels-photo-2672634.jpeg",
    price: 1750,
    size: "Hand (16\" x 28\")",
    color: "Grey"
  },
  {
    id: "3",
    name: "Premium Bath & Hand Towel Bundle",
    image: "https://images.pexels.com/photos/18190570/pexels-photo-18190570.jpeg",
    price: 4800,
    color: "White"
  }
];

const reviews = [
  {
    name: "Priya M.",
    rating: 5,
    date: "April 15, 2025",
    content: "These towels are incredible! So soft and absorbent, yet they dry quickly. The honeycomb texture is beautiful and feels luxurious. Definitely worth the investment."
  },
  {
    name: "Rahul K.",
    rating: 5,
    date: "March 22, 2025",
    content: "After using these towels for a month, I'm completely sold. They're lightweight but still absorbent, and they look elegant in my bathroom. The quality is exceptional!"
  },
  {
    name: "Anjali S.",
    rating: 4,
    date: "May 3, 2025",
    content: "Love the minimalist design and the quick-drying feature. Perfect for everyday use and still looks premium. Only wish they had more color options."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
{/* 
      <section className="h-screen relative overflow-hidden">
        <BackgroundVideo videoUrl="" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <FadeInOnScroll delay={0.5}>
                <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                  Wrap Yourself in Luxury
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.7}>
                <p className="font-lato text-xl md:text-2xl text-white/90 mb-8">
                  Ultra-soft, quick-drying honeycomb towels for your everyday spa experience.
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.9}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/products" className="inline-block bg-luxe-gold text-white font-lato font-medium px-8 py-4 rounded-md text-lg transition-colors hover:bg-luxe-gold/90">
                    Shop Now
                  </Link>
                </motion.div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section> */}
      <section className="h-screen relative overflow-hidden">
        <BackgroundVideo videoUrl="/5116401-hd_1920_1080_25fps (1).mp4" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <FadeInOnScroll delay={0.5}>
              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Wrap Yourself in Luxury
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.7}>
              <p className="font-lato text-xl md:text-2xl text-white/90 mb-8">
                Ultra-soft, quick-drying honeycomb towels for your everyday spa experience.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.9}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="inline-block bg-luxe-gold text-white font-lato font-medium px-8 py-4 rounded-md text-lg transition-colors hover:bg-luxe-gold/90"
                >
                  Shop Now
                </Link>
              </motion.div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-center text-luxe-navy mb-16">
              Elevate Your Everyday
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard title="100% Premium Cotton" description="Crafted from the finest cotton for exceptional softness and durability." icon={<ShoppingBag size={32} />} delay={0.2} />
            <FeatureCard title="Lightweight Waffle Weave" description="Unique honeycomb texture enhances absorption while staying lightweight." icon={<Droplet size={32} />} delay={0.4} />
            <FeatureCard title="Quick-Drying Comfort" description="Engineered to dry faster than traditional terry towels." icon={<Wind size={32} />} delay={0.6} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxe-beige/30">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-center text-luxe-navy mb-16">
              Featured Collection
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <FadeInOnScroll key={product.id} delay={index * 0.2}>
                <ProductCard product={product} />
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll delay={0.6}>
            <div className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/products" className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md text-lg transition-colors hover:bg-luxe-gold">
                  View All Products
                </Link>
              </motion.div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-center text-luxe-navy mb-16">
              What Our Customers Say
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <FadeInOnScroll key={index} delay={index * 0.2}>
                <ReviewCard {...review} />
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll delay={0.6}>
            <div className="text-center mt-12">
              <Link to="/reviews" className="inline-block font-lato font-medium text-luxe-navy border-b-2 border-luxe-gold pb-1 transition-colors hover:text-luxe-gold">
                Read More Reviews
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="py-20 bg-luxe-cream/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <UnfoldingTowel image="https://images.pexels.com/photos/12932367/pexels-photo-12932367.jpeg" alt="DRAPE&LUXE towel in spa setting" />
            </div>
            <div className="w-full md:w-1/2">
              <FadeInOnScroll>
                <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-luxe-navy mb-6">
                  The Ultimate Spa Experience at Home
                </h2>
                <p className="text-luxe-navy/80 mb-8">
                  Our honeycomb waffle towels combine minimalist design with spa-like comfort. Each towel is crafted from 100% premium cotton for a luxurious feel that transforms your daily routine into a moment of indulgence.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-luxe-gold text-white rounded-full p-2 mr-4">✓</div>
                    <span>100% premium cotton</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-luxe-gold text-white rounded-full p-2 mr-4">✓</div>
                    <span>Quick-drying waffle weave</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-luxe-gold text-white rounded-full p-2 mr-4">✓</div>
                    <span>Minimalist & modern design</span>
                  </li>
                </ul>
                <Link to="/about" className="inline-block bg-luxe-navy text-white font-lato font-medium px-6 py-3 rounded-md text-lg transition-colors hover:bg-luxe-gold">
                  Learn More
                </Link>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
