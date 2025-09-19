import React from 'react';
import { Award, Clock, Shield, Users, CheckCircle, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Family-Owned Excellence 
                <span className="text-blue-700"> Since 2003</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Dear Friend, Wilkins Carpet Cleaning is a local, family-owned business proudly serving 
                the Rocky Mount area and beyond for over <strong>20 years</strong>. We're Carolina's #1 
                preferred carpet cleaning specialist with a commitment that sets us apart.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  "We treat every home owner's property as if it was our very own home. 
                  We're NOT going to cut corners just to get your money!"
                </p>
                <p className="text-gray-700">— Anthony Wilkins, Owner/Operator</p>
              </div>

              <p className="text-lg text-gray-700">
                Our superior cleaning process and commitment to excellence has earned us countless 
                5-star reviews from satisfied customers. When others say it can't be cleaned, 
                we prove them wrong.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Award-Winning Service</h3>
                  <p className="text-gray-600 text-sm">20+ years of excellence and customer satisfaction</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Licensed & Bonded</h3>
                  <p className="text-gray-600 text-sm">Fully insured for your peace of mind</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Punctual & Reliable</h3>
                  <p className="text-gray-600 text-sm">No lengthy wait periods - we respect your time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 text-blue-700 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Certified Technicians</h3>
                  <p className="text-gray-600 text-sm">Fully trained professionals using advanced equipment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image & Testimonial */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34b800037b792a3a4a.jpeg"
                alt="Anthony Wilkins professional carpet cleaning"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Anthony Wilkins"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Anthony Wilkins</p>
                      <p className="text-sm text-gray-600">Owner/Operator</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    "If we can't help you... We will refer someone who can. That's our commitment to honest service."
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">FREE written estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">No bait and switch tactics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Quality guarantee on all services</span>
                </div>
              </div>
              <a 
                href="tel:252-937-3276" 
                className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors mt-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                252-937-3276
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;