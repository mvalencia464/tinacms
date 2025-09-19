import React from 'react';
import { Phone, MapPin, Mail, Clock, CheckCircle, Star } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready for <span className="text-blue-300">Amazing Results?</span>
              </h2>
              
              <p className="text-xl text-gray-300">
                Don't wait until your carpets are beyond help. Get your FREE estimate today 
                and discover why customers say we're the best in the business.
              </p>

              <div className="flex items-center space-x-4 bg-blue-700 p-4 rounded-lg border border-blue-600">
                <CheckCircle className="h-8 w-8 text-white flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">FREE Written Estimates</p>
                  <p className="text-blue-200">No hidden fees, no surprises</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Call or Text Anytime</h3>
                  <a 
                    href="tel:252-937-3276" 
                    className="text-2xl font-bold text-blue-300 hover:text-blue-200"
                  >
                    252-937-3276
                  </a>
                  <p className="text-gray-300 mt-1">Fast response guaranteed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email Us</h3>
                  <a 
                    href="mailto:Anthonywilkins777@gmail.com" 
                    className="text-lg text-blue-300 hover:text-blue-200"
                  >
                    Anthonywilkins777@gmail.com
                  </a>
                  <p className="text-gray-300 mt-1">Professional written estimates</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Service Area</h3>
                  <p className="text-lg text-gray-300">
                    1357 N Wesleyan Blvd<br />
                    Rocky Mount, NC 27804
                  </p>
                  <p className="text-gray-400 mt-2">
                    Serving Rocky Mount, Wilson, Tarboro, Nashville, Roanoke Rapids, 
                    Louisburg, Springhope, Whitakers, Greenville & surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
                  <p className="text-lg text-gray-300">
                    Monday - Saturday<br />
                    Emergency service available
                  </p>
                  <p className="text-gray-400 mt-1">No lengthy wait periods</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Main CTA */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-2xl text-center shadow-xl">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-bold">4.8/5 Stars • 50+ Reviews</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Get Your FREE Estimate</h3>
              <p className="text-blue-200 mb-6 text-lg">
                See why customers choose us over the competition. 
                Professional service, honest pricing, amazing results.
              </p>
              
              <a 
                href="tel:252-937-3276" 
                className="block w-full bg-yellow-400 text-blue-900 py-4 px-6 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-xl mb-4"
              >
                <Phone className="inline h-6 w-6 mr-2" />
                Call Now: 252-937-3276
              </a>
              
              <p className="text-sm text-blue-300">
                Or email us at Anthonywilkins777@gmail.com
              </p>
            </div>

            {/* Guarantees */}
            <div className="bg-blue-800 p-6 rounded-xl border border-blue-700">
              <h4 className="font-bold text-xl mb-4 text-center">Our Promise to You</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>No bait and switch - written estimates honored</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>Punctual service - we respect your time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>Licensed, bonded & insured for your protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span>Quality guarantee on all services</span>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-blue-600 p-6 rounded-xl text-center border border-blue-500">
              <h4 className="font-bold text-xl mb-2">Water Damage Emergency?</h4>
              <p className="mb-4">We respond quickly to minimize damage and restore your property</p>
              <a 
                href="tel:252-937-3276" 
                className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Emergency Service: 252-937-3276
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;