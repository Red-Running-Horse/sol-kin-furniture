/**
 * Cloudinary Image Optimization Utilities
 * Handles all image transformations and URL generation
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Generate optimized Cloudinary URL with transformations
 */
export const generateCloudinaryUrl = (publicId, options = {}) => {
  const {
    width = 800,
    height = null,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
    dpr = 'auto',
    fetch_format = 'auto',
    responsive = true,
  } = options;

  let transforms = [];

  if (responsive && width) {
    transforms.push(`w_${width}`);
  }

  if (height) {
    transforms.push(`h_${height}`);
  }

  if (crop) {
    transforms.push(`c_${crop}`);
  }

  if (gravity) {
    transforms.push(`g_${gravity}`);
  }

  transforms.push(`q_${quality}`);
  transforms.push(`f_${fetch_format}`);

  if (dpr) {
    transforms.push(`dpr_${dpr}`);
  }

  const transformString = transforms.join(',');

  return `${CLOUDINARY_URL}/image/upload/${transformString}/sol-kin-furniture/${publicId}`;
};

/**
 * Generate responsive image sizes for srcset
 */
export const generateResponsiveSrcset = (publicId) => {
  const sizes = [400, 600, 800, 1000, 1200, 1600];

  const srcset = sizes
    .map((size) => {
      const url = generateCloudinaryUrl(publicId, {
        width: size,
        quality: 'auto',
        format: 'auto',
      });
      return `${url} ${size}w`;
    })
    .join(', ');

  const sizes_attr = '(max-width: 600px) 100vw, (max-width: 1000px) 80vw, 1200px';

  return { srcset, sizes: sizes_attr };
};

/**
 * Generate hero image URL
 */
export const generateHeroUrl = (publicId) => {
  return generateCloudinaryUrl(publicId, {
    width: 1600,
    height: 900,
    crop: 'fill',
    gravity: 'auto',
    quality: 'auto',
    format: 'auto',
  });
};

/**
 * Generate product image URL
 */
export const generateProductUrl = (publicId) => {
  return generateCloudinaryUrl(publicId, {
    width: 1000,
    height: 800,
    crop: 'fill',
    gravity: 'auto',
    quality: 'auto',
    format: 'auto',
  });
};

export default {
  generateCloudinaryUrl,
  generateResponsiveSrcset,
  generateHeroUrl,
  generateProductUrl,
};