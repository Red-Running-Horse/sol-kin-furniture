/**
 * Cloudinary image map for Javier's Furniture 13:20
 * Cloud: dcxtflxbp
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dcxtflxbp';

export const cloudinaryUrl = (publicId, transforms = 'w_800,h_600,c_fill,q_auto,f_auto') =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;

export const IMAGES = {
  HERO: {
    main:      'sol-kin-furniture/PXL_20260326_232015464',
    workshop:  'sol-kin-furniture/PXL_20260326_232006416',
    workshop2: 'sol-kin-furniture/PXL_20260326_232006416~2',
    detail:    'sol-kin-furniture/PXL_20260326_232035111',
    outdoor:   'sol-kin-furniture/PXL_20260326_232028281',
  },

  PRODUCTS: {
    diningTable1:  'sol-kin-furniture/PXL_20260325_183505449~2',
    diningTable2:  'sol-kin-furniture/PXL_20260325_183556934~2',
    bench:         'sol-kin-furniture/PXL_20260325_195441089~2',
    coffeeTable:   'sol-kin-furniture/PXL_20260325_200058535',
    seating1:      'sol-kin-furniture/PXL_20260325_200217478',
    seating2:      'sol-kin-furniture/PXL_20260325_200229546',
    finishedPiece: 'sol-kin-furniture/PXL_20260326_024554084',
    finishedPiece2:'sol-kin-furniture/PXL_20260326_024554084~2',
    piece3:        'sol-kin-furniture/PXL_20260326_024734393',
    piece4:        'sol-kin-furniture/PXL_20260326_024758085',
    whatsapp1:     'sol-kin-furniture/IMG-20260327-WA0003(1)',
  },

  PROCESS: {
    woodworking:  'sol-kin-furniture/PXL_20260325_194526988~2',
    craft1:       'sol-kin-furniture/PXL_20260325_195518672',
    craft2:       'sol-kin-furniture/PXL_20260325_195550761',
    craft3:       'sol-kin-furniture/PXL_20260325_195550761~2',
    craft4:       'sol-kin-furniture/PXL_20260325_195550761~3',
    craft5:       'sol-kin-furniture/PXL_20260325_195645092',
    craft6:       'sol-kin-furniture/PXL_20260325_195708128',
    craft7:       'sol-kin-furniture/PXL_20260325_195708128~2',
    craft8:       'sol-kin-furniture/PXL_20260325_195717616',
    detail1:      'sol-kin-furniture/PXL_20260325_200112710~2',
    detail2:      'sol-kin-furniture/PXL_20260325_200121943~2',
    detail3:      'sol-kin-furniture/PXL_20260325_200155098~2',
  },

  GALLERY: [
    { id: 'sol-kin-furniture/PXL_20260326_024446434',      title: 'Artisan Detail',       description: 'Hand-carved joinery showcasing master craftsmanship' },
    { id: 'sol-kin-furniture/PXL_20260326_024454022',      title: 'Natural Wood Grain',   description: 'Rich mahogany grain patterns from the Mayan jungle' },
    { id: 'sol-kin-furniture/PXL_20260326_024554084',      title: 'Finished Masterpiece', description: 'A completed piece ready to grace your home' },
    { id: 'sol-kin-furniture/PXL_20260326_024734393',      title: 'Workshop Creation',    description: 'Javier at work in his Quintana Roo studio' },
    { id: 'sol-kin-furniture/PXL_20260326_024758085',      title: 'Exotic Hardwood',      description: 'Sustainably sourced tropical wood in its finest form' },
    { id: 'sol-kin-furniture/PXL_20260326_231958406',      title: 'Surface Finish',       description: 'Hand-rubbed natural oils bring out the beauty of the wood' },
  ],
};

export default IMAGES;
