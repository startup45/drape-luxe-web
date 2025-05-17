
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";
import { Package, Truck, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface OrderDetails {
  orderNumber: string;
  orderDate: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderTrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderNumber || !email) {
      toast.error("Please enter both order number and email");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call to fetch order details
    setTimeout(() => {
      // For demo purposes, any order number that starts with "DL" will return mock data
      if (orderNumber.startsWith("DL")) {
        const mockOrderDetails: OrderDetails = {
          orderNumber: orderNumber,
          orderDate: "May 15, 2025",
          status: "shipped",
          trackingNumber: "IND123456789",
          carrier: "BlueDart",
          estimatedDelivery: "May 20, 2025",
          items: [
            {
              name: "Honeycomb Waffle Bath Towel - White",
              quantity: 2,
              price: 3500,
              image: "https://images.unsplash.com/photo-1600369671236-e74531c602de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww"
            },
            {
              name: "Waffle Hand Towel Set - Beige",
              quantity: 1,
              price: 1750,
              image: "https://images.unsplash.com/photo-1583771376798-4a695725d446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww"
            }
          ],
          shippingAddress: {
            name: "Jane Smith",
            address: "123 Luxury Lane, Apartment 4B",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400001"
          },
          subtotal: 8750,
          shipping: 0,
          tax: 1575,
          total: 10325
        };
        
        setOrderDetails(mockOrderDetails);
        setShowDetails(true);
        toast.success("Order found!");
      } else {
        toast.error("No order found with these details");
        setOrderDetails(null);
        setShowDetails(false);
      }
      
      setIsSearching(false);
    }, 1500);
  };
  
  const getStatusSteps = () => {
    const steps = [
      { label: "Order Confirmed", icon: <CheckCircle size={24} />, completed: true },
      { 
        label: "Processing", 
        icon: <Package size={24} />, 
        completed: orderDetails?.status !== "cancelled" && 
                 ["processing", "shipped", "delivered"].includes(orderDetails?.status || "")
      },
      { 
        label: "Shipped", 
        icon: <Truck size={24} />, 
        completed: orderDetails?.status !== "cancelled" && 
                 ["shipped", "delivered"].includes(orderDetails?.status || "")
      },
      { 
        label: "Delivered", 
        icon: <CheckCircle size={24} />, 
        completed: orderDetails?.status === "delivered" 
      }
    ];
    
    if (orderDetails?.status === "cancelled") {
      return [
        { label: "Order Cancelled", icon: <AlertCircle size={24} />, completed: true }
      ];
    }
    
    return steps;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl text-luxe-navy mb-4">
                Track Your Order
              </h1>
              <p className="text-luxe-navy/80 text-xl max-w-2xl mx-auto">
                Enter your order details to check the current status
              </p>
            </div>
          </FadeInOnScroll>
          
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="orderNumber" className="block text-luxe-navy mb-2">
                        Order Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="orderNumber"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        placeholder="e.g., DL123456"
                        required
                        className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-luxe-navy mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email used for order"
                        required
                        className="w-full px-4 py-3 border border-luxe-beige rounded-md focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-luxe-navy text-white font-medium rounded-md transition-colors hover:bg-luxe-gold disabled:bg-gray-400"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSearching}
                    >
                      {isSearching ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Searching...
                        </span>
                      ) : (
                        "Track Order"
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </FadeInOnScroll>
            
            {orderDetails && showDetails && (
              <FadeInOnScroll delay={0.2}>
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border-t-4 border-luxe-gold relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-2 bg-luxe-gold text-white text-sm font-medium">
                    {orderDetails.status === "processing" && "Processing"}
                    {orderDetails.status === "shipped" && "Shipped"}
                    {orderDetails.status === "delivered" && "Delivered"}
                    {orderDetails.status === "cancelled" && "Cancelled"}
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div>
                      <p className="text-luxe-navy/70 mb-1">Order Number</p>
                      <p className="font-medium text-xl text-luxe-navy">{orderDetails.orderNumber}</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <p className="text-luxe-navy/70 mb-1">Order Date</p>
                      <p className="font-medium text-luxe-navy">{orderDetails.orderDate}</p>
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <h3 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                      Order Status
                    </h3>
                    
                    <div className="relative">
                      {/* Progress line */}
                      {orderDetails.status !== "cancelled" && (
                        <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gray-200">
                          <div 
                            className="h-full bg-green-500"
                            style={{ 
                              width: orderDetails.status === "processing" ? "25%" :
                                     orderDetails.status === "shipped" ? "75%" :
                                     orderDetails.status === "delivered" ? "100%" : "0%" 
                            }}
                          ></div>
                        </div>
                      )}
                      
                      {/* Status steps */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {getStatusSteps().map((step, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 relative z-10 ${
                                step.completed 
                                  ? "bg-green-500 text-white" 
                                  : "bg-gray-200 text-gray-500"
                              }`}
                            >
                              {step.icon}
                            </div>
                            <h4 className="font-medium text-luxe-navy mb-1">{step.label}</h4>
                            {step.label === "Shipped" && orderDetails.status === "shipped" && (
                              <p className="text-sm text-luxe-navy/70">
                                {orderDetails.estimatedDelivery}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {orderDetails.status === "shipped" && (
                    <div className="mb-12 p-6 bg-luxe-cream/50 rounded-lg">
                      <h3 className="font-playfair font-semibold text-xl text-luxe-navy mb-4">
                        Shipping Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-luxe-navy/70 mb-1">Carrier</p>
                          <p className="font-medium text-luxe-navy">{orderDetails.carrier}</p>
                        </div>
                        
                        <div>
                          <p className="text-luxe-navy/70 mb-1">Tracking Number</p>
                          <p className="font-medium text-luxe-navy">{orderDetails.trackingNumber}</p>
                        </div>
                        
                        <div>
                          <p className="text-luxe-navy/70 mb-1">Estimated Delivery</p>
                          <p className="font-medium text-luxe-navy">{orderDetails.estimatedDelivery}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-12">
                    <h3 className="font-playfair font-semibold text-xl text-luxe-navy mb-6">
                      Order Details
                    </h3>
                    
                    <div className="space-y-6">
                      {orderDetails.items.map((item, index) => (
                        <div key={index} className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <div className="w-16 h-16 bg-luxe-cream rounded overflow-hidden mr-4">
                            <UnfoldingTowel image={item.image} alt={item.name} />
                          </div>
                          
                          <div className="flex-grow">
                            <h4 className="font-medium text-luxe-navy">{item.name}</h4>
                            <p className="text-sm text-luxe-navy/70">Quantity: {item.quantity}</p>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-medium text-luxe-navy">₹{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-luxe-navy mb-4">
                        Shipping Address
                      </h3>
                      
                      <div className="bg-luxe-cream/30 p-4 rounded-lg">
                        <p className="font-medium text-luxe-navy">{orderDetails.shippingAddress.name}</p>
                        <p className="text-luxe-navy/70">{orderDetails.shippingAddress.address}</p>
                        <p className="text-luxe-navy/70">
                          {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.pincode}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-luxe-navy mb-4">
                        Order Summary
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-luxe-navy/70">Subtotal</span>
                          <span className="text-luxe-navy">₹{orderDetails.subtotal.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-luxe-navy/70">Shipping</span>
                          <span className="text-luxe-navy">
                            {orderDetails.shipping === 0 ? "Free" : `₹${orderDetails.shipping.toLocaleString()}`}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-luxe-navy/70">Tax (GST)</span>
                          <span className="text-luxe-navy">₹{orderDetails.tax.toLocaleString()}</span>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-2 mt-2">
                          <div className="flex justify-between font-medium">
                            <span className="text-luxe-navy">Total</span>
                            <span className="text-luxe-navy">₹{orderDetails.total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-luxe-navy/70 mb-6">
                      Need help with your order? <a href="/contact" className="text-luxe-gold underline">Contact our support team</a>
                    </p>
                    
                    <motion.div
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a 
                        href="/products" 
                        className="inline-block bg-luxe-navy text-white font-lato font-medium px-8 py-3 rounded-md transition-colors hover:bg-luxe-gold"
                      >
                        Continue Shopping
                      </a>
                    </motion.div>
                  </div>
                </div>
              </FadeInOnScroll>
            )}
            
            <FadeInOnScroll delay={0.3}>
              <div className="bg-luxe-cream/50 rounded-lg p-8">
                <h2 className="font-playfair font-semibold text-2xl text-luxe-navy mb-6 text-center">
                  Tracking Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-luxe-navy mb-2">How to Track Your Order</h3>
                    <p className="text-luxe-navy/80">
                      Enter your order number and the email address used during checkout to track your package. Your order number can be found in the order confirmation email sent to you after purchase.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-luxe-navy mb-2">Order Status Meanings</h3>
                    <ul className="space-y-2 text-luxe-navy/80">
                      <li><span className="font-medium">Processing:</span> Your order has been confirmed and is being prepared for shipping.</li>
                      <li><span className="font-medium">Shipped:</span> Your order is on its way to you. A tracking number has been provided.</li>
                      <li><span className="font-medium">Delivered:</span> Your order has been delivered to the shipping address.</li>
                      <li><span className="font-medium">Cancelled:</span> Your order has been cancelled.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-luxe-navy mb-2">Need Help?</h3>
                    <p className="text-luxe-navy/80">
                      If you need assistance with your order, please <a href="/contact" className="text-luxe-gold underline">contact our customer service team</a> or call us at +91-9876543210.
                    </p>
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

export default OrderTrackingPage;
