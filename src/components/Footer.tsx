
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxe-navy text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center">
              <h2 className="font-playfair font-bold text-2xl text-white">
                DRAPE<span className="text-luxe-gold">&</span>LUXE
              </h2>
            </Link>
            <p className="mt-4 text-luxe-beige text-sm">
              Ultra-soft, quick-drying honeycomb towels for your everyday spa experience.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a href="#" className="text-white hover:text-luxe-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-luxe-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-luxe-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/bath-towels" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  Bath Towels
                </Link>
              </li>
              <li>
                <Link to="/products/hand-towels" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  Hand Towels
                </Link>
              </li>
              <li>
                <Link to="/products/bundles" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 text-white">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-luxe-gold" />
                <a href="mailto:care@drapeluxe.com" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  care@drapeluxe.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-luxe-gold" />
                <a href="tel:+91-9876543210" className="text-luxe-beige hover:text-luxe-gold transition-colors">
                  +91-9876543210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxe-navy/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-luxe-beige">
            <p>© {new Date().getFullYear()} DRAPE&LUXE. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link to="/privacy-policy" className="hover:text-luxe-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-luxe-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
