
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard.jsx';
import GalleryGrid from '@/components/GalleryGrid.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import Button from '@/components/Button.jsx';

const HomePage = () => {
  const featuredProducts = [
    {
      productName: 'Heritage Dining Table',
      woodType: 'Mahogany',
      dimensions: '72" W x 42" D x 30" H',
      price: '2,847',
      description: 'Hand-carved centerpiece featuring rich mahogany grain and traditional joinery',
      image: 'https://images.unsplash.com/photo-1438999713824-dcbab75949fb',
      gallery: ['https://images.unsplash.com/photo-1438999713824-dcbab75949fb']
    },
    {
      productName: 'Artisan Bench',
      woodType: 'Tropical Hardwood',
      dimensions: '60" W x 18" D x 18" H',
      price: '1,523',
      description: 'Versatile seating where comfort meets artistic expression',
      image: 'https://images.unsplash.com/photo-1504374629924-2a46bd83e55d',
      gallery: ['https://images.unsplash.com/photo-1504374629924-2a46bd83e55d']
    },
    {
      productName: 'Custom Dining Set',
      woodType: 'Mahogany',
      dimensions: 'Bespoke Dimensions',
      price: '4,200',
      description: 'Your vision brought to life through personalized craftsmanship',
      image: 'https://images.unsplash.com/photo-1603789766555-6491f3ada66f',
      gallery: ['https://images.unsplash.com/photo-1603789766555-6491f3ada66f']
    },
    {
      productName: 'Artisan Coffee Table',
      woodType: 'Tropical Hardwood',
      dimensions: '48" W x 28" D x 18" H',
      price: '1,247',
      description: 'Functional art piece showcasing natural wood character',
      image: null
    }
  ];

  const galleryItems = [
    {
      title: 'Mahogany Dining Masterpiece',
      description: 'Hand-carved details create a timeless centerpiece for family gatherings',
      image: 'https://images.unsplash.com/photo-1438999713824-dcbab75949fb'
    },
    {
      title: 'Artisan Craftsmanship',
      description: 'Every piece reflects Javier\'s passion for fine woodworking',
      image: 'https://images.unsplash.com/photo-1603789766555-6491f3ada66f'
    },
    {
      title: 'Functional Art',
      description: 'Where comfort meets artistic expression in every detail',
      image: 'https://images.unsplash.com/photo-1504374629924-2a46bd83e55d'
    },
    {
      title: 'Mayan Jungle Woods',
      description: 'Sustainably sourced tropical hardwoods with rich character',
      image: null
    },
    {
      title: 'Bespoke Commissions',
      description: 'Collaborate with Javier to create your unique vision',
      image: null
    },
    {
      title: 'Timeless Quality',
      description: 'Heirloom pieces built to last generations',
      image: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sol-Kin Furniture - Handcrafted from the Mayan Jungle</title>
        <meta name="description" content="Where artisan craftsmanship meets functional art. Discover handcrafted furniture born from the Mayan Jungle, created by master craftsman Javier." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1698786030420-f38e5b98c127)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              Handcrafted furniture born from the Mayan Jungle
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
              Where artisan craftsmanship meets functional art. Each piece tells a story of passion, heritage, and timeless quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="primary" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Explore collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-[hsl(var(--primary))]">
                  Commission your piece
                </Button>
              </Link>
              <Link to="/store-locator">
                <Button variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-[hsl(var(--primary))]">
                  Visit local store
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-16 md:py-24 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-6">
                From the heart of the Mayan Jungle
              </h2>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Javier's journey began deep in the Mayan Jungle, where he discovered the extraordinary beauty of tropical hardwoods. Driven by a passion for sustainable sourcing and fine woodworking, he founded Sol-Kin to transform these remarkable materials into functional art. Each piece reflects his commitment to artisan craftsmanship, honoring both the natural character of the wood and the heritage of traditional techniques. What emerges is furniture that transcends utility—heirloom creations that carry the warmth of the jungle and the soul of the craftsman.
              </p>
              <Link to="/about">
                <Button variant="primary">
                  Discover our story
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src="https://images.unsplash.com/photo-1603789766555-6491f3ada66f" 
                alt="Artisan craftsmanship at Sol-Kin workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 md:py-24 bg-[hsl(var(--muted))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
              Featured creations
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Handcrafted from sustainably sourced Mayan Jungle hardwoods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="primary" className="px-8 py-6">
                View all creations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
              Artisan portfolio
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Each piece embodies Javier's dedication to transforming raw materials into timeless functional art
            </p>
          </motion.div>

          <GalleryGrid galleryItems={galleryItems} />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-[hsl(var(--muted))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
              Commission your piece
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Collaborate with Javier to bring your vision to life through bespoke craftsmanship
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
