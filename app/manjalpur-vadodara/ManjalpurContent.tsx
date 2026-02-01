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
  Factory,
  Car,
  Wallet,
  Users,
  Hammer,
  Building,
  ArrowRight,
  Clock,
  BadgeIndianRupee,
  Briefcase,
  Award,
  Heart,
  Bus,
  Train
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManjalpurContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Manjalpur Vadodara"
        subtitle="Affordable Homes for Vadodara's Working Heroes"
        description="Discover budget-friendly properties in Manjalpur - the heart of Vadodara's industrial corridor. Quality homes near GIDC, excellent connectivity, and prices that respect your hard-earned money."
      />

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              🏭 Industrial Hub Living
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Manjalpur is the Smart Choice for Working Families
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Manjalpur stands as one of Vadodara's most practical residential choices for those who value convenience 
              over luxury, substance over show. Situated adjacent to the GIDC industrial belt, Manjalpur has evolved 
              into a self-sufficient neighborhood where thousands of industrial workers, small business owners, and 
              middle-class families have built their lives. Here, your money stretches further, your commute is shorter, 
              and your community understands the value of hard work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹18L</div>
              <div className="text-gray-600">Starting Price</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Industries Nearby</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Resident Families</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8-10%</div>
              <div className="text-gray-600">Steady Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* For Working Class Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Homes Built for Real People with Real Budgets
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Manjalpur, we understand that not everyone has crores to spend on a home. That's why this locality 
                has become the go-to destination for factory workers, shop floor supervisors, small traders, auto-rickshaw 
                drivers, and government employees who want to own a home without drowning in EMIs. The area offers genuine 
                value - practical layouts, essential amenities, and locations that cut your daily travel costs.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                What makes Manjalpur special is its community spirit. Neighbors know each other, local vendors remember 
                your preferences, and children play freely in the streets. It's not a gated community with fancy clubs - 
                it's real neighborhood living where your money is spent on actual living space, not on amenities you'll 
                rarely use.
              </p>
              
              <div className="space-y-4">
                {[
                  "EMI starting from just ₹9,500/month for 1 BHK",
                  "Walking distance to GIDC factories & workshops",
                  "Multiple government schools within 1 km",
                  "Sabji mandi & daily needs market at doorstep",
                  "Bus connectivity to all parts of Vadodara",
                  "Working class friendly neighborhood"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Budget-Friendly Price List 2025</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">1 BHK Apartment</span>
                    <span className="text-orange-200">Best Value</span>
                  </div>
                  <div className="text-2xl font-bold">₹18L - ₹28L</div>
                  <div className="text-sm text-orange-100">450-650 sq.ft | Singles & Couples</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Apartment</span>
                    <span className="text-orange-200">Most Popular</span>
                  </div>
                  <div className="text-2xl font-bold">₹25L - ₹45L</div>
                  <div className="text-sm text-orange-100">800-1100 sq.ft | Small Families</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">3 BHK Apartment</span>
                    <span className="text-orange-200">Growing Families</span>
                  </div>
                  <div className="text-2xl font-bold">₹40L - ₹65L</div>
                  <div className="text-sm text-orange-100">1200-1500 sq.ft | Joint Families</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Row Houses</span>
                    <span className="text-orange-200">With Parking</span>
                  </div>
                  <div className="text-2xl font-bold">₹55L - ₹90L</div>
                  <div className="text-sm text-orange-100">1500-2200 sq.ft | Independent Living</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Home, Your Budget - EMI Made Easy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how affordable home ownership in Manjalpur really is. With PMAY subsidies and competitive 
              loan rates, your rent money could be buying you a home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-orange-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
                <CardTitle className="text-center">1 BHK @ ₹22 Lakhs</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-600">₹9,850</div>
                  <div className="text-gray-500">EMI per month*</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Payment (10%)</span>
                    <span className="font-semibold">₹2.2 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold">₹19.8 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PMAY Subsidy</span>
                    <span className="font-semibold text-green-600">₹2.67 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective Loan</span>
                    <span className="font-semibold">₹17.13 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold">20 Years @ 8.5%</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-400 shadow-xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-xl">
                <CardTitle className="text-center">2 BHK @ ₹35 Lakhs</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-600">₹15,200</div>
                  <div className="text-gray-500">EMI per month*</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Payment (10%)</span>
                    <span className="font-semibold">₹3.5 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold">₹31.5 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PMAY Subsidy</span>
                    <span className="font-semibold text-green-600">₹2.67 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective Loan</span>
                    <span className="font-semibold">₹28.83 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold">20 Years @ 8.5%</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-xl">
                <CardTitle className="text-center">3 BHK @ ₹52 Lakhs</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-600">₹22,800</div>
                  <div className="text-gray-500">EMI per month*</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Down Payment (15%)</span>
                    <span className="font-semibold">₹7.8 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold">₹44.2 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PMAY Subsidy</span>
                    <span className="font-semibold text-green-600">₹2.35 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective Loan</span>
                    <span className="font-semibold">₹41.85 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold">20 Years @ 8.5%</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            *EMI calculated at 8.5% interest rate. Actual rates may vary. PMAY subsidy subject to eligibility.
          </p>
        </div>
      </section>

      {/* Industrial Connectivity */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4">
                🏭 Industrial Proximity
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Live Where You Work - Save Time & Money
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                One of the biggest advantages of living in Manjalpur is the proximity to major industrial areas. 
                If you work in manufacturing, engineering, or any industrial sector, your commute could be as 
                short as a 10-minute bike ride. That's hours saved every week - time you can spend with family 
                instead of sitting in traffic.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The saved transportation cost alone could amount to ₹3,000-5,000 per month, effectively reducing 
                your living expenses significantly. Many factory owners and industrial workers have found that 
                living in Manjalpur makes financial sense even if they could afford more expensive localities.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Factory className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">5-15 mins</div>
                  <div className="text-gray-300 text-sm">To GIDC Industrial Area</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <BadgeIndianRupee className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">₹4,000+</div>
                  <div className="text-gray-300 text-sm">Monthly Travel Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Bus className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">15+</div>
                  <div className="text-gray-300 text-sm">Bus Routes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <Train className="w-8 h-8 text-orange-400 mb-2" />
                  <div className="font-bold text-xl">8 km</div>
                  <div className="text-gray-300 text-sm">To Railway Station</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Nearby Industrial Zones</h3>
              <div className="space-y-4">
                {[
                  { name: "Makarpura GIDC", type: "Engineering & Auto", distance: "3 km", jobs: "15,000+" },
                  { name: "Makarpura Industrial Estate", type: "Manufacturing", distance: "4 km", jobs: "12,000+" },
                  { name: "IOCL Refinery Gate", type: "Petrochemical", distance: "8 km", jobs: "8,000+" },
                  { name: "ONGC Township", type: "Oil & Gas", distance: "10 km", jobs: "5,000+" },
                  { name: "Bajwa Industrial Area", type: "Mixed Industries", distance: "6 km", jobs: "10,000+" }
                ].map((zone, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                    <div>
                      <div className="font-semibold">{zone.name}</div>
                      <div className="text-sm text-gray-400">{zone.type} | {zone.jobs} workers</div>
                    </div>
                    <div className="text-orange-400 font-bold">{zone.distance}</div>
                  </div>
                ))}
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
              Property Options for Every Budget
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From compact bachelor pads to spacious family homes, Manjalpur offers practical living solutions 
              without unnecessary frills that inflate prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bachelor/Single Rooms */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl">1 RK / Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Perfect for bachelors working in nearby industries. Basic but functional spaces with shared 
                  or attached kitchen options. Many near bus stops for easy commuting.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> 250-400 sq.ft compact units</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Furnished options available</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Rent: ₹4,000-7,000/month</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-orange-600 font-bold">₹12L - ₹18L</span>
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 1 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl">1 BHK Flats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ideal for newly married couples or small families. Includes separate bedroom, living area, 
                  kitchen, and bathroom. Best value for money in Vadodara real estate.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> 450-650 sq.ft carpet area</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> PMAY subsidy eligible</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> EMI from ₹9,500/month</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-orange-600 font-bold">₹18L - ₹28L</span>
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 2 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                Bestseller
              </div>
              <div className="h-3 bg-gradient-to-r from-orange-600 to-red-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl">2 BHK Flats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The most sought-after configuration for working families. Two bedrooms provide space for 
                  children or guests, with a functional kitchen and living area.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> 800-1100 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Most banks pre-approved</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" /> Ready & under-construction</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-orange-600 font-bold">₹25L - ₹45L</span>
                  <Button variant="outline" size="sm" className="border-orange-500 text-orange-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 3 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-red-600" />
                </div>
                <CardTitle className="text-xl">3 BHK Flats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For growing families or those with elderly parents. Three bedrooms offer privacy for everyone, 
                  with larger living spaces for family gatherings.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> 1200-1500 sq.ft layouts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> Servant room options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" /> 2 bathroom standard</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-red-600 font-bold">₹40L - ₹65L</span>
                  <Button variant="outline" size="sm" className="border-red-500 text-red-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Row Houses */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Row Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Independent living at affordable prices. Ground + 1 floor structures with small garden 
                  space and dedicated parking. No maintenance society politics.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 1500-2200 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Private parking space</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Small terrace garden</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹55L - ₹90L</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Shops & Commercial */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-xl">Shops & Gala</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Commercial spaces ideal for local businesses serving industrial workers. Grocery stores, 
                  eateries, hardware shops, and service centers do well here.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 100-500 sq.ft shops</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Industrial gala available</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> High worker footfall</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-green-600 font-bold">₹15L - ₹60L</span>
                  <Button variant="outline" size="sm" className="border-green-500 text-green-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need Within Walking Distance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Manjalpur is a self-sufficient neighborhood where daily needs are met without traveling far
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Daily Markets", items: ["Manjalpur Sabji Mandi", "Shree Krishna Dairy", "Local Kirana Stores"], icon: "🛒" },
              { title: "Schools", items: ["Manjalpur Primary School", "Vidya Vikas School", "St. Mary's English Medium"], icon: "📚" },
              { title: "Healthcare", items: ["Civil Hospital Branch", "Maruti Hospital", "24x7 Medical Stores"], icon: "🏥" },
              { title: "Transport", items: ["VTCOS Bus Depot", "Auto Stand", "Shared Rickshaw Points"], icon: "🚌" },
              { title: "Banking", items: ["SBI Branch", "Bank of Baroda ATM", "Post Office"], icon: "🏦" },
              { title: "Worship", items: ["Swaminarayan Temple", "Hanuman Temple", "Jama Masjid"], icon: "🙏" },
              { title: "Recreation", items: ["Manjalpur Garden", "Community Hall", "Local Gymnasium"], icon: "🎯" },
              { title: "Eateries", items: ["Bhagat Tarachand", "Local Dhabas", "Street Food Stalls"], icon: "🍽️" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Schemes for First-Time Buyers
              </h2>
              <p className="text-lg text-gray-600">
                Make the most of government subsidies designed for working class home buyers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">PMAY Subsidy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Under Pradhan Mantri Awas Yojana, EWS and LIG category buyers can get interest subsidy up to 
                  ₹2.67 lakhs on home loans. Most 1 BHK and 2 BHK in Manjalpur qualify.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Income limit: Up to ₹6 lakhs annual
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Carpet area: Up to 60 sq.m (EWS) / 160 sq.m (LIG)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    First home purchase only
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Gujarat Housing Scheme</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  State government provides additional support for industrial workers and BPL families through 
                  various housing assistance programs and subsidized land rates.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Industrial worker quota
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stamp duty concessions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Priority for GIDC employees
                  </li>
                </ul>
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
              Frequently Asked Questions - Manjalpur Property
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "What is the cheapest property available in Manjalpur?",
                  a: "The most affordable options in Manjalpur are 1 RK units starting from ₹12 lakhs and 1 BHK flats from ₹18 lakhs. These are ideal for bachelors, newly married couples, or as rental investments. With PMAY subsidy, the effective cost can be reduced further."
                },
                {
                  q: "Is Manjalpur safe for families?",
                  a: "Yes, Manjalpur is a family-friendly locality with a strong community presence. Being a working-class neighborhood, most residents are regular job-holders with families. Police patrol is regular, and the community watches out for each other. It's considered safer than many isolated luxury societies."
                },
                {
                  q: "How is public transport connectivity from Manjalpur?",
                  a: "Manjalpur has excellent bus connectivity with direct routes to Railway Station, Alkapuri, GIDC, and other major areas. Auto-rickshaws are readily available, and many workers use shared transport. The area is well-connected via Manjalpur-Makarpura road."
                },
                {
                  q: "What type of people live in Manjalpur?",
                  a: "Manjalpur is predominantly a working-class neighborhood with industrial workers, small business owners, government employees, and middle-class families. It's a practical, no-frills community focused on hard work and simple living."
                },
                {
                  q: "Are there good schools in Manjalpur?",
                  a: "Yes, Manjalpur has multiple government and private schools including Gujarat Medium, English Medium, and CBSE schools. Notable ones include Vidya Vikas, St. Mary's, and government primary schools. For higher education, colleges are accessible via short bus rides."
                },
                {
                  q: "Is it better to rent or buy in Manjalpur?",
                  a: "Given the affordable prices and availability of PMAY subsidies, buying is often better than renting in Manjalpur. A 2 BHK EMI of ₹15,000 is comparable to rent, and you build equity. However, if you're unsure about staying long-term, renting (₹8,000-15,000/month) is a good option first."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Own Your First Home in Manjalpur?
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                Don't let another year of paying rent pass by. With our guidance, you can find an affordable 
                home that fits your budget and qualifies for government subsidies. We specialize in helping 
                first-time buyers navigate the home buying process.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Talk to Our Budget Expert</div>
                    <div className="text-orange-100">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Manjalpur Office</div>
                    <div className="text-orange-100">Near Manjalpur Bus Stand, Main Road</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">We Work When You're Free</div>
                    <div className="text-orange-100">Mon-Sun: 8 AM - 9 PM (Even Sundays!)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Home Loan Consultation</h3>
              <p className="text-gray-600 mb-6">We'll check your PMAY eligibility & loan approval chances</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm looking for affordable property in Manjalpur. My budget is under ₹40 lakhs." 
      />
    </main>
  );
}
