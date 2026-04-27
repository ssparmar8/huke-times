import type { Metadata } from 'next';
import WarrantyRegistration from '../../src/views/WarrantyRegistration';

const title = 'Warranty Registration | Huke Times';
const description =
  'Register your Huke Times product warranty online. Quick and easy form for all watch and watch part purchases.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/warranty-registration/' },
  openGraph: {
    url: 'https://www.huketimes.com/warranty-registration/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function WarrantyRegistrationPage() {
  return <WarrantyRegistration />;
}
