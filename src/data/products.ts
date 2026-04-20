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
      'https://images.unsplash.com/photo-1584378687113-8739c327634c?w=800&q=80',
      'https://images.unsplash.com/photo-1572107679093-7a81fcbb7705?w=800&q=80',
      'https://images.unsplash.com/photo-1589553557938-d4c3ce169d52?w=800&q=80'
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
      'https://images.unsplash.com/photo-1599681906464-ec599150575b?w=800&q=80',
      'https://images.unsplash.com/photo-1545038110-400f683aa1de?w=800&q=80',
      'https://images.unsplash.com/photo-1605930039769-1d626ba74eae?w=800&q=80',
      'https://images.unsplash.com/photo-1694562383035-3b527733e995?w=800&q=80'
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
      'https://images.unsplash.com/photo-1767009951305-5ed35f62e3c3?w=800&q=80',
      'https://images.unsplash.com/photo-1568154106189-717dc85b0a3b?w=800&q=80',
      'https://images.unsplash.com/photo-1589553557938-d4c3ce169d52?w=800&q=80'
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
      'https://images.unsplash.com/photo-1572107679093-7a81fcbb7705?w=800&q=80',
      'https://images.unsplash.com/photo-1587925358712-091b5ff6cd84?w=800&q=80',
      'https://images.unsplash.com/photo-1731700538481-8418639c5f1a?w=800&q=80'
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
      'https://images.unsplash.com/photo-1584378687113-8739c327634c?w=800&q=80',
      'https://images.unsplash.com/photo-1589553557938-d4c3ce169d52?w=800&q=80',
      'https://images.unsplash.com/photo-1568154106189-717dc85b0a3b?w=800&q=80'
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
