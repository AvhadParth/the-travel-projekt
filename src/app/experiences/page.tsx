"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, MapPin, Clock, ArrowRight, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEED_EXPERIENCES } from "@/lib/seedData";

const CATEGORIES = [
  "All",
  "Adventure",
  "Luxury",
  "Backpacking",
  "Couples",
  "Family",
  "Culture",
  "Nature",
  "Food",
  "Photography",
  "Wellness",
];

export default function ExperiencesPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredExperiences = selectedCat === "All"
    ? SEED_EXPERIENCES
    : SEED_EXPERIENCES.filter((e) => e.category === selectedCat);

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3 py-1 rounded-full bg-[#FFE0A8] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
            Curated Activities & Escapes
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2C2640] tracking-tight">
            TRAVEL YOUR WAY.
          </h1>
          <p className="text-base sm:text-lg text-[#686174] font-medium">
            Discover handpicked micro-experiences, private food tours, alpine treks, and sacred temple rituals.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar justify-start sm:justify-center">
          {CATEGORIES.map((cat) => {
            const active = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  active
                    ? "bg-[#2C2640] text-[#FCB040] shadow-md"
                    : "bg-white text-[#2C2640] border border-[#E9D4B5] hover:bg-[#FFE0A8]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider">
                    {exp.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#686174]">
                    <MapPin className="w-3.5 h-3.5 text-[#FCB040]" />
                    <span>{exp.location}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#686174] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#FFF8ED] mt-4">
                <div>
                  <span className="block text-[10px] text-[#686174] uppercase">Duration</span>
                  <span className="text-xs font-bold text-[#2C2640]">{exp.duration}</span>
                </div>
                <Link
                  href={`/enquire?experience=${encodeURIComponent(exp.title)}`}
                  className="px-5 py-2.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Book Activity →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
