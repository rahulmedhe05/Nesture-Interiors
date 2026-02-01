"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

interface RealEstateFormProps {
  area?: string;
  keyword?: string;
}

export function RealEstateForm({ area, keyword }: RealEstateFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    lookingFor: "",
    propertyType: "",
    configuration: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lookingForOptions = ["Buy", "Sell", "Rent"];
  const propertyTypes = ["Flat", "Bungalow", "Plot", "Commercial"];
  const configurations = ["1BHK", "2BHK", "3BHK", "4BHK+"];
  const budgetRanges = ["Under ₹50 Lakhs", "₹50L–₹1Cr", "₹1–2Cr", "Above ₹2Cr"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `🏢 *REAL ESTATE ENQUIRY*\n\n`;
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📱 *Mobile:* ${formData.mobile}\n`;
    message += `🔍 *Looking For:* ${formData.lookingFor}\n`;
    message += `🏠 *Property Type:* ${formData.propertyType}\n`;
    message += `📐 *Configuration:* ${formData.configuration}\n`;
    message += `💰 *Budget:* ${formData.budget}\n`;
    if (area) message += `📍 *Area:* ${area}\n`;
    if (keyword) message += `🎯 *Interest:* ${keyword}\n`;
    message += `\n_From: vadodarahomes.in_`;

    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
  };

  const whyChooseUs = [
    "5000+ Verified Properties",
    "RERA Registered Projects Only",
    "Free Property Valuation",
    "Home Loan Assistance",
    "Legal Verification Included",
    "NRI Services Available",
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="enquiry-form">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
              Find Your Dream Property in Vadodara
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Buy, Sell or Rent properties with Vadodara's trusted real estate experts
              {area && ` in ${area}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Looking For <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {lookingForOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, lookingFor: option })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.lookingFor === option
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-blue-400"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.propertyType === type
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-blue-400"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Configuration
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {configurations.map((config) => (
                      <button
                        key={config}
                        type="button"
                        onClick={() => setFormData({ ...formData, configuration: config })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.configuration === config
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-blue-400"
                        }`}
                      >
                        {config}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Budget</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Property Details
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us Now</h3>
                    <p className="text-white/80 text-sm mb-2">Mon-Sat: 9 AM - 8 PM</p>
                    <a href="tel:+916353583148" className="text-lg font-semibold hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp Us</h3>
                    <p className="text-white/80 text-sm mb-2">Quick Response Guaranteed</p>
                    <a
                      href="https://wa.me/916353583148?text=Hi, I'm looking for property in Vadodara"
                      target="_blank"
                      className="text-lg font-semibold hover:underline"
                    >
                      Chat Now →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
