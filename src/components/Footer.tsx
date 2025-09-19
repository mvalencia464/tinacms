import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src="/wilkins-logo.webp" 
                alt="Wilkins Carpet Cleaning Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Wilkins Carpet Cleaning</h3>
                <p className="text-blue-300">Family-Owned Service Since 2003</p>
              </div>
            </div>
            
            <p className="text-blue-200 max-w-md">
              Carolina's #1 preferred carpet cleaning specialist. Family-owned and operated, 
              serving the Rocky Mount area with honest, dependable service for over 20 years.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-blue-300">Licensed • Bonded • Insured</p>
              <p className="text-blue-200">
                "If we can't help you... We will refer someone who can."
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Carpet Steam Cleaning</li>
              <li>Commercial Carpet Cleaning</li>
              <li>Upholstery Cleaning</li>
              <li>Tile & Grout Cleaning</li>
              <li>Carpet Protection</li>
              <li>Janitorial Services</li>
              <li>Floor Stripping & Waxing</li>
              <li>Grout Re-coloring</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <div>
                  <a 
                    href="tel:252-937-3276" 
                    className="font-semibold text-white hover:text-blue-300"
                  >
                    252-937-3276
                  </a>
                  <p className="text-sm text-blue-400">Call or text anytime</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <div>
                  <a 
                    href="mailto:Anthonywilkins777@gmail.com" 
                    className="text-white hover:text-blue-300 break-all"
                  >
                    Anthonywilkins777@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="text-white">1357 N Wesleyan Blvd</p>
                  <p className="text-white">Rocky Mount, NC 27804</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-bold mb-4">Service Areas</h4>
          <p className="text-blue-200">
            Rocky Mount, Wilson, Tarboro, Nashville, Roanoke Rapids, Louisburg, 
            Springhope, Whitakers, Greenville and surrounding areas in North Carolina
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} Wilkins Carpet Cleaning. All rights reserved.
          </p>
          <p className="text-blue-400 text-sm mt-4 md:mt-0">
            Family-owned and operated since 2003 • Anthony Wilkins, Owner/Operator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;