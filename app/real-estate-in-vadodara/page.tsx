import { getBusinessBySlug } from "@/lib/business-config";
import { realEstateKeywords } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessHeroSlider } from "@/components/business-hero-slider";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { Building2, Home, Store, Factory, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate in Vadodara | Buy, Sell & Rent Properties",
  description: "Find the best real estate services in Vadodara. Buy flats, apartments, houses, villas, commercial property, shops & office spaces. Trusted property consultants.",
  keywords: "Real Estate Vadodara, Property Vadodara, Flats for Sale Vadodara, Commercial Property Vadodara, Buy Property Vadodara",
};

export default function RealEstateInVadodaraPage() {
  const business = getBusinessBySlug("real-estate");
  
  if (!business) {
    notFound();
  }

  const content = getBusinessContent("real-estate", "vadodara");

  // Group keywords by category
  const residentialKeywords = realEstateKeywords.filter(k => 
    k.slug.includes('flat') || k.slug.includes('apartment') || k.slug.includes('house') || 
    k.slug.includes('villa') || k.slug.includes('residential') || k.slug.includes('bhk')
  );
  
  const commercialKeywords = realEstateKeywords.filter(k => 
    k.slug.includes('commercial') || k.slug.includes('office') || k.slug.includes('shop') || 
    k.slug.includes('showroom') || k.slug.includes('industrial')
  );
  
  const servicesKeywords = realEstateKeywords.filter(k => 
    k.slug.includes('consultant') || k.slug.includes('agent') || k.slug.includes('buy-property') ||
    k.slug.includes('real-estate-in-vadodara') || k.slug.includes('real-estate-near')
  );

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea="vadodara" />
      
      {/* Hero Slider */}
      <BusinessHeroSlider 
        business={business} 
        area="vadodara" 
        heroTitle="Real Estate in Vadodara"
        heroSubtitle="Your Trusted Partner for Property Buying, Selling & Renting in Vadodara"
      />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Complete Real Estate Services in Vadodara
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Whether you're looking to buy your dream home, invest in commercial property, or find the perfect rental, 
            we have all the real estate solutions you need in Vadodara.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Residential Property</h3>
              <p className="text-gray-600 text-sm mb-4">Flats, apartments, houses, villas & independent homes</p>
              <span className="text-blue-600 font-semibold">{residentialKeywords.length}+ Options</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Commercial Property</h3>
              <p className="text-gray-600 text-sm mb-4">Offices, shops, showrooms & retail spaces</p>
              <span className="text-green-600 font-semibold">{commercialKeywords.length}+ Options</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Factory className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Industrial Property</h3>
              <p className="text-gray-600 text-sm mb-4">Factories, warehouses & industrial plots</p>
              <span className="text-orange-600 font-semibold">Multiple Options</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Property Consultants</h3>
              <p className="text-gray-600 text-sm mb-4">Expert guidance for all property needs</p>
              <span className="text-purple-600 font-semibold">Verified Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Home className="w-8 h-8 text-blue-600" />
            Residential Properties in Vadodara
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {residentialKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/real-estate-in-vadodara/${keyword.slug}`}
                className="group p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {keyword.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{keyword.metaDescription}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-green-600" />
            Commercial Properties in Vadodara
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/real-estate-in-vadodara/${keyword.slug}`}
                className="group p-4 bg-white border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {keyword.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{keyword.metaDescription}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Store className="w-8 h-8 text-purple-600" />
            Real Estate Services in Vadodara
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/real-estate-in-vadodara/${keyword.slug}`}
                className="group p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                      {keyword.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{keyword.metaDescription}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Keywords Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore All Real Estate Options in Vadodara
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {realEstateKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/real-estate-in-vadodara/${keyword.slug}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
              >
                {keyword.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area="vadodara" />
    </div>
  );
}
