import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const footerLinks = {
    products: [
      { name: 'Cleansers', action: () => navigateTo('products') },
      { name: 'Serums', action: () => navigateTo('products') },
      { name: 'Moisturizers', action: () => navigateTo('products') },
      { name: 'Treatments', action: () => navigateTo('products') },
      { name: 'Sun Protection', action: () => navigateTo('products') },
      { name: 'Gift Sets', action: () => navigateTo('gift-sets') }
    ],
    company: [
      { name: 'About Us', action: () => navigateTo('about') },
      { name: 'Our Story', action: () => navigateTo('about') },
      { name: 'Careers', action: () => navigateTo('contact') },
      { name: 'Press', action: () => navigateTo('contact') },
      { name: 'Sustainability', action: () => navigateTo('about') },
      { name: 'Reviews', action: () => navigateTo('reviews') }
    ],
    support: [
      { name: 'Contact Us', action: () => navigateTo('contact') },
      { name: 'FAQ', action: () => navigateTo('contact') },
      { name: 'Shipping', action: () => navigateTo('contact') },
      { name: 'Returns', action: () => navigateTo('contact') },
      { name: 'Size Guide', action: () => navigateTo('contact') },
      { name: 'Track Order', action: () => navigateTo('contact') }
    ],
    legal: [
      { name: 'Privacy Policy', action: () => {} },
      { name: 'Terms of Service', action: () => {} },
      { name: 'Cookie Policy', action: () => {} },
      { name: 'Accessibility', action: () => {} },
      { name: 'Site Map', action: () => navigateTo('home') }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => navigateTo('home')}
              className="text-2xl font-bold mb-4 hover:text-pink-400 transition-colors"
            >
              SKINCARE
            </button>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your skincare routine with our scientifically-proven, 
              premium products designed for radiant, healthy skin.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-pink-400 mr-3" />
                <span className="text-gray-300">1-800-SKINCARE</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-pink-400 mr-3" />
                <span className="text-gray-300">hello@skincare.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-pink-400 mr-3" />
                <span className="text-gray-300">New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-2">
              Stay Beautiful, Stay Informed
            </h4>
            <p className="text-white/90 mb-6">
              Get the latest skincare tips and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900"
              />
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SKINCARE. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 text-sm mr-2">Made with</span>
              <Heart className="h-4 w-4 text-red-400 mr-2" />
              <span className="text-gray-400 text-sm">for beautiful skin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
