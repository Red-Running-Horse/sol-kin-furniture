
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold mb-1 block" style={{ fontFamily: '"Playfair Display", serif' }}>
              Javier's Furniture 13:20
            </span>
            <p className="text-xs opacity-70 mb-3 italic">Everything ends in 13:20</p>
            <p className="text-sm leading-relaxed opacity-90">
              Handcrafted functional art from the heart of the Mayan Jungle.
              An initiative of Sol-Kin1320.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-semibold mb-4 block">Explore</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/products" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Collection
              </Link>
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Our Story
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Commission
              </Link>
              <Link to="/store-locator" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Visit Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="font-semibold mb-4 block">Connect</span>
            <div className="space-y-2 text-sm opacity-90">
              <p>Javier's Furniture 13:20 Workshop</p>
              <p>Felipe Carrillo Puerto</p>
              <p>Quintana Roo, Mexico</p>
              <p className="mt-3">javier@javiersfurniture1320.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--primary-foreground))]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © 2026 Javier's Furniture 13:20 · An initiative of Sol-Kin1320 · Handcrafted with passion.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
