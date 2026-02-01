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
  Trophy,
  Car,
  Wallet,
  Building,
  ArrowRight,
  Clock,
  Users,
  Crown,
  Sparkles,
  Wine,
  Dumbbell,
  TreePine,
  Diamond,
  Gem,
  Medal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RaceCourseContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Race Course Vadodara"
        subtitle="Where Legacy Meets Luxury"
        description="Race Course isn't just Vadodara's most expensive address - it's the city's most exclusive community. Home to industrialists, business leaders, and established families, this leafy enclave around the historic Race Course Club represents the pinnacle of Vadodara living."
      />

      {/* Elite Introduction */}
      <section className="py-16 bg-gradient-to-b from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-4">
              👑 Vadodara's Most Prestigious Address
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              An Address That Needs No Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When Vadodara's business elite discuss real estate, Race Course ends conversations. 
              This isn't mere property - it's membership to an unspoken club. The sprawling 
              bungalows, century-old trees, quiet lanes, and proximity to the historic Race Course 
              Club create an atmosphere impossible to replicate. Those who live here belong to 
              Vadodara's establishment. Those who aspire, watch and wait for rare opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹15,000+</div>
              <div className="text-gray-600">Per sq.ft (Highest)</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1890</div>
              <div className="text-gray-600">Club Established</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Green</div>
              <div className="text-gray-600">Leafy Enclave</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Diamond className="w-8 h-8 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Ultra</div>
              <div className="text-gray-600">Limited Supply</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Race Course */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Race Course Mystique - Understanding Vadodara's Crown Jewel
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Race Course's prestige isn't manufactured - it's inherited from the Gaekwad era when 
                this area housed royalty and nobility. The Race Course Club, established in 1890, 
                became the social center for Vadodara's elite. Over decades, the most successful 
                families built homes nearby, creating an enclave that self-selects for success.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Today, Race Course combines heritage charm with modern exclusivity. Wide tree-lined 
                roads, large plot sizes (5000+ sq.ft minimum for bungalows), and strict development 
                guidelines preserve the area's character. You won't find dense apartment complexes 
                here - only low-rise premium projects and independent bungalows befitting the locality.
              </p>
              
              <div className="space-y-4">
                {[
                  "Vadodara's highest property prices - ₹15,000-25,000/sq.ft",
                  "Historic Race Course Club membership access",
                  "Large plot sizes - minimum 5000 sq.ft bungalows",
                  "Tree-lined streets and minimal traffic",
                  "Neighbors are industry leaders and old families",
                  "Extremely limited inventory - rare availability"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Gem className="w-6 h-6 mr-3 text-amber-400" />
                Race Course Property Pricing
              </h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Independent Bungalow</span>
                    <span className="text-amber-300">Ultra Premium</span>
                  </div>
                  <div className="text-2xl font-bold">₅Cr - ₂5Cr+</div>
                  <div className="text-sm text-slate-300">5000-15000 sq.ft plot | Custom built</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">4 BHK Luxury Flat</span>
                    <span className="text-amber-300">Limited</span>
                  </div>
                  <div className="text-2xl font-bold">₁.8Cr - ₃.5Cr</div>
                  <div className="text-sm text-slate-300">2500-4000 sq.ft | Full amenities</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Penthouse</span>
                    <span className="text-amber-300">Rare</span>
                  </div>
                  <div className="text-2xl font-bold">₃Cr - ₆Cr</div>
                  <div className="text-sm text-slate-300">4000-6000 sq.ft | Private terrace</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Plot (per sq.ft)</span>
                    <span className="text-amber-300">If available</span>
                  </div>
                  <div className="text-2xl font-bold">₁5,000 - ₂5,000</div>
                  <div className="text-sm text-slate-300">Minimum 3000 sq.ft | Very rare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Club Life */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold mb-4">
              🏇 The Race Course Club Life
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Property - A Lifestyle Statement
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Living near Race Course Club means access to one of Gujarat's most prestigious social 
              institutions. The club's facilities and community are central to the Race Course lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "World-Class Sports",
                description: "Tennis courts, swimming pool, squash, golf practice range, and the historic horse racing track. Sports facilities that rival any metro city club.",
                icon: <Trophy className="w-6 h-6" />
              },
              {
                title: "Premium Fitness",
                description: "State-of-the-art gymnasium, yoga pavilion, jogging tracks around the race course. Health and wellness in heritage surroundings.",
                icon: <Dumbbell className="w-6 h-6" />
              },
              {
                title: "Fine Dining",
                description: "Multiple restaurants serving continental, Indian, and Chinese cuisine. Hosting business dinners and family celebrations with class.",
                icon: <Wine className="w-6 h-6" />
              },
              {
                title: "Social Networking",
                description: "Club events, cultural programs, and social gatherings where Vadodara's elite meet. Business connections happen organically.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Heritage Events",
                description: "Horse racing events, polo matches, and traditional celebrations that preserve Vadodara's royal sporting heritage.",
                icon: <Medal className="w-6 h-6" />
              },
              {
                title: "Family Activities",
                description: "Children's play areas, family picnic lawns, and kid-friendly facilities. Multi-generational enjoyment in safe environment.",
                icon: <Home className="w-6 h-6" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-500/30 rounded-lg flex items-center justify-center mr-4 text-amber-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Note: Race Course Club membership is separate from property ownership. 
              However, residents of Race Course area have preferential access to membership when available.
            </p>
          </div>
        </div>
      </section>

      {/* Property Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ultra-Luxury Property Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Race Course inventory is extremely limited. When available, these properties 
              represent generational wealth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Heritage Bungalow */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-800"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7 text-slate-700" />
                </div>
                <CardTitle className="text-xl">Heritage Bungalows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Original bungalows from Gaekwad era or early post-independence. Massive plots, 
                  mature gardens, and architecture that can't be replicated.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> 8000-15000 sq.ft plots</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Mature trees & gardens</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Heritage architecture</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Renovation potential</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-slate-700 font-bold">₹10Cr - ₹25Cr+</span>
                  <Button variant="outline" size="sm" className="border-slate-500 text-slate-700">
                    Inquire <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Modern Bungalow */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Contemporary Bungalows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Newly constructed or renovated bungalows with modern amenities. Smart homes 
                  with traditional exteriors respecting area character.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 5000-10000 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Smart home automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Private pool options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Italian/imported finishes</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₅Cr - ₁5Cr</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
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
                  <Building2 className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl">4 BHK Luxury Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  In the rare premium projects near Race Course. Apartment living with 
                  bungalow-sized spaces and world-class amenities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 2500-4000 sq.ft</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Club-like amenities</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 3-4 car parking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Branded fittings</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-blue-600 font-bold">₁.8Cr - ₃.5Cr</span>
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-600">
                    View Flats <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Penthouse */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Exclusive Penthouses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Duplex penthouses with private terraces, panoramic views, and elevator 
                  access directly to your floor. The pinnacle of apartment luxury.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 4000-6000 sq.ft duplex</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Private rooftop</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 360° views</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Private lift access</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₃Cr - ₆Cr</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600">
                    Inquire <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plot */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Premium Plots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Extremely rare vacant plots in Race Course vicinity. Build your dream 
                  bungalow from scratch in Vadodara's most prestigious location.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> 3000-8000 sq.ft</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Clear title verified</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Building permission</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Once-in-decade opportunity</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-emerald-600 font-bold">₁5K-25K/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-600">
                    Check Availability <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Row House */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-rose-500 to-rose-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Luxury Row Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Premium row houses in gated communities near Race Course. Independent 
                  living feel with community security and shared amenities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 2500-4000 sq.ft</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Private garden</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Gated security</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Clubhouse access</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₁.2Cr - ₂.5Cr</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Lives Here */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who Lives in Race Course?
              </h2>
              <p className="text-lg text-gray-600">
                Your neighbors define your neighborhood. Race Course residents are Vadodara's elite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  profile: "Industrialists",
                  description: "Owners of manufacturing units, factories, and established businesses. Second and third-generation wealth.",
                  count: "40%"
                },
                {
                  profile: "Corporate Leaders",
                  description: "CXOs, MDs, and senior executives of multinationals and large Indian companies based in Gujarat.",
                  count: "20%"
                },
                {
                  profile: "Old Families",
                  description: "Established Vadodara families with generational homes. Heritage residents who define the area's character.",
                  count: "25%"
                },
                {
                  profile: "Professionals",
                  description: "Top doctors, lawyers, and consultants who've reached pinnacle of their careers.",
                  count: "10%"
                },
                {
                  profile: "NRIs",
                  description: "Successful NRIs who want premium Vadodara presence for visits and eventual return.",
                  count: "5%"
                }
              ].map((profile, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-900">{profile.profile}</h3>
                    <span className="text-sm bg-slate-100 text-slate-600 px-2 py-1 rounded">{profile.count}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{profile.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Perspective */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Race Course as Investment
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Race Course isn't a speculative investment - it's wealth preservation. The ultra-limited 
                supply (no new land creation possible) and perpetual elite demand means prices only 
                trend upward. Properties here have appreciated 400-500% over 20 years, and the trajectory 
                continues as Vadodara grows and creates new wealth.
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Historical Appreciation</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-700">₃K</div>
                      <div className="text-xs text-gray-500">2005 rate/sq.ft</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-700">₈K</div>
                      <div className="text-xs text-gray-500">2015 rate/sq.ft</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-700">₂0K</div>
                      <div className="text-xs text-gray-500">2025 rate/sq.ft</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Why Prices Only Rise</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Zero new land supply possible</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Existing owners rarely sell</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> New wealth continuously created</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Status symbol demand perpetual</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-slate-500 mr-2" /> Heritage value only increases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Comparison</h3>
              <div className="space-y-4">
                {[
                  { location: "Race Course", current: "₂0K/sq.ft", growth: "12-15%", risk: "Very Low" },
                  { location: "Alkapuri", current: "₁2K/sq.ft", growth: "8-10%", risk: "Low" },
                  { location: "Gotri", current: "₄.5K/sq.ft", growth: "10-14%", risk: "Medium" },
                  { location: "Chhani", current: "₂K/sq.ft", growth: "18-22%", risk: "Higher" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{item.location}</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        item.risk === "Very Low" ? "bg-green-100 text-green-700" :
                        item.risk === "Low" ? "bg-blue-100 text-blue-700" :
                        item.risk === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-orange-100 text-orange-700"
                      }`}>{item.risk} Risk</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Current:</span>
                        <span className="ml-2 font-medium">{item.current}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Annual Growth:</span>
                        <span className="ml-2 font-medium text-green-600">{item.growth}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Race Course offers lower percentage growth but on higher base with near-zero risk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Race Course Property - Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "How often do Race Course properties come to market?",
                  a: "Rarely. Most properties are held across generations. When available, they sell through private networks before public listing. We maintain relationships with Race Course families and get first information on potential sales. Register your interest - we'll notify you when opportunities arise."
                },
                {
                  q: "Is Race Course only for the ultra-rich?",
                  a: "The bungalows, yes. But 4 BHK apartments in nearby premium projects start at ₁.8Cr - expensive but achievable for successful professionals. These offer Race Course lifestyle benefits (club proximity, green environment) at more accessible price points."
                },
                {
                  q: "What about road connectivity and traffic?",
                  a: "Race Course enjoys excellent connectivity to all Vadodara areas while maintaining peaceful internal roads. The area's low-density development means no traffic congestion within the locality. Main roads connect to Alkapuri (5 min), Fatehgunj (7 min), and expressway (15 min)."
                },
                {
                  q: "Can I get membership to Race Course Club if I buy nearby?",
                  a: "Club membership is separate from property ownership and has a waiting list. However, Race Course residents do get preferential consideration when memberships open. The club also offers limited guest access and event participation options."
                },
                {
                  q: "Are there any new projects coming up in Race Course?",
                  a: "Development guidelines are strict to preserve area character. Occasional premium low-rise projects (max 4-5 floors) do come up when older buildings are redeveloped. These are rare and sell out quickly to buyers on waiting lists. Contact us to be notified of upcoming launches."
                },
                {
                  q: "What's the rental potential for Race Course property?",
                  a: "Strong but not the primary reason people buy here. 4 BHK apartments rent for ₅0,000-₈0,000 monthly, bungalows ₁-2 lakhs. Tenants are typically corporate executives on expat packages. Yields are 3-4% but appreciation compensates significantly."
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
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Register Your Interest in Race Course
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Race Course properties don't stay listed for long. Most transactions happen through 
                established networks. Register your interest - we'll contact you immediately when 
                matching properties become available, often before public listing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Luxury Property Desk</div>
                    <div className="text-slate-400">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Discrete & Confidential</div>
                    <div className="text-slate-400">All inquiries handled with complete privacy</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">By Appointment</div>
                    <div className="text-slate-400">Property viewings arranged at your convenience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Express Interest</h3>
              <p className="text-gray-600 mb-6">Be first to know about Race Course opportunities</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in ultra-luxury property in Race Course area. Please share any available options." 
      />
    </main>
  );
}
