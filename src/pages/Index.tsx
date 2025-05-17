
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

// Sample product data
const featuredProducts = [
  {
    id: "1",
    name: "Honeycomb Waffle Bath Towel",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
    price: 3500,
    size: "Bath (30\" x 56\")",
    color: "Beige"
  },
  {
    id: "2",
    name: "Waffle Hand Towel Set",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww",
    price: 1750,
    size: "Hand (16\" x 28\")",
    color: "Grey"
  },
  {
    id: "3",
    name: "Premium Bath & Hand Towel Bundle",
    image: "https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww",
    price: 4800,
    color: "White"
  }
];

// Sample reviews
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

// Towel images for animations
const towelImages = [
  "https://images.unsplash.com/photo-1600369671236-e74531c602de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1652464179901-35d6fb00bc97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvd2Vsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1601741977563-7dd7c5db31d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvd2Vsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvd2Vsc3xlbnwwfHwwfHx8MA%3D%3D",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxe-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <GroupFallingTowels images={towelImages.slice(0, 5)} />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <FadeInOnScroll delay={1}>
                  <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-luxe-navy mb-6">
                    Wrap Yourself in Luxury
                  </h1>
                </FadeInOnScroll>
                
                <FadeInOnScroll delay={1.2}>
                  <p className="font-lato text-xl md:text-2xl text-luxe-navy/80 mb-8">
                    Ultra-soft, quick-drying honeycomb towels for your everyday spa experience.
                  </p>
                </FadeInOnScroll>
                
                <FadeInOnScroll delay={1.4}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/products" 
                      className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-4 rounded-md text-lg transition-colors hover:bg-luxe-gold"
                    >
                      Shop Now
                    </Link>
                  </motion.div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-center text-luxe-navy mb-16">
              Elevate Your Everyday
            </h2>
          </FadeInOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard 
              title="100% Premium Cotton" 
              description="Crafted from the finest cotton for exceptional softness and durability."
              icon={<ShoppingBag size={32} />}
              delay={0.2}
            />
            <FeatureCard 
              title="Lightweight Waffle Weave" 
              description="Unique honeycomb texture enhances absorption while staying lightweight."
              icon={<Droplet size={32} />}
              delay={0.4}
            />
            <FeatureCard 
              title="Quick-Drying Comfort" 
              description="Engineered to dry faster than traditional terry towels."
              icon={<Wind size={32} />}
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Shop Section */}
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/products" 
                  className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md text-lg transition-colors hover:bg-luxe-gold"
                >
                  View All Products
                </Link>
              </motion.div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
      
      {/* Reviews Section */}
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
              <Link 
                to="/reviews" 
                className="inline-block font-lato font-medium text-luxe-navy border-b-2 border-luxe-gold pb-1 transition-colors hover:text-luxe-gold"
              >
                Read More Reviews
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Image Feature */}
      <section className="py-20 bg-luxe-cream/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <UnfoldingTowel 
                image="https://images.unsplash.com/photo-1600369671236-e74531c602de?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww" 
                alt="DRAPE&LUXE towel in spa setting"
              />
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
                    <div className="bg-luxe-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Ultra-soft and absorbent waffle weave</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-luxe-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Quick-drying and lightweight for everyday use</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-luxe-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Perfect for bath, gym, or travel</span>
                  </li>
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/about" 
                    className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-gold"
                  >
                    Our Story
                  </Link>
                </motion.div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default Index;
