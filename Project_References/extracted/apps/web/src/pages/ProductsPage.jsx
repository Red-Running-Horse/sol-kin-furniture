
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard.jsx';

const ProductsPage = () => {
  const diningTables = [
    {
      productName: 'Heritage Mahogany Table',
      woodType: 'Mahogany',
      dimensions: '72" W x 42" D x 30" H',
      price: '2,847',
      description: 'Hand-carved centerpiece with rich grain patterns, perfect for timeless family gatherings',
      image: 'https://images.unsplash.com/photo-1438999713824-dcbab75949fb',
      gallery: ['https://images.unsplash.com/photo-1438999713824-dcbab75949fb']
    },
    {
      productName: 'Grand Dining Masterpiece',
      woodType: 'Mahogany',
      dimensions: '96" W x 48" D x 30" H',
      price: '4,523',
      description: 'Expansive table featuring traditional joinery and hand-rubbed finish for generations of memories',
      image: null
    }
  ];

  const seating = [
    {
      productName: 'Artisan Bench',
      woodType: 'Tropical Hardwood',
      dimensions: '60" W x 18" D x 18" H',
      price: '1,523',
      description: 'Versatile seating where comfort meets artistic expression in every curve',
      image: 'https://images.unsplash.com/photo-1504374629924-2a46bd83e55d',
      gallery: ['https://images.unsplash.com/photo-1504374629924-2a46bd83e55d']
    },
    {
      productName: 'Craftsman Dining Chairs',
      woodType: 'Mahogany',
      dimensions: '18" W x 20" D x 36" H',
      price: '847',
      description: 'Ergonomic design with hand-carved details, sold as set of four',
      image: null
    },
    {
      productName: 'Studio Stool Collection',
      woodType: 'Tropical Hardwood',
      dimensions: '16" W x 16" D x 24" H',
      price: '487',
      description: 'Compact seating showcasing natural wood character and artisan joinery',
      image: null
    }
  ];

  const customOrders = [
    {
      productName: 'Bespoke Dining Set',
      woodType: 'Your Choice',
      dimensions: 'Custom Dimensions',
      price: '4,200',
      description: 'Collaborate with Javier to create a unique centerpiece tailored to your vision and space',
      image: 'https://images.unsplash.com/photo-1603789766555-6491f3ada66f',
      gallery: ['https://images.unsplash.com/photo-1603789766555-6491f3ada66f']
    },
    {
      productName: 'Personalized Commission',
      woodType: 'Your Choice',
      dimensions: 'Custom Dimensions',
      price: 'Quote',
      description: 'From concept to completion, bring your dream furniture to life through artisan craftsmanship',
      image: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Handcrafted Furniture Collection - Sol-Kin</title>
        <meta name="description" content="Explore Sol-Kin's collection of handcrafted furniture: mahogany dining tables, artisan seating, and bespoke commissions. Each piece is functional art from the Mayan Jungle." />
      </Helmet>

      <div className="pt-20 min-h-screen bg-[hsl(var(--background))]">
        <section className="py-16 bg-gradient-to-br from-[hsl(25_48%_35%)] to-[hsl(25_48%_40%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Artisan furniture collection
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Handcrafted from sustainably sourced Mayan Jungle hardwoods
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dining Tables Category */}
        <section className="py-16 md:py-20 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
                Mahogany masterpieces for timeless gatherings
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl">
                Our dining tables are more than furniture—they're the heart of your home. Each piece features hand-carved details, rich mahogany grain, and traditional joinery that creates a centerpiece worthy of your most cherished family gatherings. Built to last generations, these tables grow more beautiful with every meal shared.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
              {diningTables.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Seating Category */}
        <section className="py-16 md:py-20 bg-[hsl(var(--muted))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
                Comfort meets artistry
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl">
                Our seating collection—benches, chairs, and stools—showcases versatile designs where comfort meets artistic expression. Each piece is ergonomically crafted for daily use while celebrating the natural beauty of tropical hardwoods. From intimate dining chairs to statement benches, every creation balances form and function.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {seating.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders Category */}
        <section className="py-16 md:py-20 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
                Your vision, handcrafted
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl">
                Bespoke commissions are at the heart of Sol-Kin. Collaborate directly with Javier to create furniture that perfectly fits your space, style, and story. Through personalized craftsmanship, we transform your vision into unique creations that reflect your individuality. From initial sketches to final installation, every detail is tailored to you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {customOrders.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
