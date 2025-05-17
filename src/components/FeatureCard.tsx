
import { ReactNode } from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./animation/FadeInOnScroll";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <FadeInOnScroll delay={delay}>
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-sm border border-luxe-beige/30"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center mb-4">
          <motion.div
            className="w-16 h-16 bg-luxe-cream rounded-full flex items-center justify-center text-luxe-gold"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        </div>
        <h3 className="text-center font-playfair text-xl font-semibold text-luxe-navy mb-3">{title}</h3>
        <p className="text-center text-luxe-navy/80">{description}</p>
      </motion.div>
    </FadeInOnScroll>
  );
};

export default FeatureCard;
