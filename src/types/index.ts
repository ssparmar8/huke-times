// Type definitions for Huke Times LLP website

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'mens-watches' | 'watch-parts';
  price: {
    min: number;
    max?: number;
    currency: string;
  };
  moq: number;
  images: string[];
  specifications: ProductSpecification[];
  description?: string;
  features: string[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Testimonial {
  id: number;
  customerName: string;
  product: string;
  date: string;
  rating: number;
  review?: string;
  responseRating?: boolean;
  deliveryRating?: boolean;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  established: number;
  website: string;
  email: string;
  whatsapp: string;
  phone: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  ceos: string[];
  employees: string;
  annualTurnover: string;
  marketCovered: string;
  natureOfBusiness: string;
  legalStatus: string;
}


