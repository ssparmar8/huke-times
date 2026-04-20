import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    customerName: 'Kuldeep Gupta',
    product: 'Mens Premium Chain Wrist Watch',
    date: '05 Feb 2026',
    rating: 5,
    review: 'Most trusted products which are quite handy and useful, great quality'
  },
  {
    id: 2,
    customerName: 'Dev',
    product: 'Wrist Watch For Men',
    date: '30 Jan 2026',
    rating: 5,
    review: 'Quality workforce that helps you to get what you want, a pleasure to use your products'
  },
  {
    id: 3,
    customerName: 'Nagarajan',
    product: 'Mens Premium Leather Wrist Watch',
    date: '24 Jan 2026',
    rating: 5,
    review: 'Tech brilliance, setting new standards'
  },
  {
    id: 4,
    customerName: 'Semila',
    product: 'Mens Premium Leather Wrist Watch',
    date: '18 Jan 2026',
    rating: 4,
    responseRating: true,
    deliveryRating: true
  },
  {
    id: 5,
    customerName: 'Tirtha Ranjan SHAW',
    product: 'Wrist Watch Case With Steel Chain',
    date: '12 Jan 2026',
    rating: 4,
    responseRating: true,
    deliveryRating: true
  },
  {
    id: 6,
    customerName: 'Hemkaran Paraste',
    product: 'Mens Premium Chain Wrist Watch',
    date: '03 Jan 2026',
    rating: 5,
    responseRating: true,
    deliveryRating: true
  },
  {
    id: 7,
    customerName: 'Rishinath',
    product: 'Wrist Watch Case with Steel Chain',
    date: '26 Jul 2024',
    rating: 5,
    review: 'Awesome products! Great team!'
  }
];

export const testimonialStats = {
  averageRating: 4.7,
  totalReviews: 7,
  ratingBreakdown: {
    5: 5,
    4: 2,
    3: 0,
    2: 0,
    1: 0
  },
  userSatisfaction: 100,
  responseRating: 100,
  deliveryRating: 100
};
