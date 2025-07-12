
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { getStoreLocationImage } from "@/utils/imageUtils";

type StoreLocation = {
  city: string;
  address: string;
  description: string;
};

const OurStores = () => {
  // Define store locations with more detail
  const storeLocations: StoreLocation[] = [
    { city: "Mumbai", address: "Linking Road, Bandra West", description: "Our flagship luxury store" },
    { city: "Delhi", address: "Connaught Place", description: "Premium shopping experience in the heart of Delhi" },
    { city: "Bangalore", address: "MG Road", description: "Modern retail space with exclusive collections" },
    { city: "Chennai", address: "Phoenix Market City", description: "Experience our southern flagship store" },
    { city: "Hyderabad", address: "Jubilee Hills", description: "Boutique store with personalized service" },
    { city: "Kolkata", address: "Park Street", description: "Historic location with contemporary design" },
    { city: "Jaipur", address: "C-Scheme", description: "Royal experience in the Pink City" }
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-perfume-black">
          Our Stores
        </h2>
        <p className="mt-2 text-gray-600 font-montserrat max-w-2xl mx-auto">
          Visit us at our premium retail locations across India
        </p>
      </div>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {storeLocations.map((store, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none">
                <CardContent className="p-0">
                  <div className="relative h-72 overflow-hidden rounded-lg">
                    <img
                      src={getStoreLocationImage(store.city)}
                      alt={`${store.city} Store`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-playfair font-bold text-white">{store.city}</h3>
                      <p className="text-white/90 font-montserrat">{store.address}</p>
                      <p className="text-white/80 font-montserrat text-sm mt-1">{store.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Store showcase grid for smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:hidden">
        {storeLocations.slice(0, 3).map((store, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden h-48">
            <img
              src={getStoreLocationImage(store.city)}
              alt={`${store.city} Store`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-lg font-playfair font-bold text-white">{store.city}</h3>
              <p className="text-white/90 font-montserrat text-sm">{store.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStores;
