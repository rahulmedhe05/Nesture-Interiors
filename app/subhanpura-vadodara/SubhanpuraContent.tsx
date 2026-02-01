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
  Heart,
  Building,
  ArrowRight,
  Clock,
  Users,
  TreePine,
  ShoppingCart,
  Stethoscope,
  Baby,
  Bus,
  Smile,
  Sun,
  Bike,
  Music
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubhanpuraContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Subhanpura Vadodara"
        subtitle="Where Families Find Their Forever Home"
        description="Subhanpura represents Vadodara's ideal of balanced family living - premium enough to be proud of, practical enough for everyday life. This established residential hub offers what growing families actually need: great schools, safe streets, friendly neighbors, and homes built for real life."
      />

      {/* Family-Focused Introduction */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
              🏠 Vadodara's Favorite Family Neighborhood
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Because Home is Where Your Children Grow
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When young parents ask Vadodara residents "where should we buy for family?", Subhanpura 
              tops the recommendation list. It's not the cheapest area, nor the most expensive - it's 
              the sweet spot where upper-middle-class families live comfortably without stretching 
              budgets or compromising quality. Here, your children walk to good schools, play in 
              neighborhood parks, and grow up with friends who become lifelong companions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-rose-100">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-rose-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Quality Schools</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-rose-100">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-rose-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
              <div className="text-gray-600">Parks & Gardens</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-rose-100">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Family</div>
              <div className="text-gray-600">Friendly Vibe</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-rose-100">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-rose-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10-12%</div>
              <div className="text-gray-600">Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Subhanpura for Families */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Subhanpura is Perfect for Growing Families
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Subhanpura's evolution as a family-centric neighborhood wasn't accidental. Good schools 
                attracted families, families demanded more amenities, amenities attracted more families 
                - creating a virtuous cycle. Today, the social infrastructure here is unmatched: your 
                child's school friends live nearby, birthday parties are at walking distance, and 
                parents form carpools and support networks organically.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The demographic consistency is comforting - mostly professional families with similar 
                values, similar lifestyles, and children of similar ages. This creates safe, supervised 
                play for kids and genuine community bonds for adults. In an increasingly isolated urban 
                world, Subhanpura offers what social scientists call "natural community formation."
              </p>
              
              <div className="space-y-4">
                {[
                  "Schools within 1-2 km radius - CBSE, ICSE, GSEB options",
                  "Multiple parks for children's outdoor play",
                  "Low traffic internal roads - safe cycling",
                  "Established residential societies with active communities",
                  "Healthcare facilities and pediatricians nearby",
                  "Balanced mix of families - great for children's social life"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Subhanpura Property Pricing</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Apartment</span>
                    <span className="text-rose-200">Starter Home</span>
                  </div>
                  <div className="text-2xl font-bold">₃8L - ₆0L</div>
                  <div className="text-sm text-rose-100">900-1200 sq.ft | Perfect for new families</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">3 BHK Apartment</span>
                    <span className="text-rose-200">Most Popular</span>
                  </div>
                  <div className="text-2xl font-bold">₆5L - ₁.1Cr</div>
                  <div className="text-sm text-rose-100">1300-1800 sq.ft | Growing families</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">4 BHK / Duplex</span>
                    <span className="text-rose-200">Premium</span>
                  </div>
                  <div className="text-2xl font-bold">₁.2Cr - ₁.8Cr</div>
                  <div className="text-sm text-rose-100">2000-2800 sq.ft | Joint families</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Row House / Bungalow</span>
                    <span className="text-rose-200">Limited</span>
                  </div>
                  <div className="text-2xl font-bold">₁.5Cr - ₂.5Cr</div>
                  <div className="text-sm text-rose-100">Independent living | Garden space</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/20 text-blue-100 rounded-full text-sm font-semibold mb-4">
              📚 Education Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Education at Your Doorstep
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              The primary reason families choose Subhanpura - access to some of Vadodara's 
              best schools within walking or short driving distance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Delhi Public School (DPS)",
                type: "CBSE | Co-ed",
                distance: "1.5 km",
                highlight: "One of Gujarat's top-ranked CBSE schools"
              },
              {
                name: "Navrachna School",
                type: "CBSE | Co-ed",
                distance: "2 km",
                highlight: "Known for holistic development approach"
              },
              {
                name: "St. Kabir School",
                type: "ICSE | Co-ed",
                distance: "3 km",
                highlight: "Strong in academics and extracurriculars"
              },
              {
                name: "Shreyas Foundation",
                type: "GSEB | Girls/Boys",
                distance: "1 km",
                highlight: "Value-based education, affordable fees"
              },
              {
                name: "Urmi School",
                type: "GSEB | Co-ed",
                distance: "2 km",
                highlight: "Gujarati medium, strong community ties"
              },
              {
                name: "Euro School",
                type: "CBSE | Co-ed",
                distance: "4 km",
                highlight: "International curriculum elements"
              }
            ].map((school, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{school.name}</h3>
                  <span className="text-xs bg-blue-500/30 px-2 py-1 rounded text-blue-100">{school.distance}</span>
                </div>
                <div className="text-blue-200 text-sm mb-2">{school.type}</div>
                <p className="text-blue-100 text-sm">{school.highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-blue-200 text-sm">
              Plus coaching centers, hobby classes, sports academies - everything for your child's development
            </p>
          </div>
        </div>
      </section>

      {/* Property Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Family-Friendly Property Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From starter homes for newlyweds to spacious bungalows for joint families - 
              Subhanpura has options for every family stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-rose-400 to-rose-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Baby className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">2 BHK Starter Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Perfect for young couples and new parents. Cozy yet functional apartments 
                  to begin your family journey in a great neighborhood.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 900-1200 sq.ft carpet</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Society with play area</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Nearby schools</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Easy upgrade later</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₃8L - ₆0L</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 3 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group relative">
              <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                MOST POPULAR
              </div>
              <div className="h-3 bg-gradient-to-r from-rose-500 to-pink-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">3 BHK Family Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The sweet spot for growing families. Dedicated kids' room, study space, 
                  and room to breathe. What most Subhanpura families choose.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 1300-1800 sq.ft carpet</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Kids room + study</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Premium societies</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 2 parking spots</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₆5L - ₁.1Cr</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600">
                    View Flats <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 4 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">4 BHK & Duplexes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For larger families or those who need space for parents to stay. 
                  Apartment comfort with near-bungalow sizes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 2000-2800 sq.ft</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Separate parent suite</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 3 bathrooms minimum</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Premium projects only</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₁.2Cr - ₁.8Cr</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Row Houses */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TreePine className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-xl">Row Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Independent living with small gardens. Children can play at home, 
                  pets have space, and you have freedom apartments can't offer.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 1800-2500 sq.ft</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Private garden</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Gated community</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Pet-friendly</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-green-600 font-bold">₁Cr - ₁.6Cr</span>
                  <Button variant="outline" size="sm" className="border-green-500 text-green-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Independent Bungalow */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sun className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Independent Bungalows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For families who want complete independence. Build memories in 
                  your own space, with terrace parties and garden BBQs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> 2500-4000 sq.ft built</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Large garden space</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Terrace for functions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Customizable interiors</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₁.5Cr - ₂.5Cr</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resale */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Resale Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Established societies with mature trees, active communities, and 
                  proven living experience. Often better value than new construction.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Established societies</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Known neighbors</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Immediate possession</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" /> Negotiation scope</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-teal-600 font-bold">₃5L - ₁.5Cr+</span>
                  <Button variant="outline" size="sm" className="border-teal-500 text-teal-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhood Amenities */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Families Need - Within Reach
            </h2>
            <p className="text-lg text-gray-600">
              Subhanpura's infrastructure is designed around family life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
                title: "Education",
                items: ["15+ quality schools", "Coaching centers", "Music/Art classes", "Sports academies"]
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-red-600" />,
                title: "Healthcare",
                items: ["Multi-specialty hospitals", "Pediatric clinics", "Diagnostic labs", "24/7 pharmacies"]
              },
              {
                icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
                title: "Shopping",
                items: ["D-Mart & Big Bazaar", "Vegetable markets", "Kids' stores", "Electronics shops"]
              },
              {
                icon: <Smile className="w-8 h-8 text-yellow-600" />,
                title: "Recreation",
                items: ["Multiple gardens", "Play zones", "Birthday venues", "Family restaurants"]
              },
              {
                icon: <Bus className="w-8 h-8 text-orange-600" />,
                title: "Connectivity",
                items: ["City bus routes", "Auto availability", "Metro (planned)", "5 min to highway"]
              },
              {
                icon: <Music className="w-8 h-8 text-purple-600" />,
                title: "Hobby Classes",
                items: ["Dance academies", "Music schools", "Art studios", "Sports coaching"]
              },
              {
                icon: <Bike className="w-8 h-8 text-cyan-600" />,
                title: "Child Safety",
                items: ["Low traffic lanes", "Safe cycling paths", "Police patrolling", "CCTV coverage"]
              },
              {
                icon: <Heart className="w-8 h-8 text-rose-600" />,
                title: "Community",
                items: ["Active RWAs", "Festival celebrations", "Sports tournaments", "Women's groups"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="font-bold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-3 h-3 text-rose-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life in Subhanpura */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Day in the Life of a Subhanpura Family
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Morning Rush Made Easy</h4>
                    <p className="text-gray-600 text-sm">
                      School bus picks up kids from society gate. Walking distance schools mean 
                      no frantic morning drives. Morning walkers fill the gardens, making even 
                      5 AM feel safe and sociable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">After-School Activities</h4>
                    <p className="text-gray-600 text-sm">
                      Kids walk to tuitions, hobby classes, or friend's homes nearby. Parents 
                      form carpools naturally. The neighborhood self-supervises children - 
                      shopkeepers know whose kid is whose.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Convenient Errands</h4>
                    <p className="text-gray-600 text-sm">
                      Vegetables from the local market, groceries from D-Mart, medicines from 
                      familiar pharmacist - all within 10 minutes. The shopkeepers remember 
                      your preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Evening Play Time</h4>
                    <p className="text-gray-600 text-sm">
                      Society grounds fill with kids playing. Gardens buzzing with evening 
                      walkers and playing children. Natural supervision as parents chat while 
                      kids play safely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Community Bonding</h4>
                    <p className="text-gray-600 text-sm">
                      Weekend birthday parties where half the society kids attend. Festival 
                      celebrations organized by RWA. Cricket matches between buildings. 
                      Relationships that last generations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Peace of Mind</h4>
                    <p className="text-gray-600 text-sm">
                      Low crime area with active police patrolling. Societies have guards and 
                      CCTV. Neighbors look out for each other. Your children grow up safe and 
                      secure.
                    </p>
                  </div>
                </div>
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
              Subhanpura Property - Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is Subhanpura good for first-time home buyers?",
                  a: "Excellent choice. The area offers entry points from ₃8L (2 BHK) making it accessible for young couples. As your family grows, you can upgrade within the same locality, keeping kids in the same schools and friend circles. The stability is invaluable."
                },
                {
                  q: "How does Subhanpura compare to newer areas like Gotri?",
                  a: "Gotri offers newer construction and IT proximity. Subhanpura offers established community, mature infrastructure, and proven livability. For families prioritizing school proximity and community bonds over flashy amenities, Subhanpura wins. Prices are comparable in the mid-segment."
                },
                {
                  q: "What's the traffic situation in Subhanpura?",
                  a: "Internal roads are relatively calm. Main connecting roads can get busy during peak hours. However, if you work in Alkapuri/Fatehgunj (most Subhanpura residents do), commute is 15-20 minutes. Schools being nearby eliminates school-run traffic stress."
                },
                {
                  q: "Are there new projects coming up in Subhanpura?",
                  a: "New constructions happen through redevelopment of older buildings or on remaining plots. We track all RERA-registered projects and can notify you of launches. Resale properties in established societies are often better value with immediate possession."
                },
                {
                  q: "What's the rental potential if I need to relocate later?",
                  a: "Strong demand from families seeking good school catchments. 2 BHK rents for ₁2,000-18,000, 3 BHK for ₁8,000-28,000 monthly. Family tenants are typically stable (don't want to change kids' schools), ensuring lower turnover and reliable income."
                },
                {
                  q: "Is Subhanpura suitable for elderly parents?",
                  a: "Very much. Healthcare facilities nearby, flat terrain easy for walking, established markets within reach, and safe environment. Many families buy specifically because parents can live independently yet close to grandchildren. The community is welcoming to seniors."
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
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Your Family's Forever Home
              </h2>
              <p className="text-rose-100 text-lg mb-8">
                Subhanpura is where memories are made - first steps, school friendships, 
                birthday celebrations, festival traditions. Let us help you find the home 
                where your family story unfolds.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Family Homes Desk</div>
                    <div className="text-rose-200">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Our Office</div>
                    <div className="text-rose-200">Subhanpura Main Road, Near Garden</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Site Visits</div>
                    <div className="text-rose-200">Daily 10 AM - 7 PM | Weekends Best for Families</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Family-Friendly Homes</h3>
              <p className="text-gray-600 mb-6">Tell us about your family's needs</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm looking for a family-friendly home in Subhanpura. We have 2 kids. Please suggest good options." 
      />
    </main>
  );
}
