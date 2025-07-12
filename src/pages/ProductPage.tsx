import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { getPerfumeById, addReview } from "@/services/perfumeService";
import { Perfume, Size } from "@/models/perfume";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Link as LinkIcon, 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Stars from "@/components/Stars";
import Navbar from "@/components/Navbar";
import { getPlaceholderImage } from "@/utils/imageUtils";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [perfume, setPerfume] = useState<Perfume | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [newReview, setNewReview] = useState({ userName: "", rating: 5, comment: "" });
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadPerfume = async () => {
      if (!id) return;
      
      try {
        const data = await getPerfumeById(id);
        if (data) {
          setPerfume(data);
          setSelectedSize(data.sizes[0]);
          setIsInWishlist(data.isInWishlist || false);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load product details");
        setLoading(false);
        console.error("Error loading product:", err);
      }
    };

    loadPerfume();
  }, [id]);

  const handleSizeSelection = (size: Size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} × ${perfume?.name} (${selectedSize?.value}${selectedSize?.unit}) added to your cart`,
    });
  };

  const handleWishlistToggle = () => {
    setIsInWishlist(!isInWishlist);
    
    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist",
      description: isInWishlist 
        ? `${perfume?.name} has been removed from your wishlist` 
        : `${perfume?.name} has been added to your wishlist`,
    });
  };

  const handleImageNav = (direction: "prev" | "next") => {
    if (!perfume) return;
    
    if (direction === "prev") {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(0);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!perfume || !id) return;
    
    if (!newReview.userName.trim() || !newReview.comment.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both your name and a review comment",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await addReview(id, newReview);
      
      const updatedPerfume = await getPerfumeById(id);
      if (updatedPerfume) {
        setPerfume(updatedPerfume);
      }
      
      setNewReview({ userName: "", rating: 5, comment: "" });
      
      toast({
        title: "Review Added",
        description: "Thank you for your review!",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to add your review. Please try again.",
        variant: "destructive",
      });
      console.error("Error adding review:", err);
    }
  };

  const handleShare = (platform: string) => {
    toast({
      title: "Shared",
      description: `Product shared on ${platform}`,
    });
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-[500px] bg-gray-200 animate-pulse rounded-md"></div>
            <div>
              <div className="h-8 bg-gray-200 w-1/3 animate-pulse mb-4 rounded"></div>
              <div className="h-12 bg-gray-200 w-2/3 animate-pulse mb-6 rounded"></div>
              <div className="h-6 bg-gray-200 w-1/4 animate-pulse mb-8 rounded"></div>
              <div className="h-24 bg-gray-200 w-full animate-pulse mb-8 rounded"></div>
              <div className="h-10 bg-gray-200 w-full animate-pulse mb-4 rounded"></div>
              <div className="h-10 bg-gray-200 w-full animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !perfume) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16 text-center text-red-500">
          {error || "Product not found"}
        </div>
      </div>
    );
  }

  const placeholderImage = getPlaceholderImage(perfume.name);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-md">
              <img 
                src={placeholderImage} 
                alt={perfume.name} 
                className="w-full h-full object-cover" 
              />
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-0"
                onClick={() => handleImageNav("prev")}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-0"
                onClick={() => handleImageNav("next")}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              <button
                className="w-16 h-16 rounded-md overflow-hidden ring-2 ring-perfume-accent"
              >
                <img 
                  src={placeholderImage} 
                  alt={`${perfume.name} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium text-gray-500 font-montserrat uppercase tracking-wider">
              {perfume.brand}
            </div>
            <h1 className="text-3xl font-bold font-playfair mt-2 text-perfume-black">
              {perfume.name}
            </h1>
            
            <div className="flex items-center mt-2 mb-4">
              <Stars rating={perfume.rating} />
              <span className="ml-2 text-sm text-gray-600">
                {perfume.rating.toFixed(1)} ({perfume.reviews.length} reviews)
              </span>
            </div>
            
            <div className="text-xl font-semibold mb-6 font-montserrat text-perfume-black">
              ${selectedSize ? selectedSize.price.toFixed(2) : perfume.price.toFixed(2)}
            </div>
            
            <div className="mb-8">
              <p className="text-gray-700 font-montserrat">
                {perfume.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3 font-montserrat">
                Size
              </h3>
              <div className="flex space-x-2">
                {perfume.sizes.map((size) => (
                  <button
                    key={`${size.value}${size.unit}`}
                    onClick={() => handleSizeSelection(size)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedSize && selectedSize.value === size.value && selectedSize.unit === size.unit
                        ? "border-perfume-black bg-perfume-black text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size.value}{size.unit}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3 font-montserrat">
                Quantity
              </h3>
              <div className="flex h-10 w-32">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3 border border-r-0 border-gray-300 rounded-l-md text-gray-500 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-full text-center border-gray-300 focus:ring-perfume-accent focus:border-perfume-accent"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 border border-l-0 border-gray-300 rounded-r-md text-gray-500 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="mb-8 flex space-x-4">
              <Button 
                className="flex-1 flex items-center justify-center py-3 bg-perfume-black hover:bg-perfume-accent transition-colors" 
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                className={`px-4 border ${
                  isInWishlist 
                    ? "border-red-500 text-red-500 hover:bg-red-50" 
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
                onClick={handleWishlistToggle}
              >
                <Heart 
                  size={18} 
                  className={`${isInWishlist ? "fill-red-500 text-red-500" : ""} mr-2`} 
                />
                {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span className="font-medium mr-2">Category:</span> {perfume.category}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span className="font-medium mr-2">Gender:</span> {perfume.gender}
              </div>
              
              <div className="flex items-center mt-6">
                <span className="text-sm font-medium text-gray-900 mr-4">Share:</span>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleShare("Facebook")}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Facebook size={18} />
                  </button>
                  <button 
                    onClick={() => handleShare("Twitter")}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={18} />
                  </button>
                  <button 
                    onClick={() => handleShare("Instagram")}
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    <Instagram size={18} />
                  </button>
                  <button 
                    onClick={() => handleShare("Copy Link")}
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <LinkIcon size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold mb-6 text-perfume-black">
            Fragrance Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-perfume-light p-6 rounded-md">
              <h3 className="text-lg font-medium mb-3 font-montserrat text-perfume-black">
                Top Notes
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {perfume.notes.top.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="bg-perfume-light p-6 rounded-md">
              <h3 className="text-lg font-medium mb-3 font-montserrat text-perfume-black">
                Heart Notes
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {perfume.notes.middle.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="bg-perfume-light p-6 rounded-md">
              <h3 className="text-lg font-medium mb-3 font-montserrat text-perfume-black">
                Base Notes
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {perfume.notes.base.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold mb-6 text-perfume-black">
            Customer Reviews
          </h2>
          
          <div className="mb-12">
            {perfume.reviews.length === 0 ? (
              <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
            ) : (
              <div className="space-y-6">
                {perfume.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-perfume-black">{review.userName}</h3>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="mt-1 mb-2">
                      <Stars rating={review.rating} size={14} />
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-medium mb-4 text-perfume-black">
              Add Your Review
            </h3>
            <form onSubmit={handleReviewSubmit} className="max-w-2xl">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={newReview.userName}
                  onChange={(e) => setNewReview({...newReview, userName: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-perfume-accent focus:border-perfume-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex items-center">
                  <select 
                    value={newReview.rating}
                    onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                    className="p-2 border border-gray-300 rounded-md focus:ring-perfume-accent focus:border-perfume-accent"
                  >
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Very Good</option>
                    <option value="3">3 - Good</option>
                    <option value="2">2 - Fair</option>
                    <option value="1">1 - Poor</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-perfume-accent focus:border-perfume-accent"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="bg-perfume-black hover:bg-perfume-accent transition-colors">
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
