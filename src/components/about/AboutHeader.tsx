
const AboutHeader = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-playfair font-bold text-perfume-black">
        About Perfume Shop
      </h1>
      <p className="mt-4 text-gray-600 font-montserrat max-w-3xl mx-auto">
        Discover the art of fragrance with India's premier perfume destination
      </p>
      <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-playfair font-semibold mb-4 text-perfume-black">Our Mission</h2>
        <p className="text-gray-700 font-montserrat mb-6">
          At Parfumerie, we're dedicated to bringing the world's finest fragrances to discerning customers across India. 
          We believe everyone deserves to experience the transformative power of premium perfumes that perfectly express their 
          personality and style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-playfair font-medium text-lg mb-2">Authenticity Guaranteed</h3>
            <p className="text-gray-600 font-montserrat">Every perfume in our collection is 100% authentic, sourced directly from the original manufacturers and luxury houses.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-playfair font-medium text-lg mb-2">Expert Guidance</h3>
            <p className="text-gray-600 font-montserrat">Our fragrance specialists are trained to help you discover scents that resonate with your preferences and lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
