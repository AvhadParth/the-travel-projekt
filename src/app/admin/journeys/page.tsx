"use client";

import React, { useState } from "react";
import { Calendar, Plus, Edit2, Eye, EyeOff, Search, Clock, DollarSign } from "lucide-react";
import { SEED_JOURNEYS } from "@/lib/seedData";

export default function AdminJourneysPage() {
  const [journeys, setJourneys] = useState<any[]>(SEED_JOURNEYS);
  const [search, setSearch] = useState("");

  const togglePublish = (slug: string) => {
    setJourneys((prev) =>
      prev.map((j) => (j.slug === slug ? { ...j, published: !j.published } : j))
    );
  };

  const filtered = journeys.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.destinationName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#FCB040]" />
            <span>Curated Travel Itineraries</span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#2C2640]">
            JOURNEYS CMS
          </h1>
          <p className="text-xs text-[#686174]">
            Manage multi-day trip itineraries, day-by-day activities, pricing, and inclusions.
          </p>
        </div>

        <button
          onClick={() => alert("Open Journey Creator Modal")}
          className="px-6 py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Journey</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl border border-[#E9D4B5] shadow-sm flex items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#686174] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search journeys or destinations..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-xs font-bold text-[#2C2640] outline-none focus:border-[#2C2640]"
          />
        </div>
        <span className="text-xs font-bold text-[#686174]">
          {filtered.length} Active Itineraries
        </span>
      </div>

      {/* Journeys List */}
      <div className="space-y-4">
        {filtered.map((j) => (
          <div
            key={j.slug}
            className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#FCB040] transition-colors"
          >
            <div className="flex items-center gap-5">
              <img
                src={j.heroImage}
                alt={j.title}
                className="w-20 h-20 rounded-2xl object-cover shrink-0"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8ED] border border-[#E9D4B5] text-[#2C2640] font-bold text-[10px] uppercase">
                    {j.destinationName}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                      j.published !== false ? "bg-emerald-100 text-emerald-800" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {j.published !== false ? "PUBLISHED" : "DRAFT"}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#2C2640]">{j.title}</h3>
                <p className="text-xs text-[#686174]">
                  {j.durationDays} Days / {j.durationDays - 1} Nights • Starting ₹{j.price?.toLocaleString("en-IN")} • Max Group: {j.maxGroupSize}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-[#FFF8ED]">
              <button
                onClick={() => togglePublish(j.slug)}
                className="px-4 py-2 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-xs font-bold text-[#2C2640] hover:bg-[#FCB040] transition-colors"
              >
                {j.published !== false ? "Unpublish" : "Publish"}
              </button>
              <button
                onClick={() => alert(`Edit Itinerary ${j.title}`)}
                className="px-4 py-2 rounded-xl bg-[#2C2640] text-[#FFF8ED] text-xs font-bold hover:bg-[#FCB040] hover:text-[#2C2640] transition-colors flex items-center gap-1.5"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Days</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
