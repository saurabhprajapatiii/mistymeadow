
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-16 mt-16">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-playfair font-bold text-perfume-black mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8 font-montserrat">
            Oops! The page you're looking for has vanished like the last notes of a fragrance.
          </p>
          <Button asChild className="bg-perfume-black hover:bg-perfume-accent transition-colors">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
