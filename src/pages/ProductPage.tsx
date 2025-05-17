
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronDown, ChevronUp, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import ReviewCard from "@/components/ReviewCard";
import { UnfoldingTowel } from "@/components/animation/UnfoldingTowel";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

// Sample product data - would normally come from an API
const products = [
  {
    id: "1",
    name: "Honeycomb Waffle Bath Towel",
    description: "Crafted from 100% premium cotton, our ultra-soft honeycomb waffle towels are lightweight, quick-drying, and perfect for bath, gym, or travel.",
    sizes: ["Bath (30\" x 56\")"],
    colors: ["White", "Beige", "Grey", "Navy"],
    features: [
      "Ultra-soft and absorbent waffle weave",
      "Quick-drying for everyday use",
      "Lightweight and perfect for travel",
      "Machine washable and durable",
    ],
    price: 3500,
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1600369671236-e74531c602de?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aCUyMHRvd2VsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1620983941458-0a9009544aae?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhdGglMjB0b3dlbHxlbnwwfHwwfHx8MA%3D%3D",
    ]
  },
  {
    id: "2",
    name: "Waffle Hand Towel Set",
    description: "Our premium hand towel set features the same luxurious honeycomb texture as our bath towels in a convenient size for everyday use.",
    sizes: ["Hand (16\" x 28\")"],
    colors: ["White", "Beige", "Grey", "Navy"],
    features: [
      "Set of 2 matching hand towels",
      "Ultra-soft and absorbent waffle weave",
      "Quick-drying for everyday use",
      "Machine washable and durable",
    ],
    price: 1750,
    images: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1583771376798-4a695725d446?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1641202758995-e2bf61fa4355?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmQlMjB0b3dlbHxlbnwwfHwwfHx8MA%3D%3D",
    ]
  },
  {
    id: "3",
    name: "Premium Bath & Hand Towel Bundle",
    description: "The perfect combination for a complete bathroom refresh. This bundle includes one bath towel and two matching hand towels at a special bundle price.",
    sizes: ["Bundle (1 Bath + 2 Hand)"],
    colors: ["White", "Beige", "Grey", "Navy"],
    features: [
      "1 Bath towel (30\" x 56\")",
      "2 Hand towels (16\" x 28\")",
      "Save 15% with bundle pricing",
      "Same premium quality and quick-drying features",
    ],
    price: 4800,
    images: [
      "https://images.unsplash.com/photo-1607006483137-a7f625e72125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG93ZWxzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1648570000562-4cf58ec534f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvd2VscyUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
    ]
  }
];

// Sample reviews
const reviews = [
  {
    name: "Priya M.",
    rating: 5,
    date: "April 15, 2025",
    content: "These towels are incredible! So soft and absorbent, yet they dry quickly. The honeycomb texture is beautiful and feels luxurious."
  },
  {
    name: "Rahul K.",
    rating: 5,
    date: "March 22, 2025",
    content: "After using these towels for a month, I'm completely sold. They're lightweight but still absorbent, and they look elegant in my bathroom."
  },
  {
    name: "Anjali S.",
    rating: 4,
    date: "May 3, 2025",
    content: "Love the minimalist design and the quick-drying feature. Perfect for everyday use and still looks premium."
  }
];

// Sample FAQs
const faqs = [
  {
    question: "What is the towel made of?",
    answer: "Our towels are made of 100% premium cotton, specially woven in a honeycomb waffle pattern for optimal absorbency and quick drying."
  },
  {
    question: "How do I care for my towels?",
    answer: "Machine wash in cold water with similar colors. Tumble dry on low heat. Avoid using bleach or fabric softeners as they can diminish the absorbency of the towels."
  },
  {
    question: "What are the shipping options?",
    answer: "We offer Standard shipping (5-7 business days) and Express shipping (2-3 business days). Orders over ₹4,000 qualify for free standard shipping."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange."
  }
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // FAQ toggle
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Find the product based on ID
  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setMainImage(foundProduct.images[0]);
        setSelectedColor(foundProduct.colors[0]);
        setSelectedSize(foundProduct.sizes[0]);
      } else {
        navigate("/products");
        toast.error("Product not found");
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  // Handle add to cart
  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      image: mainImage,
      price: product.price,
      color: selectedColor,
      size: selectedSize
    });
  };

  // Handle buy now
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-24 h-24 bg-luxe-beige/50 rounded-full mb-4"></div>
            <div className="text-luxe-navy">Loading product...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-playfair text-luxe-navy mb-4">Product Not Found</h1>
            <p className="mb-6">We couldn't find the product you're looking for.</p>
            <Link to="/products" className="bg-luxe-navy text-white px-6 py-2 rounded">
              View All Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Product display */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            {/* Product images */}
            <div className="w-full lg:w-1/2">
              <div className="mb-4">
                <div className="overflow-hidden rounded-lg bg-white">
                  <UnfoldingTowel image={mainImage} alt={product.name} />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: string, i: number) => (
                  <motion.button
                    key={i}
                    className={`overflow-hidden rounded-lg border-2 ${mainImage === image ? 'border-luxe-gold' : 'border-transparent'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMainImage(image)}
                  >
                    <img src={image} alt={`${product.name} view ${i + 1}`} className="w-full h-20 object-cover" />
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Product info */}
            <div className="w-full lg:w-1/2">
              <FadeInOnScroll>
                <h1 className="font-playfair font-bold text-3xl md:text-4xl text-luxe-navy mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < 4.5 ? "#D4B78F" : "none"}
                        className={i < 4.5 ? "text-luxe-gold" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-luxe-navy/70">(32 reviews)</span>
                </div>
                
                <p className="text-2xl font-semibold text-luxe-navy mb-6">
                  ₹{product.price.toLocaleString()}
                </p>
                
                <p className="text-luxe-navy/80 mb-8">
                  {product.description}
                </p>
                
                {/* Size selection */}
                {product.sizes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-luxe-navy mb-2">Size</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map((size: string) => (
                        <button
                          key={size}
                          className={`px-4 py-2 border rounded-md ${
                            selectedSize === size
                              ? "border-luxe-gold bg-luxe-gold/10 text-luxe-navy"
                              : "border-gray-300 hover:border-luxe-gold"
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Color selection */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-luxe-navy mb-2">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color: string) => {
                      let bgColor;
                      switch (color) {
                        case "White": bgColor = "bg-white"; break;
                        case "Beige": bgColor = "bg-luxe-beige"; break;
                        case "Grey": bgColor = "bg-gray-400"; break;
                        case "Navy": bgColor = "bg-luxe-navy"; break;
                        default: bgColor = "bg-gray-200";
                      }
                      
                      return (
                        <button
                          key={color}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor} border ${
                            selectedColor === color
                              ? "ring-2 ring-offset-2 ring-luxe-gold"
                              : "border-gray-300 hover:border-luxe-gold"
                          }`}
                          onClick={() => setSelectedColor(color)}
                          aria-label={`Select ${color} color`}
                        >
                          {selectedColor === color && (
                            <CheckCircle
                              size={16}
                              className={color === "White" || color === "Beige" ? "text-luxe-navy" : "text-white"}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-luxe-navy mb-2">Quantity</h3>
                  <div className="flex items-center border border-gray-300 rounded w-32">
                    <button
                      className="px-3 py-1 text-gray-500 hover:text-luxe-navy"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <ChevronDown size={20} />
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val > 0) {
                          setQuantity(val);
                        }
                      }}
                      className="w-full text-center border-none focus:outline-none py-2"
                    />
                    <button
                      className="px-3 py-1 text-gray-500 hover:text-luxe-navy"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <ChevronUp size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    className="flex-1 bg-luxe-navy text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </motion.button>
                  
                  <motion.button
                    className="flex-1 bg-luxe-gold text-white py-3 px-6 rounded-md font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </motion.button>
                </div>
                
                {/* Features */}
                <div className="border-t border-gray-200 pt-6 mb-8">
                  <h3 className="font-playfair font-semibold text-xl mb-4">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-luxe-gold/20 rounded-full p-1 mr-3 mt-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#2A3C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Amazon link */}
                <div className="text-center sm:text-left">
                  <a
                    href="https://www.amazon.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-luxe-navy hover:text-luxe-gold transition-colors underline"
                  >
                    Also available on Amazon
                  </a>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="font-playfair font-semibold text-2xl md:text-3xl text-luxe-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FadeInOnScroll key={index} delay={index * 0.1}>
                  <div className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-semibold text-luxe-navy">{faq.question}</span>
                      <span>
                        {expandedFaq === index ? (
                          <ChevronUp size={20} className="text-luxe-gold" />
                        ) : (
                          <ChevronDown size={20} className="text-luxe-navy" />
                        )}
                      </span>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedFaq === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="pb-4 text-luxe-navy/80">{faq.answer}</p>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
          
          {/* Reviews Section */}
          <div>
            <h2 className="font-playfair font-semibold text-2xl md:text-3xl text-luxe-navy mb-8 text-center">
              Customer Reviews
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {reviews.map((review, index) => (
                <FadeInOnScroll key={index} delay={index * 0.2}>
                  <ReviewCard {...review} />
                </FadeInOnScroll>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/reviews" 
                className="inline-block font-lato font-medium text-luxe-navy border-b-2 border-luxe-gold pb-1 transition-colors hover:text-luxe-gold"
              >
                View All Reviews
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
