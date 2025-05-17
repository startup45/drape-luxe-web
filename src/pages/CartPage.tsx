
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { FallingTowel } from "@/components/animation/FallingTowel";
import { toast } from "sonner";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, shipping, tax, total } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const navigate = useNavigate();

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (couponCode.toUpperCase() === "WELCOME10") {
      if (couponApplied) {
        toast.error("Coupon already applied");
      } else {
        setCouponApplied(true);
        toast.success("Coupon WELCOME10 applied! 10% off your order.");
      }
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const proceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-luxe-navy mb-12 text-center">
            Your Cart
          </h1>
          
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart items */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-6 gap-4 p-4 bg-luxe-beige/30 border-b border-luxe-beige">
                    <div className="col-span-3">
                      <span className="font-medium text-luxe-navy">Product</span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-luxe-navy">Price</span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-luxe-navy">Quantity</span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-luxe-navy">Total</span>
                    </div>
                  </div>
                  
                  {cartItems.map((item, index) => (
                    <FadeInOnScroll key={item.id} delay={index * 0.1}>
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 border-b border-gray-100 items-center">
                        {/* Product info - mobile */}
                        <div className="md:hidden flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-medium text-luxe-navy">{item.name}</h3>
                              {item.size && <p className="text-sm text-luxe-navy/70">{item.size}</p>}
                              {item.color && <p className="text-sm text-luxe-navy/70">{item.color}</p>}
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        
                        {/* Product info - desktop */}
                        <div className="hidden md:flex col-span-3 items-center">
                          <div className="relative w-20 h-20 mr-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium text-luxe-navy">{item.name}</h3>
                            {item.size && <p className="text-sm text-luxe-navy/70">{item.size}</p>}
                            {item.color && <p className="text-sm text-luxe-navy/70">{item.color}</p>}
                          </div>
                        </div>
                        
                        {/* Price - mobile */}
                        <div className="md:hidden flex justify-between items-center mt-2">
                          <span className="font-medium">Price:</span>
                          <span>₹{item.price.toLocaleString()}</span>
                        </div>
                        
                        {/* Price - desktop */}
                        <div className="hidden md:block text-center">
                          <span>₹{item.price.toLocaleString()}</span>
                        </div>
                        
                        {/* Quantity - mobile */}
                        <div className="md:hidden flex justify-between items-center mt-2">
                          <span className="font-medium">Quantity:</span>
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="mx-3 w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Quantity - desktop */}
                        <div className="hidden md:flex justify-center items-center">
                          <div className="flex items-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="mx-3 w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Total - mobile */}
                        <div className="md:hidden flex justify-between items-center mt-2">
                          <span className="font-medium">Total:</span>
                          <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                        
                        {/* Total & Remove - desktop */}
                        <div className="hidden md:flex items-center justify-between">
                          <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors ml-4"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </FadeInOnScroll>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/products" className="text-luxe-navy hover:text-luxe-gold transition-colors flex items-center">
                    <ChevronRight size={16} className="transform rotate-180 mr-1" />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
              
              {/* Cart summary */}
              <div className="w-full lg:w-1/3">
                <FadeInOnScroll>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                      Cart Summary
                    </h2>
                    
                    <div className="space-y-4 pb-6 border-b border-gray-200">
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
                      
                      {couponApplied && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount (WELCOME10)</span>
                          <span className="font-medium">-₹{(subtotal * 0.1).toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="py-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-luxe-navy">Total</span>
                        <span className="text-xl font-bold text-luxe-navy">
                          ₹{couponApplied 
                            ? (total - subtotal * 0.1).toLocaleString() 
                            : total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <form onSubmit={handleCouponSubmit} className="mt-4 mb-6">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-grow px-4 py-2 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                        />
                        <motion.button
                          type="submit"
                          className="px-4 py-2 bg-luxe-navy text-white rounded-md"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={couponApplied}
                        >
                          {couponApplied ? "Applied" : "Apply"}
                        </motion.button>
                      </div>
                      <p className="text-sm text-luxe-navy/70 mt-2">
                        Try code "WELCOME10" for 10% off
                      </p>
                    </form>
                    
                    <motion.button
                      onClick={proceedToCheckout}
                      className="w-full py-3 bg-luxe-gold text-white font-medium rounded-md transition-colors hover:bg-luxe-gold/90"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Proceed to Checkout
                    </motion.button>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-sm mx-auto mb-8">
                <FallingTowel image="https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww" />
              </div>
              <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-4">Your cart is empty</h2>
              <p className="text-luxe-navy/80 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/products" 
                  className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-gold"
                >
                  Start Shopping
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

export default CartPage;
