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
  Tractor,
  Car,
  Wallet,
  TreePine,
  Sprout,
  Building,
  ArrowRight,
  Clock,
  Truck,
  Factory,
  Mountain,
  Sun,
  Route,
  Leaf,
  PiggyBank
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChhaniContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Chhani Vadodara"
        subtitle="Tomorrow's Prime Location at Yesterday's Prices"
        description="Chhani is where smart investors buy today what others will pay premium for tomorrow. Affordable plots, farmhouses, and emerging residential projects in Vadodara's fastest-growing suburb with excellent highway connectivity."
      />

      {/* Opportunity Introduction */}
      <section className="py-16 bg-gradient-to-b from-lime-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold mb-4">
              🌱 Early Bird Opportunity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chhani - The Last Affordable Frontier of Vadodara
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every booming real estate market was once an "upcoming area" that early investors bought into. 
              Chhani is at that exact inflection point today. Located on the Chhani-Jakat Naka highway 
              corridor, this suburb is witnessing rapid industrial development, new residential projects, 
              and infrastructure upgrades that will transform it within 5-7 years. The question isn't IF 
              Chhani will appreciate - it's whether you'll be an owner or a price-watcher when it happens.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-lime-100">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-lime-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹1,800</div>
              <div className="text-gray-600">Plot Rate/sq.ft</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-lime-100">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">18-22%</div>
              <div className="text-gray-600">Annual Appreciation</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-lime-100">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Route className="w-8 h-8 text-lime-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">NH-8</div>
              <div className="text-gray-600">Highway Access</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-lime-100">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-lime-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">New Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chhani Now */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Smart Money is Moving to Chhani Right Now
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Chhani's transformation began with the widening of the Chhani-Jakat Naka road and the 
                establishment of multiple industrial clusters along this corridor. What was agricultural 
                land five years ago is now dotted with manufacturing units, warehouses, and logistics 
                centers. This industrial growth creates jobs, and jobs create housing demand.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The VMC (Vadodara Municipal Corporation) is extending services to Chhani, including 
                water supply, drainage, and road infrastructure. Several builders have launched 
                affordable housing projects targeting industrial workers and young professionals. 
                The pattern is clear - this is exactly how areas like Gotri and Manjalpur developed 
                20 years ago, and look where their prices are today.
              </p>
              
              <div className="space-y-4">
                {[
                  "40% cheaper than established Vadodara localities",
                  "Direct highway connectivity to Ahmedabad & Mumbai",
                  "New industrial estates creating 10,000+ jobs",
                  "VMC infrastructure expansion underway",
                  "Multiple RERA-approved residential projects launched",
                  "Ideal for long-term wealth building"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-lime-600 to-green-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Current Chhani Prices vs Developed Areas</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Chhani Plots Today</span>
                    <span className="text-lime-200">Buy Now</span>
                  </div>
                  <div className="text-2xl font-bold">₹1,800 - ₹2,500/sq.ft</div>
                  <div className="text-sm text-lime-100">Compare: Gotri ₹3,500+ | Akota ₹5,000+</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">1 BHK Flat</span>
                    <span className="text-lime-200">Starter</span>
                  </div>
                  <div className="text-2xl font-bold">₹18L - ₹25L</div>
                  <div className="text-sm text-lime-100">Compare: Gotri ₹30L+ | Alkapuri ₹40L+</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Flat</span>
                    <span className="text-lime-200">Popular</span>
                  </div>
                  <div className="text-2xl font-bold">₹28L - ₹42L</div>
                  <div className="text-sm text-lime-100">Compare: Gotri ₹48L+ | Akota ₹55L+</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Farmhouse Land</span>
                    <span className="text-lime-200">Exclusive</span>
                  </div>
                  <div className="text-2xl font-bold">₹800 - ₹1,200/sq.ft</div>
                  <div className="text-sm text-lime-100">5,000 sq.ft minimum | Agricultural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Development */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-lime-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-sm font-semibold mb-4">
              🚧 Development in Progress
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Infrastructure That's Driving Appreciation
            </h2>
            <p className="text-lime-200 max-w-3xl mx-auto">
              Chhani's transformation is backed by concrete infrastructure development that's 
              already underway or approved. These aren't promises - they're projects with budgets allocated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Chhani-Jakat Naka Highway",
                status: "Widening Complete",
                impact: "Reduced travel time to city center to 15 mins",
                icon: <Route className="w-6 h-6" />
              },
              {
                title: "Industrial Corridor",
                status: "50+ units operational",
                impact: "10,000+ jobs created, housing demand spike",
                icon: <Factory className="w-6 h-6" />
              },
              {
                title: "VMC Water Supply",
                status: "Pipeline laying in progress",
                impact: "24/7 Narmada water expected by 2026",
                icon: <Sprout className="w-6 h-6" />
              },
              {
                title: "Sewerage Network",
                status: "Planning approved",
                impact: "Modern drainage replacing septic systems",
                icon: <Building className="w-6 h-6" />
              },
              {
                title: "Electric Grid Upgrade",
                status: "Substation commissioned",
                impact: "Reliable power for industries & homes",
                icon: <Sun className="w-6 h-6" />
              },
              {
                title: "Proposed Ring Road",
                status: "DPR submitted",
                impact: "Direct connectivity without city traffic",
                icon: <Car className="w-6 h-6" />
              }
            ].map((infra, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime-500/30 rounded-lg flex items-center justify-center mr-4 text-lime-300">
                    {infra.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{infra.title}</h3>
                    <div className="text-lime-300 text-sm">{infra.status}</div>
                  </div>
                </div>
                <p className="text-lime-100 text-sm">{infra.impact}</p>
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
              Investment Options in Chhani
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From affordable residential plots for future home construction to farmhouse land 
              for weekend retreats, Chhani offers diverse investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Plots */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-lime-500 to-lime-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-lime-600" />
                </div>
                <CardTitle className="text-xl">Residential Plots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  NA/NOC plots with clear titles for custom home construction. VMDA approved layouts 
                  with 30-40 ft roads, underground services, and proper documentation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-lime-500 mr-2" /> 1000-3000 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-lime-500 mr-2" /> Clear title verification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-lime-500 mr-2" /> Loan available on NA plots</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-lime-500 mr-2" /> 18-22% appreciation track record</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-lime-600 font-bold">₹1,800 - ₹2,500/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-lime-500 text-lime-600">
                    View Plots <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Affordable Flats */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-xl">Affordable Flats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Budget-friendly 1 BHK and 2 BHK apartments in newly launched RERA projects. 
                  Ideal for first-time buyers or rental investment for industrial workers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 1 BHK from ₹18 lakhs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 2 BHK from ₹28 lakhs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> PMAY subsidy applicable</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 90% bank loan available</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-green-600 font-bold">₹18L - ₹45L</span>
                  <Button variant="outline" size="sm" className="border-green-500 text-green-600">
                    View Flats <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Farmhouse Land */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <TreePine className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Farmhouse Plots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Agricultural land ideal for weekend farmhouses, organic farming, or long-term 
                  land banking. Larger parcels with lower per-sq.ft costs and scenic surroundings.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> 5,000-20,000 sq.ft parcels</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> 7/12 clear documents</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Farmhouse construction allowed</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Scenic green surroundings</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-emerald-600 font-bold">₹800 - ₹1,200/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-emerald-500 text-emerald-600">
                    View Land <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Row Houses */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Row Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Independent living in gated communities. Duplex and triplex options with private 
                  gardens, parking, and community amenities at prices impossible elsewhere.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> 1500-2500 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Private garden space</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Gated security</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Under ₹1 crore</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-teal-600 font-bold">₹55L - ₹95L</span>
                  <Button variant="outline" size="sm" className="border-teal-500 text-teal-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Industrial Gala/Warehouse */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Industrial/Warehouse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Industrial gala, warehouses, and godown spaces with highway access. Perfect for 
                  manufacturing, logistics, or storage businesses serving Vadodara-Ahmedabad corridor.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Highway frontage available</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Industrial zoning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Heavy vehicle access</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Power infrastructure</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹2,500 - ₹4,000/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Shops */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-rose-500 to-rose-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Commercial Shops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Retail spaces in upcoming commercial complexes. Early booking means lower prices 
                  and prime location selection. Serve the growing residential and industrial population.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 150-500 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Main road visibility</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Growing customer base</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Pre-launch pricing</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₹4,500 - ₹7,000/sq.ft</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600">
                    View Shops <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Comparison */}
      <section className="py-16 bg-lime-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Chhani vs Other Vadodara Areas - The Numbers
              </h2>
              <p className="text-lg text-gray-600">
                See how Chhani pricing compares to established localities
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-lime-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Property Type</th>
                      <th className="px-6 py-4 text-center">Chhani</th>
                      <th className="px-6 py-4 text-center">Gotri</th>
                      <th className="px-6 py-4 text-center">Akota</th>
                      <th className="px-6 py-4 text-center">Alkapuri</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Plot (per sq.ft)</td>
                      <td className="px-6 py-4 text-center text-lime-600 font-bold">₹1,800-2,500</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹3,200-4,500</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹4,500-6,000</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹7,000-12,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2 BHK Flat</td>
                      <td className="px-6 py-4 text-center text-lime-600 font-bold">₹28L-42L</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹45L-70L</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹55L-85L</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹75L-1.2Cr</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Row House</td>
                      <td className="px-6 py-4 text-center text-lime-600 font-bold">₹55L-95L</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹90L-1.5Cr</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹1.2Cr-2Cr</td>
                      <td className="px-6 py-4 text-center text-gray-600">₹2Cr-3.5Cr</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Appreciation (Annual)</td>
                      <td className="px-6 py-4 text-center text-lime-600 font-bold">18-22%</td>
                      <td className="px-6 py-4 text-center text-gray-600">10-14%</td>
                      <td className="px-6 py-4 text-center text-gray-600">8-12%</td>
                      <td className="px-6 py-4 text-center text-gray-600">6-10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-4 text-sm">
              Prices as of January 2025. Actual prices may vary based on exact location and project.
            </p>
          </div>
        </div>
      </section>

      {/* Farmhouse Living */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-emerald-100 to-lime-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
                The Farmhouse Dream Within Reach
              </h3>
              <p className="text-gray-700 mb-6">
                Chhani offers what's becoming increasingly rare around Vadodara - affordable agricultural 
                land suitable for farmhouse development. Just 20-25 km from city center, you can own 
                your weekend retreat, grow organic vegetables, or simply hold land for appreciation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Min Plot Size", value: "5,000 sq.ft" },
                  { label: "Price Range", value: "₹40L-1.5Cr" },
                  { label: "City Distance", value: "20-25 km" },
                  { label: "Construction", value: "Allowed" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build Your Weekend Sanctuary
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Imagine owning a piece of land where your children can run free, where you can grow 
                your own vegetables, and where city stress melts away. Chhani farmhouse plots make 
                this dream affordable for middle-class families who thought such luxury was beyond reach.
              </p>
              <div className="space-y-4">
                {[
                  "Fresh air and green surroundings 20 mins from city",
                  "Legal farmhouse construction on agricultural land",
                  "Grow organic vegetables, fruits & flowers",
                  "Future potential for land use conversion",
                  "Weekend family bonding spot",
                  "Privacy impossible to find in city apartments"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Mountain className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
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
              Chhani Investment - Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is Chhani too far from Vadodara city?",
                  a: "Chhani is about 15-20 km from central Vadodara, which translates to 20-30 minutes by road (improving as infrastructure develops). Many Vadodara suburbs like Waghodia Road are similar distances. For the price difference (40% lower), the distance is acceptable, especially for investment purposes."
                },
                {
                  q: "What's the legal status of land in Chhani?",
                  a: "We deal only in legally clear properties. Residential plots come with NA/NOC, agricultural land with clear 7/12 extracts. Always verify: 1) Title chain for 30 years, 2) No pending litigation, 3) Clear demarcation, 4) Proper documentation. We facilitate legal verification before any transaction."
                },
                {
                  q: "Is it safe to invest in an 'upcoming' area?",
                  a: "Chhani isn't speculative - it's following proven development patterns. The industrial estates are operational, VMC services are extending, and RERA-approved projects are selling. The key is buying from reputed developers and verified sellers. Early investment has higher appreciation but buy smart, not just cheap."
                },
                {
                  q: "What if I want to build on the plot later?",
                  a: "For NA plots: You can apply for building permission immediately. For agricultural land: You can build a farmhouse (with restrictions on built-up area). For future residential construction on agricultural land, you'd need NA conversion when applicable. Plan according to your timeline."
                },
                {
                  q: "Can I get home loan for property in Chhani?",
                  a: "Yes, banks offer loans for RERA-registered projects in Chhani. Plot loans are available for NA plots at slightly higher interest rates. Agricultural land typically requires cash purchase. We can connect you with banks actively lending in Chhani."
                },
                {
                  q: "What's the rental potential in Chhani?",
                  a: "Currently moderate, but growing with industrial development. 2 BHK flats rent for ₹8,000-12,000 monthly, primarily to industrial workers and small business families. As population grows, rental demand and rates will increase proportionally."
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
      <section className="py-16 bg-gradient-to-r from-lime-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Be an Early Investor, Not a Late Regret
              </h2>
              <p className="text-lime-100 text-lg mb-8">
                Chhani property prices are moving every month. What costs ₹2,000/sq.ft today may 
                well be ₹3,000 next year based on current trends. We've helped hundreds of 
                investors secure their stake in Chhani's growth story. Schedule a site visit 
                this weekend and see the opportunity for yourself.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Plot Investment Specialist</div>
                    <div className="text-lime-200">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Site Office</div>
                    <div className="text-lime-200">Chhani-Jakat Naka Road, Near Petrol Pump</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Site Visits</div>
                    <div className="text-lime-200">Daily 9 AM - 6 PM | Sunday Special Tours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Free Site Visit</h3>
              <p className="text-gray-600 mb-6">See Chhani's potential with your own eyes</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in affordable plot investment in Chhani. Please share options under ₹30 lakhs." 
      />
    </main>
  );
}
