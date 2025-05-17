
import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInOnScroll = ({ children, delay = 0, className = "" }: FadeInOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          ease: "easeOut",
          delay,
        },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
