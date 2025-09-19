import React from 'react';
import { Phone, MapPin, Star, CheckCircle, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  onNavigate?: (view: 'home' | 'blog') => void;
}

const BlogPost = ({ onNavigate }: BlogPostProps) => {
  return (
    <article className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <button
          onClick={() => onNavigate?.('home')}
          className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-8 font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        {/* YouTube Video */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Why Our 12-Step Carpet Cleaning Process Gets Results Others Can't
          </h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/3HiOGF_v6oI"
              title="Wilkins Carpet Cleaning Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Why Our 12-Step Process Delivers Superior Results
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Most carpet cleaning companies in Rocky Mount, Wilson, and Tarboro use basic 3-4 step methods that only clean the surface. Our comprehensive 12-step process ensures your carpets are deeply cleaned, sanitized, and protected for lasting results.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-bold ml-2">4.8/5 Stars • 50+ Reviews</span>
            </div>
            <p className="text-center text-gray-700">
              Serving Rocky Mount, Wilson, Tarboro, Nashville, and Eastern NC for over 20 years
            </p>
          </div>
        </div>

        {/* 12-Step Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
            Our Exclusive 12-Step Cleaning Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: 1,
                title: "Pre-Inspection",
                description: "Thorough assessment of carpet condition and customized cleaning approach"
              },
              {
                number: 2,
                title: "Pre-Vacuum",
                description: "Commercial-grade vacuuming removes 85% of dry soil before wet cleaning"
              },
              {
                number: 3,
                title: "Furniture Protection",
                description: "Careful furniture movement and protection with disposable blocks"
              },
              {
                number: 4,
                title: "Pre-Spot Treatment",
                description: "Professional-grade stain removal solutions for maximum effectiveness"
              },
              {
                number: 5,
                title: "Pre-Spray Application",
                description: "Specialized traffic lane treatment breaks down embedded soil"
              },
              {
                number: 6,
                title: "Pre-Grooming",
                description: "Mechanical action loosens soil that other cleaners miss"
              },
              {
                number: 7,
                title: "Hot Water Extraction",
                description: "Truck-mounted system thoroughly flushes carpet with controlled pressure"
              },
              {
                number: 8,
                title: "pH Neutralization",
                description: "Balanced pH prevents residue that attracts future soil"
              },
              {
                number: 9,
                title: "Post-Spot Treatment",
                description: "Advanced techniques for any remaining stubborn stains"
              },
              {
                number: 10,
                title: "Post-Grooming",
                description: "Carpet pile restoration for original appearance and faster drying"
              },
              {
                number: 11,
                title: "Speed Drying",
                description: "High-velocity air movers reduce drying time to hours, not days"
              },
              {
                number: 12,
                title: "Final Inspection",
                description: "Quality assurance walkthrough ensures complete satisfaction"
              }
            ].map((step) => (
              <div key={step.number} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            What Makes Our Process Different
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Our Comprehensive Approach:</h3>
              <div className="space-y-3">
                {[
                  "Deep soil extraction beyond surface cleaning",
                  "Professional pre-treatment for maximum stain removal",
                  "Controlled moisture to prevent mold and mildew",
                  "Accelerated drying for your convenience"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Family-Owned Difference:</h3>
              <div className="space-y-3">
                {[
                  "Personal attention from the business owner",
                  "20+ years serving Eastern North Carolina",
                  "Honest pricing with no hidden fees",
                  "Licensed, bonded, and insured"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            What Our Customers Say
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "There were stains in the carpet that we couldn't identify. It looked REALLY BAD, but when they were finished, the carpets looked AMAZING. Saved me from having to replace the carpet."
              </p>
              <p className="font-bold text-gray-900">— Bill Lehnes, Rocky Mount</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "We were about to purchase new carpet! I was embarrassed at how dirty our carpet had become! Mr. Wilkins made the carpets look as new. The area rug looks brighter than the day we purchased it!"
              </p>
              <p className="font-bold text-gray-900">— Kasia Hunter-Parker, Tarboro</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "He went above and beyond by taking out and replacing my air filters while I was at the hospital. He has superb customer service and I will be back again!"
              </p>
              <p className="font-bold text-gray-900">— Chelsea Richardson, Rocky Mount</p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Complete Cleaning Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Residential Carpet Cleaning",
              "Commercial Carpet Cleaning", 
              "Upholstery Cleaning",
              "Tile & Grout Cleaning",
              "Carpet Protection",
              "Janitorial Services"
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Professional Results?</h3>
          <p className="text-blue-200 mb-6 text-lg">
            Experience the difference our 12-step process makes
          </p>
          
          <a 
            href="tel:252-937-3276" 
            className="inline-flex items-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-xl"
          >
            <Phone className="h-6 w-6 mr-2" />
            Call (252) 937-3276
          </a>
          
          <div className="mt-6 text-blue-300 space-y-1">
            <p>Anthony Wilkins, Owner/Operator</p>
            <p>Serving Rocky Mount, Wilson, Tarboro & Eastern NC</p>
            <p>Licensed • Bonded • Insured</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;