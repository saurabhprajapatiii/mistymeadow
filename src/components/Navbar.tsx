
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      toast({
        title: "Search activated",
        description: "Our search functionality will be available soon!",
        duration: 3000,
      });
    }
  };

  const handleCart = () => {
    toast({
      title: "Shopping Bag",
      description: "Your shopping bag is empty. Start shopping now!",
      duration: 3000,
    });
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-perfume-black">
                Parfumerie
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors">
              Home
            </Link>
            <Link to="/collections" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors">
              Collections
            </Link>
            <Link to="/new-arrivals" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors">
              New Arrivals
            </Link>
            <Link to="/about" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors">
              About Us
            </Link>
          </div>

          {/* Nav Icons */}
          <div className="hidden md:flex md:items-center">
            <Button variant="ghost" size="icon" className="mr-2" onClick={handleSearch}>
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCart}>
              <ShoppingBag size={20} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Search box (conditionally rendered) */}
      {isSearchOpen && (
        <div className="bg-white py-3 px-4 shadow-md animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for perfumes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-perfume-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/collections" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors" onClick={toggleMenu}>
              Collections
            </Link>
            <Link to="/new-arrivals" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors" onClick={toggleMenu}>
              New Arrivals
            </Link>
            <Link to="/about" className="font-montserrat text-perfume-black hover:text-perfume-accent transition-colors" onClick={toggleMenu}>
              About Us
            </Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" onClick={handleSearch}>
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleCart}>
                <ShoppingBag size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
