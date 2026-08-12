import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug } from "@/lib/dataService";

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#686174] hover:text-[#2C2640] mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        {/* Header */}
        <div className="space-y-6 mb-12 text-center sm:text-left">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider inline-block">
            {article.category}
          </span>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#2C2640] leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 border-y border-[#E9D4B5] py-4 text-xs font-bold text-[#686174]">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-[#2C2640]">{article.author.name}</span>
            </div>
            <span>•</span>
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 h-96 sm:h-[480px]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <article className="prose prose-lg max-w-none text-[#2C2640] leading-relaxed space-y-6">
          <p className="text-xl font-medium text-[#686174] italic border-l-4 border-[#FCB040] pl-6 py-2">
            "{article.excerpt}"
          </p>

          <div
            className="space-y-6 text-base sm:text-lg text-[#2C2640]"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n\n/g, "<br/><br/>") }}
          />
        </article>

        {/* Related CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-[#2C2640] text-[#FFF8ED] space-y-4 text-center">
          <h3 className="font-display font-extrabold text-2xl text-white">
            Ready to experience this destination yourself?
          </h3>
          <p className="text-xs text-[#E9D4B5] max-w-md mx-auto">
            Let us handle private bookings, houseboats, and customized itineraries.
          </p>
          <div className="pt-2">
            <Link
              href="/planner"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-[#F2A32B] transition-colors shadow-lg"
            >
              <span>Build Custom Journey →</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
