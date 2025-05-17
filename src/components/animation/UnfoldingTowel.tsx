
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface UnfoldingTowelProps {
  image: string;
  alt?: string;
}

export const UnfoldingTowel = ({ image, alt = "DRAPE&LUXE towel" }: UnfoldingTowelProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scaleY: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 15,
        },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ scaleY: 0.1, opacity: 0.5 }}
        animate={controls}
        style={{ originY: 0 }}
      >
        <img src={image} alt={alt} className="w-full h-auto object-cover" />
      </motion.div>
    </div>
  );
};
