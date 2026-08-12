"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Compass, MapPin, Calendar, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function EnquiryFormContent() {
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [budget, setBudget] = useState("₹50,000");
  const [travelStyle, setTravelStyle] = useState<string[]>(["Nature", "Adventure"]);
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const destParam = searchParams.get("destination") || searchParams.get("journey") || searchParams.get("experience");
    if (destParam) setDestination(destParam);

    const budgetParam = searchParams.get("budget");
    if (budgetParam) setBudget(budgetParam);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          destination,
          travelDates,
          travellers,
          budget,
          travelStyle,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.log(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center space-y-4 mb-12">
          <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
            Trip Consultation
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2C2640] tracking-tight">
            START YOUR JOURNEY.
          </h1>
          <p className="text-base sm:text-lg text-[#686174] font-medium max-w-xl mx-auto">
            Fill out your details below and our lead travel architect will contact you within 4 hours to craft your private itinerary.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#FCB040] shadow-2xl text-center space-y-6 animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FCB040] text-[#2C2640] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#2C2640]">
              WE'VE GOT YOUR JOURNEY.
            </h2>

            <p className="text-base text-[#686174] max-w-lg mx-auto">
              We'll get back to you shortly with custom flight recommendations, boutique stay options, and pricing breakdown. Until then, start dreaming!
            </p>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Back To Homepage →
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E9D4B5] shadow-xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kabir Malhotra"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. kabir@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                  Destination *
                </label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Kashmir, Rajasthan, Bali"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>

              {/* Dates */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                  Approximate Travel Month / Dates
                </label>
                <input
                  type="text"
                  value={travelDates}
                  onChange={(e) => setTravelDates(e.target.value)}
                  placeholder="e.g. 15th October 2026"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>

              {/* Travellers */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                  Number of Travellers
                </label>
                <input
                  type="number"
                  min={1}
                  value={travellers}
                  onChange={(e) => setTravellers(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                Target Budget Per Person
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
              >
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹80,000">₹50,000 - ₹80,000</option>
                <option value="₹80,000 - ₹1,50,000">₹80,000 - ₹1,50,000</option>
                <option value="₹1,50,000+">₹1,50,000+</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2640]">
                Special Preferences or Notes
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us if you want luxury houseboats, romantic sunset dinners, or specific activity requests..."
                className="w-full p-4 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <span>START PLANNING →</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function EnquiryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFF8ED] flex items-center justify-center">Loading form...</div>}>
      <EnquiryFormContent />
    </Suspense>
  );
}
