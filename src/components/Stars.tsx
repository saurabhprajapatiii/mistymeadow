
import { Star, StarHalf } from "lucide-react";

interface StarsProps {
  rating: number;
  size?: number;
}

const Stars = ({ rating, size = 16 }: StarsProps) => {
  // Convert rating to array of full, half, or empty stars
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          size={size} 
          className="fill-yellow-400 text-yellow-400" 
        />
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          size={size} 
          className="fill-yellow-400 text-yellow-400" 
        />
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          size={size} 
          className="text-gray-300" 
        />
      );
    }
    
    return stars;
  };

  return (
    <div className="flex">
      {renderStars()}
    </div>
  );
};

export default Stars;
