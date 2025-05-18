
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Newsletter from "@/components/Newsletter";
import { Clock, Tag, ChevronRight } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "Why Waffle Towels Are Better Than Terry",
    excerpt: "Discover the advantages of honeycomb waffle towels over traditional terry cloth - from superior absorbency to quick-drying properties.",
    image: "https://i.pinimg.com/736x/94/1d/c5/941dc5a4df360bd5f347b01e5ea617c1.jpg",
    date: "May 10, 2025",
    author: "Priya Sharma",
    readTime: "5 min read",
    category: "Product Education"
  },
  {
    id: "2",
    title: "How to Care for Your Luxury Towels",
    excerpt: "Learn the best practices for washing, drying, and storing your premium towels to ensure they remain soft, fluffy, and absorbent for years to come.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMHRvd2VsfGVufDB8fDB8fHww",
    date: "April 22, 2025",
    author: "Vikram Mehta",
    readTime: "7 min read",
    category: "Care Guide"
  },
  {
    id: "3",
    title: "5 Tips for a Minimalist Bathroom Aesthetic",
    excerpt: "Transform your bathroom into a serene, spa-like retreat with these simple minimalist design principles that focus on functionality and elegance.",
    image: "https://i.pinimg.com/736x/94/1d/c5/941dc5a4df360bd5f347b01e5ea617c1.jpg",
    date: "March 15, 2025",
    author: "Anjali Patel",
    readTime: "6 min read",
    category: "Styling Guide"
  },
  {
    id: "4",
    title: "The History of Waffle Weave Textiles",
    excerpt: "Explore the fascinating history of waffle weave textiles, from their ancient origins to their modern applications in luxury bath linens.",
    image: "https://i.pinimg.com/736x/94/1d/c5/941dc5a4df360bd5f347b01e5ea617c1.jpg",
    date: "February 28, 2025",
    author: "Vikram Mehta",
    readTime: "8 min read",
    category: "Education"
  },
  {
    id: "5",
    title: "Creating Your Home Spa Experience",
    excerpt: "Learn how to transform your bathroom into a luxurious spa retreat with the right towels, accessories, and ambiance.",
    image: "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww",
    date: "January 12, 2025",
    author: "Priya Sharma",
    readTime: "10 min read",
    category: "Lifestyle"
  },
  {
    id: "6",
    title: "Sustainable Practices in Textile Manufacturing",
    excerpt: "Discover how DRAPE&LUXE is committed to sustainable manufacturing processes and eco-friendly materials.",
    image: "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww",
    date: "December 8, 2024",
    author: "Anjali Patel",
    readTime: "7 min read",
    category: "Sustainability"
  }
];

const categories = [
  "All",
  "Product Education",
  "Care Guide",
  "Styling Guide",
  "Lifestyle",
  "Sustainability",
  "Education"
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl text-luxe-navy mb-4">
                DRAPE&LUXE Journal
              </h1>
              <p className="text-luxe-navy/80 text-xl max-w-2xl mx-auto">
                Tips, inspiration, and insights to elevate your bathing experience
              </p>
            </div>
          </FadeInOnScroll>
          
          {/* Featured post */}
          <FadeInOnScroll>
            <div className="mb-16">
              <Link to={`/blog/${blogPosts[0].id}`} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-hidden">
                    <motion.div 
                      className="h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-luxe-navy/60 mb-3">
                      <span className="bg-luxe-gold/20 text-luxe-navy px-3 py-1 rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{blogPosts[0].date}</span>
                    </div>
                    
                    <h2 className="font-playfair font-bold text-2xl md:text-3xl text-luxe-navy mb-4 group-hover:text-luxe-gold transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    
                    <p className="text-luxe-navy/80 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <Clock size={16} className="text-luxe-navy/60 mr-2" />
                        <span className="text-sm text-luxe-navy/60">{blogPosts[0].readTime}</span>
                      </div>
                      
                      <span className="text-luxe-gold font-medium flex items-center group-hover:translate-x-1 transition-transform">
                        Read More <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </FadeInOnScroll>
          
          {/* Category filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-luxe-navy text-white"
                      : "bg-luxe-beige/40 text-luxe-navy hover:bg-luxe-beige"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <FadeInOnScroll key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.id}`} className="group bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="overflow-hidden h-56">
                    <motion.div
                      className="h-full w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-luxe-navy/60 mb-2">
                      <Tag size={14} className="mr-2" />
                      <span>{post.category}</span>
                    </div>
                    
                    <h3 className="font-playfair font-semibold text-xl text-luxe-navy mb-3 group-hover:text-luxe-gold transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-luxe-navy/70 mb-4 flex-grow">
                      {post.excerpt.length > 100 
                        ? `${post.excerpt.substring(0, 100)}...` 
                        : post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <Clock size={16} className="text-luxe-navy/60 mr-2" />
                        <span className="text-sm text-luxe-navy/60">{post.readTime}</span>
                      </div>
                      
                      <span className="text-sm text-luxe-navy/60">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-luxe-navy font-medium mb-2">No posts found</h3>
              <p className="text-luxe-navy/70">Try selecting a different category.</p>
            </div>
          )}
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
