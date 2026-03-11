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

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [productSlug, setProductSlug] = useState('');

  useEffect(() => {
    // Handle initial load and browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      
      // Extract product slug if on product detail page
      if (path.startsWith('/product/')) {
        const slug = path.replace('/product/', '');
        setProductSlug(slug);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
