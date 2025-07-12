import { useState, useEffect } from "react";
import { Perfume } from "@/models/perfume";
import { getFeaturedPerfumes } from "@/services/perfumeService";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPerfumes = async () => {
      try {
        const data = await getFeaturedPerfumes();
        console.log("Featured perfumes loaded:", data);
        setPerfumes(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load featured products");
        setLoading(false);
        console.error("Error loading featured products:", err);
      }
    };

    loadPerfumes();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
          <div className="h-4 w-72 bg-gray-200 rounded animate-pulse mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-perfume-black">
          Featured Collection
        </h2>
        <p className="mt-4 text-gray-600 font-montserrat max-w-2xl mx-auto">
          Discover our curated selection of exceptional fragrances that define luxury and elegance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {perfumes.map((perfume) => (
          <ProductCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
