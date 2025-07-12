
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] w-full bg-gradient-to-r from-[#FFFFFF] to-[#F5F5DC] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzM0MTN8MHwxfHNlYXJjaHwzfHxwZXJmdW1lfGVufDB8fHx8MTcxMDg1MDczNnww&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-transparent to-transparent"></div>
      <div className="relative flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-perfume-black mb-4">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg font-montserrat text-gray-700 mb-8">
            Explore our collection of luxury fragrances crafted by master perfumers.
            Find the perfect scent that tells your story.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-perfume-black hover:bg-perfume-accent text-white transition-colors">
              Shop Now
            </Button>
            <Button variant="outline" className="border-perfume-black text-perfume-black hover:bg-gray-100">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
