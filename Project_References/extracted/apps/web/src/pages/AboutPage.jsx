
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Javier's Furniture 13:20 — Son of the Sun, Master of Wood</title>
        <meta name="description" content="Discover Javier's journey from struggle to mastery in the Mayan Jungle. Craftsmanship as spiritual path. Furniture as ceremony. An initiative of Sol-Kin1320." />
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
                Son of the Sun — Artisan of the Jungle
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-3">
                Where passion, heritage, and awakening converge
              </p>
              <p className="text-base text-white/70 italic">
                Everything ends in 13:20
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
                  Javier's story begins not with learning something new, but with <em>remembering</em> what was always known. Born into the world of the Mayan Jungle — where ancient trees hold centuries of wisdom in their grain — he discovered his calling not through formal training alone, but through an inner recognition that the wood speaks, and it is up to the craftsman to listen.
                </p>

                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  His early years were not easy. The path moved through violence, struggle, and profound personal transformation. These were not detours from his journey — they were the crucible that forged his character. Through years of dedicated inner work, Javier moved from conflict toward integration. The chaos did not disappear; it became fuel. The pain became wisdom. The struggle became the teacher that the wood would later confirm.
                </p>

                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  Driven by deep respect for the forest and a commitment to sustainable sourcing, he learned the language of wood — understanding how each species responds to the craftsman's hand, how grain patterns carry memory, and how traditional joinery techniques honor both material and maker. Mortise and tenon, dovetails, hand-carved details: methods proven over centuries became his native tongue.
                </p>

                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  Javier's Furniture 13:20 was born from this journey — a workshop in Felipe Carrillo Puerto, Quintana Roo, where the warmth of the jungle meets the precision of artisan mastery. It stands as an initiative of <strong>Sol-Kin1320</strong>, the umbrella organization that gathers aligned creators, builders, and visionaries under one roof.
                </p>

                <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                  The name holds the map: <em>Sol</em> — the Sun, the light, the Creator's radiance, the source Javier calls his lineage as "Son of the Sun." <em>Kin</em> — family, community, the multidimensional consciousness awakening in matter. <em>1320</em> — the sacred signature woven into everything, the reminder that all things move toward their completion: <strong>everything ends in 13:20</strong>.
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
                alt="Javier crafting furniture in his Quintana Roo workshop"
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
                The 13:20 philosophy
              </h3>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                At the heart of every piece is a simple but profound conviction: the objects we live with are not neutral. They shape us. They influence our consciousness. A table built with integrity and care holds different energy than one made indifferently. Hands that work with love, respect, and skill create pieces that speak to something deeper in those who live with them.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Javier's five core values — <strong>Autonomy, Awakening, Artisanship, Creativity, and Integrity</strong> — are not marketing language. They are the lived architecture of his practice. Autonomy: to make what the wood calls for, not what the market demands. Awakening: to see each piece as a doorway for memory. Artisanship: to honor the ancient techniques that have proven their worth. Creativity: to bring genuine vision, not imitation. Integrity: to never compromise on what the work requires.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                The 13:20 signature is woven through everything. It is the reminder that all creation moves toward completion — that every piece of wood has its moment of becoming, every commission its moment of arrival. Everything ends in 13:20: not as a closure, but as a fulfillment.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                We source our tropical hardwoods exclusively from sustainably managed Mayan jungle forests. This is not a marketing statement — it is a spiritual commitment. The wood that arrives in your home carries the blessings of a land tended with care.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Our commitment to artisan heritage means honoring traditional joinery — mortise and tenon, dovetails, hand-carved details — methods that have proven their worth over centuries. These techniques create furniture that doesn't just last; it becomes stronger with time, developing a patina that tells the story of the lives lived around it.
              </p>

              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-6 mt-12">
                Handcrafted quality
              </h3>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Every Javier's Furniture 13:20 piece is handcrafted in our workshop in Felipe Carrillo Puerto, where modern precision tools work in harmony with traditional hand techniques. Javier personally oversees each stage of creation — from initial wood selection through final hand-rubbed finishes. This is not mass production. This is dedicated craftsmanship in service of something larger than profit.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                We don't rush the process. Wood needs time to acclimate. Joints need time to set properly. Finishes need time to cure. This patience — born from Javier's own journey of learning that transformation cannot be rushed — results in furniture that will grace your home for generations.
              </p>

              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground))] mb-6 mt-12">
                The connection between nature and art
              </h3>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                When you bring a Javier's Furniture 13:20 piece into your home, you are not just acquiring furniture — you are welcoming a fragment of the Mayan Jungle, transformed through artisan skill and intentional making into functional art. The rich mahogany grain carries memories of tropical rains and ancient sunlight. The smooth curves reflect hours of careful shaping. The joinery speaks to a tradition of craftsmanship that values permanence over convenience.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Craftsmanship, for Javier, is not separate from his spiritual path — it <em>is</em> his spiritual path. Each piece is ceremony. Each joint is intention made physical. Each finished surface is a remembrance that the Creator's hand moves through all genuine making.
              </p>

              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                This is the Javier's Furniture 13:20 promise: furniture that honors its origins, celebrates the craftsman's awakening, and becomes an integral part of your life's most meaningful moments. Everything ends in 13:20 — and in that completion, something beautiful endures.
              </p>

              <p className="text-sm text-[hsl(var(--muted-foreground))] italic mt-8">
                Javier's Furniture 13:20 is an initiative of Sol-Kin1320 — an umbrella organization bringing together aligned creators, builders, and visionaries in Quintana Roo and beyond.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
