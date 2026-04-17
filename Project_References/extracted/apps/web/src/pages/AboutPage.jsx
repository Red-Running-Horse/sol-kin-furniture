
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Sol-Kin - Artisan Craftsmanship from the Mayan Jungle</title>
        <meta name="description" content="Discover Javier's journey from the Mayan Jungle to creating functional art. Learn about Sol-Kin's commitment to sustainable sourcing, fine woodworking, and artisan heritage." />
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
                Functional art from the heart of the Mayan Jungle
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Where passion, heritage, and craftsmanship converge
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-6">
                  Javier's journey
                </h2>
                
                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  Javier's story begins in the dense canopy of the Mayan Jungle, where ancient trees hold centuries of wisdom in their grain. It was here, surrounded by the raw beauty of tropical hardwoods, that he discovered his calling. What started as a deep fascination with the natural world evolved into a lifelong passion for transforming these remarkable materials into functional art.
                </p>

                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  Driven by respect for the forest and a commitment to sustainable sourcing, Javier spent years learning the language of wood—understanding how each species responds to the craftsman's hand, how grain patterns tell stories, and how traditional joinery techniques honor both material and maker. He studied under master artisans, absorbing generations of knowledge while developing his own distinctive approach to fine woodworking.
                </p>

                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  Sol-Kin was born from this journey—a workshop where the warmth of the jungle meets the precision of artisan craftsmanship. The name itself reflects this duality: "Sol" for the sun that nurtures the forest, and "Kin" for kinship with nature and tradition.
                </p>
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
                  alt="Javier crafting furniture in the Sol-Kin workshop"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-6">
                The Sol-Kin philosophy
              </h3>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                At Sol-Kin, we believe furniture should transcend mere utility. Each piece we create is an intersection of nature and human ingenuity—functional art that carries the soul of the forest and the dedication of the craftsman. Our philosophy rests on three pillars: sustainable sourcing, artisan heritage, and timeless quality.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                We source our tropical hardwoods exclusively from sustainably managed forests, ensuring that every mahogany plank, every piece of exotic wood, comes from a place of respect for the ecosystem. Javier personally selects each board, looking for character, grain patterns, and the unique story each piece of wood wants to tell.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Our commitment to artisan heritage means honoring traditional joinery techniques—mortise and tenon, dovetails, hand-carved details—methods that have proven their worth over centuries. These techniques create furniture that doesn't just last; it becomes stronger with time, developing a patina that tells the story of the lives lived around it.
              </p>

              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-6 mt-12">
                Handcrafted quality
              </h3>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Every Sol-Kin piece is handcrafted in our workshop, where modern precision tools work in harmony with traditional hand techniques. Javier oversees each stage of creation, from initial design sketches to final hand-rubbed finishes. This hands-on approach ensures that every detail meets our exacting standards.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                We don't rush the process. Wood needs time to acclimate, joints need time to set properly, and finishes need time to cure. This patience results in furniture that will grace your home for generations—pieces your grandchildren will cherish as heirlooms.
              </p>

              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-6 mt-12">
                The connection between nature and art
              </h3>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                When you bring a Sol-Kin piece into your home, you're not just acquiring furniture—you're welcoming a fragment of the Mayan Jungle, transformed through artisan skill into functional art. The rich mahogany grain carries memories of tropical rains and ancient sunlight. The smooth curves reflect hours of careful shaping and sanding. The joinery speaks to a tradition of craftsmanship that values permanence over convenience.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                This is the Sol-Kin promise: furniture that honors its origins, celebrates the craftsman's art, and becomes an integral part of your life's most meaningful moments.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
