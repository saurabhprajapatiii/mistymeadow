
import { IndianRupee } from "lucide-react";

const OurStory = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1600518464441-7d8130010d12?q=80&w=800&auto=format&fit=crop" 
          alt="Our Flagship Store" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <p className="text-white font-playfair p-6 text-lg italic">Our Mumbai flagship store</p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-playfair font-bold mb-6 text-perfume-black">
          Our Story
        </h2>
        <p className="text-gray-700 mb-4 font-montserrat">
          Founded in 2010, Perfume Shop began with a simple mission: to bring the world's finest fragrances to discerning Indian customers. What started as a small boutique in Mumbai has now grown into India's most trusted destination for luxury perfumes.
        </p>
        <p className="text-gray-700 mb-4 font-montserrat">
          Our journey has been defined by a passionate commitment to quality, authenticity, and exceptional customer service. We believe that the right fragrance is more than just a scent—it's a personal signature that expresses individuality and creates lasting memories.
        </p>
        <p className="text-gray-700 font-montserrat">
          Today, we proudly offer an extensive collection of perfumes from renowned international houses and niche perfumers, carefully curated to satisfy even the most sophisticated olfactory palates.
        </p>
        
        <div className="mt-8 p-4 bg-perfume-light rounded-lg border border-perfume-accent/20">
          <div className="flex items-center">
            <IndianRupee className="h-5 w-5 text-perfume-accent mr-2" />
            <p className="font-medium text-perfume-black">We price all our products in Indian Rupees (₹) for your convenience</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img 
            src="https://images.unsplash.com/photo-1531758888032-9588c3d9b52a?q=80&w=400&auto=format&fit=crop" 
            alt="Luxury Perfume Bottles" 
            className="rounded-lg shadow-md h-40 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1596335825409-406ffdae115c?q=80&w=400&auto=format&fit=crop" 
            alt="Perfume Creation Process" 
            className="rounded-lg shadow-md h-40 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
