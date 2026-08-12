"use client";

import React, { useState } from "react";
import { Compass, Plus, Edit2, Search } from "lucide-react";
import { SEED_EXPERIENCES } from "@/lib/seedData";

export default function AdminExperiencesPage() {
  const [experiences, setExperiences] = useState<any[]>(SEED_EXPERIENCES);
  const [search, setSearch] = useState("");

  const filtered = experiences.filter(
    (exp) =>
      exp.title.toLowerCase().includes(search.toLowerCase()) ||
      exp.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-[#FCB040]" />
            <span>Bespoke Activities & Things To Do</span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#2C2640]">
            EXPERIENCES CMS
          </h1>
          <p className="text-xs text-[#686174]">
            Manage single-day signature experiences, stargazing sessions, sunset cruises, and food walks.
          </p>
        </div>

        <button
          onClick={() => alert("Add New Experience")}
          className="px-6 py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Experience</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exp, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-[#E9D4B5] shadow-md space-y-3">
            <img src={exp.image} alt={exp.title} className="w-full h-40 rounded-2xl object-cover" />
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8ED] text-[#2C2640] font-bold text-[10px] uppercase border border-[#E9D4B5]">
              {exp.category} • {exp.duration}
            </span>
            <h3 className="font-display font-bold text-base text-[#2C2640]">{exp.title}</h3>
            <p className="text-xs text-[#686174] line-clamp-2">{exp.description}</p>
            <div className="pt-2 flex items-center justify-between border-t border-[#FFF8ED] text-xs">
              <span className="font-extrabold text-[#2C2640]">From ₹{exp.startingPrice?.toLocaleString("en-IN")}</span>
              <button className="px-3 py-1 rounded-xl bg-[#FFF8ED] font-bold text-[11px] border border-[#E9D4B5]">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
