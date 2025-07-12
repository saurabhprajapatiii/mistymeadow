
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-perfume-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-4">Parfumerie</h2>
            <p className="text-gray-300 mb-6 font-montserrat">
              Crafting luxury fragrances that tell a story. Discover your signature scent with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-300 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-300 hover:text-white transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-4 font-montserrat">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 font-montserrat">Join Our Newsletter</h3>
            <p className="text-gray-300 mb-4 font-montserrat">
              Subscribe to receive updates, exclusive offers, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-perfume-accent"
              />
              <button
                type="submit"
                className="bg-perfume-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Perfume collection" 
              className="w-full h-32 object-cover rounded-md"
            />
            <img 
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVudjInXz03OCRkzpbSHdv2m8WMWpIIzah98cdVecM9W94VxnofTwK_uckIn39JWC9rx9rzXYA5NcEDS8ZThGX0SP2kIncNkl9lkkXzG-ljEcHPo-NxQgbHpDbVGl-ZrvvYYyxZQ&usqp=CAc" 
              alt="Luxury perfume" 
              className="w-full h-32 object-cover rounded-md"
            />
            <img 
              src="https://m.media-amazon.com/images/I/61W1ITKDAsL.jpg" 
              alt="Fragrance bottles" 
              className="w-full h-32 object-cover rounded-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=300&auto=format&fit=crop" 
              alt="Perfume ingredients" 
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
