
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Newsletter from "@/components/Newsletter";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";

// Sample product data
const allProducts = [
  {
    id: "1",
    name: "Honeycomb Waffle Bath Towel",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
    price: 3500,
    size: "Bath (30\" x 56\")",
    color: "Beige",
    category: "bath"
  },
  {
    id: "2",
    name: "Waffle Hand Towel Set",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww",
    price: 1750,
    size: "Hand (16\" x 28\")",
    color: "Grey",
    category: "hand"
  },
  {
    id: "3",
    name: "Premium Bath & Hand Towel Bundle",
    image: "https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww",
    price: 4800,
    color: "White",
    category: "bundle"
  },
  {
    id: "4",
    name: "Honeycomb Bath Towel - White",
    image: "https://images.unsplash.com/photo-1600369671236-e74531c602de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
    price: 3500,
    color: "White",
    category: "bath"
  },
  {
    id: "5",
    name: "Honeycomb Bath Towel - Navy",
    image: "https://images.unsplash.com/photo-1652464179901-35d6fb00bc97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvd2Vsc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 3500,
    color: "Navy",
    category: "bath"
  },
  {
    id: "6",
    name: "Waffle Hand Towel Set - Beige",
    image: "https://images.unsplash.com/photo-1583771376798-4a695725d446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww",
    price: 1750,
    color: "Beige",
    category: "hand"
  },
  {
    id: "7",
    name: "Family Bundle Pack",
    image: "https://images.unsplash.com/photo-1648570000562-4cf58ec534f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvd2VscyUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
    price: 7999,
    description: "4 Bath Towels + 4 Hand Towels",
    category: "bundle"
  },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("featured");

  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "featured") return 0;
    if (activeSort === "price-low") return a.price - b.price;
    if (activeSort === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-12">
          <div className="absolute inset-0 bg-luxe-navy/30 z-10"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600369671236-e74531c602de?w=1000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww" 
              alt="DRAPE&LUXE towel collection"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4">Our Collection</h1>
              <p className="font-lato text-xl md:text-2xl max-w-2xl">
                Premium honeycomb waffle towels crafted for ultimate comfort
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              <button 
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  activeCategory === "all" ? "bg-luxe-navy text-white" : "bg-luxe-beige/50 text-luxe-navy hover:bg-luxe-beige"
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All Products
              </button>
              <button 
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  activeCategory === "bath" ? "bg-luxe-navy text-white" : "bg-luxe-beige/50 text-luxe-navy hover:bg-luxe-beige"
                }`}
                onClick={() => setActiveCategory("bath")}
              >
                Bath Towels
              </button>
              <button 
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  activeCategory === "hand" ? "bg-luxe-navy text-white" : "bg-luxe-beige/50 text-luxe-navy hover:bg-luxe-beige"
                }`}
                onClick={() => setActiveCategory("hand")}
              >
                Hand Towels
              </button>
              <button 
                className={`px-4 py-2 rounded-full font-medium text-sm ${
                  activeCategory === "bundle" ? "bg-luxe-navy text-white" : "bg-luxe-beige/50 text-luxe-navy hover:bg-luxe-beige"
                }`}
                onClick={() => setActiveCategory("bundle")}
              >
                Bundles
              </button>
            </div>
            
            <div className="flex items-center">
              <span className="mr-3 text-sm text-luxe-navy">Sort by:</span>
              <select
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="border border-luxe-beige rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sortedProducts.map((product, index) => (
              <FadeInOnScroll key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </FadeInOnScroll>
            ))}
          </div>
          
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-luxe-navy text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Feature Section */}
        <section className="py-20 bg-luxe-cream/50 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <UnfoldingTowel image="https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww" />
              </div>
              
              <div className="w-full md:w-1/2">
                <FadeInOnScroll>
                  <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-luxe-navy mb-6">
                    Why Choose Our Waffle Towels?
                  </h2>
                  
                  <p className="text-luxe-navy/80 mb-6">
                    Our premium honeycomb waffle towels are designed with both luxury and functionality in mind. The unique honeycomb texture creates more surface area for superior absorbency while remaining lightweight and quick-drying.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-2 mr-4 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxe-navy mb-1">Superior Absorbency</h3>
                        <p className="text-luxe-navy/80">Absorbs moisture quickly while staying soft and plush against your skin.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-2 mr-4 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxe-navy mb-1">Quick-Drying</h3>
                        <p className="text-luxe-navy/80">Our waffle weave allows for faster drying, reducing the risk of mildew and odors.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-2 mr-4 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxe-navy mb-1">Luxurious Comfort</h3>
                        <p className="text-luxe-navy/80">100% premium cotton that gets softer with each wash for a spa-like experience.</p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="#bundles" 
                      className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-gold"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory("bundle");
                        window.scrollTo({ top: 500, behavior: "smooth" });
                      }}
                    >
                      Shop Our Bundles
                    </a>
                  </motion.div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
