
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPerfumes } from "@/services/perfumeService";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedPriceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  
  const { data: perfumes, isLoading, error } = useQuery({
    queryKey: ['allPerfumes'],
    queryFn: getAllPerfumes
  });

  const filteredPerfumes = perfumes?.filter(perfume => {
    const matchesCategory = !selectedCategory || perfume.category === selectedCategory;
    const matchesGender = !selectedGender || perfume.gender === selectedGender;
    const matchesPriceRange = perfume.price >= selectedPriceRange[0] && perfume.price <= selectedPriceRange[1];
    
    return matchesCategory && matchesGender && matchesPriceRange;
  });

  const categories = perfumes ? [...new Set(perfumes.map(p => p.category))].sort() : [];
  const genders = perfumes ? [...new Set(perfumes.map(p => p.gender))].sort() : [];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-perfume-black mb-4">
            Our Collections
          </h1>
          <p className="mt-2 text-gray-600 font-montserrat max-w-3xl mx-auto">
            Explore our complete range of exquisite fragrances for every occasion and preference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-playfair font-medium mb-4 text-perfume-black">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="category-all"
                    type="radio"
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                    className="h-4 w-4 text-perfume-accent focus:ring-perfume-accent border-gray-300"
                  />
                  <label htmlFor="category-all" className="ml-2 text-gray-700">
                    All Categories
                  </label>
                </div>
                
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      id={`category-${category}`}
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-perfume-accent focus:ring-perfume-accent border-gray-300"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-playfair font-medium mb-4 text-perfume-black">
                Gender
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="gender-all"
                    type="radio"
                    name="gender"
                    checked={selectedGender === null}
                    onChange={() => setSelectedGender(null)}
                    className="h-4 w-4 text-perfume-accent focus:ring-perfume-accent border-gray-300"
                  />
                  <label htmlFor="gender-all" className="ml-2 text-gray-700">
                    All
                  </label>
                </div>
                
                {genders.map(gender => (
                  <div key={gender} className="flex items-center">
                    <input
                      id={`gender-${gender}`}
                      type="radio"
                      name="gender"
                      checked={selectedGender === gender}
                      onChange={() => setSelectedGender(gender)}
                      className="h-4 w-4 text-perfume-accent focus:ring-perfume-accent border-gray-300"
                    />
                    <label htmlFor={`gender-${gender}`} className="ml-2 text-gray-700">
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-playfair font-medium mb-4 text-perfume-black">
                Price Range
              </h3>
              <div className="px-2">
                <div className="flex justify-between mb-2">
                  <span>₹{selectedPriceRange[0]}</span>
                  <span>₹{selectedPriceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="500"
                  value={selectedPriceRange[1]}
                  onChange={(e) => setPriceRange([selectedPriceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
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
                Failed to load collections. Please try again later.
              </div>
            ) : (
              <>
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-gray-600">
                    {filteredPerfumes?.length} {filteredPerfumes?.length === 1 ? 'product' : 'products'} found
                  </p>
                </div>
                
                {filteredPerfumes?.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No products match your filter criteria. Try adjusting your filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPerfumes?.map((perfume) => (
                      <ProductCard key={perfume.id} perfume={perfume} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
