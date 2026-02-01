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
  Plane,
  Car,
  Wallet,
  Globe,
  Building,
  ArrowRight,
  Clock,
  Users,
  Briefcase,
  Crown,
  Sparkles,
  Route,
  BadgeCheck,
  Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HarniContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Harni Vadodara"
        subtitle="Vadodara's Premier Airport Corridor"
        description="Harni represents Vadodara's global gateway - where airport proximity meets premium living. This rapidly developing corridor attracts NRIs, frequent travelers, and professionals seeking world-class connectivity with modern amenities."
      />

      {/* Premium Introduction */}
      <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              ✈️ Airport Connectivity Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Where Global Connectivity Meets Premium Living
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Harni's transformation from a quiet suburb to Vadodara's most sought-after address began 
              with airport modernization and accelerated with premium developments. Today, it's the 
              preferred destination for NRIs returning to Vadodara, corporate executives needing travel 
              flexibility, and families who value the unique combination of open spaces, modern 
              infrastructure, and global accessibility. Being 5 minutes from the airport isn't just 
              convenience - it's a lifestyle statement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5 min</div>
              <div className="text-gray-600">To Airport</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15%</div>
              <div className="text-gray-600">Annual Appreciation</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">NRI Buyers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-sky-100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Premium</div>
              <div className="text-gray-600">Developments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Harni Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Harni Advantage - Why Smart Money Chooses Airport Corridor
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Airport proximity has always been a premium real estate driver globally - from Mumbai's 
                Andheri to Bangalore's Whitefield. Harni is Vadodara's version of this phenomenon. The 
                recent expansion of Vadodara Airport with new terminals, increased flight frequency to 
                Delhi, Mumbai, Bangalore, and international destinations has transformed Harni from 
                peripheral to premium.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                What makes Harni special isn't just the airport. It's the planned development - wide 
                roads, proper drainage, green belts, and premium builders creating township-style 
                projects. Unlike cramped city localities, Harni offers breathing space with city 
                accessibility. For NRIs who visit 2-3 times yearly, having a home 5 minutes from 
                the airport makes perfect sense.
              </p>
              
              <div className="space-y-4">
                {[
                  "5 minutes to Vadodara International Airport",
                  "Premium builders: Goyal, Saral, Ganesh Housing",
                  "Wider roads and modern infrastructure",
                  "Lower pollution levels than city center",
                  "NRI-friendly documentation and support",
                  "Excellent resale value and rental demand"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-600 to-blue-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Harni Property Pricing</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">3 BHK Premium Flat</span>
                    <span className="text-sky-200">Popular</span>
                  </div>
                  <div className="text-2xl font-bold">₹65L - ₹95L</div>
                  <div className="text-sm text-sky-100">1400-1800 sq.ft | Semi-furnished</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">4 BHK Luxury Flat</span>
                    <span className="text-sky-200">Premium</span>
                  </div>
                  <div className="text-2xl font-bold">₹1.1Cr - ₹1.8Cr</div>
                  <div className="text-sm text-sky-100">2200-3000 sq.ft | Full amenities</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Independent Villa</span>
                    <span className="text-sky-200">Exclusive</span>
                  </div>
                  <div className="text-2xl font-bold">₹1.5Cr - ₹3.5Cr</div>
                  <div className="text-sm text-sky-100">3000-5000 sq.ft | Private garden</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Plot (per sq.ft)</span>
                    <span className="text-sky-200">Investment</span>
                  </div>
                  <div className="text-2xl font-bold">₹3,500 - ₹5,000</div>
                  <div className="text-sm text-sky-100">NA approved | Ready possession</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NRI Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-sky-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm font-semibold mb-4">
              🌍 NRI Investment Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why 40% of Harni Buyers Are NRIs
            </h2>
            <p className="text-sky-200 max-w-3xl mx-auto">
              Harni has become the preferred investment destination for Non-Resident Indians 
              looking to secure a foothold in their hometown. Here's what makes it perfect for NRI buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Airport Proximity",
                description: "Land at Vadodara airport and be home in 5 minutes. No traffic struggles after long flights. Your vacation starts immediately.",
                icon: <Plane className="w-6 h-6" />
              },
              {
                title: "Property Management",
                description: "Premium societies offer full property management - security, maintenance, even Airbnb management when you're away.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Video Tour Purchases",
                description: "Can't visit? We provide comprehensive video tours, legal document verification, and virtual possession process for overseas buyers.",
                icon: <Globe className="w-6 h-6" />
              },
              {
                title: "Rental Income",
                description: "High-quality tenants from airport staff, airline crew, and corporate travelers. ₹20,000-40,000 monthly rental potential.",
                icon: <Wallet className="w-6 h-6" />
              },
              {
                title: "Power of Attorney",
                description: "We handle POA purchases, registration, and possession on your behalf with complete documentation.",
                icon: <BadgeCheck className="w-6 h-6" />
              },
              {
                title: "Appreciation Security",
                description: "Airport corridors globally appreciate 15-20% annually. Your investment grows while you're abroad.",
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-500/30 rounded-lg flex items-center justify-center mr-4 text-sky-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-sky-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white/10 backdrop-blur rounded-2xl p-6">
              <p className="text-sky-200 mb-4">Special NRI Desk - We speak your timezone</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-sky-500/30 rounded-full text-sm">🇺🇸 USA: 9 AM - 12 PM EST</span>
                <span className="px-4 py-2 bg-sky-500/30 rounded-full text-sm">🇬🇧 UK: 2 PM - 5 PM GMT</span>
                <span className="px-4 py-2 bg-sky-500/30 rounded-full text-sm">🇦🇪 UAE: 6 PM - 9 PM GST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Properties in Harni
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From smart apartments for young professionals to sprawling villas for established 
              families - Harni offers premium options across budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3 BHK Apartments */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-sky-500 to-sky-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-sky-600" />
                </div>
                <CardTitle className="text-xl">3 BHK Premium Flats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Spacious apartments in gated communities with modern amenities. Perfect for 
                  families who want premium living without villa maintenance hassles.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-sky-500 mr-2" /> 1400-1800 sq.ft carpet</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-sky-500 mr-2" /> Club, gym, pool access</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-sky-500 mr-2" /> 2 covered parking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-sky-500 mr-2" /> 24/7 security & CCTV</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sky-600 font-bold">₹65L - ₹95L</span>
                  <Button variant="outline" size="sm" className="border-sky-500 text-sky-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 4 BHK Luxury */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl">4 BHK Luxury Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expansive luxury flats with premium finishes, servant quarters, and exclusive 
                  amenities. For those who want apartment convenience with bungalow space.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 2200-3000 sq.ft carpet</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Italian marble flooring</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Modular kitchen included</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Private terrace options</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-blue-600 font-bold">₹1.1Cr - ₹1.8Cr</span>
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-600">
                    View Luxury <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Villas */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Independent Villas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Private bungalows and villas in gated villa communities. Own your land, 
                  design your home, enjoy privacy with security of community living.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> 3000-5000 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> Private garden & lawn</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> Customization possible</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> Gated community security</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-indigo-600 font-bold">₹1.5Cr - ₹3.5Cr</span>
                  <Button variant="outline" size="sm" className="border-indigo-500 text-indigo-600">
                    View Villas <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Plots */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Premium Plots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  NA-approved residential plots in developed layouts. Build your dream home 
                  exactly as you envision it, with appreciation benefit of prime location.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> 1500-4000 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Clear title & NA approval</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Developed infrastructure</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Loan available</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-teal-600 font-bold">₹3,500-5,000/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-teal-500 text-teal-600">
                    View Plots <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Penthouse */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Penthouse Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Top-floor duplex penthouses with private terraces, panoramic views, and 
                  exclusive amenities. The pinnacle of apartment living in Vadodara.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 3500-5000 sq.ft duplex</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Private rooftop terrace</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Panoramic city views</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Private elevator access</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₹2Cr - ₹4.5Cr</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Commercial Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Office spaces and retail shops in upcoming commercial hubs. Serve the growing 
                  premium residential population and airport-related businesses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 300-2000 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Main road visibility</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Ample parking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> High-income catchment</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹6,000-9,000/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connectivity & Lifestyle */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Connectivity */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Harni Connectivity Advantage
              </h2>
              <div className="space-y-4">
                {[
                  { place: "Vadodara Airport", time: "5 mins", distance: "2 km" },
                  { place: "Railway Station", time: "20 mins", distance: "12 km" },
                  { place: "Alkapuri (City Center)", time: "15 mins", distance: "8 km" },
                  { place: "Akota", time: "12 mins", distance: "6 km" },
                  { place: "NH-8 Ahmedabad Highway", time: "10 mins", distance: "5 km" },
                  { place: "Waghodia Road (Universities)", time: "15 mins", distance: "10 km" },
                  { place: "GIDC Makarpura", time: "18 mins", distance: "12 km" },
                  { place: "Proposed Metro Station", time: "5 mins", distance: "2 km" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center">
                      <Route className="w-5 h-5 text-sky-500 mr-3" />
                      <span className="font-medium text-gray-700">{item.place}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sky-600 font-semibold">{item.time}</span>
                      <span className="text-gray-400 text-sm">{item.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Harni Lifestyle Amenities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { category: "Education", items: ["DPS Harni", "Navrachna School", "Euro School nearby", "International schools"] },
                  { category: "Healthcare", items: ["Bhailal Amin Hospital", "Sterling Hospital 10 min", "24/7 pharmacies", "Diagnostic centers"] },
                  { category: "Shopping", items: ["D-Mart Harni", "Local markets", "Inorbit Mall 10 min", "Brand showrooms"] },
                  { category: "Recreation", items: ["Golf course nearby", "Premium clubs", "Nature trails", "Sports complexes"] }
                ].map((category, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3">{category.category}</h4>
                    <ul className="space-y-1">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-sky-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Harni Property - Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is airport noise a problem in Harni?",
                  a: "Modern premium projects in Harni are built with acoustic insulation and sound-proof windows. The flight path is designed to minimize residential disturbance. Most residents report no significant noise issues, and Vadodara airport has limited night operations. The convenience of 5-minute airport access far outweighs any minimal noise."
                },
                {
                  q: "What's the rental potential in Harni?",
                  a: "Harni has strong rental demand from airline crew, airport staff, corporate travelers, and professionals. 3 BHK premium flats rent for ₹25,000-35,000 monthly. Some owners list on Airbnb for short-term corporate stays at ₹3,000-5,000 per night. NRIs can earn significant passive income through professional property management."
                },
                {
                  q: "How does Harni compare to Gotri or Akota?",
                  a: "Harni offers larger unit sizes and better air quality than congested Gotri. Prices are 15-20% lower than equivalent Akota properties while offering superior infrastructure. The key differentiator is airport proximity - invaluable for frequent travelers. Appreciation potential is higher due to ongoing development."
                },
                {
                  q: "Is Harni suitable for families with children?",
                  a: "Absolutely. Premium schools like DPS are in Harni itself. The wider roads, lower pollution, and gated community environment make it ideal for families. Many projects have dedicated children's play areas, sports facilities, and community spaces. The open spaces are a refreshing change from cramped city localities."
                },
                {
                  q: "What infrastructure developments are planned?",
                  a: "The proposed Vadodara Metro has a planned station near Harni. Road widening projects are underway. More premium builders are launching projects. The airport expansion will further boost the area. These factors make Harni a strong appreciation bet for the next decade."
                },
                {
                  q: "Can NRIs buy property in Harni remotely?",
                  a: "Yes, we specialize in NRI transactions. We provide video tours, document verification, POA-based purchases, and complete handholding from selection to possession. Many NRIs have purchased in Harni without physically visiting. We can arrange video calls at your convenience regardless of timezone."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-sky-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Premium Harni Address Awaits
              </h2>
              <p className="text-sky-100 text-lg mb-8">
                Whether you're an NRI looking for a touchdown home, a family seeking premium 
                living, or an investor targeting airport corridor appreciation - Harni has 
                options that match your aspirations. Schedule a visit or request a video tour.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Premium Property Desk</div>
                    <div className="text-sky-200">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">NRI Desk (WhatsApp)</div>
                    <div className="text-sky-200">+91 98765 43211</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Timer className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Site Visit Hours</div>
                    <div className="text-sky-200">Daily 10 AM - 7 PM | Sunday by Appointment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Property Details</h3>
              <p className="text-gray-600 mb-6">Premium Harni properties in your budget</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in premium property in Harni near airport. Please share available options." 
      />
    </main>
  );
}
