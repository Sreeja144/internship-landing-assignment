import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Beauty Influencer',
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
      rating: 5,
      content: 'This skincare line has completely transformed my skin! The Vitamin C serum is now a staple in my daily routine. My skin has never looked more radiant.',
      product: 'Vitamin C Brightening Serum'
    },
    {
      id: 2,
      name: 'Emma Chen',
      role: 'Dermatologist',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg',
      rating: 5,
      content: 'As a dermatologist, I recommend these products to my patients. The formulations are scientifically sound and deliver exceptional results.',
      product: 'Retinol Night Treatment'
    },
    {
      id: 3,
      name: 'Maya Patel',
      role: 'Skincare Enthusiast',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
      rating: 5,
      content: 'After struggling with dry skin for years, this moisturizer has been a game-changer. My skin feels hydrated and looks healthy all day long.',
      product: 'Daily Moisture Barrier Cream'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their skin 
            with our premium skincare products.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-pink-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Product:</span> {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See the Transformation
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Real results from real customers. Experience the difference our 
            scientifically-proven formulas can make for your skin.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            View Before & After Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
