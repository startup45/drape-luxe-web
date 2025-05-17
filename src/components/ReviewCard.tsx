
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  content: string;
}

const ReviewCard = ({ name, rating, date, content }: ReviewCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? "#D4B78F" : "none"}
            className={i < rating ? "text-luxe-gold" : "text-gray-300"}
          />
        ))}
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-lato font-semibold text-luxe-navy">{name}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      
      <p className="text-luxe-navy/80">{content}</p>
    </motion.div>
  );
};

export default ReviewCard;
