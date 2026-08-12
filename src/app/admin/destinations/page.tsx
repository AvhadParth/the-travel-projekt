"use client";

import React, { useState } from "react";
import { MapPin, Plus, Edit2, Trash2, Eye, EyeOff, Search, CheckCircle2 } from "lucide-react";
import { SEED_DESTINATIONS } from "@/lib/seedData";

export default function AdminDestinationsPage() {
  const [destinations, setDestinations] = useState<any[]>(SEED_DESTINATIONS);
  const [search, setSearch] = useState("");

  const togglePublish = (slug: string) => {
    setDestinations((prev) =>
      prev.map((d) => (d.slug === slug ? { ...d, published: !d.published } : d))
    );
  };

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      {/* Top Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#FCB040]" />
            <span>Content Management System</span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#2C2640]">
            DESTINATIONS CMS
          </h1>
          <p className="text-xs text-[#686174]">
            Manage published travel destinations, starting prices, ideal duration, and hero photography.
          </p>
        </div>

        <button
          onClick={() => alert("Open New Destination Modal")}
          className="px-6 py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Destination</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E9D4B5] shadow-sm flex items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#686174] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-xs font-bold text-[#2C2640] outline-none focus:border-[#2C2640]"
          />
        </div>
        <span className="text-xs font-bold text-[#686174] hidden sm:block">
          Showing {filtered.length} of {destinations.length} Destinations
        </span>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((dest) => (
          <div
            key={dest.slug}
            className="bg-white rounded-3xl border border-[#E9D4B5] shadow-md overflow-hidden flex flex-col justify-between group hover:border-[#FCB040] transition-colors"
          >
            <div>
              <div className="relative h-44 overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider shadow-sm ${
                      dest.published !== false
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {dest.published !== false ? "PUBLISHED" : "DRAFT"}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-black text-xl text-[#2C2640]">
                    {dest.name}
                  </h3>
                  <span className="text-xs font-bold text-[#686174]">{dest.country}</span>
                </div>

                <p className="text-xs text-[#686174] line-clamp-2">{dest.tagline}</p>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-[#FFF8ED]">
                  <span className="text-[#686174] font-medium">{dest.idealDuration}</span>
                  <span className="font-extrabold text-[#2C2640]">From ₹{dest.startingPrice?.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="p-4 bg-[#FFF8ED]/60 border-t border-[#E9D4B5] flex items-center justify-between">
              <button
                onClick={() => togglePublish(dest.slug)}
                className="px-3 py-1.5 rounded-xl border border-[#E9D4B5] bg-white text-xs font-bold text-[#2C2640] hover:bg-[#FFE0A8]/30 transition-colors flex items-center gap-1.5"
              >
                {dest.published !== false ? <EyeOff className="w-3.5 h-3.5 text-gray-500" /> : <Eye className="w-3.5 h-3.5 text-emerald-600" />}
                <span>{dest.published !== false ? "Unpublish" : "Publish"}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert(`Edit ${dest.name}`)}
                  className="p-2 rounded-xl bg-white border border-[#E9D4B5] text-[#2C2640] hover:bg-[#FCB040] transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
