import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Gift } from 'lucide-react';
import { CartItem } from '../App';

interface GiftSetsProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const GiftSets: React.FC<GiftSetsProps> = ({ addToCart }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const giftSets = [
    {
      id: 101,
      name: 'Complete Skincare Routine Set',
      price: 199,
      originalPrice: 250,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
      rating: 4.9,
      reviews: 156,
      description: 'Everything you need for a complete skincare routine',
      includes: ['Cleanser', 'Serum', 'Moisturizer', 'Eye Cream'],
      savings: 51,
      isBestseller: true
    },
    {
      id: 102,
      name: 'Anti-Aging Luxury Collection',
      price: 299,
      originalPrice: 380,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
      rating: 4.8,
      reviews: 203,
      description: 'Premium anti-aging products for mature skin',
      includes: ['Retinol Serum', 'Peptide Cream', 'Eye Treatment', 'Night Mask'],
      savings: 81,
      isNew: true
    },
    {
      id: 103,
      name: 'Hydration Essentials Kit',
      price: 149,
      originalPrice: 185,
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      rating: 4.7,
      reviews: 189,
      description: 'Perfect for dry and dehydrated skin',
      includes: ['Hydrating Cleanser', 'Hyaluronic Serum', 'Moisture Cream'],
      savings: 36
    },
    {
      id: 104,
      name: 'Brightening & Glow Set',
      price: 179,
      originalPrice: 220,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
      rating: 4.9,
      reviews: 167,
      description: 'Achieve radiant, glowing skin',
      includes: ['Vitamin C Serum', 'Brightening Mask', 'Glow Moisturizer', 'Exfoliant'],
      savings: 41
    },
    {
      id: 105,
      name: 'Travel Skincare Essentials',
      price: 89,
      originalPrice: 110,
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
      rating: 4.6,
      reviews: 134,
      description: 'Perfect travel-sized skincare essentials',
      includes: ['Mini Cleanser', 'Mini Serum', 'Mini Moisturizer', 'Travel Bag'],
      savings: 21
    },
    {
      id: 106,
      name: 'Sensitive Skin Care Bundle',
      price: 169,
      originalPrice: 205,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
      rating: 4.8,
      reviews: 145,
      description: 'Gentle products for sensitive skin',
      includes: ['Gentle Cleanser', 'Calming Serum', 'Barrier Cream', 'Soothing Mask'],
      savings: 36
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (giftSet: typeof giftSets[0]) => {
    addToCart({
      id: giftSet.id,
      name: giftSet.name,
      price: giftSet.price,
      image: giftSet.image
    });
    
    // Show success feedback
    const button = document.getElementById(`add-to-cart-${giftSet.id}`);
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Added!';
      button.classList.add('bg-green-500', 'hover:bg-green-600');
      button.classList.remove('bg-gradient-to-r', 'from-pink-500', 'to-purple-500', 'hover:from-pink-600', 'hover:to-purple-600');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('bg-gradient-to-r', 'from-pink-500', 'to-purple-500', 'hover:from-pink-600', 'hover:to-purple-600');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gift
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Sets</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perfect gift sets for every skin type and concern. Save more when you bundle 
            our best-selling products together.
          </p>
        </div>

        {/* Gift Sets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftSets.map((giftSet) => (
            <div
              key={giftSet.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={giftSet.image}
                  alt={giftSet.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Gift className="h-4 w-4 mr-1" />
                    Gift Set
                  </span>
                  {giftSet.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  {giftSet.isBestseller && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bestseller
                    </span>
                  )}
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save ${giftSet.savings}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => toggleFavorite(giftSet.id)}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                  >
                    <Heart className={`h-5 w-5 ${favorites.includes(giftSet.id) ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    id={`add-to-cart-${giftSet.id}`}
                    onClick={() => handleAddToCart(giftSet)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {giftSet.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {giftSet.description}
                </p>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {giftSet.includes.map((item, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(giftSet.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {giftSet.rating} ({giftSet.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      ${giftSet.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${giftSet.originalPrice}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(giftSet)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Gift Sets?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our carefully curated gift sets offer the perfect combination of products 
              for specific skin concerns while saving you money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Combinations</h3>
              <p className="text-gray-600">Expertly curated products that work together for optimal results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save More</h3>
              <p className="text-gray-600">Up to 25% savings compared to buying products individually</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect Gifts</h3>
              <p className="text-gray-600">Beautiful packaging makes them perfect for gifting to loved ones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftSets;