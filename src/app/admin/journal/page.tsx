"use client";

import React, { useState } from "react";
import { FileText, Plus, Edit2, Search } from "lucide-react";
import { SEED_ARTICLES } from "@/lib/seedData";

export default function AdminJournalPage() {
  const [articles, setArticles] = useState<any[]>(SEED_ARTICLES);

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5 text-[#FCB040]" />
            <span>Magazine & Editorial CMS</span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#2C2640]">
            JOURNAL ARTICLES CMS
          </h1>
          <p className="text-xs text-[#686174]">
            Publish slow travel stories, culture guides, author bios, and destination inspiration.
          </p>
        </div>

        <button
          onClick={() => alert("Write New Article")}
          className="px-6 py-3 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      <div className="space-y-4">
        {articles.map((art) => (
          <div key={art.slug} className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-md flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img src={art.coverImage} alt={art.title} className="w-20 h-20 rounded-2xl object-cover" />
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFF8ED] text-[#2C2640] font-bold text-[10px] uppercase border border-[#E9D4B5]">
                  {art.category} • {art.readTime}
                </span>
                <h3 className="font-display font-bold text-lg text-[#2C2640] mt-1">{art.title}</h3>
                <p className="text-xs text-[#686174]">By {art.author.name} • Published {art.publishedAt}</p>
              </div>
            </div>

            <button className="px-4 py-2 rounded-xl bg-[#FFF8ED] border border-[#E9D4B5] text-xs font-bold hover:bg-[#FCB040] transition-colors">
              Edit Article
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
