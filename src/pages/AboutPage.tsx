
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";
import Newsletter from "@/components/Newsletter";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-20">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden mb-20">
          <div className="absolute inset-0 bg-luxe-navy/40 z-10"></div>
          <div className="absolute inset-0">
            <img 
              src="https://i.pinimg.com/736x/2a/7a/69/2a7a69f0c7a40c1a88530ea1ffeb9477.jpg"
              alt="Spa bathroom with DRAPE&LUXE towels"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Our Story</h1>
              <p className="font-lato text-xl md:text-2xl max-w-3xl mx-auto px-4">
                Elevating everyday moments through luxurious simplicity
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4">
          {/* Our Brand Story */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <FadeInOnScroll>
                <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-luxe-navy mb-10 text-center">
                  The DRAPE&LUXE Journey
                </h2>
                
                <div className="prose prose-lg mx-auto text-luxe-navy/90">
                  <p>
                    DRAPE&LUXE was born from a simple desire: to bring everyday luxury into your home. Our journey began when our founder, after years of searching for the perfect balance of premium quality and practical design in bath linens, decided to create it herself.
                  </p>
                  
                  <p>
                    Inspired by the minimalist spas of Japan and the luxury hotels of Europe, we set out to craft towels that would transform the daily ritual of bathing into a moment of indulgence. The result is our signature honeycomb waffle towels—lightweight yet absorbent, quick-drying yet plush, and elegantly simple in design.
                  </p>
                  
                  <p>
                    What started as a small collection has grown into a brand committed to elevating your everyday moments through thoughtful, beautiful essentials. Each DRAPE&LUXE product is designed with intention, crafted from premium materials, and created to last.
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <UnfoldingTowel 
                  image="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG93ZWwlMjBmYWN0b3J5fGVufDB8fDB8fHww" 
                  alt="DRAPE&LUXE towel manufacturing"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <FadeInOnScroll>
                  <h2 className="font-playfair font-semibold text-3xl text-luxe-navy mb-6">
                    Our Values
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-playfair text-xl font-medium text-luxe-navy mb-2">Quality Without Compromise</h3>
                      <p className="text-luxe-navy/80">
                        We believe in creating products that stand the test of time. Our 100% premium cotton towels are meticulously crafted to maintain their softness and absorbency wash after wash.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-playfair text-xl font-medium text-luxe-navy mb-2">Mindful Design</h3>
                      <p className="text-luxe-navy/80">
                        Every detail matters. From the unique honeycomb texture to the minimalist color palette, each element of our towels is thoughtfully designed to enhance your bathing experience.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-playfair text-xl font-medium text-luxe-navy mb-2">Sustainability Focus</h3>
                      <p className="text-luxe-navy/80">
                        We're committed to reducing our environmental footprint by sourcing eco-friendly cotton, minimizing waste in our production process, and designing products that last longer.
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          </section>
          
          {/* Our Promise */}
          <section className="mb-20 bg-luxe-cream/50 py-20 rounded-lg">
            <div className="max-w-4xl mx-auto px-4">
              <FadeInOnScroll>
                <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-luxe-navy mb-10 text-center">
                  Our Promise to You
                </h2>
                
                <div className="text-center mb-12">
                  <p className="text-luxe-navy/80 text-lg">
                    When you choose DRAPE&LUXE, you're not just buying a towel—you're investing in an experience. An everyday luxury that transforms the ordinary into something special.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-16 h-16 bg-luxe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-playfair font-medium text-lg text-luxe-navy mb-2">Superior Quality</h3>
                    <p className="text-luxe-navy/70">
                      Premium materials and expert craftsmanship in every product.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-16 h-16 bg-luxe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2A3C55" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-playfair font-medium text-lg text-luxe-navy mb-2">Timely Delivery</h3>
                    <p className="text-luxe-navy/70">
                      Fast shipping and careful packaging for a seamless experience.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-16 h-16 bg-luxe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 15S3 16 4 17C5 18 6 17 6 17M2 9V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V9M22 12V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V12H22Z" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-playfair font-medium text-lg text-luxe-navy mb-2">Satisfaction Guarantee</h3>
                    <p className="text-luxe-navy/70">
                      30-day hassle-free returns if you're not completely delighted.
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <FadeInOnScroll>
                <h2 className="font-playfair font-semibold text-3xl md:text-4xl text-luxe-navy mb-10 text-center">
                  The Team Behind DRAPE&LUXE
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-playfair font-medium text-xl text-luxe-navy mb-1">Priya Sharma</h3>
                    <p className="text-luxe-navy/70 mb-3">Founder & Creative Director</p>
                    <p className="text-luxe-navy/80 text-sm max-w-xs mx-auto">
                      With a background in luxury hospitality, Priya brings her passion for elevated everyday experiences to DRAPE&LUXE.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
                        alt="Head of Design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-playfair font-medium text-xl text-luxe-navy mb-1">Vikram Mehta</h3>
                    <p className="text-luxe-navy/70 mb-3">Head of Design</p>
                    <p className="text-luxe-navy/80 text-sm max-w-xs mx-auto">
                      A textile expert with over 15 years of experience, Vikram oversees the development of all DRAPE&LUXE products.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                        alt="Customer Experience Lead"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-playfair font-medium text-xl text-luxe-navy mb-1">Anjali Patel</h3>
                    <p className="text-luxe-navy/70 mb-3">Customer Experience Lead</p>
                    <p className="text-luxe-navy/80 text-sm max-w-xs mx-auto">
                      Dedicated to creating seamless shopping experiences, Anjali ensures every customer is delighted with their DRAPE&LUXE purchase.
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </section>
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
