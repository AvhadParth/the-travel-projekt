"use client";

import React from "react";
import { Image as ImageIcon, Upload, Trash2 } from "lucide-react";
import { SEED_DESTINATIONS } from "@/lib/seedData";

export default function AdminMediaPage() {
  const images = SEED_DESTINATIONS.map((d) => ({ url: d.heroImage, name: d.name }));

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <ImageIcon className="w-3.5 h-3.5 text-[#FCB040]" />
            <span>Asset Manager</span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#2C2640]">
            MEDIA & PHOTOGRAPHY LIBRARY
          </h1>
          <p className="text-xs text-[#686174]">
            High-resolution photography, hero banner images, and itinerary galleries.
          </p>
        </div>

        <button className="px-6 py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] font-extrabold text-xs uppercase flex items-center gap-2 hover:bg-[#FCB040] hover:text-[#2C2640] transition-colors">
          <Upload className="w-4 h-4" />
          <span>Upload Image</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="bg-white p-3 rounded-2xl border border-[#E9D4B5] space-y-2 group">
            <img src={img.url} alt={img.name} className="w-full h-36 rounded-xl object-cover" />
            <span className="block text-xs font-bold text-[#2C2640] truncate">{img.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
