
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FallingTowelProps {
  image: string;
  delay?: number;
  index?: number;
}

export const FallingTowel = ({ image, delay = 0, index = 0 }: FallingTowelProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Short delay before animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ 
        y: "-100%", 
        rotate: index % 2 === 0 ? 5 : -5,
        opacity: 0 
      }}
      animate={isVisible ? { 
        y: 0, 
        rotate: 0,
        opacity: 1 
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 15,
        delay: delay,
        mass: 0.8
      }}
    >
      <img
        src={image}
        alt="DRAPE&LUXE towel"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

interface GroupFallingTowelsProps {
  images: string[];
}

export const GroupFallingTowels = ({ images }: GroupFallingTowelsProps) => {
  return (
    <div className="relative grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 justify-items-center">
      {images.map((image, index) => (
        <FallingTowel 
          key={index} 
          image={image} 
          delay={index * 0.2} 
          index={index}
        />
      ))}
    </div>
  );
};
