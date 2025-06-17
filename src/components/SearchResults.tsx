import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, ArrowLeft, Search } from 'lucide-react';
import { Product } from '../App';

interface SearchResultsProps {
  products: Product[];
  searchQuery: string;
  addToCart: (product: Omit<Product, 'category' | 'rating' | 'reviews' | 'isNew' | 'isBestseller' | 'description'>) => void;
  onBackToHome: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
  products, 
  searchQuery, 
  addToCart, 
  onBackToHome 
}) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    // Show success feedback
    const button = document.getElementById(`add-to-cart-${product.id}`);
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Added!';
      button.classList.add('bg-green-500');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-500');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mr-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          <div className="flex items-center text-gray-600">
            <Search className="h-5 w-5 mr-2" />
            <span>Search Results</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Search Results for
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> "{searchQuery}"</span>
          </h1>
          <p className="text-xl text-gray-600">
            {products.length === 0 
              ? 'No products found. Try searching for something else.' 
              : `Found ${products.length} product${products.length !== 1 ? 's' : ''} matching your search.`
            }
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Results Found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". 
              Try searching for different keywords or browse our collections.
            </p>
            <button
              onClick={onBackToHome}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Browse All Products
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Bestseller
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
                    </button>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      id={`add-to-cart-${product.id}`}
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Quick Add
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Suggestions */}
        {products.length > 0 && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Didn't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Browse our full collection or try a different search term.
            </p>
            <button
              onClick={onBackToHome}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Browse All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
