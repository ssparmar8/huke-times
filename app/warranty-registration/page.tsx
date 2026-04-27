import type { Metadata } from 'next';
import WarrantyRegistration from '../../src/views/WarrantyRegistration';

export const metadata: Metadata = {
  title: 'Warranty Registration | Huke Times',
  description:
    'Register your Huke Times product warranty online. Quick and easy form for all watch and watch part purchases.',
  alternates: { canonical: 'https://www.huketimes.com/warranty-registration/' },
  openGraph: { url: 'https://www.huketimes.com/warranty-registration/' },
};

export default function WarrantyRegistrationPage() {
  return <WarrantyRegistration />;
}
