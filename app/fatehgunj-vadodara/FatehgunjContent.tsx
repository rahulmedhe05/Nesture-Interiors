"use client";

import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessHeroSlider } from "@/components/business-hero-slider";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { BusinessContactForm } from "@/components/business-contact-form";
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  Shield, 
  Star, 
  Phone,
  CheckCircle,
  Home,
  Store,
  Car,
  Wallet,
  Building,
  ArrowRight,
  Clock,
  Users,
  Briefcase,
  Crown,
  Landmark,
  Scale,
  Banknote,
  Coffee,
  ShoppingBag,
  Utensils,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FatehgunjContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Fatehgunj Vadodara"
        subtitle="The Commercial Heart of Vadodara"
        description="Fatehgunj isn't just an address - it's a statement of arrival. Vadodara's premier commercial district where business meets prestige, where every major bank, corporate office, and professional establishment calls home. Live where the city works."
      />

      {/* Premium Introduction */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              🏛️ Vadodara's Business District
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Where Address is Your First Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For over five decades, Fatehgunj has been Vadodara's undisputed commercial nerve center. 
              When you say "my office is in Fatehgunj," clients understand your credibility before 
              you hand them your business card. Every major bank headquarters, leading CA and legal 
              firms, corporate offices, and established businesses operate from Fatehgunj. Living 
              here means walking to work, walking to networking, and walking among who's who of 
              Vadodara's business community.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Corporate Offices</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">All Major</div>
              <div className="text-gray-600">Bank HQs</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">CA & Law Firms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Premium</div>
              <div className="text-gray-600">Price Point</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fatehgunj */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Fatehgunj Prestige - Why Location Still Matters
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In an age of remote work and suburban sprawl, Fatehgunj remains the address that 
                commands respect. Why? Because businesses still need physical presence. Banks need 
                branch offices. Law firms need courtroom proximity. CA firms need client accessibility. 
                And all of them cluster in Fatehgunj for the same reason - credibility by location.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                For residents, Fatehgunj offers the ultimate urban convenience. The collector's office, 
                city court, RTO, passport office, and every government facility is within walking 
                distance or a short rickshaw ride. Banking errands, professional consultations, 
                shopping at Mangaldeep or Inox - everything is at your doorstep. This is the original 
                "15-minute city" of Vadodara, decades before the concept became trendy.
              </p>
              
              <div className="space-y-4">
                {[
                  "Central location - equidistant to all Vadodara areas",
                  "All major banks within 500-meter radius",
                  "Premium office address for professionals",
                  "Government offices within walking distance",
                  "Established markets and retail options",
                  "High rental demand for commercial spaces"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Fatehgunj Property Pricing</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Residential</span>
                    <span className="text-amber-200">Limited</span>
                  </div>
                  <div className="text-2xl font-bold">₹55L - ₹80L</div>
                  <div className="text-sm text-amber-100">900-1200 sq.ft | Older buildings</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">3 BHK Premium</span>
                    <span className="text-amber-200">Rare</span>
                  </div>
                  <div className="text-2xl font-bold">₹85L - ₹1.4Cr</div>
                  <div className="text-sm text-amber-100">1300-1800 sq.ft | New construction</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Office Space</span>
                    <span className="text-amber-200">High Demand</span>
                  </div>
                  <div className="text-2xl font-bold">₹8,000-15,000/sq.ft</div>
                  <div className="text-sm text-amber-100">200-2000 sq.ft options</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Retail Shop</span>
                    <span className="text-amber-200">Prime</span>
                  </div>
                  <div className="text-2xl font-bold">₹12,000-25,000/sq.ft</div>
                  <div className="text-sm text-amber-100">Ground floor | Main road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hub Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold mb-4">
              💼 Business Address of Choice
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes Fatehgunj the Business Capital
            </h2>
            <p className="text-amber-200 max-w-3xl mx-auto">
              Understanding Fatehgunj's commercial dominance helps you appreciate why property 
              here commands premium pricing and offers stable appreciation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Banking Headquarters",
                description: "SBI, BOB, HDFC, ICICI, Axis - every major bank's regional or zonal office operates from Fatehgunj. This concentration creates ecosystem effects.",
                icon: <Landmark className="w-6 h-6" />
              },
              {
                title: "Legal & CA Cluster",
                description: "Proximity to City Civil Court makes this the preferred address for advocates. CA firms cluster nearby for bank and corporate client access.",
                icon: <Scale className="w-6 h-6" />
              },
              {
                title: "Government Accessibility",
                description: "Collector office, RTO, passport office, income tax office - all within 2km radius. Essential for businesses requiring regular government interaction.",
                icon: <Building className="w-6 h-6" />
              },
              {
                title: "Client Convenience",
                description: "When clients visit your Fatehgunj office, they can complete banking, legal, and shopping errands in one trip. Convenience drives loyalty.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Networking Hub",
                description: "Coffee meetings at Barista, lunch at fine restaurants, evening networking - Fatehgunj's commercial density creates organic business opportunities.",
                icon: <Coffee className="w-6 h-6" />
              },
              {
                title: "Transport Connectivity",
                description: "Central location means equidistant access from Gotri, Manjalpur, Alkapuri, or any Vadodara area. Public transport hub with auto/taxi availability.",
                icon: <Car className="w-6 h-6" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-500/30 rounded-lg flex items-center justify-center mr-4 text-amber-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-amber-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Property Options in Fatehgunj
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From professional offices to residential apartments - Fatehgunj offers premium 
              real estate for those who value location above all else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office Spaces */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Professional Office Space</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Establish your professional presence in Fatehgunj's commercial buildings. 
                  Ideal for CA firms, advocates, consultants, and corporate branch offices.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 200-2000 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Ready-to-use & bare shell</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Lift access buildings</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Parking available</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹8K-15K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Offices <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Retail Shops */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Store className="w-7 h-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Retail Showrooms & Shops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Prime retail frontage on Fatehgunj's busy roads. High footfall, premium 
                  clientele, and visibility that established brands seek.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Ground floor options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Main road visibility</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> High footfall areas</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Premium catchment</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-orange-600 font-bold">₹12K-25K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600">
                    View Shops <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Residential Flats */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Residential Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Live in the heart of Vadodara's commercial district. Walk to work, walk 
                  to shopping, experience true urban living. Limited residential options.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" /> 2 & 3 BHK options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" /> Walking distance to all</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" /> Established societies</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" /> Strong resale value</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-yellow-600 font-bold">₹55L - ₹1.4Cr</span>
                  <Button variant="outline" size="sm" className="border-yellow-500 text-yellow-600">
                    View Flats <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Clinic/Medical */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-7 h-7 text-red-600" />
                </div>
                <CardTitle className="text-xl">Clinic & Medical Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ideal locations for doctors, dentists, diagnostic centers. Central 
                  accessibility brings patients from all Vadodara areas.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Ground & first floor</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Lift access options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Patient parking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Near hospitals</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-red-600 font-bold">₹9K-14K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-600">
                    View Spaces <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Complex */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Commercial Complex Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Units in modern commercial complexes with shared amenities like 
                  reception, conference rooms, cafeteria, and professional environment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Shared amenities</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Professional environment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Modern infrastructure</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Networking opportunities</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-blue-600 font-bold">₹10K-18K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-600">
                    View Units <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Redevelopment */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Redevelopment Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  New construction replacing old buildings. Modern amenities in prime 
                  locations. Best of both - established address with new infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> New construction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Modern amenities</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Prime location retained</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Early booking benefits</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₹6K-10K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhood Map */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Around Fatehgunj
              </h2>
              <p className="text-lg text-gray-600">
                Everything Vadodara needs - within walking distance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Banking",
                  icon: <Landmark className="w-6 h-6 text-amber-600" />,
                  items: ["SBI Main Branch", "Bank of Baroda HQ", "HDFC Bank", "ICICI Bank", "Axis Bank", "All nationalized banks"]
                },
                {
                  category: "Government",
                  icon: <Building className="w-6 h-6 text-amber-600" />,
                  items: ["Collector Office", "RTO Office", "Passport Office", "Income Tax Office", "City Civil Court", "Police Commissioner"]
                },
                {
                  category: "Shopping",
                  icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
                  items: ["Mangaldeep Mall", "Inox Cinema", "Brand showrooms", "Electronics market", "Jewellery shops", "Textile stores"]
                },
                {
                  category: "Dining",
                  icon: <Utensils className="w-6 h-6 text-amber-600" />,
                  items: ["Fine dining options", "Business lunch spots", "Cafes & bakeries", "Traditional thalis", "Fast food chains", "Street food"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-amber-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fatehgunj Investment Analysis
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unlike newer areas where appreciation is speculative, Fatehgunj offers proven, 
                stable returns. The limited supply (can't create more central land) and consistent 
                demand (businesses always need prestigious addresses) creates natural price support.
              </p>
              
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Commercial Rental Yields</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">5-7%</div>
                      <div className="text-sm text-gray-600">Office space yield</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">6-8%</div>
                      <div className="text-sm text-gray-600">Retail shop yield</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Capital Appreciation</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">8-12%</div>
                      <div className="text-sm text-gray-600">Annual appreciation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">Stable</div>
                      <div className="text-sm text-gray-600">No crash risk</div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Key Investment Facts</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Zero vacancy in prime locations</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Premium tenants (banks, corporates)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Long-term lease commitments</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Maintenance-covered by tenants</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Rental Income Potential</h3>
              <div className="space-y-4">
                {[
                  { type: "500 sq.ft Office", purchase: "₃7.5L - ₇5L", rent: "₁5,000 - ₂5,000/month", yield: "~5-6%" },
                  { type: "300 sq.ft Shop", purchase: "₃6L - ₇5L", rent: "₂0,000 - ₄0,000/month", yield: "~6-7%" },
                  { type: "1000 sq.ft Showroom", purchase: "₁.2Cr - ₂.5Cr", rent: "₆0,000 - ₁L/month", yield: "~5-6%" },
                  { type: "2 BHK Residential", purchase: "₅5L - ₈0L", rent: "₁5,000 - ₂2,000/month", yield: "~3-4%" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{item.type}</span>
                      <span className="text-amber-600 font-bold">{item.yield}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Purchase:</span>
                        <span className="ml-2 font-medium">{item.purchase}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Rent:</span>
                        <span className="ml-2 font-medium">{item.rent}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Fatehgunj Property - Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Why is Fatehgunj property so expensive?",
                  a: "Fatehgunj is Vadodara's CBD (Central Business District). Limited land, high demand, and proven rental yields keep prices premium. Unlike suburban areas where supply can increase, central land is finite. Every business wanting prestige pays for this address, supporting high property values."
                },
                {
                  q: "Is Fatehgunj suitable for residential living?",
                  a: "Yes, if you value convenience over space. Fatehgunj apartments are typically smaller than suburban options but offer unmatched accessibility. Professionals who work nearby, elderly who need medical access, or anyone preferring walkable urban life will appreciate Fatehgunj residence."
                },
                {
                  q: "What's better - buying or renting commercial space in Fatehgunj?",
                  a: "For established businesses with long-term presence plans, buying locks in your cost and builds equity. For startups or uncertain ventures, rent flexibility makes sense. Office rentals run ₹50-100 per sq.ft monthly. Calculate your 5-year cost to decide."
                },
                {
                  q: "Are there parking issues in Fatehgunj?",
                  a: "Parking is limited on streets, but most commercial buildings have basement or designated parking. When buying, confirm parking allocation. For clients/customers, public parking lots and street parking (for short visits) are available."
                },
                {
                  q: "Will Fatehgunj remain relevant as Vadodara expands?",
                  a: "Yes. CBDs worldwide remain valuable even as cities expand. Government offices, courts, and banking infrastructure won't relocate. Businesses needing these touchpoints will always pay premium for proximity. Fatehgunj's relevance is structural, not circumstantial."
                },
                {
                  q: "What's the resale potential for Fatehgunj property?",
                  a: "Excellent. Fatehgunj properties rarely stay in market for long. Well-located offices and shops sell within weeks. Residential takes slightly longer due to limited buyer pool (those specifically seeking central living). Price appreciation has been consistent 8-12% annually."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Establish Your Fatehgunj Presence
              </h2>
              <p className="text-amber-100 text-lg mb-8">
                Whether you're a professional seeking office space, a retailer wanting prime 
                visibility, or a resident preferring central convenience - Fatehgunj has 
                limited but premium options. Let us show you what's currently available.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Commercial Property Desk</div>
                    <div className="text-amber-200">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Office Location</div>
                    <div className="text-amber-200">Fatehgunj Main Road, Near SBI</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-amber-200">Mon-Sat: 10 AM - 7 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Property Details</h3>
              <p className="text-gray-600 mb-6">Commercial or residential in Fatehgunj</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in property in Fatehgunj. Please share available office/shop options." 
      />
    </main>
  );
}
