import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getArticles } from "@/lib/dataService";

export default async function JournalPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3 py-1 rounded-full bg-[#FFE0A8] text-[#2C2640] font-extrabold text-xs uppercase tracking-widest">
            Editorial Magazine
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2C2640] tracking-tight">
            THE TRAVEL JOURNAL
          </h1>
          <p className="text-base sm:text-lg text-[#686174] font-medium">
            Stories, secret itineraries, and cultural insights written by travellers, for travellers.
          </p>
        </div>

        {/* Featured Main Story */}
        {articles[0] && (
          <Link
            href={`/journal/${articles[0].slug}`}
            className="block bg-white rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-xl hover:shadow-2xl transition-all mb-16 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 h-80 lg:h-auto relative overflow-hidden">
                <img
                  src={articles[0].coverImage}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2C2640] text-[#FCB040] font-extrabold text-xs uppercase tracking-wider">
                  Featured Story
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#686174] font-bold uppercase tracking-wider">
                    <span>{articles[0].category}</span>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                  </div>

                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors leading-tight">
                    {articles[0].title}
                  </h2>

                  <p className="text-sm text-[#686174] leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#FFF8ED] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={articles[0].author.avatar}
                      alt={articles[0].author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <span className="block text-xs font-bold text-[#2C2640]">{articles[0].author.name}</span>
                      <span className="block text-[10px] text-[#686174]">{articles[0].author.role}</span>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-[#2C2640] group-hover:text-[#FCB040] transition-colors flex items-center gap-1">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((art: any) => (
            <Link
              key={art.slug}
              href={`/journal/${art.slug}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#E9D4B5] shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2C2640] text-[#FCB040] font-extrabold text-xs uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#686174] font-bold">
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>{art.publishedAt}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#2C2640] group-hover:text-[#FCB040] transition-colors leading-tight">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#686174] line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#FFF8ED] flex items-center justify-between mt-4">
                <span className="text-xs font-bold text-[#2C2640]">{art.author.name}</span>
                <span className="text-xs font-extrabold text-[#FCB040] group-hover:translate-x-1 transition-transform">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
