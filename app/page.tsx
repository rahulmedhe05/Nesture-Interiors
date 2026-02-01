import Link from "next/link";
import { businesses, getAreaDisplayName, allAreas } from "@/lib/business-config";
import { MegaFooter } from "@/components/mega-footer";
import { Phone, ArrowRight, MapPin, Star, Users, Award, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Services in Vadodara | Interior, Real Estate, Solar, Dental & More",
  description:
    "Your one-stop destination for premium services in Vadodara. Interior Designers, Real Estate, Solar Installation, Skin & Hair, Lawyers, Dentists, Home Automation, Security Systems, Wedding Planners & Study Abroad Consultants.",
  keywords: [
    "Services in Vadodara",
    "Interior Designers Vadodara",
    "Real Estate Vadodara",
    "Solar Installation Vadodara",
    "Skin Clinic Vadodara",
    "Lawyers Vadodara",
    "Dentists Vadodara",
    "Home Automation Vadodara",
    "CCTV Installation Vadodara",
    "Wedding Planners Vadodara",
    "Study Abroad Vadodara",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Vadodara
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your trusted partner for Interior Design, Real Estate, Solar Energy, Healthcare, Legal
              Services, Home Automation, Security, Weddings & Education Consulting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+916353583148"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 98765 43210
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-md relative -mt-8 mx-4 md:mx-8 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">10+</p>
              <p className="text-gray-600">Services</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-600">21+</p>
              <p className="text-gray-600">Areas Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-600">50,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-orange-600">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Services in Vadodara
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your needs. Click on any service to explore our
              offerings in different areas of Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {businesses.map((business) => (
              <Link
                key={business.id}
                href={`/${business.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div
                  className="h-3"
                  style={{
                    background: `linear-gradient(to right, ${business.colors.primary}, ${business.colors.secondary})`,
                  }}
                ></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{business.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {business.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{business.tagline}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {business.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                      >
                        {service}
                      </span>
                    ))}
                    {business.services.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        +{business.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    View Services <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve in Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide our services across all major areas of Vadodara. Find services near you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {allAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-sm">{getAreaDisplayName(area)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We are committed to providing exceptional services across all our business verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-400">
                Premium quality services with attention to detail and customer satisfaction.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-400">
                Experienced professionals with deep expertise in their respective fields.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Trusted Brand</h3>
              <p className="text-gray-400">
                15+ years of trust built through consistent quality and reliability.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Complete Solutions</h3>
              <p className="text-gray-400">
                End-to-end services from consultation to execution and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Quick Links */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Quick Links - All Services by Area
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {businesses.map((business) => (
              <div key={business.id} className="space-y-3">
                <h3
                  className="font-bold text-lg pb-2 border-b-2 flex items-center gap-2"
                  style={{ borderColor: business.colors.primary }}
                >
                  <span>{business.icon}</span>
                  {business.name}
                </h3>
                <ul className="space-y-1 text-sm">
                  {business.areas.slice(0, 10).map((area) => (
                    <li key={area}>
                      <Link
                        href={`/${business.slug}/${area}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors block py-0.5"
                      >
                        {business.name} in {getAreaDisplayName(area)}
                      </Link>
                    </li>
                  ))}
                  {business.areas.length > 10 && (
                    <li>
                      <Link
                        href={`/${business.slug}`}
                        className="text-blue-600 font-semibold hover:underline block py-0.5"
                      >
                        View all {business.areas.length} areas →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experts are ready to help you with all
            your requirements in Vadodara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +91 98765 43210
            </a>
            <a
              href="https://wa.me/916353583148?text=Hi, I'm interested in your services in Vadodara"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
