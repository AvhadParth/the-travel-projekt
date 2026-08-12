import React from "react";
import Link from "next/link";
import { User, Heart, Compass, Clock, ArrowRight, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getJourneys, getEnquiries, getDestinations } from "@/lib/dataService";

export default async function CustomerDashboardPage() {
  const journeys = await getJourneys();
  const enquiries = await getEnquiries();
  const destinations = await getDestinations();

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        {/* Customer Header Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-[#FCB040] text-[#2C2640] font-black text-2xl flex items-center justify-center shadow-md shrink-0">
              TP
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFE0A8] text-[#2C2640] font-bold text-[10px] uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-[#FCB040]" />
                <span>Traveller Account</span>
              </div>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-[#2C2640]">
                MY TRAVEL PROJEKT
              </h1>
              <p className="text-xs text-[#686174] font-medium">
                Welcome back! Track your trip enquiries, saved journeys & wishlist destinations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/planner"
              className="px-6 py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#FCB040]" />
              <span>Plan New Trip ✨</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Saved Journeys & Wishlist Destinations */}
          <div className="lg:col-span-7 space-y-8">
            {/* Saved Journeys Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#2C2640] flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#FCB040] fill-current" />
                  <span>SAVED JOURNEYS</span>
                </h2>
                <Link href="/journeys" className="text-xs font-bold text-[#FCB040] hover:underline">
                  Explore All →
                </Link>
              </div>

              <div className="space-y-4">
                {journeys.slice(0, 2).map((j: any) => (
                  <div
                    key={j.slug}
                    className="bg-white p-5 rounded-2xl border border-[#E9D4B5] shadow-md flex items-center justify-between gap-4 group hover:border-[#FCB040] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={j.heroImage}
                        alt={j.title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                          {j.title}
                        </h3>
                        <p className="text-xs text-[#686174]">
                          {j.durationDays} Days • Starting ₹{j.price?.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/journeys/${j.slug}`}
                      className="p-3 rounded-full bg-[#FFF8ED] hover:bg-[#FCB040] text-[#2C2640] transition-colors shrink-0"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist Destinations */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-extrabold text-xl text-[#2C2640] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FCB040]" />
                  <span>EXPLORE DESTINATIONS</span>
                </h2>
                <Link href="/destinations" className="text-xs font-bold text-[#FCB040] hover:underline">
                  View Map →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {destinations.slice(0, 2).map((d: any) => (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className="bg-white p-4 rounded-2xl border border-[#E9D4B5] shadow-sm hover:shadow-md transition-all group"
                  >
                    <img src={d.heroImage} alt={d.name} className="w-full h-24 rounded-xl object-cover mb-2" />
                    <h4 className="font-bold text-sm text-[#2C2640] group-hover:text-[#FCB040] transition-colors">{d.name}</h4>
                    <p className="text-[11px] text-[#686174]">{d.idealDuration} • From ₹{d.startingPrice?.toLocaleString("en-IN")}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Submitted Enquiries & Status */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#2C2640] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FCB040]" />
              <span>MY ENQUIRIES & STATUS</span>
            </h2>

            <div className="space-y-3">
              {enquiries.map((enq: any, i: number) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-[#E9D4B5] shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#2C2640]">{enq.destination}</span>
                    <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider">
                      {enq.status || "NEW"}
                    </span>
                  </div>
                  <p className="text-xs text-[#686174]">
                    Dates: <strong className="text-[#2C2640]">{enq.travelDates}</strong> • Guests: <strong className="text-[#2C2640]">{enq.travellers}</strong>
                  </p>
                  {enq.message && (
                    <p className="text-[11px] text-[#686174] bg-[#FFF8ED] p-2.5 rounded-xl border border-[#E9D4B5] italic">
                      "{enq.message}"
                    </p>
                  )}
                  <div className="pt-1 flex items-center justify-between text-[10px] text-[#686174]">
                    <span>Submitted on: {new Date(enq.createdAt || Date.now()).toLocaleDateString("en-IN")}</span>
                    <span className="text-[#FCB040] font-bold">Our team is reviewing</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
