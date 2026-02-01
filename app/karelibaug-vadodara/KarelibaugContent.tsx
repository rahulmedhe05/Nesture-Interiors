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
  Users,
  Car,
  Utensils,
  Heart,
  Sparkles,
  Building,
  ArrowRight,
  Clock,
  ShoppingBag,
  Store,
  Gem,
  TreePine,
  Sun,
  Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KarelibaugContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Karelibaug Vadodara"
        subtitle="The Soul of Traditional Vadodara"
        description="Welcome to Karelibaug - where Gujarati culture lives and breathes in every lane. Experience the warmth of joint families, the aroma of authentic farsan, and a community that celebrates festivals like nowhere else. This isn't just property; it's a way of life."
      />

      {/* Traditional Introduction */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              🪔 Gujarati Heartland
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Karelibaug - Where Every Lane Tells a Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Named after the mango (Keri) orchards that once flourished here, Karelibaug is the beating heart of 
              traditional Vadodara. This is where business families have lived for generations, where the 
              neighborhood knows your grandfather's name, and where Navratri preparations begin months in advance. 
              For Gujarati families seeking roots in authentic community living, there's no substitute for a 
              Karelibaug address. Here, you don't just buy property - you become part of a living, breathing 
              Gujarati township.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">75+</div>
              <div className="text-gray-600">Years Old Community</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Local Businesses</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Garba Venues</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Central</div>
              <div className="text-gray-600">Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Karelibaug Lifestyle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Life in Karelibaug - An Experience Money Can't Buy Elsewhere
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Imagine waking up to the temple bells, having chai with neighbors who remember your wedding, 
                buying the freshest vegetables from vendors who've served your family for decades. Children 
                play in the lanes while grandparents watch from porches. During festivals, the entire 
                neighborhood transforms - Diwali lights span buildings, Navratri brings midnight garba, and 
                Uttarayan fills the sky with kites.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Karelibaug is also a commercial powerhouse. Generations of jewelers, textile merchants, and 
                farsan makers have built their empires from these lanes. The mix of residential and commercial 
                creates a unique 24/7 energy where you can get anything you need within walking distance. 
                It's chaotic, it's colorful, and it's quintessentially Gujarati.
              </p>
              
              <div className="space-y-4">
                {[
                  "150+ temples and religious sites within the area",
                  "Famous farsan, mithai & khakra wholesale market",
                  "Traditional jewelry & textile shopping lanes",
                  "Legendary Navratri celebrations - biggest in Vadodara",
                  "Strong Jain, Vaishnav & Hindu community presence",
                  "Central location - 5 mins to Railway Station"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Karelibaug Property Prices 2025</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Flat</span>
                    <span className="text-red-200">High Demand</span>
                  </div>
                  <div className="text-2xl font-bold">₹35L - ₹65L</div>
                  <div className="text-sm text-red-100">900-1300 sq.ft | Established Societies</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">3 BHK Flat</span>
                    <span className="text-red-200">Family Choice</span>
                  </div>
                  <div className="text-2xl font-bold">₹55L - ₹1.2Cr</div>
                  <div className="text-sm text-red-100">1300-1800 sq.ft | Premium Locations</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Row Houses</span>
                    <span className="text-red-200">Joint Families</span>
                  </div>
                  <div className="text-2xl font-bold">₹80L - ₹1.8Cr</div>
                  <div className="text-sm text-red-100">1500-2500 sq.ft | With Parking</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Commercial Shops</span>
                    <span className="text-red-200">Business Ready</span>
                  </div>
                  <div className="text-2xl font-bold">₹8,000 - ₹15,000/sq.ft</div>
                  <div className="text-sm text-red-100">Main road frontage | High footfall</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gujarati Business Hub */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4">
                💼 Business Powerhouse
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Commercial Heart of Traditional Vadodara
              </h2>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Karelibaug isn't just a residential area - it's a thriving commercial ecosystem that has 
                driven Vadodara's retail economy for generations. From wholesale farsan traders supplying 
                all of Gujarat to jewelry manufacturers, textile merchants, and food processors - this 
                area generates more daily commerce than many malls combined.
              </p>
              <p className="text-orange-100 mb-8 leading-relaxed">
                For entrepreneurs, owning commercial property in Karelibaug means tapping into guaranteed 
                footfall and a customer base that prefers traditional shopping experiences. The area's 
                reputation ensures that businesses here rarely fail - your neighbors will become your 
                regular customers.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <ShoppingBag className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">₹500Cr+</div>
                  <div className="text-orange-200 text-sm">Annual retail trade</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Store className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">1000+</div>
                  <div className="text-orange-200 text-sm">Shops & showrooms</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Gem className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">200+</div>
                  <div className="text-orange-200 text-sm">Jewelry businesses</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Utensils className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">150+</div>
                  <div className="text-orange-200 text-sm">Food businesses</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Famous Market Zones</h3>
              <div className="space-y-4">
                {[
                  { name: "Karelibaug Main Road", specialty: "Textiles, Sarees & Jewelry", footfall: "50,000/day" },
                  { name: "Navayard Area", specialty: "Farsan & Mithai Wholesale", footfall: "25,000/day" },
                  { name: "Raopura Connection", specialty: "Traditional Retail", footfall: "40,000/day" },
                  { name: "Dandia Bazaar Link", specialty: "General Merchandise", footfall: "35,000/day" },
                  { name: "Karelibaug Circle", specialty: "Electronics & Appliances", footfall: "20,000/day" }
                ].map((market, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                    <div>
                      <div className="font-semibold">{market.name}</div>
                      <div className="text-sm text-orange-300">{market.specialty}</div>
                    </div>
                    <div className="text-orange-400 font-bold text-sm">{market.footfall}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival & Community Life */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎉 Festival Life Like Nowhere Else
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Karelibaug celebrates every festival with an intensity that defines the Gujarati spirit. 
              This isn't just decoration - it's a community-wide celebration that bonds neighbors across generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">💃</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Navratri</h3>
              <p className="text-gray-600 text-sm">
                100+ garba venues, midnight dancing, traditional chaniya choli markets, and the most authentic 
                Navratri experience in Gujarat. Every circle, every lane has its own garba.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">🪔</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Diwali</h3>
              <p className="text-gray-600 text-sm">
                Streets transform into light galleries. Traditional rangoli competitions, mithai exchanges, 
                and the famous Diwali shopping season that brings customers from all over Gujarat.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">🪁</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Uttarayan</h3>
              <p className="text-gray-600 text-sm">
                Rooftop parties, kite wars between buildings, undhiyu feasts, and the famous Karelibaug 
                kite market. Every terrace becomes a celebration venue.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-5xl mb-4">🎊</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Ganesh Chaturthi</h3>
              <p className="text-gray-600 text-sm">
                Community pandals, processions through lanes, prasad distribution, and collective prayers. 
                Neighbors become family during these 10 days.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Institutions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Jain Derasars</h4>
                <p className="text-gray-600 text-sm">Multiple Jain temples with daily rituals, paryushan celebrations, and community dining</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Hindu Mandirs</h4>
                <p className="text-gray-600 text-sm">Swaminarayan, ISKCON, and traditional Hindu temples with regular satsangs and festivals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community Halls</h4>
                <p className="text-gray-600 text-sm">Samaj bhavans for weddings, community meetings, and cultural programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Property Options in Karelibaug
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From compact flats for young couples to ancestral-style joint family homes, 
              Karelibaug offers properties suited for traditional Gujarati family structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-red-600" />
                </div>
                <CardTitle className="text-xl">Compact 2 BHK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ideal for newly married couples or small families starting out. Established societies with 
                  good neighbors and walking distance to markets and temples.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> 900-1200 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> 10-30 year old buildings</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Known neighbor families</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Near temples & markets</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-red-600 font-bold">₹35L - ₹65L</span>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 3 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Spacious 3 BHK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For growing families with children or elderly parents. Extra room for pooja ghar, 
                  guest room, or work-from-home setup. Vastu-compliant layouts preferred.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> 1300-1800 sq.ft sizes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Vastu-compliant options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Dedicated pooja space</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Modular kitchen</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-orange-600 font-bold">₹55L - ₹1.2Cr</span>
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 4 BHK / Penthouse */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">4 BHK / Penthouse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Premium apartments for joint families or high-income households. Multiple bathrooms, 
                  servant quarters, and terrace access. Limited availability in prime locations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 2000-3000 sq.ft space</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 3-4 bathrooms</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Servant room option</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Private terrace</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹1.2Cr - ₹2.5Cr</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Row Houses */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-rose-500 to-rose-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Row Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Independent living within community setting. Ground + 1 or 2 floors, small courtyard, 
                  and dedicated parking. Perfect for business families wanting their own entrance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 1500-2500 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Private entrance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Car parking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Small otla/courtyard</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₹80L - ₹1.8Cr</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Shop */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Store className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-xl">Commercial Shops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Main road and internal road shop spaces. Perfect for retail, food business, jewelry, 
                  textiles, or professional offices. Guaranteed customer footfall.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 100-1000 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Main road frontage</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 8-12% rental yield</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Established markets</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-green-600 font-bold">₹8K - ₹15K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-green-500 text-green-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ancestral Property */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Ancestral Wadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Traditional Gujarati wadas (large family homes) with central courtyards, multiple rooms, 
                  and old-world charm. Rare finds suitable for renovation or redevelopment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 2000-5000 sq.ft plots</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Central courtyard</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Renovation potential</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Prime locations</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₹1.5Cr - ₹4Cr</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600">
                    Inquire <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Food Capital */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              🍴 Foodie Paradise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Food Capital of Vadodara
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Karelibaug is synonymous with Gujarati food. From wholesale farsan markets to legendary 
              snack shops, your taste buds will thank you for living here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Farsan Gali", specialty: "100+ farsan varieties wholesale", icon: <Utensils className="w-6 h-6" /> },
              { name: "Mithai Street", specialty: "Traditional sweets since 1920s", icon: <Coffee className="w-6 h-6" /> },
              { name: "Khakhra Market", specialty: "Export quality khakhra manufacturing", icon: <ShoppingBag className="w-6 h-6" /> },
              { name: "Street Food Lane", specialty: "Famous dabeli, pani puri, bhel", icon: <Star className="w-6 h-6" /> }
            ].map((spot, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {spot.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{spot.name}</h3>
                <p className="text-gray-600 text-sm">{spot.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Karelibaug Property
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is Karelibaug good for vegetarian families?",
                  a: "Absolutely! Karelibaug is predominantly vegetarian with most restaurants, shops, and housing societies being veg-only. It's one of the most Jain-friendly localities in Gujarat. You'll find multiple pure-veg options at every corner and many societies have policies preferring vegetarian tenants."
                },
                {
                  q: "Why is parking a challenge in Karelibaug?",
                  a: "Karelibaug developed before car ownership became common, so many older buildings lack parking. However, newer constructions and row houses include parking. When buying, verify parking availability. Many residents also use nearby paid parking lots or arrange street parking permits."
                },
                {
                  q: "Is Karelibaug noisy and crowded?",
                  a: "Yes, main roads and market areas are busy during business hours. However, internal lanes and residential pockets are relatively peaceful. During festivals like Navratri, the entire area comes alive with celebrations - which is either a feature or bug depending on your perspective!"
                },
                {
                  q: "What is the typical buyer profile in Karelibaug?",
                  a: "Predominantly Gujarati business families, Jain and Vaishnav communities, and families wanting to stay connected to traditional roots. Many buyers are second or third generation - children of current residents wanting to stay near parents or inherit family properties."
                },
                {
                  q: "Are there modern apartments available in Karelibaug?",
                  a: "New constructions in Karelibaug are limited due to space constraints, but several projects in the last 10 years offer modern amenities like lifts, gyms, and covered parking within traditional society structures. Check projects along the periphery for newer options."
                },
                {
                  q: "How is Karelibaug for rental investment?",
                  a: "Excellent! Rental demand is consistent from business families, shop owners, and people wanting central location access. 2 BHK rents range from ₹10,000-18,000, commercial shops can yield 8-12% returns. The tenant quality is generally good with long-term stays common."
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the Karelibaug Community?
              </h2>
              <p className="text-red-100 text-lg mb-8">
                Finding the right property in Karelibaug requires understanding the community dynamics, 
                society preferences, and neighborhood nuances. Our team has been serving Karelibaug families 
                for years - we speak the language, understand the values, and know which properties suit 
                which family types.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Karelibaug Expert</div>
                    <div className="text-red-100">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Our Karelibaug Office</div>
                    <div className="text-red-100">Near Karelibaug Circle, Main Road</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Available Daily</div>
                    <div className="text-red-100">Mon-Sat: 10 AM - 8 PM | Sun: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Karelibaug Home</h3>
              <p className="text-gray-600 mb-6">Tell us about your family and we'll match you with the right community</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm looking for property in Karelibaug for my Gujarati family. Please share options with good society." 
      />
    </main>
  );
}
