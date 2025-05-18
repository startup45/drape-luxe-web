import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-luxe-navy z-50 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-playfair font-bold text-2xl md:text-3xl text-white">
            DRAPE<span className="text-luxe-gold">&</span>LUXE
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors px-4 py-2">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/products" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors px-4 py-2">
                Products
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors px-4 py-2">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors px-4 py-2">
                Blog
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors px-4 py-2">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search size={20} className="text-white" />
          </button>
          <Link to="/account" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <User size={20} className="text-white" />
          </Link>
          <Link to="/cart" className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
            <ShoppingCart size={20} className="text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-luxe-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-luxe-navy absolute left-0 w-full py-4 px-6 shadow-md animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors block" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-lato font-medium text-white hover:text-luxe-gold transition-colors block" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
