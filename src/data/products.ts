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
      'https://images.unsplash.com/photo-1629581073069-7bf0ec7bb37f?w=800&q=80',
      'https://images.unsplash.com/photo-1612305604437-af2abfa9fa8d?w=800&q=80',
      'https://images.unsplash.com/photo-1735352246756-1abb2a4ba09c?w=800&q=80'
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
      'https://images.unsplash.com/photo-1630552237339-9520955b603c?w=800&q=80',
      'https://images.unsplash.com/photo-1602479152858-12238c0d691c?w=800&q=80',
      'https://images.unsplash.com/photo-1534347384071-7f5802bf42a9?w=800&q=80',
      'https://images.unsplash.com/photo-1605398821964-4d03102140f8?w=800&q=80'
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
      'https://images.unsplash.com/photo-1629581069407-a3350f1f5dd6?w=800&q=80',
      'https://images.unsplash.com/photo-1617265859824-46910d1ad447?w=800&q=80',
      'https://images.unsplash.com/photo-1705888532119-0c6a5092947a?w=800&q=80'
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
      'https://images.unsplash.com/photo-1548907228-419a3f3d11d0?w=800&q=80',
      'https://images.unsplash.com/photo-1568661403059-8e4374bc9e04?w=800&q=80',
      'https://images.unsplash.com/photo-1492065438790-d3c90cbc6e57?w=800&q=80'
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
      'https://images.unsplash.com/photo-1590929382053-747686bfab75?w=800&q=80',
      'https://images.unsplash.com/photo-1583312572805-32ece488eb6e?w=800&q=80',
      'https://images.unsplash.com/photo-1559532276-dc6c87230a31?w=800&q=80'
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
