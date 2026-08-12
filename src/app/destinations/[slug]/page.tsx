import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Calendar, Clock, Sparkles, Compass, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InteractiveTimeline from "@/components/journeys/InteractiveTimeline";
import { getDestinationBySlug, getJourneys } from "@/lib/dataService";

export default async function DestinationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = await getDestinationBySlug(params.slug);
  if (!destination) {
    notFound();
  }

  const allJourneys = await getJourneys();
  const relatedJourney = allJourneys.find(
    (j: any) => j.destinationSlug === params.slug
  ) || allJourneys[0];

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1">
        {/* Destination Hero Banner */}
        <section className="relative min-h-[70vh] flex items-end pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#2C2640]">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="absolute inset-0 w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2640] via-[#2C2640]/40 to-transparent" />

          <div className="max-w-7xl mx-auto w-full relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
              <MapPin className="w-4 h-4" /> {destination.country} • {destination.region}
            </div>

            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none">
              {destination.name}
            </h1>

            <p className="font-handwriting text-2xl sm:text-3xl text-[#FCB040] font-bold italic">
              "{destination.tagline}"
            </p>
          </div>
        </section>

        {/* Metadata Bar */}
        <section className="bg-white border-y border-[#E9D4B5] py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#686174]">Best Season</span>
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{destination.bestTime}</span>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#686174]">Ideal Duration</span>
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{destination.idealDuration}</span>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#686174]">Estimated Budget</span>
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{destination.budgetRange}</span>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#686174]">Travel Style</span>
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#2C2640]">{destination.travelStyles.join(" / ")}</span>
            </div>
          </div>
        </section>

        {/* Why Destination & Highlights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
              Destination Story
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#2C2640]">
              WHY VISIT {destination.name.toUpperCase()}?
            </h2>
            <p className="text-base sm:text-lg text-[#686174] leading-relaxed">
              {destination.description}
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-display font-bold text-xl text-[#2C2640]">
                Unmissable Experiences in {destination.name}:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#E9D4B5]">
                    <CheckCircle2 className="w-5 h-5 text-[#FCB040] shrink-0" />
                    <span className="text-sm font-bold text-[#2C2640]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Enquire / Book Card */}
          <div className="lg:col-span-5 bg-[#2C2640] text-[#FFF8ED] p-8 rounded-3xl border border-[#3F375B] shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider">
                Bespoke Planning
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Want a custom itinerary for {destination.name}?
              </h3>
              <p className="text-xs text-[#E9D4B5]">
                Let our travel specialists curate private hotels, local transports, and daily activities for your trip dates.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href={`/enquire?destination=${encodeURIComponent(destination.name)}`}
                className="w-full py-4 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-[#F2A32B] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request {destination.name} Trip Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/planner"
                className="w-full py-3.5 rounded-full bg-[#3F375B] text-[#FFF8ED] font-extrabold text-xs uppercase tracking-wider hover:bg-[#FFF8ED] hover:text-[#2C2640] transition-colors flex items-center justify-center gap-2"
              >
                <span>Custom Trip Planner 🧭</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Sample Interactive Itinerary Timeline */}
        {relatedJourney && relatedJourney.itinerary && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#E9D4B5]">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                Sample Itinerary
              </span>
              <h2 className="font-display font-extrabold text-4xl text-[#2C2640]">
                SAMPLE JOURNEY: {relatedJourney.title.toUpperCase()}
              </h2>
              <p className="text-sm text-[#686174]">
                Click on any day below to expand activities, stay details, and local food highlights.
              </p>
            </div>

            <InteractiveTimeline days={relatedJourney.itinerary} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
