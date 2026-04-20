import { useState, useEffect, lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import { products } from '../data/products';

const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Contact = lazy(() => import('../pages/Contact'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const FAQs = lazy(() => import('../pages/FAQs'));
const WatchCare = lazy(() => import('../pages/WatchCare'));
const WarrantyRegistration = lazy(() => import('../pages/WarrantyRegistration'));
const Warranty = lazy(() => import('../pages/Warranty'));
const Sustainability = lazy(() => import('../pages/Sustainability'));
const Careers = lazy(() => import('../pages/Careers'));
const Blog = lazy(() => import('../pages/Blog'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const ShippingPolicy = lazy(() => import('../pages/ShippingPolicy'));
const RefundPolicy = lazy(() => import('../pages/RefundPolicy'));

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

function setPageMeta(title: string, description: string, path: string) {
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
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `https://www.huketimes.in${path}`);
  let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', `https://www.huketimes.in${path}`);
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
          `Buy ${product.name} in bulk from Huke Times LLP, Rajkot. Starting at ${product.price.currency}${product.price.min}. MOQ: ${product.moq} pcs. Premium quality, Pan India delivery.`,
          currentPath
        );
      }
    } else {
      const seo = SEO_MAP[currentPath] ?? SEO_MAP['/'];
      setPageMeta(seo.title, seo.description, currentPath);
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
        return <About onNavigate={navigate} />;
      case '/products':
        return <Products onNavigate={navigate} />;
      case '/contact':
        return <Contact onNavigate={navigate} />;
      case '/testimonials':
        return <Testimonials onNavigate={navigate} />;
      case '/faqs':
        return <FAQs onNavigate={navigate} />;
      case '/watch-care':
        return <WatchCare onNavigate={navigate} />;
      case '/warranty-registration':
        return <WarrantyRegistration onNavigate={navigate} />;
      case '/warranty':
        return <Warranty onNavigate={navigate} />;
      case '/sustainability':
        return <Sustainability onNavigate={navigate} />;
      case '/careers':
        return <Careers onNavigate={navigate} />;
      case '/blog':
        return <Blog onNavigate={navigate} />;
      case '/privacy':
        return <PrivacyPolicy onNavigate={navigate} />;
      case '/shipping':
        return <ShippingPolicy onNavigate={navigate} />;
      case '/refunds':
        return <RefundPolicy onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPath={currentPath} onNavigate={navigate}>
      <Suspense fallback={<div className="min-h-screen" />}>
        {renderPage()}
      </Suspense>
    </Layout>
  );
}

export default App
