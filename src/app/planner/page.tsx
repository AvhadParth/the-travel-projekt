"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, RefreshCw } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEED_DESTINATIONS } from "@/lib/seedData";

export default function PlannerPage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Wizard Form State
  const [destination, setDestination] = useState("Kashmir");
  const [month, setMonth] = useState("October");
  const [duration, setDuration] = useState("7 Days");
  const [companions, setCompanions] = useState("Couple");
  const [tripType, setTripType] = useState("Nature & Adventure");
  const [budget, setBudget] = useState("₹50,000");
  const [priority, setPriority] = useState("Slow travel & best stays");

  const [isGenerated, setIsGenerated] = useState(false);

  const handleNextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsGenerated(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest">
            Bespoke Trip Builder
          </span>
          <h1 className="font-display font-black text-3xl sm:text-6xl text-[#2C2640] tracking-tight">
            TRIP PLANNER
          </h1>
          <p className="text-sm sm:text-lg text-[#686174] font-medium max-w-xl mx-auto">
            Design your ideal vacation step-by-step. Select your dates, budget, companions, and travel priorities.
          </p>
        </div>

        {/* STEP-BY-STEP WIZARD */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#E9D4B5] shadow-xl relative overflow-hidden">
          {!isGenerated ? (
            <div className="space-y-6 sm:space-y-8">
              {/* Step Progress Bar */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#FFF8ED]">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                  Step 0{currentStep} of 07
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                    <div
                      key={step}
                      className={`h-2 rounded-full transition-all ${
                        step <= currentStep
                          ? "w-4 sm:w-8 bg-[#FCB040]"
                          : "w-2 sm:w-3 bg-[#E9D4B5]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* STEP 1: DESTINATION */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    WHERE DO YOU WANT TO GO?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {SEED_DESTINATIONS.map((dest) => {
                      const selected = destination === dest.name;
                      return (
                        <button
                          key={dest.slug}
                          type="button"
                          onClick={() => setDestination(dest.name)}
                          className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                            selected
                              ? "bg-[#FFF8ED] border-[#FCB040] shadow-md font-bold text-[#2C2640]"
                              : "bg-white border-[#E9D4B5] hover:border-[#FCB040]"
                          }`}
                        >
                          <span className="block text-[10px] text-[#686174]">{dest.country}</span>
                          <span className="font-display font-extrabold text-base sm:text-lg text-[#2C2640]">
                            {dest.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: WHEN */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    WHEN ARE YOU PLANNING TO TRAVEL?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {["September", "October", "November", "December", "January", "February", "March", "Spring / Summer"].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMonth(m)}
                        className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 font-bold text-xs sm:text-sm text-center transition-all ${
                          month === m
                            ? "bg-[#FFF8ED] border-[#FCB040] text-[#2C2640] shadow-md"
                            : "bg-white border-[#E9D4B5] text-[#686174]"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: DURATION */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    HOW LONG DO YOU WANT TO TRAVEL?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                    {["3 Days", "5 Days", "7 Days", "10 Days", "14+ Days"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 font-display font-extrabold text-base sm:text-xl text-center transition-all ${
                          duration === d
                            ? "bg-[#FFF8ED] border-[#FCB040] text-[#2C2640] shadow-md"
                            : "bg-white border-[#E9D4B5] text-[#686174]"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: COMPANIONS */}
              {currentStep === 4 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    WHO'S COMING WITH YOU?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                    {["Solo", "Couple", "Friends", "Family", "Group"].map((comp) => (
                      <button
                        key={comp}
                        type="button"
                        onClick={() => setCompanions(comp)}
                        className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 font-bold text-xs sm:text-base text-center transition-all ${
                          companions === comp
                            ? "bg-[#FFF8ED] border-[#FCB040] text-[#2C2640] shadow-md"
                            : "bg-white border-[#E9D4B5] text-[#686174]"
                        }`}
                      >
                        {comp}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: TRIP TYPE */}
              {currentStep === 5 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    WHAT KIND OF TRIP ARE YOU DREAMING OF?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {[
                      "Nature & Adventure",
                      "Luxury & Stays",
                      "Backpacking",
                      "Cultural Trails",
                      "Food & Culinary",
                      "Relaxation & Wellness",
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTripType(type)}
                        className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 font-bold text-xs sm:text-sm text-left transition-all ${
                          tripType === type
                            ? "bg-[#FFF8ED] border-[#FCB040] text-[#2C2640] shadow-md"
                            : "bg-white border-[#E9D4B5] text-[#686174]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: BUDGET */}
              {currentStep === 6 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    WHAT IS YOUR APPROXIMATE BUDGET PER PERSON?
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {["₹25,000", "₹50,000", "₹1,00,000", "₹2,00,000+"].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 font-display font-extrabold text-base sm:text-xl text-center transition-all ${
                          budget === b
                            ? "bg-[#FFF8ED] border-[#FCB040] text-[#2C2640] shadow-md"
                            : "bg-white border-[#E9D4B5] text-[#686174]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 7: PRIORITIES */}
              {currentStep === 7 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640]">
                    WHAT MATTERS MOST ON THIS JOURNEY?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {[
                      "Slow travel & best stays",
                      "Unmissable sightseeing & top experiences",
                      "Authentic local food & dining",
                      "Photography & scenery",
                    ].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPriority(p)}
                        className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 font-bold text-xs sm:text-sm text-left transition-all ${
                          priority === p
                            ? "bg-[#FFF8ED] border-[#FCB040] text-[#2C2640] shadow-md"
                            : "bg-white border-[#E9D4B5] text-[#686174]"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Next/Prev */}
              <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-[#FFF8ED]">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-[#2C2640] font-bold text-xs uppercase tracking-wider text-[#2C2640] flex items-center gap-2 hover:bg-[#FFF8ED]"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md"
                >
                  <span>{currentStep === 7 ? "Generate My Journey 🧭" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Generated Result Card */
            <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-[#E9D4B5] gap-3">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                    Tailored Result
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-4xl text-[#2C2640] mt-1">
                    YOUR JOURNEY AWAITS.
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setIsGenerated(false);
                    setCurrentStep(1);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686174] hover:text-[#2C2640]"
                >
                  <RefreshCw className="w-4 h-4" /> Reset Filters
                </button>
              </div>

              {/* Result Overview Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#FFF8ED] border border-[#E9D4B5]">
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-[#686174]">Destination</span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{destination}</span>
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-[#686174]">Duration</span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{duration}</span>
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-[#686174]">Target Budget</span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{budget}</span>
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-[#686174]">Companions</span>
                  <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{companions}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#E9D4B5] space-y-2 sm:space-y-3">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#2C2640]">
                  Recommended Itinerary Blueprint for {destination}:
                </h3>
                <p className="text-xs sm:text-sm text-[#686174] leading-relaxed">
                  Based on your preference for <strong>{tripType}</strong> in <strong>{month}</strong> prioritizing <strong>{priority}</strong>, we have matched your plan with our signature {destination} experience.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href={`/enquire?destination=${encodeURIComponent(destination)}&duration=${encodeURIComponent(duration)}&budget=${encodeURIComponent(budget)}`}
                  className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Request This Trip →</span>
                </Link>

                <button
                  onClick={() => alert("Trip saved to your profile!")}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#2C2640] text-[#2C2640] font-bold text-xs uppercase tracking-wider hover:bg-[#FFF8ED] transition-colors"
                >
                  Save This Journey ❤️
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
