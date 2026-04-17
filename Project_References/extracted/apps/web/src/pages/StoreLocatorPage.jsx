
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import StoreLocationsGrid from '@/components/StoreLocationsGrid.jsx';

const StoreLocatorPage = () => {
  const locations = [
    {
      storeName: 'Sol-Kin Portland Workshop',
      address: '2847 NW Industrial Street, Portland, OR 97210',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM'
    },
    {
      storeName: 'Sol-Kin Seattle Showroom',
      address: '1523 Pike Place, Seattle, WA 98101',
      hours: 'Mon-Sat: 10:00 AM - 7:00 PM, Sun: 11:00 AM - 5:00 PM'
    },
    {
      storeName: 'Sol-Kin San Francisco Gallery',
      address: '892 Valencia Street, San Francisco, CA 94110',
      hours: 'Tue-Sat: 11:00 AM - 6:00 PM, Sun-Mon: Closed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Visit Our Locations - Sol-Kin Furniture</title>
        <meta name="description" content="Experience Sol-Kin's artisan craftsmanship in person. Visit our workshops and showrooms in Portland, Seattle, and San Francisco to see, touch, and feel the quality." />
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
                Experience craftsmanship in person
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Visit our locations to see, touch, and feel the artisan quality
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-[hsl(var(--muted))]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                Connect with Javier's work and philosophy
              </h2>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                There's something irreplaceable about experiencing handcrafted furniture in person. When you visit a Sol-Kin location, you can run your hands across the smooth mahogany grain, feel the weight and solidity of traditional joinery, and understand the artisan heritage that goes into every piece.
              </p>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed">
                Our workshops and showrooms are destinations where you can connect with Javier's philosophy of creating functional art from sustainably sourced Mayan Jungle hardwoods. Whether you're exploring our collection or discussing a custom commission, we invite you to experience the quality that sets Sol-Kin apart.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="stores" className="py-16 md:py-20 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
                Our locations
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
                We welcome you to visit our workshops and showrooms. Appointments are recommended for personalized consultations and to ensure Javier or a senior craftsperson is available to discuss your project.
              </p>
            </motion.div>

            <StoreLocationsGrid locations={locations} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-[hsl(var(--card))] border-2 border-[hsl(var(--primary))] rounded-xl p-6 md:p-8 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4 text-center">
                What to expect during your visit
              </h3>
              <div className="space-y-4 text-[hsl(var(--foreground))]">
                <p className="leading-relaxed">
                  <span className="font-semibold text-[hsl(var(--primary))]">See the collection:</span> Explore finished pieces and works in progress to understand our craftsmanship standards.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold text-[hsl(var(--primary))]">Feel the materials:</span> Touch different wood species, examine grain patterns, and experience the quality of our finishes.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold text-[hsl(var(--primary))]">Discuss your vision:</span> Meet with Javier or our team to explore custom commission possibilities tailored to your needs.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold text-[hsl(var(--primary))]">Learn the process:</span> Discover how we source materials, craft each piece, and ensure heirloom quality.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StoreLocatorPage;
