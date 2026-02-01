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
  GraduationCap,
  Car,
  Wallet,
  Users,
  BookOpen,
  Building,
  ArrowRight,
  Clock,
  BadgePercent,
  PiggyBank,
  School,
  Stethoscope,
  Briefcase,
  BedDouble,
  IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WaghodiaRoadContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property on Waghodia Road Vadodara"
        subtitle="Gujarat's Premier Education Corridor"
        description="Invest in Vadodara's education boom! Waghodia Road hosts 50,000+ students across major universities. High rental yields, constant demand, and appreciation potential make this the smart investor's choice."
      />

      {/* Investment Introduction */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🎓 Education Gold Mine
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Numbers Don't Lie - Waghodia Road Delivers Returns
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With Parul University (70,000+ students), ITM Universe, Sumandeep Vidyapeeth, and dozens of 
              engineering and medical colleges, Waghodia Road has transformed into Gujarat's largest education 
              corridor. Every year brings fresh batches of students desperate for accommodation. Property here 
              isn't just about appreciation - it's about guaranteed monthly rental income that beats fixed 
              deposits hands down. Smart investors are building student housing empires while others wait.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Students Annually</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgePercent className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6-8%</div>
              <div className="text-gray-600">Rental Yield</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Colleges & Universities</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15%+</div>
              <div className="text-gray-600">Annual Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Yield Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rental Income Calculator - See Your Returns
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unlike residential areas where finding tenants can take months, Waghodia Road properties 
                rent within days of vacancy announcements. Students actively search for accommodations 
                starting February-March for July admissions. Many investors buy properties specifically 
                for the rental income, treating appreciation as a bonus.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The secret is understanding student needs - proximity to campus, basic amenities, and 
                affordable pricing. A ₹25 lakh 1 BHK can easily rent to 2 students at ₹6,000 each, 
                giving you ₹12,000 monthly - that's nearly 6% annual yield before appreciation!
              </p>
              
              <div className="space-y-4">
                {[
                  "Students pay 11 months advance (security + rent)",
                  "Minimal maintenance - young tenants, short stays",
                  "No brokerage - students find through word of mouth",
                  "Multiple income streams - rent + mess income possible",
                  "Furnished options command 30-40% premium rent",
                  "Zero vacancy in July-August peak admission season"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Investment Return Analysis</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">1 BHK Flat (₹25L)</span>
                    <span className="text-blue-200">Best ROI</span>
                  </div>
                  <div className="text-2xl font-bold">₹10K - ₹14K/month</div>
                  <div className="text-sm text-blue-100">For 2-3 students | 6-7% yield</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Flat (₹38L)</span>
                    <span className="text-blue-200">High Demand</span>
                  </div>
                  <div className="text-2xl font-bold">₹18K - ₹24K/month</div>
                  <div className="text-sm text-blue-100">For 4-5 students | 6-8% yield</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">PG Building (₹1.5Cr)</span>
                    <span className="text-blue-200">Cash Cow</span>
                  </div>
                  <div className="text-2xl font-bold">₹1.2L - ₹1.8L/month</div>
                  <div className="text-sm text-blue-100">20-30 beds | 8-12% yield</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Shop Near Campus (₹50L)</span>
                    <span className="text-blue-200">Student Traffic</span>
                  </div>
                  <div className="text-2xl font-bold">₹30K - ₹45K/month</div>
                  <div className="text-sm text-blue-100">Food court, stationery | 7-10% yield</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities & Colleges */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
              🏛️ Education Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Institutions Driving Rental Demand
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              Understanding the student population helps you make informed investment decisions. 
              Medical students can afford more, engineering students share more, MBA students prefer convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Parul University",
                students: "70,000+",
                courses: "Engineering, Medical, Pharmacy, MBA, Law",
                rent: "₹5K-8K/student",
                icon: <GraduationCap className="w-6 h-6" />
              },
              {
                name: "Sumandeep Vidyapeeth",
                students: "8,000+",
                courses: "Medical, Dental, Nursing, Physiotherapy",
                rent: "₹8K-12K/student",
                icon: <Stethoscope className="w-6 h-6" />
              },
              {
                name: "ITM Universe",
                students: "5,000+",
                courses: "Engineering, MBA, Pharmacy",
                rent: "₹5K-7K/student",
                icon: <Building className="w-6 h-6" />
              },
              {
                name: "AURO University",
                students: "3,000+",
                courses: "Engineering, Design, Management",
                rent: "₹6K-9K/student",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                name: "Various Engineering Colleges",
                students: "15,000+",
                courses: "B.Tech, Diploma Engineering",
                rent: "₹4K-6K/student",
                icon: <School className="w-6 h-6" />
              },
              {
                name: "Nursing & Paramedical",
                students: "5,000+",
                courses: "BSc Nursing, GNM, Paramedical",
                rent: "₹4K-6K/student",
                icon: <Users className="w-6 h-6" />
              }
            ].map((college, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mr-4 text-blue-300">
                    {college.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{college.name}</h3>
                    <div className="text-blue-300 text-sm">{college.students} students</div>
                  </div>
                </div>
                <p className="text-blue-200 text-sm mb-3">{college.courses}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-300">Avg. Rent Capacity:</span>
                  <span className="font-bold text-blue-200">{college.rent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Investment Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Options - Choose Your Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you want passive income from a single flat or want to build a student housing 
              business, Waghodia Road offers options at every budget level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 BHK Investment */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl">1 BHK Rental Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Entry-level investment perfect for first-time real estate investors. Rent to 2-3 students 
                  sharing, or a single working professional. Low maintenance, high demand.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Investment</div>
                      <div className="font-bold text-gray-900">₹22L - ₹32L</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Monthly Rent</div>
                      <div className="font-bold text-green-600">₹10K - ₹14K</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Annual Yield</div>
                      <div className="font-bold text-blue-600">5.5% - 6.5%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Tenant Type</div>
                      <div className="font-bold text-gray-900">Students/Singles</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View 1 BHK Options <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* 2 BHK Investment */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <BedDouble className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-xl">2 BHK Rental Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sweet spot for rental income. Can accommodate 4-5 students or rent to a family. 
                  Higher absolute income, similar yield percentage. Best balance of investment and returns.
                </p>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Investment</div>
                      <div className="font-bold text-gray-900">₹35L - ₹50L</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Monthly Rent</div>
                      <div className="font-bold text-green-600">₹18K - ₹26K</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Annual Yield</div>
                      <div className="font-bold text-green-600">6% - 7%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Tenant Type</div>
                      <div className="font-bold text-gray-900">Student Groups</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View 2 BHK Options <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* 3 BHK Investment */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">3 BHK Rental Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For families of faculty members or groups of 6-8 students. Can also be converted to 
                  mini-PG with 6-8 beds. Higher investment but stable, long-term tenants.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Investment</div>
                      <div className="font-bold text-gray-900">₹55L - ₹80L</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Monthly Rent</div>
                      <div className="font-bold text-green-600">₹28K - ₹40K</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Annual Yield</div>
                      <div className="font-bold text-purple-600">5.5% - 6.5%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Tenant Type</div>
                      <div className="font-bold text-gray-900">Families/Groups</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  View 3 BHK Options <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* PG Building */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">PG/Hostel Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Serious investment for serious returns. Purpose-built PG with 20-50 beds. Requires 
                  management but yields 8-12%. Can be operated self or with management tie-up.
                </p>
                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Investment</div>
                      <div className="font-bold text-gray-900">₹1Cr - ₹3Cr</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Monthly Income</div>
                      <div className="font-bold text-green-600">₹80K - ₹2.5L</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Annual Yield</div>
                      <div className="font-bold text-amber-600">8% - 12%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Beds</div>
                      <div className="font-bold text-gray-900">20-50 beds</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Explore PG Investments <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Commercial Shop */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-rose-500 to-rose-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Commercial Shop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Shops near college gates never go vacant. Stationery, food, mobile recharge, printing - 
                  student needs drive consistent business. Rent or start your own venture.
                </p>
                <div className="bg-rose-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Investment</div>
                      <div className="font-bold text-gray-900">₹30L - ₹80L</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Monthly Rent</div>
                      <div className="font-bold text-green-600">₹20K - ₹50K</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Annual Yield</div>
                      <div className="font-bold text-rose-600">7% - 10%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Best For</div>
                      <div className="font-bold text-gray-900">Food/Retail</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">
                  View Shop Options <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Plot Investment */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Land/Plot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Buy now, develop later. Land prices on Waghodia Road are appreciating 15-20% annually. 
                  Build a hostel complex or sell when prices peak. Pure appreciation play.
                </p>
                <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Price Range</div>
                      <div className="font-bold text-gray-900">₹2,500-4,000/sq.ft</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Min Investment</div>
                      <div className="font-bold text-gray-900">₹25L onwards</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Appreciation</div>
                      <div className="font-bold text-teal-600">15-20%/year</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Status</div>
                      <div className="font-bold text-gray-900">NA/NOC Available</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  View Plot Options <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Investor Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - see how other investors have built wealth on Waghodia Road
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Patel",
                investment: "2 x 2 BHK Flats (₃75L in 2019)",
                current: "Current Value: ₹1.2 Cr",
                rental: "Monthly Rental: ₹42,000",
                quote: "Bought two flats near Parul gate. Students queue up every July. Haven't had a single month without rent in 5 years."
              },
              {
                name: "Priya Shah",
                investment: "1 PG Building (₹1.5 Cr in 2020)",
                current: "Current Value: ₹2.4 Cr",
                rental: "Monthly Income: ₹1.5 Lakhs",
                quote: "Started with one building, now running three. Medical students prefer quality PGs and pay premium. Best business decision ever."
              },
              {
                name: "Jayesh Mehta",
                investment: "Shop + 2 Flats (₹90L in 2018)",
                current: "Current Value: ₹1.8 Cr",
                rental: "Monthly Rental: ₹68,000",
                quote: "The shop rents to a food outlet, flats to engineering students. Combined income covers my retirement expenses."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <PiggyBank className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-500">Investor</div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">{story.investment}</div>
                  <div className="text-sm font-semibold text-green-600">{story.current}</div>
                  <div className="text-sm font-semibold text-blue-600">{story.rental}</div>
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Strategic Location Advantages
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Waghodia Road connects Vadodara city to multiple educational hubs, making it a transit 
                corridor with constant development. The upcoming four-laning project will further boost 
                property values while improving accessibility for students and staff.
              </p>
              
              <div className="space-y-4">
                {[
                  { location: "Parul University Main Gate", distance: "0-3 km", significance: "Maximum student density zone" },
                  { location: "Sumandeep Vidyapeeth", distance: "5 km", significance: "Medical student premium area" },
                  { location: "Vadodara City Center", distance: "15 km", significance: "Urban connectivity" },
                  { location: "Vadodara Railway Station", distance: "18 km", significance: "Student arrival point" },
                  { location: "NH-8 Junction", distance: "12 km", significance: "Highway connectivity" }
                ].map((loc, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div>
                      <div className="font-semibold text-gray-900">{loc.location}</div>
                      <div className="text-sm text-gray-500">{loc.significance}</div>
                    </div>
                    <div className="text-blue-600 font-bold">{loc.distance}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Hotspots on Waghodia Road</h3>
              <div className="space-y-4">
                {[
                  { zone: "0-3 km from Parul Gate", type: "Student flats, PGs, food shops", rating: "⭐⭐⭐⭐⭐" },
                  { zone: "3-6 km Segment", type: "Affordable flats, plot investments", rating: "⭐⭐⭐⭐" },
                  { zone: "Near Sumandeep Vidyapeeth", type: "Premium PGs for medical students", rating: "⭐⭐⭐⭐⭐" },
                  { zone: "ITM Universe Area", type: "Budget student housing", rating: "⭐⭐⭐⭐" }
                ].map((zone, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-gray-900">{zone.zone}</div>
                      <div className="text-amber-500 text-sm">{zone.rating}</div>
                    </div>
                    <div className="text-sm text-gray-600">{zone.type}</div>
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
              Waghodia Road Investment FAQs
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is rental income from students reliable?",
                  a: "Yes, extremely reliable. Students typically pay 11 months rent + 1 month deposit upfront. Academic calendars are fixed, so you know exactly when to expect new tenants (July for freshers). Most tenants stay 3-4 years through their course duration. The only lean period is May-June between batches."
                },
                {
                  q: "What are the risks of investing here?",
                  a: "Main risks include: 1) Oversupply of student housing in certain zones, 2) Dependency on university growth, 3) May-June vacancy periods, 4) Maintenance issues with student tenants. These are mitigated by choosing locations near campus gates and maintaining properties well."
                },
                {
                  q: "Should I buy furnished or unfurnished for rental?",
                  a: "For student rentals, semi-furnished (beds, fans, basic furniture) is ideal. It commands 20-30% higher rent while keeping costs manageable. Fully furnished is overkill for students. For family/faculty rentals, unfurnished works as they bring their own furniture."
                },
                {
                  q: "Can I get home loan for rental property?",
                  a: "Yes, banks offer home loans for investment properties, typically at 0.5-1% higher interest than self-occupied property loans. Rental income can be partially considered for eligibility. Down payment requirements may be slightly higher (20-25%)."
                },
                {
                  q: "What's the best time to buy on Waghodia Road?",
                  a: "Prices typically dip slightly in March-May when existing batches graduate and new admissions haven't started. This is when sellers are more negotiable. However, don't wait too long - prices have been rising 12-15% annually."
                },
                {
                  q: "How do I manage property from another city?",
                  a: "We offer property management services including tenant finding, rent collection, and maintenance coordination. Many NRI and out-of-city investors use such services. Alternatively, local caretakers can be hired for ₹2,000-5,000/month per property."
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Building Your Rental Portfolio Today
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Don't let another admission season pass without owning rental property. Our investment 
                specialists understand the Waghodia Road market intimately - we know which buildings 
                fill fastest, which locations have parking issues, and where the next development 
                hotspot is emerging.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Investment Specialist</div>
                    <div className="text-blue-200">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Waghodia Road Office</div>
                    <div className="text-blue-200">Near Parul University Gate No. 2</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Consultation Hours</div>
                    <div className="text-blue-200">Mon-Sat: 9 AM - 7 PM | Sun: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Investment Consultation</h3>
              <p className="text-gray-600 mb-6">Get personalized ROI analysis for your budget</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in rental investment property on Waghodia Road near Parul University. Budget is ₹35-50 lakhs." 
      />
    </main>
  );
}
