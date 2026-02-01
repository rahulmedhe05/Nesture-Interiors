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
  Laptop,
  Car,
  TreePine,
  Users,
  Wifi,
  Building,
  ArrowRight,
  Clock,
  Zap,
  Target,
  Award,
  IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GotriContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Gotri Vadodara"
        subtitle="Vadodara's IT Corridor & Modern Living Destination"
        description="Discover premium properties in Gotri - the fastest-growing tech hub of Vadodara. From smart apartments near IT parks to spacious villas in Sevasi, find your perfect property with excellent appreciation potential."
      />

      {/* Tech Hub Introduction */}
      <section className="py-16 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              🚀 Vadodara's Silicon Valley
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Gotri - Where Technology Meets Tranquility
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Gotri has transformed from a quiet suburb into Vadodara's most dynamic real estate destination over the past decade. 
              Strategically positioned along the Vadodara-Halol highway and adjacent to the emerging Sevasi IT corridor, Gotri offers 
              the perfect blend of professional convenience and residential comfort. With over 15 IT companies establishing their 
              presence, 8 major residential townships launched since 2020, and property appreciation rates consistently above 12% 
              annually, Gotri represents the future of urban living in Vadodara.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">IT Companies</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12%+</div>
              <div className="text-gray-600">Annual Appreciation</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-cyan-100">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600">IT Professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gotri Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why IT Professionals & Young Families Choose Gotri
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gotri's strategic location has made it the preferred residential choice for Vadodara's growing tech workforce. 
                The area offers a unique proposition - live within 10 minutes of your workplace while enjoying suburban peace 
                and modern amenities. Unlike crowded central areas, Gotri provides open spaces, planned townships, and a 
                community-oriented lifestyle that appeals to young professionals and families alike.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The development of Gotri-Sevasi Road has opened up vast land parcels for premium residential projects. Major 
                builders like Goyal Group, Shivalik Group, and Nishant Construction have invested heavily in the area, bringing 
                world-class amenities previously seen only in metropolitan cities. From Olympic-size swimming pools to co-working 
                spaces within residential complexes, Gotri sets new standards for modern living.
              </p>
              
              <div className="space-y-4">
                {[
                  "5-minute drive to IT parks & tech companies",
                  "New 6-lane Gotri-Sevasi corridor under construction",
                  "10+ international schools within 3 km radius",
                  "Upcoming metro station (Phase 2 planning)",
                  "24/7 water supply from Narmada pipeline",
                  "Lower pollution index compared to central Vadodara"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Gotri Property Price Trends 2025</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Apartments</span>
                    <span className="text-cyan-200">↑ 14%</span>
                  </div>
                  <div className="text-2xl font-bold">₹28L - ₹55L</div>
                  <div className="text-sm text-cyan-100">950-1200 sq.ft | Most Popular</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">3 BHK Apartments</span>
                    <span className="text-cyan-200">↑ 12%</span>
                  </div>
                  <div className="text-2xl font-bold">₹48L - ₹95L</div>
                  <div className="text-sm text-cyan-100">1400-1800 sq.ft | Family Choice</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Independent Villas</span>
                    <span className="text-cyan-200">↑ 15%</span>
                  </div>
                  <div className="text-2xl font-bold">₹85L - ₹2.5Cr</div>
                  <div className="text-sm text-cyan-100">2000-4000 sq.ft | Premium Segment</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Residential Plots</span>
                    <span className="text-cyan-200">↑ 18%</span>
                  </div>
                  <div className="text-2xl font-bold">₹2,800 - ₹4,500/sq.ft</div>
                  <div className="text-sm text-cyan-100">NA/NOC Available | Best Investment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Property Types in Gotri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From compact studio apartments for young professionals to sprawling farmhouses for nature lovers, 
              Gotri offers diverse property options to match every lifestyle and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Apartments */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Wifi className="w-7 h-7 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Smart Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Technology-enabled homes with IoT integration, smart locks, automated lighting, and app-controlled 
                  amenities. Perfect for tech-savvy professionals who want their home as smart as their workplace.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" /> Voice-controlled home automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" /> Energy monitoring systems</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" /> Video door phones with app</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2" /> EV charging stations</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-cyan-600 font-bold">₹35L - ₹75L</span>
                  <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-600 hover:bg-cyan-50">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Township Living */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Township Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrated townships with schools, hospitals, shopping centers, and recreation facilities within 
                  the complex. Experience a self-contained community with everything at walking distance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> 50+ acre integrated developments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> In-campus schools & clinics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Commercial & retail zones</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Sports complexes & clubs</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-teal-600 font-bold">₹45L - ₹1.5Cr</span>
                  <Button variant="outline" size="sm" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Budget Homes */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-xl">Budget-Friendly Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Affordable 1 & 2 BHK apartments under PMAY scheme with subsidies up to ₹2.67 lakhs. 
                  Quality construction without compromising on essential amenities for first-time buyers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> PMAY subsidy applicable</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Bank loan pre-approved</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Ready-to-move options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 90% loan available</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-green-600 font-bold">₹18L - ₹35L</span>
                  <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Villas */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Premium Villas & Bungalows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Luxury independent houses with private gardens, terrace pools, and contemporary architecture. 
                  Gated communities with 24/7 security for families seeking privacy and exclusivity.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 3000-5000 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Private landscaped gardens</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Home theater provisions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Triple-car parking</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₹1.2Cr - ₹3.5Cr</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Residential Plots */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Residential Plots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build your dream home on premium NA/NOC plots in developing sectors of Gotri-Sevasi. 
                  Clear titles, proper documentation, and excellent investment potential with 15-18% appreciation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 1000-5000 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> VMDA approved layouts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Underground utilities ready</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 30-40 ft wide roads</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹28L - ₹1.2Cr</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Spaces */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-rose-500 to-rose-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Commercial & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Shops, offices, and showroom spaces in high-footfall locations along Gotri Road. 
                  Ideal for retail businesses, professional offices, and service centers targeting IT population.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Main road frontage available</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 8-10% rental yields</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> High IT professional footfall</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Flexible sizes 200-5000 sq.ft</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₹5,500 - ₹9,000/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600 hover:bg-rose-50">
                    View Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IT Professional Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold mb-4">
                💼 For IT Professionals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Work-Life Balance Starts at Home
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As an IT professional in Vadodara, your commute shouldn't eat into your productivity or personal time. 
                Gotri's proximity to major tech parks means you can convert your commute time into quality time with 
                family, fitness, or pursuing hobbies. Our curated properties are selected specifically keeping the 
                tech workforce lifestyle in mind.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Many of our residential complexes feature dedicated co-working spaces, high-speed fiber connectivity 
                up to 1 Gbps, power backup with instant changeover, and video conferencing rooms - perfect for the 
                hybrid work culture that's now the norm. Some projects even offer discounts for IT company employees 
                through corporate tie-ups.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Clock className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="font-bold text-xl">5-10 mins</div>
                  <div className="text-gray-300 text-sm">Average commute to IT parks</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Wifi className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="font-bold text-xl">1 Gbps</div>
                  <div className="text-gray-300 text-sm">Fiber connectivity available</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Zap className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="font-bold text-xl">100%</div>
                  <div className="text-gray-300 text-sm">Power backup projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Car className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="font-bold text-xl">EV Ready</div>
                  <div className="text-gray-300 text-sm">Charging infrastructure</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">IT Parks Near Gotri</h3>
              <div className="space-y-4">
                {[
                  { name: "GIDC IT Park, Sevasi", distance: "3 km", companies: "TCS, Infosys, L&T" },
                  { name: "Satyamev Hi-Tech Park", distance: "5 km", companies: "HCL, Tech Mahindra" },
                  { name: "GNFC Info Tower", distance: "8 km", companies: "Wipro, Capgemini" },
                  { name: "Baroda IT Park", distance: "6 km", companies: "Cognizant, Accenture" },
                  { name: "Alembic Tech Center", distance: "4 km", companies: "Pharma IT, R&D" }
                ].map((park, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                    <div>
                      <div className="font-semibold">{park.name}</div>
                      <div className="text-sm text-gray-400">{park.companies}</div>
                    </div>
                    <div className="text-cyan-400 font-bold">{park.distance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gotri Location & Connectivity Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically located with excellent connectivity to all parts of Vadodara and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Vadodara Railway Station", distance: "12 km", time: "25 mins", color: "cyan" },
              { icon: <Building2 className="w-6 h-6" />, title: "Vadodara Airport", distance: "18 km", time: "30 mins", color: "teal" },
              { icon: <Car className="w-6 h-6" />, title: "Express Highway Entry", distance: "8 km", time: "15 mins", color: "purple" },
              { icon: <Building className="w-6 h-6" />, title: "Alkapuri CBD", distance: "10 km", time: "20 mins", color: "rose" },
              { icon: <TreePine className="w-6 h-6" />, title: "Sayaji Garden", distance: "9 km", time: "18 mins", color: "green" },
              { icon: <Award className="w-6 h-6" />, title: "MS University", distance: "11 km", time: "22 mins", color: "amber" },
              { icon: <Home className="w-6 h-6" />, title: "Inox Mall Gotri", distance: "2 km", time: "5 mins", color: "indigo" },
              { icon: <Shield className="w-6 h-6" />, title: "SSG Hospital", distance: "10 km", time: "20 mins", color: "red" }
            ].map((item, index) => (
              <div key={index} className={`bg-${item.color}-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow`}>
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 text-${item.color}-600`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-gray-900">{item.distance}</div>
                <div className="text-sm text-gray-500">{item.time} drive</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Guide */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Gotri Investment Guide 2025
              </h2>
              <p className="text-lg text-gray-600">
                Understanding the micro-markets and investment potential within Gotri
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                  Gotri Main Road Sector
                </h3>
                <p className="text-gray-700 mb-4">
                  The most established part of Gotri with mature infrastructure. Properties here command premium prices 
                  but offer lower risk and steady appreciation. Ideal for those seeking ready possession and established 
                  neighborhoods with existing social infrastructure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">₹4,500-5,500/sq.ft</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">8-10% appreciation</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Ready to move</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                  Gotri-Sevasi Corridor (Hot Zone)
                </h3>
                <p className="text-gray-700 mb-4">
                  The rapidly developing belt connecting Gotri to Sevasi IT hub. This is where maximum construction 
                  activity is happening, and early investors can benefit from pre-launch prices. Higher risk but 
                  potential for 15-18% appreciation as infrastructure develops.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">₹3,200-4,200/sq.ft</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">15-18% appreciation</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Under construction</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  Vasna-Gotri Road Extension
                </h3>
                <p className="text-gray-700 mb-4">
                  Emerging plotted development area with NA plots available. Best for those planning to build custom 
                  homes or hold land for long-term appreciation. Good mix of affordability and future potential with 
                  new road widening projects announced.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">₹2,800-3,500/sq.ft</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">18-22% appreciation</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Plot investment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Healthcare */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">📚</span>
                Educational Institutions Near Gotri
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Delhi Public School, Gotri", type: "CBSE", distance: "1.5 km", rating: "4.5" },
                  { name: "Navrachana International School", type: "IB/IGCSE", distance: "3 km", rating: "4.7" },
                  { name: "Bright School, Sevasi", type: "CBSE", distance: "2 km", rating: "4.3" },
                  { name: "Euro School Vadodara", type: "CBSE", distance: "4 km", rating: "4.4" },
                  { name: "St. Kabir School", type: "ICSE", distance: "5 km", rating: "4.6" },
                  { name: "Parul University Campus", type: "Higher Ed", distance: "8 km", rating: "4.2" }
                ].map((school, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div>
                      <div className="font-semibold text-gray-900">{school.name}</div>
                      <div className="text-sm text-gray-500">{school.type} • {school.distance}</div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="ml-1 font-semibold">{school.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">🏥</span>
                Healthcare Facilities Near Gotri
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Sterling Hospital, Gotri", type: "Multi-Specialty", distance: "2 km", beds: "200+" },
                  { name: "Bhailal Amin Hospital", type: "Super Specialty", distance: "6 km", beds: "500+" },
                  { name: "Kiran Hospital", type: "Multi-Specialty", distance: "8 km", beds: "300+" },
                  { name: "Baroda Heart Institute", type: "Cardiac Care", distance: "7 km", beds: "150+" },
                  { name: "Apple Children Hospital", type: "Pediatric", distance: "4 km", beds: "100+" },
                  { name: "Aarogya 24x7 Clinic", type: "Primary Care", distance: "0.5 km", beds: "Walk-in" }
                ].map((hospital, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div>
                      <div className="font-semibold text-gray-900">{hospital.name}</div>
                      <div className="text-sm text-gray-500">{hospital.type} • {hospital.distance}</div>
                    </div>
                    <div className="text-sm font-semibold text-cyan-600">{hospital.beds} beds</div>
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
              Frequently Asked Questions About Gotri Real Estate
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "What is the average property price in Gotri Vadodara?",
                  a: "Property prices in Gotri range from ₹2,800 to ₹5,500 per sq.ft depending on the exact location and project type. 2 BHK apartments start from ₹28 lakhs while premium villas can go up to ₹3.5 crores. The Gotri-Sevasi corridor offers more competitive pricing compared to established Gotri Main Road areas."
                },
                {
                  q: "Is Gotri good for investment in 2025?",
                  a: "Yes, Gotri is one of the best investment destinations in Vadodara for 2025. With IT sector growth, infrastructure development including upcoming metro, and consistent 12-18% annual appreciation, both end-users and investors find value here. The Gotri-Sevasi corridor particularly offers high growth potential."
                },
                {
                  q: "What are the best societies to live in Gotri?",
                  a: "Top-rated societies in Gotri include Goyal Orchid Woods, Shivalik Residency, Nishant Prime, Vasupujya City, and Gotri Green. These offer excellent amenities, security, and have established communities. For new projects, Shivalik Township and Goyal Riviera are highly recommended."
                },
                {
                  q: "How far is Gotri from Vadodara city center?",
                  a: "Gotri is approximately 8-10 km from Vadodara city center (Alkapuri). The drive takes about 20-25 minutes via Gotri Road. With the proposed metro line, connectivity will improve significantly, reducing travel time to under 15 minutes."
                },
                {
                  q: "Are there RERA approved projects in Gotri?",
                  a: "Yes, most new projects in Gotri are RERA registered. Always verify the RERA number on Gujarat RERA website before booking. We only deal in RERA approved projects and can provide all documentation for verification. Currently, 50+ active RERA registered projects are available."
                },
                {
                  q: "What is the rental yield in Gotri?",
                  a: "Rental yields in Gotri range from 3% to 4.5% depending on property type and location. 2 BHK apartments typically rent for ₹12,000-18,000 per month, while 3 BHKs fetch ₹18,000-28,000. Properties near IT parks command premium rentals from tech professionals."
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
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Your Perfect Property in Gotri Today
              </h2>
              <p className="text-cyan-100 text-lg mb-8">
                Whether you're an IT professional looking for a convenient home near work, a family seeking 
                quality education options, or an investor eyeing high-growth opportunities - Gotri has 
                something for everyone. Let our local experts guide you to the perfect property.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Our Gotri Expert</div>
                    <div className="text-cyan-100">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Our Office</div>
                    <div className="text-cyan-100">Shop 12, Gotri Square, Near INOX</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <div className="text-cyan-100">Mon-Sun: 9 AM - 8 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Property Consultation</h3>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in property in Gotri, Vadodara. Please share available options." 
      />
    </main>
  );
}
