import { useState, useEffect } from 'react';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';
import FAQs from '../pages/FAQs';
import WatchCare from '../pages/WatchCare';
import WarrantyRegistration from '../pages/WarrantyRegistration';
import Warranty from '../pages/Warranty';
import Sustainability from '../pages/Sustainability';
import Careers from '../pages/Careers';
import Blog from '../pages/Blog';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ShippingPolicy from '../pages/ShippingPolicy';
import RefundPolicy from '../pages/RefundPolicy';
import { products } from '../data/products';

const SEO_MAP: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Huke Times – Premium Wrist Watch Manufacturer & Supplier | Rajkot, Gujarat',
    description: 'Huke Times LLP is a leading manufacturer and supplier of premium men\'s wrist watches and watch parts in Rajkot, Gujarat, India. Bulk orders welcome. MOQ from 2000 pcs.',
  },
  '/products': {
    title: 'Products – Wrist Watches & Watch Parts | Huke Times',
    description: 'Browse our full range of premium men\'s wrist watches and precision watch parts. Wholesale and bulk orders available from Huke Times, Rajkot.',
  },
  '/about': {
    title: 'About Us – Huke Times LLP | Watch Manufacturer in Rajkot',
    description: 'Learn about Huke Times LLP – a Rajkot-based manufacturer and supplier of premium wrist watches established in 2022. ISO quality, 500+ B2B clients, Pan India delivery.',
  },
  '/contact': {
    title: 'Contact Us – Get a Bulk Order Quote | Huke Times',
    description: 'Get in touch with Huke Times for bulk watch orders, pricing and trade enquiries. Based in Rajkot, Gujarat. Call +91 9574555399 or email huketimes@gmail.com.',
  },
  '/blog': {
    title: 'Blog – Watch Insights & Trade News | Huke Times',
    description: 'Read the latest watch industry news, sourcing guides, and product updates from Huke Times – India\'s trusted wrist watch manufacturer.',
  },
  '/testimonials': {
    title: 'Customer Reviews & Testimonials | Huke Times',
    description: 'See what our customers say about Huke Times wrist watches. Real reviews from B2B buyers and retailers across India.',
  },
  '/faqs': {
    title: 'FAQs – Frequently Asked Questions | Huke Times',
    description: 'Answers to common questions about ordering, shipping, MOQ, customisation and more from Huke Times LLP.',
  },
  '/watch-care': {
    title: 'Watch Care Guide – Maintain Your Timepiece | Huke Times',
    description: 'Expert tips on cleaning, storing and maintaining your wrist watch for long-lasting performance from Huke Times.',
  },
  '/warranty': {
    title: 'Warranty Policy | Huke Times',
    description: 'Understand the warranty coverage offered by Huke Times LLP on all wrist watches and watch parts.',
  },
  '/warranty-registration': {
    title: 'Warranty Registration | Huke Times',
    description: 'Register your Huke Times product warranty online. Quick and easy form for all watch and watch part purchases.',
  },
  '/sustainability': {
    title: 'Sustainability – Our Commitment to the Environment | Huke Times',
    description: 'Huke Times is committed to responsible manufacturing and sustainable practices in watch production.',
  },
  '/careers': {
    title: 'Careers – Join Our Team | Huke Times',
    description: 'Explore career opportunities at Huke Times LLP in Rajkot, Gujarat. Join our growing team of watchmakers and professionals.',
  },
  '/privacy': {
    title: 'Privacy Policy | Huke Times',
    description: 'Read the privacy policy of Huke Times LLP to understand how we collect, use and protect your data.',
  },
  '/shipping': {
    title: 'Shipping Policy | Huke Times',
    description: 'Learn about our shipping methods, delivery timelines and logistics for bulk wrist watch orders across India.',
  },
  '/refunds': {
    title: 'Refund & Return Policy | Huke Times',
    description: 'Huke Times refund and return policy for wholesale watch purchases. Review terms before placing a bulk order.',
  },
};

function setPageMeta(title: string, description: string) {
  document.title = title;
  let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);
  let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  let twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);
  let twitterDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', description);
}

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [productSlug, setProductSlug] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      if (path.startsWith('/product/')) {
        const slug = path.replace('/product/', '');
        setProductSlug(slug);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title + meta on every route change
  useEffect(() => {
    if (currentPath.startsWith('/product/')) {
      const product = products.find(p => p.slug === productSlug);
      if (product) {
        setPageMeta(
          `${product.name} – Huke Times | Buy Wholesale`,
          `Buy ${product.name} in bulk from Huke Times LLP, Rajkot. Starting at ${product.price.currency}${product.price.min}. MOQ: ${product.moq} pcs. Premium quality, Pan India delivery.`
        );
      }
    } else {
      const seo = SEO_MAP[currentPath] ?? SEO_MAP['/'];
      setPageMeta(seo.title, seo.description);
    }
  }, [currentPath, productSlug]);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Extract product slug if navigating to product detail
    if (path.startsWith('/product/')) {
      const slug = path.replace('/product/', '');
      setProductSlug(slug);
    }
  };

  const renderPage = () => {
    if (currentPath.startsWith('/product/')) {
      return <ProductDetail slug={productSlug} onNavigate={navigate} />;
    }

    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/about':
        return <About />;
      case '/products':
        return <Products onNavigate={navigate} />;
      case '/contact':
        return <Contact />;
      case '/testimonials':
        return <Testimonials />;
      case '/faqs':
        return <FAQs />;
      case '/watch-care':
        return <WatchCare />;
      case '/warranty-registration':
        return <WarrantyRegistration />;
      case '/warranty':
        return <Warranty />;
      case '/sustainability':
        return <Sustainability />;
      case '/careers':
        return <Careers />;
      case '/blog':
        return <Blog />;
      case '/privacy':
        return <PrivacyPolicy />;
      case '/shipping':
        return <ShippingPolicy />;
      case '/refunds':
        return <RefundPolicy />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPath={currentPath} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
}

export default App
