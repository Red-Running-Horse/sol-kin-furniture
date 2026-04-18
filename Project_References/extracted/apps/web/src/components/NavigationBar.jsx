
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet.jsx';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/products' },
    { name: 'Our Story', path: '/about' },
    { name: 'Commission', path: '/contact' },
    { name: 'Visit Us', path: '/store-locator' }
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled
                  ? 'text-[hsl(var(--foreground))]'
                  : 'text-white'
              }`}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Javier's Furniture
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[hsl(var(--foreground))]'
                    : 'text-white'
                } ${
                  isActivePath(link.path)
                    ? 'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[hsl(var(--accent))]'
                    : 'hover:text-[hsl(var(--accent))]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden p-2 transition-colors duration-300 touch-target ${
                  isScrolled
                    ? 'text-[hsl(var(--foreground))]'
                    : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[hsl(var(--background))] w-[300px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">
                  <span className="text-2xl font-bold text-[hsl(var(--foreground))]" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Javier's Furniture
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors duration-300 py-2 touch-target ${
                      isActivePath(link.path)
                        ? 'text-[hsl(var(--accent))] font-semibold'
                        : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
