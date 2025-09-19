import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: "Christy O'Leary",
    rating: 5,
    text: "I just got home today after having my carpets cleaned and I really could not believe my eyes!! In the past I have been using home carpet cleaners for forever, and they don't work very good and I really had lost hope. I was contemplating replacing the carpets!! Anthony did his magic and they have NEVER looked so good! I had a stain on the carpet in my daughter's room that I scrubbed myself. I could never get up. It is gone!! Thank you, Anthony. I appreciate all your hard work and dedication to doing your job to superior status! Well done!! 🤩",
    timeAgo: "1 year ago",
    beforeAfter: true
  },
  {
    name: "Asbury Park",
    rating: 5,
    text: "I've worked with Asbury Park for about 2yrs now. I must say, I have been very impressed with the quality of Mr. Wilkins' work. He brings the life back to any carpet. He recently cleaned a carpet that I thought would have to be replaced, but after his work was done, I was literally blown away! During my evening talk after work, I bragged about him to my husband. My husband said, he must CARE about what he does and I agreed. He assess the work, he keeps everything in order, he's prompt and efficient, very personable and most important, he's honest.",
    timeAgo: "3 years ago",
    commercial: true
  },
  {
    name: "Gerri Brown",
    rating: 5,
    text: "I scheduled to have my 88 year old mom's carpet cleaned with Wilkins. Her carpet is at least 6+ years old if not older. So needless to say, it really needed to be replaced. However, Wilkins made it look new. I couldn't believe it, my mom was very pleased!! I would definitely recommend Wilkins going forward for all of her carpet cleaning. It's a very professional & thorough carpet cleaning company.",
    timeAgo: "4 months ago",
    elderly: true
  },
  {
    name: "Chelsea Richardson",
    rating: 5,
    text: "Mr. Wilkins comes highly recommended. He is prompt, friendly, and does an outstanding job on my carpet. He is the ONLY company I recommend! The first time he cleaned my carpet I was in labor at the hospital. Mr. Wilkins cleaned my carpet and noticed that I had air filters I meant to change before leaving unexpectedly. He went over and beyond by taking out and replacing my filters. He has superb customer service and I will be back again!!!!!",
    timeAgo: "8 years ago",
    aboveAndBeyond: true
  },
  {
    name: "Kasia Hunter-Parker",
    rating: 5,
    text: "We were about to throw in the towel and purchase new carpet! I was embarrassed at how dirty our carpet had become! Mr. Wilkins came in made the carpets look as new. He also cleaned an area rug! It looks brighter than the day we purchased it! I will be using him for future and I highly recommend his services!",
    timeAgo: "3 years ago",
    savedMoney: true
  },
  {
    name: "Summer Macaluso",
    rating: 5,
    text: "Mr.Wilkins is super nice ! Carpets look great , very pleased . 10/10 recommend . Will be contacting Wilkins in the future for more work .",
    timeAgo: "2 years ago",
    photos: true
  }
];

const Testimonials = () => {
  const averageRating = 4.8;
  const totalReviews = 50;

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <div className="flex items-center space-x-2 mr-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-2xl text-gray-900">{averageRating}/5</p>
              <p className="text-sm text-gray-600">{totalReviews}+ Google Reviews</p>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Don't Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our satisfied customers are saying about the <strong>amazing results</strong> and 
            <strong> exceptional service</strong> that keeps them coming back year after year.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  <Quote className="h-4 w-4" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${
                      star <= testimonial.rating 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                </div>
                
                {/* Badges */}
                <div className="flex space-x-1">
                  {testimonial.beforeAfter && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Amazing Results
                    </span>
                  )}
                  {testimonial.commercial && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      Commercial
                    </span>
                  )}
                  {testimonial.aboveAndBeyond && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                      Above & Beyond
                    </span>
                  )}
                  {testimonial.savedMoney && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                      Saved $$$
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pain Points Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Stop Wasting Time & Money on Solutions That Don't Work
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😫</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Embarrassed by Stained Carpets?</h4>
              <p className="text-gray-600 text-sm">Don't hide from guests or consider expensive replacements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tired of DIY Failures?</h4>
              <p className="text-gray-600 text-sm">Home cleaners and rental machines just push dirt deeper</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fed Up with Unreliable Service?</h4>
              <p className="text-gray-600 text-sm">No more waiting around or dealing with bait-and-switch tactics</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              <strong>Get it done RIGHT the first time</strong> with Carolina's #1 carpet cleaning specialist
            </p>
            <a 
              href="tel:252-937-3276" 
              className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors shadow-xl"
            >
              Call Now for Your FREE Estimate: 252-937-3276
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;