
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import StoreLocationsGrid from '@/components/StoreLocationsGrid.jsx';

const StoreLocatorPage = () => {
  const locations = [
    {
      storeName: "Javier's Furniture 13:20 — Primary Workshop",
      address: 'Felipe Carrillo Puerto, Quintana Roo, Mexico',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM · Sat: 10:00 AM - 4:00 PM · Sun: Closed'
    },
    {
      storeName: "Javier's Furniture 13:20 — Tulum Showroom",
      address: 'Tulum, Quintana Roo, Mexico',
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM · Sun: By appointment'
    },
    {
      storeName: "Javier's Furniture 13:20 — Bacalar Gallery",
      address: 'Bacalar, Quintana Roo, Mexico',
      hours: 'Fri-Sun: 10:00 AM - 5:00 PM · Other days: By appointment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Visit Our Workshop — Javier's Furniture 13:20, Quintana Roo</title>
        <meta name="description" content="Experience Javier's Furniture 13:20 in person at our workshop in Felipe Carrillo Puerto, Quintana Roo. See, touch, and feel the artisan quality of handcrafted Mayan jungle furniture." />
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
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-3">
                Visit our workshop and showrooms in Quintana Roo, Mexico
              </p>
              <p className="text-base text-white/70 italic">
                Everything ends in 13:20
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
                There is something irreplaceable about experiencing handcrafted furniture in person. When you visit a Javier's Furniture 13:20 location, you can run your hands across smooth mahogany grain, feel the weight and solidity of traditional joinery, and sense the intention woven into every curve and joint.
              </p>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed">
                Our workshop and showrooms in Quintana Roo are destinations where you can connect with Javier's philosophy of creating functional art from sustainably sourced Mayan Jungle hardwoods. Whether you're exploring the collection, discussing a custom commission, or simply experiencing the quality firsthand — we welcome you.
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
                We welcome you to visit our workshop and showrooms in Quintana Roo. Appointments are recommended for personalized consultations and to ensure Javier is available to discuss your vision in person.
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
