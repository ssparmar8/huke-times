import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'premium-chain-watch',
    name: 'Mens Premium Chain Wrist Watch',
    slug: 'mens-premium-chain-wrist-watch',
    category: 'mens-watches',
    price: {
      min: 310,
      currency: '₹'
    },
    moq: 2000,
    images: [
      '/watch-images/watch-17.jpg',
      '/watch-images/watch-20.jpg',
      '/watch-images/watch-22.jpg',
      '/watch-images/watch-24.jpg',
    ],
    specifications: [
      { label: 'Brand Name', value: 'Huke Times' },
      { label: 'Strap Material', value: 'Stainless Steel' },
      { label: 'Dial Material', value: 'Stainless Steel' },
      { label: 'Strap Color', value: 'As per requirement' },
      { label: 'Dialer Shape', value: 'Round' },
      { label: 'Display Type', value: 'Analog' },
      { label: 'Occasion', value: 'Party Wear, Casual Wear' },
      { label: 'Type', value: 'Fancy Wrist Watches' },
      { label: 'Gender', value: 'For mens' },
      { label: 'Touch Screen', value: 'No' },
      { label: 'Strap Finishing', value: 'Coated' },
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'India' }
    ],
    features: [
      'Seamless Design',
      'Scratch Proof',
      'Rust Free',
      'Fine Finish',
      'Good Quality'
    ]
  },
  {
    id: 'premium-leather-watch',
    name: 'Mens Premium Leather Wrist Watch',
    slug: 'mens-premium-leather-wrist-watch',
    category: 'mens-watches',
    price: {
      min: 100,
      max: 300,
      currency: '₹'
    },
    moq: 2000,
    images: [
      '/watch-images/watch-31.jpg',
      '/watch-images/watch-30.jpg',
      '/watch-images/watch-18.jpg',
      '/watch-images/watch-29.jpg',
    ],
    specifications: [
      { label: 'Brand Name', value: 'Huke Times' },
      { label: 'Strap Material', value: 'Leather' },
      { label: 'Dial Material', value: 'Metal' },
      { label: 'Strap Color', value: 'As per requirement' },
      { label: 'Dialer Shape', value: 'Round' },
      { label: 'Display Type', value: 'Analog' },
      { label: 'Occasion', value: 'Party Wear, Official Wear, Casual Wear' },
      { label: 'Type', value: 'Fancy Wrist Watches' },
      { label: 'Gender', value: 'For Men' },
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'India' }
    ],
    features: [
      'Seamless Design',
      'Scratch Proof',
      'Good Quality'
    ]
  },
  {
    id: 'stainless-steel-watch',
    name: 'Mens Stainless Steel Wrist Watch',
    slug: 'mens-stainless-steel-wrist-watch',
    category: 'mens-watches',
    price: {
      min: 100,
      currency: '₹'
    },
    moq: 2000,
    images: [
      '/watch-images/watch-19.jpg',
      '/watch-images/watch-28.jpg',
      '/watch-images/watch-21.jpg',
    ],
    specifications: [
      { label: 'Brand Name', value: 'Huke Times' },
      { label: 'Strap Material', value: 'Stainless Steel' },
      { label: 'Dial Material', value: 'Stainless Steel' },
      { label: 'Strap Color', value: 'As per requirement' },
      { label: 'Dialer Shape', value: 'Round' },
      { label: 'Display Type', value: 'Analog' },
      { label: 'Occasion', value: 'Party Wear, Official Wear, Casual Wear' },
      { label: 'Type', value: 'Fancy Wrist Watches' },
      { label: 'Gender', value: 'For mens' },
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'India' }
    ],
    features: [
      'Seamless Design',
      'Scratch Proof',
      'Rust Free',
      'Fine Finish',
      'Good Quality'
    ]
  },
  {
    id: 'watch-case',
    name: 'Wrist Watch Case',
    slug: 'wrist-watch-case',
    category: 'watch-parts',
    price: {
      min: 20,
      max: 70,
      currency: '₹'
    },
    moq: 2000,
    images: [
      '/watch-images/watch-16.jpg',
      '/watch-images/watch-01.jpg',
      '/watch-images/watch-02.jpg',
    ],
    specifications: [
      { label: 'Brand', value: 'Huke Times' },
      { label: 'Shape', value: 'Round, Square' },
      { label: 'Color', value: 'As Per Requirement' },
      { label: 'Gender', value: 'For Male & Female' },
      { label: 'Display Type', value: 'Analog' },
      { label: 'Type', value: 'Watch Dials' },
      { label: 'Appearance', value: 'Modern' },
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'India' }
    ],
    features: [
      'Fine Finish',
      'Rust Free',
      'Scratch Proof',
      'Seamless Design',
      'Waterproof'
    ]
  },
  {
    id: 'watch-case-steel-chain',
    name: 'Wrist Watch Case with Steel Chain',
    slug: 'wrist-watch-case-with-steel-chain',
    category: 'watch-parts',
    price: {
      min: 60,
      max: 150,
      currency: '₹'
    },
    moq: 2000,
    images: [
      '/watch-images/watch-03.jpg',
      '/watch-images/watch-04.jpg',
      '/watch-images/watch-05.jpg',
    ],
    specifications: [
      { label: 'Brand', value: 'Huke Times' },
      { label: 'Material', value: 'Steel' },
      { label: 'Color', value: 'As per Requirement' },
      { label: 'Gender', value: 'For Male & Female' },
      { label: 'Condition', value: 'New' },
      { label: 'Country of Origin', value: 'India' }
    ],
    features: [
      'Elegant Attraction',
      'Great Design',
      'Rust Free',
      'Seamless Design',
      'Waterproof'
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: 'mens-watches' | 'watch-parts'): Product[] => {
  return products.filter(p => p.category === category);
};
