import { CheckCircle } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { companyInfo } from '../data/company';

interface ProductDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ProductDetail({ slug, onNavigate }: ProductDetailProps) {
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Product Not Found</h1>
          <button
            onClick={() => onNavigate('/products')}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
            <button onClick={() => onNavigate('/')} className="hover:text-[#1C1C1C]">
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/products')} className="hover:text-[#1C1C1C]">
              Products
            </button>
            <span>/</span>
            <span className="text-[#1C1C1C]">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="backdrop-blur-lg bg-white/80 border border-white/20 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="text-sm text-[#1C1C1C] font-semibold mb-2">
                {product.category === 'mens-watches' ? 'Mens Wrist Watch' : 'Watch Parts'}
              </div>
              <h1 className="text-4xl font-bold mb-6 text-[#1C1C1C]">{product.name}</h1>

              {/* Price & MOQ */}
              <div className="backdrop-blur-lg bg-[#FAFAFA]/90 border border-white/30 rounded-lg p-6 mb-6 shadow-lg">
                <div className="mb-4">
                  <div className="text-sm text-[#B0B0B0] mb-1">Price</div>
                  <div className="text-4xl font-bold text-[#1C1C1C]">
                    {product.price.currency}{product.price.min}
                    {product.price.max && ` - ${product.price.currency}${product.price.max}`}
                  </div>
                  <div className="text-[#B0B0B0]">per piece</div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-sm text-[#B0B0B0] mb-1">Minimum Order Quantity</div>
                  <div className="text-2xl font-bold text-[#1C1C1C]">{product.moq} Pieces</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-[#1C1C1C]">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={18} className="text-[#1C1C1C] mr-2 flex-shrink-0" />
                      <span className="text-[#B0B0B0]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full backdrop-blur-md bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105 shadow-lg"
                >
                  Send Enquiry
                </button>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full backdrop-blur-md bg-white/90 hover:bg-white border-2 border-[#1C1C1C] text-[#1C1C1C] font-bold py-4 px-6 rounded-lg transition text-center shadow-lg"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="block w-full backdrop-blur-md bg-white/90 hover:bg-white border border-white/40 text-[#1C1C1C] font-bold py-4 px-6 rounded-lg transition text-center shadow-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C]">Product Specifications</h2>
            <div className="backdrop-blur-lg bg-white/80 border border-white/20 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'}
                    >
                      <td className="px-6 py-4 font-semibold text-[#1C1C1C] border-r border-gray-100 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-[#B0B0B0]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#1C1C1C]">More Products</h2>
          <button
            onClick={() => onNavigate('/products')}
            className="backdrop-blur-md bg-[#1C1C1C] border border-[#2C2C2C] hover:bg-[#2C2C2C] text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
          >
            View All Products
          </button>
        </div>
      </section>
    </div>
  );
}
