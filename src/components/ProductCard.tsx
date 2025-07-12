
import { useState } from "react";
import { Link } from "react-router-dom";
import { Perfume } from "@/models/perfume";
import { Star, Heart, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getPlaceholderImage } from "@/utils/imageUtils";

interface ProductCardProps {
  perfume: Perfume;
}

const ProductCard = ({ perfume }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(perfume.isInWishlist || false);
  const { toast } = useToast();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsInWishlist(!isInWishlist);
    
    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist",
      description: isInWishlist 
        ? `${perfume.name} has been removed from your wishlist` 
        : `${perfume.name} has been added to your wishlist`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link 
      to={`/product/${perfume.id}`}
      className="group relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={getPlaceholderImage(perfume.name)}
          alt={perfume.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        <button 
          className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
          onClick={handleWishlistToggle}
        >
          <Heart 
            size={18} 
            className={isInWishlist ? "fill-red-500 text-red-500" : "text-gray-500"} 
          />
        </button>
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {perfume.new && (
            <span className="inline-block bg-perfume-accent text-white text-xs font-semibold py-1 px-2 rounded">
              NEW
            </span>
          )}
          {perfume.bestseller && (
            <span className="inline-block bg-perfume-gold text-white text-xs font-semibold py-1 px-2 rounded">
              BESTSELLER
            </span>
          )}
        </div>
        
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="inline-block bg-white text-perfume-black text-sm font-semibold py-2 px-4 rounded-full">
              View Details
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1 font-montserrat uppercase tracking-wider">
          {perfume.brand}
        </div>
        <h3 className="font-playfair font-medium text-lg mb-1 text-perfume-black">
          {perfume.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2 font-montserrat">
          {perfume.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="font-semibold font-montserrat text-perfume-black flex items-center">
            <IndianRupee size={14} className="mr-1" />
            {formatPrice(perfume.price)}
          </div>
          <div className="flex items-center">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{perfume.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
