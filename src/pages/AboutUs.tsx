
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeader from "@/components/about/AboutHeader";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import OurStores from "@/components/about/OurStores";
import OurTeam from "@/components/about/OurTeam";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <AboutHeader />
        <OurStory />
        <OurValues />
        
        {/* Additional website imagery */}
        <div className="mb-24">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center text-perfume-black">
            Experience Luxury
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1575330933337-61b9b6c31d0e?q=80&w=1024&auto=format&fit=crop" 
                    alt="Perfume Display" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-playfair p-6 text-xl">Curated Collections</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1024&auto=format&fit=crop" 
                    alt="Luxury Experience" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-playfair p-6 text-xl">Personalized Service</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1583651174262-f8d75daa3dfc?q=80&w=1024&auto=format&fit=crop" 
                    alt="Perfume Testing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-playfair p-6 text-xl">Sensory Exploration</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <OurStores />
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
