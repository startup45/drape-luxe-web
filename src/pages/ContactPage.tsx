
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { Phone, Mail, MapPin, MessageSquare, Truck, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl text-luxe-navy mb-4">
                Get in Touch
              </h1>
              <p className="text-luxe-navy/80 text-xl max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </FadeInOnScroll>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact form */}
            <FadeInOnScroll>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-luxe-navy mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-luxe-navy mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-luxe-navy mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Order Question">Order Question</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Returns & Exchanges">Returns & Exchanges</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-luxe-navy mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-luxe-navy text-white font-medium rounded-md transition-colors hover:bg-luxe-gold disabled:bg-gray-400"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </FadeInOnScroll>
            
            {/* Contact info */}
            <FadeInOnScroll delay={0.2}>
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                  <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-3 mr-4">
                        <Phone size={20} className="text-luxe-navy" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxe-navy mb-1">Phone</h3>
                        <p className="text-luxe-navy/70">+91-9876543210</p>
                        <p className="text-luxe-navy/70 text-sm mt-1">Mon-Fri, 10am-6pm IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-3 mr-4">
                        <Mail size={20} className="text-luxe-navy" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxe-navy mb-1">Email</h3>
                        <p className="text-luxe-navy/70">care@drapeluxe.com</p>
                        <p className="text-luxe-navy/70 text-sm mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-3 mr-4">
                        <MapPin size={20} className="text-luxe-navy" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxe-navy mb-1">Address</h3>
                        <p className="text-luxe-navy/70">
                          DRAPE&LUXE Textiles Pvt. Ltd.<br />
                          123 Luxury Lane, Textile Hub<br />
                          Mumbai, Maharashtra 400001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-3 mr-4">
                        <MessageSquare size={20} className="text-luxe-navy" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxe-navy mb-1">WhatsApp</h3>
                        <p className="text-luxe-navy/70">+91-9876543210</p>
                        <p className="text-luxe-navy/70 text-sm mt-1">Chat with our customer service team</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-luxe-cream/50 rounded-lg p-8">
                  <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-6">
                    Policies
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-3 mr-4">
                        <Truck size={20} className="text-luxe-navy" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxe-navy mb-1">Shipping</h3>
                        <p className="text-luxe-navy/70">
                          Free shipping on orders over ₹4,000. Standard delivery in 5-7 days, express delivery in 2-3 days.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-luxe-gold/20 rounded-full p-3 mr-4">
                        <RefreshCw size={20} className="text-luxe-navy" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxe-navy mb-1">Returns</h3>
                        <p className="text-luxe-navy/70">
                          30-day hassle-free returns. Items must be unused and in original packaging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
