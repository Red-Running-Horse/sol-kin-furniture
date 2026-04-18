/**
 * OptimizedImage Component
 * Displays responsive, optimized images from Cloudinary
 */

import React from 'react';
import { generateResponsiveSrcset, generateCloudinaryUrl } from '@/utils/cloudinary';

export const OptimizedImage = ({
  publicId,
  alt,
  width = 800,
  height = null,
  className = '',
  objectFit = 'cover',
  loading = 'lazy',
  crop = 'fill',
  gravity = 'auto',
  quality = 'auto',
}) => {
  const { srcset, sizes } = generateResponsiveSrcset(publicId);
  const fallbackUrl = generateCloudinaryUrl(publicId, {
    width,
    height,
    crop,
    gravity,
    quality,
  });

  return (
    <picture>
      <source
        srcSet={srcset.replace(/\.jpg/g, '.webp')}
        sizes={sizes}
        type="image/webp"
      />

      <img
        src={fallbackUrl}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        style={{ objectFit }}
      />
    </picture>
  );
};

export default OptimizedImage;