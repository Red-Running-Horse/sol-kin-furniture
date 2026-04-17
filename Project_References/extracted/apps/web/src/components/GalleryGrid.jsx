
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '@/components/Lightbox.jsx';

const GalleryGrid = ({ galleryItems = [] }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = galleryItems
    .filter(item => item.image)
    .map(item => item.image);

  const handleImageClick = (index) => {
    const imageIndex = galleryItems
      .slice(0, index + 1)
      .filter(item => item.image).length - 1;
    setLightboxIndex(imageIndex);
    setShowLightbox(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
            onClick={() => item.image && handleImageClick(index)}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-[hsl(var(--muted))] flex items-center justify-center">
                <span className="text-[hsl(var(--muted-foreground))]">Gallery Image</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {showLightbox && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
};

export default GalleryGrid;
