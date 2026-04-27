import type { Metadata } from 'next';
import FAQs from '../../src/views/FAQs';

const title = 'FAQs – Frequently Asked Questions | Huke Times';
const description =
  'Answers to common questions about ordering, shipping, MOQ, customisation and more from Huke Times LLP.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.huketimes.com/faqs/' },
  openGraph: {
    url: 'https://www.huketimes.com/faqs/',
    title,
    description,
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the minimum order quantity?', acceptedAnswer: { '@type': 'Answer', text: 'Our minimum order quantity varies by product. For wrist watches, the MOQ is typically 500–2000 pieces. Contact us for specific product MOQs.' } },
    { '@type': 'Question', name: 'Do you offer pan-India delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we deliver across India through reliable logistics partners. Delivery timelines vary by location, typically 5–10 business days.' } },
    { '@type': 'Question', name: 'Is shipping free?', acceptedAnswer: { '@type': 'Answer', text: 'Shipping charges depend on order size and destination. For bulk orders above a certain threshold, we offer free shipping. Contact us for details.' } },
    { '@type': 'Question', name: 'Can I track my order?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, once your order is dispatched, you will receive a tracking number via email and WhatsApp.' } },
    { '@type': 'Question', name: 'What is your return policy?', acceptedAnswer: { '@type': 'Answer', text: 'We accept returns within 7 days of delivery for manufacturing defects. Products must be in original, unused condition with packaging intact.' } },
    { '@type': 'Question', name: 'How do I initiate a return?', acceptedAnswer: { '@type': 'Answer', text: 'Contact us via email at huketimes@gmail.com or WhatsApp within 7 days of receiving your order. Include your order details and photographs of the defect.' } },
    { '@type': 'Question', name: 'When will I receive my refund?', acceptedAnswer: { '@type': 'Answer', text: 'Refunds are processed within 7–10 business days after we receive and inspect the returned products.' } },
    { '@type': 'Question', name: 'What warranty do your watches come with?', acceptedAnswer: { '@type': 'Answer', text: 'All Huke Times watches come with a 1-year manufacturer warranty covering defects in materials and workmanship.' } },
    { '@type': 'Question', name: 'What does the warranty cover?', acceptedAnswer: { '@type': 'Answer', text: 'The warranty covers manufacturing defects, movement issues, and component failures under normal use. It does not cover physical damage, water damage beyond the stated resistance, or battery replacement.' } },
    { '@type': 'Question', name: 'How do I claim warranty?', acceptedAnswer: { '@type': 'Answer', text: 'Contact us with proof of purchase, product details, and a description/photographs of the issue. We will guide you through the warranty claim process.' } },
    { '@type': 'Question', name: 'How should I clean my watch?', acceptedAnswer: { '@type': 'Answer', text: 'Use a soft, dry or slightly damp cloth to wipe the case and strap. Avoid harsh chemicals or abrasive materials. For metal bracelets, a soft toothbrush with mild soapy water can be used.' } },
    { '@type': 'Question', name: 'Is my watch water resistant?', acceptedAnswer: { '@type': 'Answer', text: "Water resistance varies by model. Check the product specifications for your watch's water resistance rating. Unless stated otherwise, avoid submerging in water." } },
    { '@type': 'Question', name: 'How often should I service my watch?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend servicing your mechanical or automatic watch every 3–5 years. Quartz watches typically need battery replacement every 1–3 years.' } },
    { '@type': 'Question', name: 'What payment methods do you accept?', acceptedAnswer: { '@type': 'Answer', text: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI, cheques, and demand drafts for bulk orders. Contact us to discuss payment terms for large orders.' } },
    { '@type': 'Question', name: 'Do you offer bulk pricing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer competitive pricing for bulk and wholesale orders. The price per unit decreases with higher order quantities. Contact us for a custom quote.' } },
    { '@type': 'Question', name: 'Do you offer credit terms for regular buyers?', acceptedAnswer: { '@type': 'Answer', text: 'We offer credit terms to established business partners based on order history and creditworthiness. Get in touch to discuss terms.' } },
  ],
};

export default function FAQsPage() {
  return (
    <>
      <FAQs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
