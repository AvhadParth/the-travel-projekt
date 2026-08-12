import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import InteractiveMap from "@/components/destinations/InteractiveMap";
import { getDestinations, getJourneys, getExperiences, getArticles } from "@/lib/dataService";
import { SuitcaseIcon } from "@/components/ui/BrandDoodles";

export default async function HomePage() {
  const destinations = await getDestinations();
  const journeys = await getJourneys();
  const experiences = await getExperiences();
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body selection:bg-[#FCB040] selection:text-[#2C2640] overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 01. HERO SECTION */}
        <HeroSection />

        {/* 02. DESTINATION DISCOVERY SLIDER */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                  Where Next?
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#2C2640] tracking-tight">
                  WHERE WILL YOU GO NEXT?
                </h2>
              </div>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm text-[#2C2640] hover:text-[#FCB040] transition-colors"
              >
                <span>View All Destinations ({destinations.length})</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Horizontal Scroll Cards Grid */}
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 no-scrollbar snap-x snap-mandatory">
              {destinations.map((dest: any) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="snap-start shrink-0 w-[270px] sm:w-[360px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#2C2640] text-[#FCB040] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                      {dest.country}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-xs font-bold text-[#FCB040] italic font-handwriting text-base">
                        "{dest.tagline}"
                      </p>
                      <p className="text-xs text-[#686174] line-clamp-2 mt-1.5">
                        {dest.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#FFF8ED] flex items-center justify-between text-xs font-bold text-[#2C2640]">
                      <div>
                        <span className="block text-[9px] text-[#686174] uppercase">Duration</span>
                        <span>{dest.idealDuration}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[9px] text-[#686174] uppercase">Starting</span>
                        <span className="text-[#2C2640] font-extrabold">₹{dest.startingPrice.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 03. EDITORIAL STORYTELLING MANIFESTO */}
        <section className="py-16 sm:py-24 bg-[#2C2640] text-[#FFF8ED] relative overflow-hidden px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FCB040] text-[#2C2640] flex items-center justify-center mx-auto shadow-xl">
              <SuitcaseIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#2C2640]" />
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl text-[#FFF8ED] leading-tight max-w-4xl mx-auto">
              WE BELIEVE THE BEST <br />
              <span className="text-[#FCB040] italic font-handwriting text-4xl sm:text-7xl">
                STORIES
              </span>{" "}
              BEGIN WITH "LET'S GO."
            </h2>

            <p className="text-sm sm:text-xl text-[#E9D4B5] max-w-2xl mx-auto font-medium leading-relaxed">
              Commercial travel agencies treat vacations like line items. We build handcrafted journeys that leave space for slow mornings, local tea conversations, and spontaneous detour paths.
            </p>

            <div className="pt-4 flex justify-center">
              <Link
                href="/about"
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-[#F2A32B] transition-colors shadow-lg"
              >
                Read Our Story & Philosophy →
              </Link>
            </div>
          </div>
        </section>

        {/* 04. FEATURED CURATED JOURNEYS */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                  Curated Trips
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#2C2640] tracking-tight">
                  SIGNATURE JOURNEYS
                </h2>
              </div>
              <Link
                href="/journeys"
                className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm text-[#2C2640] hover:text-[#FCB040] transition-colors"
              >
                <span>Browse All Journeys</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Journeys Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {journeys.map((j: any) => (
                <div
                  key={j.slug}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all"
                >
                  <div>
                    <div className="relative h-52 sm:h-60 overflow-hidden">
                      <img
                        src={j.heroImage}
                        alt={j.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                        {j.durationDays} Days / {j.durationDays - 1} Nights
                      </div>
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#2C2640] text-white font-extrabold text-xs sm:text-sm">
                        ₹{j.price.toLocaleString("en-IN")} / person
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-3">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                        {j.title}
                      </h3>
                      <p className="text-xs text-[#686174] leading-relaxed line-clamp-3">
                        {j.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {j.travelStyles.map((style: string) => (
                          <span
                            key={style}
                            className="px-2.5 py-0.5 rounded-full bg-[#FFE0A8]/50 text-[#2C2640] text-[10px] sm:text-[11px] font-bold"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0">
                    <Link
                      href={`/journeys/${j.slug}`}
                      className="w-full py-3 sm:py-3.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>View Detailed Journey</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05. INTERACTIVE WORLD & INDIA MAP */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <InteractiveMap />
        </section>

        {/* 06. TRIP PLANNER TEASER BANNER */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFE0A8]/40 border-y border-[#E9D4B5]">
          <div className="max-w-5xl mx-auto bg-white p-6 sm:p-14 rounded-2xl sm:rounded-3xl border-2 border-[#2C2640] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
            <div className="space-y-3 sm:space-y-4 max-w-xl text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider inline-block">
                Bespoke Trip Builder
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#2C2640]">
                TELL US WHAT YOU'RE DREAMING ABOUT.
              </h2>
              <p className="text-xs sm:text-base text-[#686174]">
                Whether you have 5 days or 14 days, ₹30K or ₹2L, our multi-step builder crafts personalized travel itineraries tailored to your dates, group size, and style.
              </p>
            </div>

            <Link
              href="/planner"
              className="w-full md:w-auto px-8 sm:px-9 py-4 sm:py-5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl text-center whitespace-nowrap"
            >
              Start Trip Planner 🧭
            </Link>
          </div>
        </section>

        {/* 07. TRAVEL JOURNAL */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                  Magazine & Guides
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#2C2640] tracking-tight">
                  THE TRAVEL JOURNAL
                </h2>
              </div>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm text-[#2C2640] hover:text-[#FCB040] transition-colors"
              >
                <span>Read All Stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {articles[0] && (
                <Link
                  href={`/journal/${articles[0].slug}`}
                  className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg group hover:shadow-2xl transition-all flex flex-col"
                >
                  <div className="relative h-60 sm:h-80 overflow-hidden">
                    <img
                      src={articles[0].coverImage}
                      alt={articles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#2C2640] text-[#FCB040] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                      {articles[0].category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 space-y-2 sm:space-y-3">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#686174]">
                      <span>{articles[0].author.name}</span>
                      <span>•</span>
                      <span>{articles[0].readTime}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-3xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors">
                      {articles[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686174] line-clamp-3">
                      {articles[0].excerpt}
                    </p>
                  </div>
                </Link>
              )}

              <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                {articles.slice(1).map((art: any) => (
                  <Link
                    key={art.slug}
                    href={`/journal/${art.slug}`}
                    className="block p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E9D4B5] shadow-md hover:shadow-xl transition-all group"
                  >
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFE0A8]/60 text-[#2C2640] font-extrabold text-[9px] sm:text-[10px] uppercase">
                      {art.category}
                    </span>
                    <h4 className="font-display font-extrabold text-base sm:text-lg text-[#2C2640] group-hover:text-[#FCB040] transition-colors mt-2 mb-1.5">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#686174] line-clamp-2">{art.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 08. INSTAGRAM COMMUNITY WALL */}
        <section className="py-16 sm:py-20 bg-[#2C2640] text-[#FFF8ED] px-4">
          <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
                Social Community
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#FFF8ED] mt-1">
                FOLLOW THE JOURNEY @THETRAVELPROJEKT
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
              ].map((img, i) => (
                <div key={i} className="relative rounded-xl sm:rounded-2xl overflow-hidden h-36 sm:h-60 group shadow-lg">
                  <img
                    src={img}
                    alt="Instagram Post"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#2C2640]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#FCB040]">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-[#F2A32B] transition-colors shadow-lg"
            >
              <span>Follow @THETRAVELPROJEKT on Instagram</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
