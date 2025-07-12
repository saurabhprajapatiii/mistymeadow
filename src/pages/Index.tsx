
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <HeroBanner />
        <FeaturedProducts />
        
        {/* Collection Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-perfume-black">
              Shop By Collection
            </h2>
            <p className="mt-4 text-gray-600 font-montserrat max-w-2xl mx-auto">
              Explore our curated collections to find the perfect fragrance for any occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="relative h-80 group overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixid=M3wzMzM0MTN8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMHB1cnBsZXxlbnwwfHx8fDE3MTA4NTE2NTJ8MA&ixlib=rb-4.0.3"
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-playfair font-bold mb-2">Women's Collection</h3>
                <p className="font-montserrat mb-4">Elegant and sophisticated scents for her</p>
                <button className="bg-white text-perfume-black hover:bg-perfume-gold hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
            
            {/* Category Card 2 */}
            <div className="relative h-80 group overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixid=M3wzMzM0MTN8MHwxfHNlYXJjaHwyfHxncmFkaWVudCUyMGJsdWUlMjBkYXJrfGVufDB8fHx8MTcxMDg1MTY3MXww&ixlib=rb-4.0.3"
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-playfair font-bold mb-2">Men's Collection</h3>
                <p className="font-montserrat mb-4">Bold and distinctive fragrances for him</p>
                <button className="bg-white text-perfume-black hover:bg-perfume-gold hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
            
            {/* Category Card 3 */}
            <div className="relative h-80 group overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&ixid=M3wzMzM0MTN8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMGdvbGR8ZW58MHx8fHwxNzEwODUxNjg3fDA&ixlib=rb-4.0.3"
                alt="Unisex Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-playfair font-bold mb-2">Unisex Collection</h3>
                <p className="font-montserrat mb-4">Versatile scents that transcend gender</p>
                <button className="bg-white text-perfume-black hover:bg-perfume-gold hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="bg-perfume-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-perfume-black">
                What Our Customers Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-md shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-perfume-black text-white flex items-center justify-center font-playfair text-xl">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-perfume-black">Jessica R.</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-montserrat">
                  "I've been searching for my signature scent for years, and I finally found it at Parfumerie! The Enigma perfume is absolutely divine and lasts all day. The customer service was exceptional too."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-md shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-perfume-black text-white flex items-center justify-center font-playfair text-xl">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-perfume-black">Michael T.</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-montserrat">
                  "The Oud Noir cologne exceeded my expectations. It's sophisticated, long-lasting, and I receive compliments every time I wear it. The shipping was fast, and the packaging was elegant."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-md shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-perfume-black text-white flex items-center justify-center font-playfair text-xl">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-perfume-black">Sophia L.</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-montserrat">
                  "Parfumerie offers a curated selection of unique fragrances that you won't find in department stores. The detailed descriptions and notes breakdown helped me choose the perfect scent without smelling it first."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-perfume-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Join Our Fragrance Community
            </h2>
            <p className="font-montserrat max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive exclusive offers, new product alerts, and personalized fragrance recommendations.
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-perfume-accent"
              />
              <button
                type="submit"
                className="bg-perfume-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-r-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
