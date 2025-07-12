
import { CheckCircle, Sparkles, IndianRupee } from "lucide-react";

const OurValues = () => {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-perfume-black">
          Our Values
        </h2>
        <p className="mt-2 text-gray-600 font-montserrat max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-perfume-light rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-perfume-black" />
          </div>
          <h3 className="text-xl font-playfair font-bold mb-3 text-perfume-black">Quality</h3>
          <p className="text-gray-600 font-montserrat">
            We meticulously select only authentic perfumes from verified sources, ensuring our customers receive genuine products of exceptional quality.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-perfume-light rounded-full flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-perfume-black" />
          </div>
          <h3 className="text-xl font-playfair font-bold mb-3 text-perfume-black">Innovation</h3>
          <p className="text-gray-600 font-montserrat">
            We continuously explore new fragrances, brands, and experiences to bring fresh and exciting offerings to our discerning customers.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-perfume-light rounded-full flex items-center justify-center">
            <IndianRupee className="h-8 w-8 text-perfume-black" />
          </div>
          <h3 className="text-xl font-playfair font-bold mb-3 text-perfume-black">Accessibility</h3>
          <p className="text-gray-600 font-montserrat">
            We believe luxury should be accessible. Our diverse price points and special offers make premium fragrances attainable for every budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
