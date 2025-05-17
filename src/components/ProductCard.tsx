
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="group relative overflow-hidden bg-white rounded-lg shadow-sm"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square relative overflow-hidden bg-luxe-cream"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </motion.div>
      </Link>

      <div className="p-4">
        <Link
          to={`/product/${product.id}`}
          className="block font-playfair font-medium text-lg text-luxe-navy hoverable-text mb-1"
        >
          {product.name}
        </Link>
        <p className="font-lato text-lg font-semibold text-luxe-navy">
          ₹{product.price.toLocaleString()}
        </p>

        {showAddToCart && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full bg-luxe-navy text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors hover:bg-luxe-gold"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
