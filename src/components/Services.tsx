import React from 'react';
import { Sparkles, Building, Sofa, Shield, Droplets, Paintbrush, Briefcase, Layers } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Carpet Steam Cleaning',
    description: 'Deep steam cleaning that removes tough stains, dirt, and odors. Our superior process brings carpets back to life.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a3409fa3e9db0b40e4d.jpeg'
  },
  {
    icon: Building,
    title: 'Commercial Carpet Cleaning',
    description: 'Professional cleaning for offices, restaurants, and businesses. Flexible scheduling to minimize disruption.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34f782ba7833b4bfdb.jpeg'
  },
  {
    icon: Sofa,
    title: 'Upholstery Cleaning',
    description: 'Restore your furniture to like-new condition. Safe for all fabric types including delicate materials.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34b800037b792a3a4a.jpeg'
  },
  {
    icon: Shield,
    title: 'Carpet & Upholstery Protection',
    description: 'Protective treatments that extend the life of your carpets and furniture while making future cleaning easier.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a344fae2c19abdd1210.jpeg'
  },
  {
    icon: Droplets,
    title: 'Tile & Grout Cleaning',
    description: 'Professional tile and grout cleaning with sealers to restore and protect your hard surfaces.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34eaa0586d7ca94628.jpeg'
  },
  {
    icon: Paintbrush,
    title: 'Grout Line Re-coloring',
    description: 'Transform old, discolored grout lines with professional re-coloring services for a fresh, new look.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc658e05b7196396a4fb93.png'
  },
  {
    icon: Briefcase,
    title: 'Janitorial Services',
    description: 'Complete janitorial services for businesses including regular maintenance and deep cleaning.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc69b2d74f6b630b62e249.jpeg'
  },
  {
    icon: Layers,
    title: 'Floor Stripping & Waxing',
    description: 'Professional floor care including stripping old wax and applying new protective coatings.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc687c09fa3e8201b93108.jpeg'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential carpets to commercial facilities, we provide comprehensive cleaning services 
            that exceed expectations. <span className="text-blue-600 font-semibold">Don't be fooled by low prices - you get what you pay for!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-800 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to See the Difference Professional Cleaning Makes?
            </h3>
            <p className="text-blue-200 mb-6 text-lg">
              Don't waste time with DIY methods that don't work. Get professional results the first time.
            </p>
            <a 
              href="tel:252-937-3276" 
              className="inline-flex items-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-xl"
            >
              Get Your FREE Estimate: 252-937-3276
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;