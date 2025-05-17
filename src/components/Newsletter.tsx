
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Thank you for subscribing! Use code WELCOME10 for 10% off your first order.");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-luxe-cream py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-luxe-navy mb-4">
            Join Our Community
          </h2>
          <p className="text-luxe-navy/80 mb-8">
            Subscribe to receive exclusive offers, early access to new products, and styling tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-md border border-luxe-beige focus:outline-none focus:ring-2 focus:ring-luxe-gold/50"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-luxe-navy text-white rounded-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </form>
          <p className="text-sm text-luxe-navy/60 mt-4">
            Get 10% off your first order when you sign up
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
