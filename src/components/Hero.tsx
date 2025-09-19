import React from 'react';
import { Phone, MapPin, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  // Static fallback data
  const heroContent = {
    title: "Professional Carpet Cleaning in Rocky Mount & Wilson",
    subtitle: "Don't replace your carpets - restore them to like-new condition!",
    phone: "252-937-3276",
    rating: 4.8,
    reviewCount: 50,
    keyBenefits: [
      "FREE written estimates - no bait & switch",
      "Licensed, bonded & insured", 
      "20+ years serving Rocky Mount area"
    ],
    serviceAreas: "Serving Rocky Mount, Wilson, Nashville, Tarboro & surrounding areas",
    heroImage: "https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34f782ba7833b4bfdb.jpeg"
  };

  // Split title for highlighting
  const titleParts = heroContent.title.split(' in ');
  const mainTitle = titleParts[0] + ' in';
  const titleHighlight = titleParts[1] || 'Rocky Mount & Wilson';

  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {mainTitle}<br />
                <span className="text-blue-300">{titleHighlight}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                {heroContent.subtitle}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-start space-x-4 bg-blue-800/60 backdrop-blur-md p-4 rounded-xl border border-blue-600 max-w-md">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-6 w-6 ${star <= heroContent.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                ))}
              </div>
              <div>
                <p className="font-bold text-lg">{heroContent.rating}/5 Stars</p>
                <p className="text-sm text-blue-300">{heroContent.reviewCount}+ Google Reviews</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${heroContent.phone}`} 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center shadow-xl"
              >
                <Phone className="inline h-6 w-6 mr-2" />
                Call Now: {heroContent.phone}
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-300 hover:text-blue-900 transition-colors"
              >
                Get FREE Estimate
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroContent.heroImage}
                alt="Professional carpet cleaning service in action"
                className="w-full h-96 object-cover"
              />
              
              {/* Large Logo Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <img 
                  src="/logo.svg" 
                  alt="Wilkins Carpet Cleaning Logo Watermark" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              
              {/* Corner Logo */}
              <div className="absolute top-4 right-4">
                <img 
                  src="/logo.svg" 
                  alt="Wilkins Carpet Cleaning Logo" 
                  className="w-16 h-16 object-contain opacity-80"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg">
                <p className="text-gray-900 font-bold text-lg">Before & After Results</p>
                <p className="text-gray-700">See the difference professional cleaning makes!</p>
              </div>
            </div>

            {/* Key Benefits - Below Image */}
            <div className="space-y-2">
              {heroContent.keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span className="text-lg text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Service Areas */}
            <div className="flex items-start space-x-3 text-blue-300">
              <MapPin className="h-6 w-6 flex-shrink-0" />
              <span className="text-lg">{heroContent.serviceAreas}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;