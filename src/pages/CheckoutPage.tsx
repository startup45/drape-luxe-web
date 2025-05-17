
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, Smartphone, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";
import { toast } from "sonner";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  sameAsBilling: boolean;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingPincode?: string;
  paymentMethod: "card" | "upi" | "cod";
}

const CheckoutPage = () => {
  const { cartItems, subtotal, shipping, tax, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    sameAsBilling: true,
    paymentMethod: "card"
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      navigate("/products");
      return;
    }
    
    // Validate form
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || 
        !formData.city || !formData.state || !formData.pincode || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      
      // Generate random order number
      const orderNumber = `DL${Math.floor(100000 + Math.random() * 900000)}`;
      
      // Clear cart and redirect to success page
      clearCart();
      navigate(`/payment-success?order=${orderNumber}`);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-luxe-navy mb-12 text-center">
            Checkout
          </h1>
          
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Checkout form */}
              <div className="w-full lg:w-2/3">
                <form onSubmit={handleSubmit}>
                  {/* Contact information */}
                  <FadeInOnScroll>
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                      <h2 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                        Contact Information
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="email" className="block text-luxe-navy mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-luxe-navy mb-2">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="lastName" className="block text-luxe-navy mb-2">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-luxe-navy mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                  
                  {/* Shipping address */}
                  <FadeInOnScroll delay={0.1}>
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                      <h2 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                        Shipping Address
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="address" className="block text-luxe-navy mb-2">
                            Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="apartment" className="block text-luxe-navy mb-2">
                            Apartment, Suite, etc. (optional)
                          </label>
                          <input
                            type="text"
                            id="apartment"
                            name="apartment"
                            value={formData.apartment || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label htmlFor="city" className="block text-luxe-navy mb-2">
                              City <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="state" className="block text-luxe-navy mb-2">
                              State <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                            >
                              <option value="">Select State</option>
                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="West Bengal">West Bengal</option>
                              {/* Add more states */}
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="pincode" className="block text-luxe-navy mb-2">
                              PIN Code <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="pincode"
                              name="pincode"
                              value={formData.pincode}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="sameAsBilling"
                            name="sameAsBilling"
                            checked={formData.sameAsBilling}
                            onChange={handleInputChange}
                            className="mr-2 h-4 w-4 text-luxe-gold focus:ring-luxe-gold/50"
                          />
                          <label htmlFor="sameAsBilling" className="text-luxe-navy">
                            Billing address is the same as shipping address
                          </label>
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                  
                  {/* Payment */}
                  <FadeInOnScroll delay={0.2}>
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                      <h2 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                        Payment Method
                      </h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="flex items-center p-4 border border-luxe-beige rounded-md cursor-pointer hover:bg-luxe-cream/30 transition-colors">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={formData.paymentMethod === "card"}
                              onChange={handleInputChange}
                              className="mr-2 h-4 w-4 text-luxe-gold focus:ring-luxe-gold/50"
                            />
                            <CreditCard size={20} className="mr-2 text-luxe-navy" />
                            <span className="text-luxe-navy">Credit / Debit Card</span>
                          </label>
                        </div>
                        
                        <div>
                          <label className="flex items-center p-4 border border-luxe-beige rounded-md cursor-pointer hover:bg-luxe-cream/30 transition-colors">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="upi"
                              checked={formData.paymentMethod === "upi"}
                              onChange={handleInputChange}
                              className="mr-2 h-4 w-4 text-luxe-gold focus:ring-luxe-gold/50"
                            />
                            <Smartphone size={20} className="mr-2 text-luxe-navy" />
                            <span className="text-luxe-navy">UPI / Wallet</span>
                          </label>
                        </div>
                        
                        <div>
                          <label className="flex items-center p-4 border border-luxe-beige rounded-md cursor-pointer hover:bg-luxe-cream/30 transition-colors">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="cod"
                              checked={formData.paymentMethod === "cod"}
                              onChange={handleInputChange}
                              className="mr-2 h-4 w-4 text-luxe-gold focus:ring-luxe-gold/50"
                            />
                            <Check size={20} className="mr-2 text-luxe-navy" />
                            <span className="text-luxe-navy">Cash on Delivery</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </FadeInOnScroll>
                  
                  <div className="flex items-center justify-between">
                    <Link to="/cart" className="flex items-center text-luxe-navy hover:text-luxe-gold transition-colors">
                      <ChevronLeft size={16} className="mr-1" />
                      <span>Return to Cart</span>
                    </Link>
                    
                    <motion.button
                      type="submit"
                      className="px-8 py-3 bg-luxe-gold text-white font-medium rounded-md transition-colors hover:bg-luxe-gold/90 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Place Order"
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
              
              {/* Order summary */}
              <div className="w-full lg:w-1/3">
                <FadeInOnScroll>
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
                    <h2 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                      Order Summary
                    </h2>
                    
                    <div className="max-h-80 overflow-y-auto mb-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                          <div className="w-16 h-16 bg-luxe-cream rounded overflow-hidden mr-4 relative">
                            <div className="absolute top-0 right-0 bg-luxe-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                              {item.quantity}
                            </div>
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium text-luxe-navy text-sm">{item.name}</h3>
                            {item.color && <p className="text-xs text-luxe-navy/70">{item.color}</p>}
                            {item.size && <p className="text-xs text-luxe-navy/70">{item.size}</p>}
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-luxe-navy">₹{(item.price * item.quantity).toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 pb-6 border-b border-gray-200">
                      <div className="flex justify-between">
                        <span className="text-luxe-navy">Subtotal</span>
                        <span className="font-medium text-luxe-navy">₹{subtotal.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-luxe-navy">Shipping</span>
                        <span className="font-medium text-luxe-navy">
                          {shipping === 0 ? "Free" : `₹${shipping}`}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-luxe-navy">Tax (GST)</span>
                        <span className="font-medium text-luxe-navy">₹{tax.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-luxe-navy">Total</span>
                        <span className="text-xl font-bold text-luxe-navy">₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-sm text-luxe-navy/70">
                      <p>By placing your order, you agree to our <Link to="/terms-of-service" className="text-luxe-gold underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-luxe-gold underline">Privacy Policy</Link>.</p>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-sm mx-auto mb-8">
                <UnfoldingTowel image="https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww" />
              </div>
              <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-4">Your cart is empty</h2>
              <p className="text-luxe-navy/80 mb-8">
                You need to add items to your cart before checkout.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/products" 
                  className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-gold"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
