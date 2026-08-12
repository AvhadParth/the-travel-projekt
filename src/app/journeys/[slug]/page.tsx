import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, XCircle, Calendar, Users, ShieldCheck, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InteractiveTimeline from "@/components/journeys/InteractiveTimeline";
import { getJourneyBySlug } from "@/lib/dataService";

export default async function JourneyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const journey = await getJourneyBySlug(params.slug);
  if (!journey) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative min-h-[65vh] flex items-end pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#2C2640]">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2640] via-[#2C2640]/40 to-transparent" />

          <div className="max-w-7xl mx-auto w-full relative z-10 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider">
                {journey.durationDays} Days / {journey.durationDays - 1} Nights
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider">
                Starting ₹{journey.price.toLocaleString("en-IN")} / person
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl">
              {journey.title}
            </h1>
          </div>
        </section>

        {/* Quick Details Bar */}
        <section className="bg-white border-y border-[#E9D4B5] py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div>
                <span className="block text-[11px] font-bold uppercase text-[#686174]">Max Group Size</span>
                <span className="font-display font-extrabold text-lg text-[#2C2640]">Up to {journey.maxGroupSize} Guests</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase text-[#686174]">Upcoming Dates</span>
                <span className="font-display font-extrabold text-lg text-[#2C2640]">{journey.nextDates ? journey.nextDates[0] : "Flexible Dates"}</span>
              </div>
            </div>

            <Link
              href={`/enquire?journey=${encodeURIComponent(journey.title)}`}
              className="px-8 py-3.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
            >
              <span>Book This Journey →</span>
            </Link>
          </div>
        </section>

        {/* Itinerary Timeline & Inclusions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Itinerary */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                Day-by-Day Experience
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#2C2640] mt-1 mb-4">
                THE ITINERARY
              </h2>
              <p className="text-sm text-[#686174] leading-relaxed">
                {journey.summary}
              </p>
            </div>

            <InteractiveTimeline days={journey.itinerary} />
          </div>

          {/* Sidebar Inclusions & Exclusions */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E9D4B5] shadow-lg space-y-6">
              <h3 className="font-display font-extrabold text-xl text-[#2C2640] pb-3 border-b border-[#FFF8ED]">
                What's Included:
              </h3>
              <ul className="space-y-3">
                {journey.inclusions.map((inc: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-[#2C2640]">
                    <CheckCircle2 className="w-4 h-4 text-[#FCB040] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              {journey.exclusions && journey.exclusions.length > 0 && (
                <>
                  <h3 className="font-display font-extrabold text-xl text-[#2C2640] pt-4 pb-3 border-b border-[#FFF8ED]">
                    Exclusions:
                  </h3>
                  <ul className="space-y-2">
                    {journey.exclusions.map((exc: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#686174]">
                        <XCircle className="w-4 h-4 text-[#686174] shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="pt-4 border-t border-[#FFF8ED]">
                <Link
                  href={`/enquire?journey=${encodeURIComponent(journey.title)}`}
                  className="w-full py-4 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-[#F2A32B] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
