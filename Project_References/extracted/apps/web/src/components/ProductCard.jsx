
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button.jsx';
import Lightbox from '@/components/Lightbox.jsx';

const ProductCard = ({ 
  image, 
  woodType, 
  dimensions, 
  price, 
  productName,
  description,
  finish = 'Hand-rubbed oil finish',
  care = 'Clean with soft cloth, avoid harsh chemicals',
  gallery = []
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  const galleryImages = gallery.length > 0 ? gallery : (image ? [image] : []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group bg-[hsl(var(--card))] border-2 border-[hsl(var(--primary))] rounded-xl overflow-hidden hover-shadow-increase transition-all duration-300 w-full"
      >
        <div 
          className="relative overflow-hidden aspect-[4/3] cursor-pointer"
          onClick={() => setShowLightbox(true)}
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          {image ? (
            <img 
              src={image} 
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-[hsl(var(--muted))] flex items-center justify-center">
              <span className="text-[hsl(var(--muted-foreground))]">Product Image</span>
            </div>
          )}
          
          <div className="absolute top-4 left-4">
            <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-3 py-1 rounded-md text-sm font-medium">
              {woodType}
            </span>
          </div>

          {/* Details Overlay - Desktop hover / Mobile tap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showDetails ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end p-6 ${
              showDetails ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
          >
            <div className="text-[hsl(var(--accent))] space-y-2">
              <p className="text-sm font-medium">Material: {woodType}</p>
              <p className="text-sm">Dimensions: {dimensions}</p>
              <p className="text-sm">Finish: {finish}</p>
              <p className="text-sm">Care: {care}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="p-4 md:p-6 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--card-foreground))]">
            {productName}
          </h3>
          
          {description && (
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
              {description}
            </p>
          )}
          
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
            {dimensions}
          </p>
          
          <div className="flex items-center justify-between mb-4 mt-auto">
            <span className="text-2xl font-bold text-[hsl(var(--accent))]">
              {price === 'Quote' ? 'Request Quote' : `$${price}`}
            </span>
          </div>
          
          <Button 
            variant="primary" 
            className="w-full touch-target"
          >
            {price === 'Quote' ? 'Inquire' : 'Add to Cart'}
          </Button>
        </div>
      </motion.div>

      {showLightbox && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          initialIndex={0}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
