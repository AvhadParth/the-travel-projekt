import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getJourneys } from "@/lib/dataService";

export default async function JourneysPage() {
  const journeys = await getJourneys();

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3 py-1 rounded-full bg-[#FFE0A8] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
            Bespoke Travel Packages
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2C2640] tracking-tight">
            CURATED JOURNEYS
          </h1>
          <p className="text-base sm:text-lg text-[#686174] font-medium">
            Hand-crafted multi-day travel itineraries featuring private transfers, luxury stays, and authentic local experiences.
          </p>
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journeys.map((j: any) => (
            <div
              key={j.slug}
              className="bg-white rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={j.heroImage}
                    alt={j.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider">
                    {j.durationDays} Days
                  </div>
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#2C2640] text-white font-extrabold text-sm shadow-md">
                    ₹{j.price.toLocaleString("en-IN")} / person
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="font-display font-extrabold text-2xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                    {j.title}
                  </h2>
                  <p className="text-xs text-[#686174] leading-relaxed line-clamp-3">
                    {j.summary}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold text-[#686174] uppercase">Key Inclusions:</span>
                    <ul className="space-y-1">
                      {j.inclusions.slice(0, 3).map((inc: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#2C2640]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FCB040] shrink-0" />
                          <span className="truncate">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/journeys/${j.slug}`}
                  className="w-full py-3.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>View Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
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
