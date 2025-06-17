import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search, LogOut } from 'lucide-react';
import { User as UserType } from '../App';

interface HeaderProps {
  navigateTo: (page: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
  user: UserType | null;
  onLogout: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ 
  navigateTo, 
  cartItemCount, 
  onCartClick, 
  onLoginClick, 
  user, 
  onLogout,
  onSearch,
  searchQuery
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Products', href: 'products' },
    { name: 'About', href: 'about' },
    { name: 'Reviews', href: 'reviews' },
    { name: 'Gift Sets', href: 'gift-sets' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    navigateTo(href);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SKINCARE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 w-64"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Search className="h-5 w-5" />
              </button>
            )}
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}>
                  Hi, {user.name.split(' ')[0]}
                </span>
                <button 
                  onClick={onLogout}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <User className="h-5 w-5" />
              </button>
            )}
            
            <button 
              onClick={onCartClick}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 relative ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="px-3 py-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900"
                />
              </form>
              
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-4">
                  {user ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">
                        Hi, {user.name.split(' ')[0]}
                      </span>
                      <button 
                        onClick={onLogout}
                        className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                      >
                        <LogOut className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={onLoginClick}
                      className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                    >
                      <User className="h-5 w-5" />
                    </button>
                  )}
                  <button 
                    onClick={onCartClick}
                    className="p-2 text-gray-700 hover:bg-gray-100 rounded-full relative"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {cartItemCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
