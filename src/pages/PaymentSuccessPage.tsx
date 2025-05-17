
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Package, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order") || "DL123456";
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  
  useEffect(() => {
    // Calculate estimated delivery date (5-7 days from now)
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 5 + Math.floor(Math.random() * 3)); // 5-7 days
    
    const options: Intl.DateTimeFormatOptions = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };
    setEstimatedDelivery(deliveryDate.toLocaleDateString("en-IN", options));
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              
              <h1 className="font-playfair font-bold text-3xl md:text-4xl text-luxe-navy mb-4">
                Thank You for Your Order!
              </h1>
              
              <p className="text-luxe-navy/80 text-lg">
                Your order has been received and is now being processed.
              </p>
            </div>
          </FadeInOnScroll>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-12">
            <FadeInOnScroll delay={0.2}>
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-10 border-b border-gray-200">
                <div>
                  <p className="text-luxe-navy/70 mb-1">Order Number</p>
                  <p className="font-medium text-xl text-luxe-navy">{orderNumber}</p>
                </div>
                
                <div className="mt-6 md:mt-0">
                  <p className="text-luxe-navy/70 mb-1">Estimated Delivery</p>
                  <p className="font-medium text-xl text-luxe-navy">{estimatedDelivery}</p>
                </div>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={0.3}>
              <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-8 text-center">
                Track Your Order
              </h2>
              
              <div className="relative">
                {/* Progress line */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gray-200">
                  <div className="w-1/4 h-full bg-green-500"></div>
                </div>
                
                {/* Order status steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 relative z-10">
                      <CheckCircle size={24} className="text-white" />
                    </div>
                    <h3 className="font-medium text-luxe-navy mb-1">Order Confirmed</h3>
                    <p className="text-sm text-luxe-navy/70">
                      {new Date().toLocaleDateString("en-IN")}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4 relative z-10">
                      <Package size={24} className="text-gray-500" />
                    </div>
                    <h3 className="font-medium text-luxe-navy mb-1">Processing</h3>
                    <p className="text-sm text-luxe-navy/70">In progress</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4 relative z-10">
                      <Truck size={24} className="text-gray-500" />
                    </div>
                    <h3 className="font-medium text-luxe-navy mb-1">Shipped</h3>
                    <p className="text-sm text-luxe-navy/70">Coming soon</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4 relative z-10">
                      <CheckCircle size={24} className="text-gray-500" />
                    </div>
                    <h3 className="font-medium text-luxe-navy mb-1">Delivered</h3>
                    <p className="text-sm text-luxe-navy/70">{estimatedDelivery}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-luxe-navy/70 mb-6">
                  You will receive an email confirmation with your order details and tracking information shortly.
                </p>
                
                <Link 
                  to="/track-order" 
                  className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-gold mr-4"
                >
                  Track Your Order
                </Link>
                
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/" 
                    className="inline-block bg-white text-luxe-navy border border-luxe-navy font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-cream"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              </div>
            </FadeInOnScroll>
          </div>
          
          <FadeInOnScroll delay={0.4}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-8 text-center">
                You Might Also Like
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/product/4" className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <UnfoldingTowel image="https://images.unsplash.com/photo-1600369671236-e74531c602de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-luxe-navy">Honeycomb Bath Towel - White</h3>
                    <p className="font-semibold text-luxe-navy mt-2">₹3,500</p>
                  </div>
                </Link>
                
                <Link to="/product/6" className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <UnfoldingTowel image="https://images.unsplash.com/photo-1583771376798-4a695725d446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-luxe-navy">Waffle Hand Towel Set - Beige</h3>
                    <p className="font-semibold text-luxe-navy mt-2">₹1,750</p>
                  </div>
                </Link>
                
                <Link to="/product/7" className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <UnfoldingTowel image="https://images.unsplash.com/photo-1648570000562-4cf58ec534f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvd2VscyUyMHNldHxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-luxe-navy">Family Bundle Pack</h3>
                    <p className="font-semibold text-luxe-navy mt-2">₹7,999</p>
                  </div>
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
