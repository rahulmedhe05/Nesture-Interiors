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
  Landmark,
  Car,
  TreePine,
  Users,
  Crown,
  Building,
  ArrowRight,
  Clock,
  Palette,
  BookOpen,
  Music,
  Camera,
  GraduationCap,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SamaContent() {
  return (
    <main className="min-h-screen bg-white">
      <BusinessNav business="real-estate" />
      
      <BusinessHeroSlider
        business="real-estate"
        title="Property in Sama Vadodara"
        subtitle="Where Heritage Meets Modern Living"
        description="Experience the royal legacy of Vadodara in Sama - a neighborhood steeped in history, art, and culture. Live near the magnificent Laxmi Vilas Palace and become part of Vadodara's most prestigious heritage address."
      />

      {/* Heritage Introduction */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              👑 Royal Neighborhood
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Live in the Shadow of Royalty - Sama, Vadodara
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sama isn't just a locality - it's a living museum of Vadodara's glorious past. Named after the Sanskrit word 
              meaning "equality," Sama has been home to the cultural elite of Gujarat for over a century. The neighborhood 
              that once housed nobles, artists, and scholars of the Gaekwad era continues to attract families who appreciate 
              heritage, education, and refined living. Here, tree-lined avenues, colonial-era bungalows, and proximity to 
              iconic landmarks create an ambiance that money alone cannot buy elsewhere.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Years of Heritage</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1 km</div>
              <div className="text-gray-600">To Laxmi Vilas Palace</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Premier Schools</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Green Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sama Lifestyle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Sama Lifestyle - Culture, Education & Elegance
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Living in Sama means waking up to morning walks past heritage buildings, having tea at cafes frequented 
                by artists and writers, and sending your children to some of Gujarat's finest educational institutions. 
                The neighborhood hosts Vadodara's cultural calendar - from classical music concerts at the palace grounds 
                to art exhibitions at nearby galleries. This isn't just a home address; it's a lifestyle statement.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The Sama-Savli road corridor has seen thoughtful development that respects the area's character. New 
                constructions follow height restrictions to preserve sight lines to heritage monuments. Tree-cutting 
                is strictly monitored, and the municipal corporation invests heavily in maintaining the area's aesthetic 
                appeal. Property here appreciates not just in monetary value but in prestige.
              </p>
              
              <div className="space-y-4">
                {[
                  "Walking distance to Laxmi Vilas Palace & Maharaja Fateh Singh Museum",
                  "Home to MS University Fine Arts, Performing Arts & Music faculty",
                  "Heritage zone protection ensures character preservation",
                  "Lowest noise pollution in Vadodara",
                  "Annual Navratri celebrations at palace grounds",
                  "Art galleries, cultural centers & classical music venues"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Sama Property Valuations 2025</h3>
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Heritage Bungalows</span>
                    <span className="text-purple-200">Rare Find</span>
                  </div>
                  <div className="text-2xl font-bold">₹2Cr - ₹8Cr</div>
                  <div className="text-sm text-purple-100">2000-8000 sq.ft | Colonial Architecture</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Modern 3 BHK</span>
                    <span className="text-purple-200">Family Choice</span>
                  </div>
                  <div className="text-2xl font-bold">₹75L - ₹1.5Cr</div>
                  <div className="text-sm text-purple-100">1500-2200 sq.ft | Premium Societies</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">2 BHK Apartments</span>
                    <span className="text-purple-200">Compact Living</span>
                  </div>
                  <div className="text-2xl font-bold">₹45L - ₹75L</div>
                  <div className="text-sm text-purple-100">1000-1400 sq.ft | Well Established</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Independent Houses</span>
                    <span className="text-purple-200">With Garden</span>
                  </div>
                  <div className="text-2xl font-bold">₹1.2Cr - ₹3.5Cr</div>
                  <div className="text-sm text-purple-100">1500-3500 sq.ft | Plot + Construction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Hub Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4">
              🎭 Cultural Capital of Gujarat
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where Art, Music & Literature Come Alive
            </h2>
            <p className="text-purple-200 max-w-3xl mx-auto">
              Sama is the cultural nucleus of Vadodara, hosting events that draw connoisseurs from across India. 
              Living here means being part of a community that values intellectual and artistic pursuits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="font-bold text-xl mb-2">Classical Music</h3>
              <p className="text-purple-200 text-sm">
                Home to the Faculty of Performing Arts. Regular gharana concerts and riyaaz sessions in the neighborhood.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fine Arts</h3>
              <p className="text-purple-200 text-sm">
                MS University's legendary Fine Arts faculty, home to iconic painters and sculptors of India.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="font-bold text-xl mb-2">Heritage Tourism</h3>
              <p className="text-purple-200 text-sm">
                Laxmi Vilas Palace, Maharaja Fateh Singh Museum, and Kirti Mandir attract tourists year-round.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="font-bold text-xl mb-2">Literary Scene</h3>
              <p className="text-purple-200 text-sm">
                Book clubs, poetry readings, and literary festivals. Gujarati literature thrives in these lanes.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Iconic Landmarks Near Your Home</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Laxmi Vilas Palace", desc: "World's largest private residence, Gaekwad royal palace", distance: "1 km" },
                { name: "Maharaja Fateh Singh Museum", desc: "European masterpieces & royal artifacts collection", distance: "1.2 km" },
                { name: "Kirti Mandir", desc: "Memorial to Gaekwad dynasty, architectural marvel", distance: "2 km" },
                { name: "MS University Campus", desc: "Heritage buildings, botanical gardens, art galleries", distance: "1.5 km" },
                { name: "Kamati Baug (Sayaji Garden)", desc: "Historic garden with zoo, museum & planetarium", distance: "3 km" },
                { name: "Nazarbaug Palace", desc: "Former royal residence, now heritage hotel", distance: "2.5 km" }
              ].map((landmark, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{landmark.name}</h4>
                    <span className="text-purple-300 text-sm">{landmark.distance}</span>
                  </div>
                  <p className="text-purple-200 text-sm">{landmark.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Excellence */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premier Education at Your Doorstep
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sama and surrounding areas house some of Gujarat's most prestigious educational institutions, 
              from kindergarten to post-graduate studies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-purple-600 mr-3" />
                Schools (K-12)
              </h3>
              <div className="space-y-4">
                {[
                  { name: "The Maharaja Sayajirao University High School", board: "Gujarat Board", specialty: "Heritage Institution", rating: "4.8" },
                  { name: "Navrachana School, Sama", board: "CBSE", specialty: "Holistic Education", rating: "4.7" },
                  { name: "Rosary School", board: "ICSE", specialty: "Discipline & Values", rating: "4.6" },
                  { name: "Urmi School", board: "Gujarat Board", specialty: "Gujarati Medium Excellence", rating: "4.5" },
                  { name: "St. Paul's School", board: "ICSE", specialty: "Sports & Academics", rating: "4.5" }
                ].map((school, index) => (
                  <div key={index} className="flex items-center justify-between bg-purple-50 rounded-lg p-4">
                    <div>
                      <div className="font-semibold text-gray-900">{school.name}</div>
                      <div className="text-sm text-gray-500">{school.board} | {school.specialty}</div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="ml-1 font-semibold">{school.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 text-purple-600 mr-3" />
                Higher Education
              </h3>
              <div className="space-y-4">
                {[
                  { name: "MS University - Arts Faculty", specialty: "BA, MA, PhD Programs", type: "Government", distance: "1.5 km" },
                  { name: "MS University - Fine Arts", specialty: "BFA, MFA - India's Best", type: "Government", distance: "1.5 km" },
                  { name: "MS University - Music Faculty", specialty: "Classical Music Training", type: "Government", distance: "2 km" },
                  { name: "Oriental Institute", specialty: "Indology & Sanskrit", type: "Research", distance: "2 km" },
                  { name: "Polytechnic College", specialty: "Diploma Engineering", type: "Government", distance: "3 km" }
                ].map((college, index) => (
                  <div key={index} className="flex items-center justify-between bg-purple-50 rounded-lg p-4">
                    <div>
                      <div className="font-semibold text-gray-900">{college.name}</div>
                      <div className="text-sm text-gray-500">{college.specialty} | {college.type}</div>
                    </div>
                    <div className="text-purple-600 font-semibold text-sm">{college.distance}</div>
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
              Property Options in Sama
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From restored heritage bungalows to contemporary apartments, Sama offers unique property 
              options that blend history with modern comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Heritage Bungalows */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-purple-600 to-purple-700"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Crown className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Heritage Bungalows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rare colonial-era properties with high ceilings, wooden flooring, sprawling gardens, and 
                  architectural details from the Gaekwad period. A piece of history you can own.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> 100+ year old construction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Large compound areas</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Heritage restoration possible</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" /> Rare availability</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-purple-600 font-bold">₹2Cr - ₹8Cr</span>
                  <Button variant="outline" size="sm" className="border-purple-500 text-purple-600">
                    Inquire <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Premium Apartments */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Premium 3/4 BHK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Modern apartments in low-rise buildings (G+4) that respect the area's heritage character. 
                  Spacious layouts, balconies with green views, and premium finishes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> 1500-2500 sq.ft options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> Height-restricted buildings</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> Established societies</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> Garden & balcony views</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-indigo-600 font-bold">₹75L - ₹1.8Cr</span>
                  <Button variant="outline" size="sm" className="border-indigo-500 text-indigo-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 2 BHK */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-violet-500 to-violet-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-violet-600" />
                </div>
                <CardTitle className="text-xl">Elegant 2 BHK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Well-appointed 2 BHK apartments in quality societies. Perfect for couples, small families, 
                  or as a rental investment with consistent demand from university staff.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-violet-500 mr-2" /> 1000-1400 sq.ft sizes</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-violet-500 mr-2" /> High rental demand</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-violet-500 mr-2" /> Walking to schools</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-violet-500 mr-2" /> Peaceful surroundings</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-violet-600 font-bold">₹45L - ₹75L</span>
                  <Button variant="outline" size="sm" className="border-violet-500 text-violet-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Independent Houses */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-4">
                  <TreePine className="w-7 h-7 text-fuchsia-600" />
                </div>
                <CardTitle className="text-xl">Garden Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Independent houses with private gardens in inner lanes. Modern construction on heritage-zone 
                  plots with mature trees and quiet surroundings.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-fuchsia-500 mr-2" /> 1500-3000 sq.ft built-up</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-fuchsia-500 mr-2" /> Private garden space</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-fuchsia-500 mr-2" /> No society politics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-fuchsia-500 mr-2" /> Car parking</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-fuchsia-600 font-bold">₹1Cr - ₹2.5Cr</span>
                  <Button variant="outline" size="sm" className="border-fuchsia-500 text-fuchsia-600">
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
                  <Building className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Row Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Duplex row houses in gated compounds on Sama-Savli road. Modern amenities with semi-independent 
                  living, small front yards, and community security.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Duplex G+1 format</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> 1800-2200 sq.ft</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Gated community</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" /> Common garden areas</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-rose-600 font-bold">₹85L - ₹1.5Cr</span>
                  <Button variant="outline" size="sm" className="border-rose-500 text-rose-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resale Properties */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Resale Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Well-maintained resale flats and houses with immediate possession. Many come with modular 
                  kitchens, AC units, and furniture - move in ready options.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Immediate possession</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Negotiable prices</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Furnished options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-amber-500 mr-2" /> Known society reputation</li>
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-amber-600 font-bold">₹40L - ₹2Cr+</span>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600">
                    View Options <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Should Live in Sama?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sama attracts a specific demographic - people who value culture, education, and quiet 
              sophistication over flashy amenities and new development chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "University Faculty & Students",
                desc: "Walk to MS University campus. Perfect for professors, research scholars, and students wanting to immerse in academic environment.",
                icon: <GraduationCap className="w-8 h-8" />
              },
              {
                title: "Artists & Creative Professionals",
                desc: "Join a community of painters, musicians, writers, and performers. Studios, galleries, and like-minded neighbors.",
                icon: <Palette className="w-8 h-8" />
              },
              {
                title: "Retired Professionals",
                desc: "Peaceful tree-lined streets, cultural activities, morning walks in palace gardens, and a sophisticated community.",
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: "Heritage Enthusiasts",
                desc: "Owning property in a heritage zone, participating in restoration, and preserving Vadodara's architectural legacy.",
                icon: <Landmark className="w-8 h-8" />
              },
              {
                title: "Education-Focused Families",
                desc: "Multiple top schools within walking distance. Children grow up in a culturally rich environment.",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                title: "NRIs with Roots",
                desc: "A prestigious Vadodara address that maintains value and prestige. Easy rental to quality tenants when abroad.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((profile, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                  {profile.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{profile.title}</h3>
                <p className="text-gray-600">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Sama Property
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Why is property in Sama more expensive than other areas?",
                  a: "Sama commands premium prices due to its heritage status, proximity to Laxmi Vilas Palace, excellent schools, low-density development, and the prestige associated with the address. Limited new construction (due to heritage zone restrictions) keeps supply scarce while demand from discerning buyers remains high."
                },
                {
                  q: "Are there height restrictions for buildings in Sama?",
                  a: "Yes, Sama falls under heritage zone regulations that limit building heights, typically to G+4 or lower in core areas. This preserves sight lines to heritage monuments and maintains the area's low-rise, green character - which is actually a major attraction for residents who want to avoid high-rise density."
                },
                {
                  q: "Is Sama suitable for young professionals?",
                  a: "If you value culture over nightlife, yes. Sama is quieter than Alkapuri or Gotri but offers excellent quality of life. The rental market is strong with university demand. However, if you want malls, restaurants, and a buzzing social scene at your doorstep, other areas might suit better."
                },
                {
                  q: "What is the rental market like in Sama?",
                  a: "Rental demand is consistent from MS University faculty, visiting scholars, and families wanting school proximity. 2 BHK rents range from ₹12,000-20,000, 3 BHK from ₹18,000-30,000. Heritage bungalows can fetch ₹50,000-1,00,000 for special purposes like guest houses."
                },
                {
                  q: "Can I buy and restore a heritage property in Sama?",
                  a: "Yes, but heritage restoration requires special approvals and following conservation guidelines. The investment can be substantial but such properties have unique charm and prestige. We can connect you with heritage architects and navigate the approval process."
                },
                {
                  q: "How is connectivity from Sama to other parts of Vadodara?",
                  a: "Sama is centrally located - 4 km from Railway Station, 6 km from Alkapuri, 15 km from Airport. The Sama-Savli road connects to the Ring Road. Auto-rickshaws and city buses are readily available. For car owners, all major areas are within 20 minutes."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Royal Living in Sama
              </h2>
              <p className="text-purple-200 text-lg mb-8">
                Finding property in Sama requires patience and local expertise. Many deals happen within 
                the community before listings go public. Our deep roots in the area give you access to 
                exclusive opportunities and heritage properties rarely available on the open market.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Heritage Property Specialist</div>
                    <div className="text-purple-200">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Sama Area Office</div>
                    <div className="text-purple-200">Near MS University Gate, Sama Road</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Appointment Preferred</div>
                    <div className="text-purple-200">Mon-Sat: 10 AM - 6 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Heritage Property Viewing</h3>
              <p className="text-gray-600 mb-6">Tell us your preferences and we'll arrange exclusive viewings</p>
              <BusinessContactForm business="real-estate" />
            </div>
          </div>
        </div>
      </section>

      <MegaFooter business="real-estate" />
      <BusinessWhatsAppFloat 
        phone="+919876543210" 
        message="Hi, I'm interested in property near Laxmi Vilas Palace in Sama, Vadodara. Please share heritage and premium options." 
      />
    </main>
  );
}
