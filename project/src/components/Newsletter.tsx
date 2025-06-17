import React, { useState } from 'react';
import { Mail, Gift, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium mb-6">
              <Gift className="h-4 w-4 mr-2" />
              Exclusive Offers Inside
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Beauty
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Community</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Get early access to new products, exclusive discounts, 
              and expert skincare tips delivered to your inbox.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Exclusive Content
              </h3>
              <p className="text-gray-600">
                Expert skincare tips and tutorials from our dermatologists
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Special Offers
              </h3>
              <p className="text-gray-600">
                Up to 25% off on new launches and member-only discounts
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Early Access
              </h3>
              <p className="text-gray-600">
                Be the first to try our newest products before anyone else
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-sm text-gray-500">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Our Community!
                </h3>
                <p className="text-gray-600">
                  Thank you for subscribing. Check your inbox for a special welcome offer!
                </p>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Join over <span className="font-semibold text-gray-900">25,000+</span> beauty enthusiasts
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://images.pexels.com/photos/${3785104 + i}/pexels-photo-${3785104 + i}.jpeg`}
                  alt={`Customer ${i + 1}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                />
              ))}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                +25K
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;