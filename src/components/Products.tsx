import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { CartItem } from '../App';

interface ProductsProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cleansers', name: 'Cleansers' },
    { id: 'serums', name: 'Serums' },
    { id: 'moisturizers', name: 'Moisturizers' },
    { id: 'treatments', name: 'Treatments' }
  ];

  const products = [
    {
      id: 1,
      name: 'Vitamin C Brightening Serum',
      category: 'serums',
      price: 89,
      originalPrice: 110,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
      rating: 4.9,
      reviews: 234,
      isNew: true,
      description: 'Powerful antioxidant serum for radiant, youthful skin'
    },
    {
      id: 2,
      name: 'Hydrating Gentle Cleanser',
      category: 'cleansers',
      price: 45,
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      rating: 4.8,
      reviews: 189,
      description: 'Gentle foam cleanser that removes impurities without stripping'
    },
    {
      id: 3,
      name: 'Retinol Night Treatment',
      category: 'treatments',
      price: 125,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
      rating: 4.9,
      reviews: 156,
      isBestseller: true,
      description: 'Advanced retinol formula for smooth, renewed skin'
    },
    {
      id: 4,
      name: 'Daily Moisture Barrier Cream',
      category: 'moisturizers',
      price: 75,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
      rating: 4.7,
      reviews: 298,
      description: 'Rich, nourishing cream that locks in moisture all day'
    },
    {
      id: 5,
      name: 'Peptide Eye Renewal Complex',
      category: 'treatments',
      price: 95,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
      rating: 4.8,
      reviews: 167,
      description: 'Targeted treatment for fine lines and dark circles'
    },
    {
      id: 6,
      name: 'Hyaluronic Acid Booster',
      category: 'serums',
      price: 65,
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
      rating: 4.9,
      reviews: 312,
      isNew: true,
      description: 'Intense hydration serum for plump, dewy skin'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: typeof products[0]) => {
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
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our scientifically-formulated skincare products designed 
            to address every skin concern with proven results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
                    <Eye className="h-5 w-5 text-gray-700" />
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

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
