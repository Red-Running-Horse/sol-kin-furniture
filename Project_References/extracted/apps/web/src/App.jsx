
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import NavigationBar from '@/components/NavigationBar.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ProductsPage from '@/pages/ProductsPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import StoreLocatorPage from '@/pages/StoreLocatorPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/store-locator" element={<StoreLocatorPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] pt-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4">Page not found</h1>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="text-[hsl(var(--accent))] hover:text-[hsl(var(--secondary))] underline">
                Back to home
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
