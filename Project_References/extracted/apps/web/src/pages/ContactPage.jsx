
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Commission Your Piece — Javier's Furniture 13:20</title>
        <meta name="description" content="Collaborate with Javier to create bespoke furniture tailored to your vision. Contact Javier's Furniture 13:20 in Felipe Carrillo Puerto, Quintana Roo for custom commissions." />
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
                Commission your piece
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-3">
                Collaborate with Javier to bring your vision to life
              </p>
              <p className="text-base text-white/70 italic">
                Everything ends in 13:20
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commission Introduction */}
        <section className="py-16 bg-[hsl(var(--muted))]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                Bespoke commissions, personalized craftsmanship
              </h2>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                At Javier's Furniture 13:20, we believe your furniture should be as unique as your story. Whether you envision a dining table sized perfectly for your space, a custom bookshelf that holds your life's collection, or a one-of-a-kind piece born from pure imagination — Javier works closely with you from first conversation to final installation.
              </p>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed mb-6">
                Every bespoke commission begins with a conversation. Share your vision, your space requirements, your wood preferences, and together we'll create functional art that becomes a cherished part of your home for generations to come.
              </p>
              <p className="text-lg text-[hsl(var(--foreground))] leading-relaxed">
                Guided by Javier's values of Integrity and Artisanship, no corner is cut and no detail is rushed. When a piece arrives in your home, it arrives complete — 13:20.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                  Start your custom project
                </h2>
                <p className="text-lg text-[hsl(var(--foreground))] mb-8 leading-relaxed">
                  Tell us about your vision, your space, and your preferences. Javier will respond personally to discuss how we can bring your dream furniture to life through artisan craftsmanship.
                </p>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-8">
                    Contact information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                          Javier's Furniture 13:20 Workshop
                        </h3>
                        <p className="text-[hsl(var(--foreground))]">
                          Felipe Carrillo Puerto<br />
                          Quintana Roo, Mexico
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                          WhatsApp / Phone
                        </h3>
                        <p className="text-[hsl(var(--foreground))]">
                          Contact via email for WhatsApp details
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                          Email
                        </h3>
                        <p className="text-[hsl(var(--foreground))]">
                          javier@javiersfurniture1320.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(var(--muted))] rounded-xl p-6">
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-3">
                    Workshop hours
                  </h3>
                  <div className="space-y-2 text-[hsl(var(--foreground))]">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
                    Workshop visits by appointment only
                  </p>
                </div>

                <div className="bg-[hsl(var(--card))] border-2 border-[hsl(var(--primary))] rounded-xl p-6">
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-3">
                    The commission process
                  </h3>
                  <ol className="space-y-3 text-[hsl(var(--foreground))]">
                    <li className="flex gap-3">
                      <span className="font-bold text-[hsl(var(--primary))]">1.</span>
                      <span>Initial consultation to discuss your vision and requirements</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[hsl(var(--primary))]">2.</span>
                      <span>Design sketches and material selection</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[hsl(var(--primary))]">3.</span>
                      <span>Handcrafted creation in our workshop</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[hsl(var(--primary))]">4.</span>
                      <span>Final finishing and quality inspection</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-[hsl(var(--primary))]">5.</span>
                      <span>Delivery and installation in your home</span>
                    </li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
