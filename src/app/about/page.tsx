import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Heart, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HandDrawnArrow, SunDoodle, SuitcaseIcon } from "@/components/ui/BrandDoodles";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-[#FFE0A8] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
            About The Travel Projekt
          </span>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#2C2640] leading-tight">
            WE BELIEVE THE BEST <br />
            <span className="text-[#FCB040] italic font-handwriting text-5xl sm:text-8xl">
              STORIES
            </span>{" "}
            BEGIN WITH <br /> "LET'S GO."
          </h1>

          <p className="text-lg sm:text-xl text-[#686174] font-medium max-w-2xl mx-auto leading-relaxed">
            The Travel Projekt was born from a simple realization: travel in the 21st century has turned into an assembly line of check-box itineraries, crowded tour buses, and rigid itineraries. We built this platform to bring the soul back into exploration.
          </p>
        </section>

        {/* Brand Suitcase Motto Banner */}
        <section className="py-16 bg-[#2C2640] text-[#FFF8ED] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-[#3F375B]/60 border border-[#E9D4B5]/20 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FCB040] text-[#2C2640] flex items-center justify-center mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">01. Packing</h3>
              <p className="text-xs text-[#E9D4B5] leading-relaxed">
                Leaving behind the noise of ordinary life with curiosity in your bag and no rigid script.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#3F375B]/60 border border-[#E9D4B5]/20 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FCB040] text-[#2C2640] flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">02. Discovering</h3>
              <p className="text-xs text-[#E9D4B5] leading-relaxed">
                Sipping local tea in Kashmiri houseboats, walking living root bridges in Meghalaya, or stargazing over Thar dunes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#3F375B]/60 border border-[#E9D4B5]/20 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FCB040] text-[#2C2640] flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">03. Returning</h3>
              <p className="text-xs text-[#E9D4B5] leading-relaxed">
                Returning home not just with photos, but with unforgettable stories that linger for a lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* Team & Philosophy Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                Our DNA
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#2C2640]">
                NOT A GENERIC TRAVEL AGENCY.
              </h2>
              <p className="text-sm sm:text-base text-[#686174] leading-relaxed">
                We combine the editorial eye of a travel magazine with the bespoke execution of a boutique travel house. Every destination listed on our platform is hand-inspected by our team, ensuring authentic hospitality, clean stays, and ethical local guides.
              </p>
              <div className="pt-2">
                <Link
                  href="/planner"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Start Planning Your Trip →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
                alt="Kashmir"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80"
                alt="Rajasthan"
                className="rounded-3xl h-64 w-full object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
