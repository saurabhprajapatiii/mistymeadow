
import { useQuery } from "@tanstack/react-query";
import { getNewArrivals } from "@/services/perfumeService";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

const NewArrivals = () => {
  const { data: perfumes, isLoading, error } = useQuery({
    queryKey: ['newArrivals'],
    queryFn: getNewArrivals
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-perfume-black mb-4">
            New Arrivals
          </h1>
          <p className="mt-2 text-gray-600 font-montserrat max-w-3xl mx-auto">
            Discover our latest fragrance releases, crafted to evoke emotions and create lasting impressions.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="h-80 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-2/3 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                  <div className="flex justify-between">
                    <div className="h-5 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load new arrivals. Please try again later.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perfumes?.map((perfume) => (
                <ProductCard key={perfume.id} perfume={perfume} />
              ))}
            </div>
            
            {perfumes?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No new arrivals at the moment. Please check back soon!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
