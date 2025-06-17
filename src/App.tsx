import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Login from './components/Login';
import Contact from './components/Contact';
import GiftSets from './components/GiftSets';
import SearchResults from './components/SearchResults';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // All available products for search
  const allProducts: Product[] = [
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
    },
    {
      id: 7,
      name: 'Exfoliating AHA Toner',
      category: 'treatments',
      price: 55,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg',
      rating: 4.6,
      reviews: 203,
      description: 'Gentle exfoliating toner for smoother, brighter skin'
    },
    {
      id: 8,
      name: 'Niacinamide Pore Refining Serum',
      category: 'serums',
      price: 72,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
      rating: 4.7,
      reviews: 189,
      description: 'Minimizes pores and controls oil production'
    },
    {
      id: 9,
      name: 'Ceramide Repair Moisturizer',
      category: 'moisturizers',
      price: 85,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
      rating: 4.8,
      reviews: 245,
      description: 'Restores skin barrier with essential ceramides'
    },
    {
      id: 10,
      name: 'Gentle Micellar Water',
      category: 'cleansers',
      price: 35,
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      rating: 4.5,
      reviews: 156,
      description: 'Effortless makeup removal without harsh rubbing'
    }
  ];

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsSearching(false);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearching(true);
      setCurrentPage('search');
    } else {
      setIsSearching(false);
      setCurrentPage('home');
    }
  };

  const handleShopCollection = () => {
    setCurrentPage('products');
    setIsSearching(false);
    setSearchQuery('');
  };

  const handleLearnMore = () => {
    setCurrentPage('about');
    setIsSearching(false);
    setSearchQuery('');
  };

  const getFilteredProducts = () => {
    if (!searchQuery.trim()) return [];
    
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderCurrentPage = () => {
    if (isSearching && currentPage === 'search') {
      return (
        <SearchResults 
          products={getFilteredProducts()} 
          searchQuery={searchQuery}
          addToCart={addToCart}
          onBackToHome={() => navigateTo('home')}
        />
      );
    }

    switch (currentPage) {
      case 'about':
        return <About />;
      case 'products':
        return <Products addToCart={addToCart} />;
      case 'reviews':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      case 'gift-sets':
        return <GiftSets addToCart={addToCart} />;
      default:
        return (
          <>
            <Hero onShopCollection={handleShopCollection} onLearnMore={handleLearnMore} />
            <About />
            <Products addToCart={addToCart} />
            <Testimonials />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        navigateTo={navigateTo}
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        user={user}
        onLogout={handleLogout}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      
      {renderCurrentPage()}
      
      {currentPage === 'home' && !isSearching && <Footer navigateTo={navigateTo} />}
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
      
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
