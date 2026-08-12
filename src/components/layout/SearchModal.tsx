"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, MapPin, ArrowRight } from "lucide-react";
import { SEED_DESTINATIONS, SEED_JOURNEYS } from "@/lib/seedData";

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredDestinations = SEED_DESTINATIONS.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.country.toLowerCase().includes(query.toLowerCase())
  );

  const filteredJourneys = SEED_JOURNEYS.filter((j) =>
    j.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#2C2640]/70 backdrop-blur-md flex items-start justify-center pt-24 px-4">
      <div
        className="bg-[#FFF8ED] rounded-3xl border border-[#E9D4B5] w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Field */}
        <div className="p-4 border-b border-[#E9D4B5] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FCB040] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, journeys, Kashmir, Bali..."
            className="w-full bg-transparent border-none outline-none font-display font-bold text-lg text-[#2C2640] placeholder:text-[#686174]"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FFE0A8] text-[#2C2640]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Destinations */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040] mb-3">
              Destinations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredDestinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  onClick={onClose}
                  className="p-3 rounded-2xl bg-white border border-[#E9D4B5] hover:border-[#FCB040] flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#FCB040]" />
                    <div>
                      <span className="font-bold text-sm text-[#2C2640] block">
                        {dest.name}
                      </span>
                      <span className="text-[10px] text-[#686174]">
                        {dest.country}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#2C2640] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Journeys */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040] mb-3">
              Signature Journeys
            </h4>
            <div className="space-y-2">
              {filteredJourneys.map((j) => (
                <Link
                  key={j.slug}
                  href={`/journeys/${j.slug}`}
                  onClick={onClose}
                  className="p-3.5 rounded-2xl bg-white border border-[#E9D4B5] hover:border-[#FCB040] flex items-center justify-between group transition-colors"
                >
                  <div>
                    <span className="font-bold text-sm text-[#2C2640] block">
                      {j.title}
                    </span>
                    <span className="text-xs text-[#686174]">
                      {j.durationDays} Days • ₹{j.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#2C2640] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
