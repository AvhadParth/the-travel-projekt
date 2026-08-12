import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDestinations } from "@/lib/dataService";

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3 py-1 rounded-full bg-[#FFE0A8] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
            World & India Discovery
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2C2640] tracking-tight">
            EXPLORE DESTINATIONS
          </h1>
          <p className="text-base sm:text-lg text-[#686174] font-medium">
            From alpine valley vistas in Kashmir to golden desert dunes in Rajasthan and palm-fringed backwaters in Kerala.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest: any) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2C2640] text-[#FCB040] font-extrabold text-xs uppercase tracking-wider">
                  {dest.country}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-display font-extrabold text-3xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                    {dest.name}
                  </h2>
                  <p className="text-xs font-bold text-[#FCB040] italic font-handwriting text-lg mt-0.5">
                    "{dest.tagline}"
                  </p>
                  <p className="text-xs text-[#686174] line-clamp-3 mt-2">
                    {dest.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {dest.travelStyles.map((style: string) => (
                      <span
                        key={style}
                        className="px-2.5 py-0.5 rounded-full bg-[#FFF8ED] border border-[#E9D4B5] text-[#2C2640] text-[11px] font-bold"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FFF8ED] flex items-center justify-between text-xs font-bold text-[#2C2640]">
                  <div>
                    <span className="block text-[10px] text-[#686174] uppercase">Best Time</span>
                    <span>{dest.bestTime}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-[#686174] uppercase">Starting Budget</span>
                    <span className="text-[#2C2640] font-extrabold">₹{dest.startingPrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
