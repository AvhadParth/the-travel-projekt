"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, CheckCircle2, Share2, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.log(err);
    }
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#2C2640] text-[#FFF8ED] pt-20 pb-12 border-t-4 border-[#FCB040]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3F375B]">
          {/* Brand Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FCB040] flex items-center justify-center text-[#2C2640]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-[#FCB040]">
                THE TRAVEL PROJEKT
              </span>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight text-[#FFF8ED]">
              Travel should feel like a <span className="text-[#FCB040] italic font-handwriting text-4xl sm:text-5xl">story</span>, not a transaction.
            </h3>
            <p className="text-[#E9D4B5] text-base leading-relaxed max-w-lg">
              We curate authentic, human travel experiences across the Himalayas, royal desert cities, tropical islands, and cultural hot spots for people who’d rather collect memories than souvenirs.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-[#3F375B]/60 p-8 rounded-3xl border border-[#E9D4B5]/20 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#FCB040] font-bold text-xs uppercase tracking-wider">
                  Weekly Travel Stories
                </span>
              </div>
              <h4 className="font-display font-bold text-2xl text-[#FFF8ED]">
                Your next adventure starts here.
              </h4>
              <p className="text-sm text-[#E9D4B5]">
                Get hand-crafted travel guides, secret itineraries, and flight drop alerts delivered to your inbox every Sunday.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FCB040]/20 text-[#FCB040] mt-6">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span className="font-bold text-sm">Welcome to the inner circle! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 relative z-10">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-[#2C2640] border border-[#E9D4B5]/30 text-[#FFF8ED] placeholder-[#686174] outline-none focus:border-[#FCB040] transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-[#F2A32B] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-[#3F375B] text-sm">
          {/* Col 1 */}
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-wider text-xs text-[#FCB040]">Discover</h5>
            <ul className="space-y-2 text-[#E9D4B5]">
              <li><Link href="/destinations" className="hover:text-[#FCB040] transition-colors">All Destinations</Link></li>
              <li><Link href="/destinations/kashmir" className="hover:text-[#FCB040] transition-colors">Kashmir Valley</Link></li>
              <li><Link href="/destinations/rajasthan" className="hover:text-[#FCB040] transition-colors">Royal Rajasthan</Link></li>
              <li><Link href="/destinations/bali" className="hover:text-[#FCB040] transition-colors">Bali Tropics</Link></li>
              <li><Link href="/destinations/japan" className="hover:text-[#FCB040] transition-colors">Japan Experience</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-wider text-xs text-[#FCB040]">Journeys</h5>
            <ul className="space-y-2 text-[#E9D4B5]">
              <li><Link href="/journeys" className="hover:text-[#FCB040] transition-colors">Curated Trips</Link></li>
              <li><Link href="/journeys/7-days-kashmir-paradise-unfolded" className="hover:text-[#FCB040] transition-colors">7 Days Kashmir</Link></li>
              <li><Link href="/journeys/8-days-royal-rajasthan-palaces-dunes" className="hover:text-[#FCB040] transition-colors">8 Days Rajasthan</Link></li>
              <li><Link href="/journeys/6-days-bali-tropics-island-magic" className="hover:text-[#FCB040] transition-colors">6 Days Bali</Link></li>
              <li><Link href="/planner" className="hover:text-[#FCB040] transition-colors font-bold text-[#FCB040]">Custom Trip Builder 🧭</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-wider text-xs text-[#FCB040]">Experiences</h5>
            <ul className="space-y-2 text-[#E9D4B5]">
              <li><Link href="/experiences?category=Adventure" className="hover:text-[#FCB040] transition-colors">Adventure & Treks</Link></li>
              <li><Link href="/experiences?category=Luxury" className="hover:text-[#FCB040] transition-colors">Luxury Stays</Link></li>
              <li><Link href="/experiences?category=Couples" className="hover:text-[#FCB040] transition-colors">Romantic Getaways</Link></li>
              <li><Link href="/experiences?category=Culture" className="hover:text-[#FCB040] transition-colors">Cultural Trails</Link></li>
              <li><Link href="/experiences?category=Food" className="hover:text-[#FCB040] transition-colors">Local Food Tours</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h5 className="font-bold uppercase tracking-wider text-xs text-[#FCB040]">Company</h5>
            <ul className="space-y-2 text-[#E9D4B5]">
              <li><Link href="/about" className="hover:text-[#FCB040] transition-colors">Our Story & Team</Link></li>
              <li><Link href="/journal" className="hover:text-[#FCB040] transition-colors">Travel Journal</Link></li>
              <li><Link href="/enquire" className="hover:text-[#FCB040] transition-colors">Request Custom Trip</Link></li>
              <li><Link href="/admin" className="hover:text-[#FCB040] transition-colors">Admin Management</Link></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <h5 className="font-bold uppercase tracking-wider text-xs text-[#FCB040]">Follow The Journey</h5>
            <div className="flex items-center gap-3">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#3F375B] flex items-center justify-center text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#3F375B] flex items-center justify-center text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"/>
                </svg>
              </a>
              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#3F375B] flex items-center justify-center text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-[#686174]">
              Tag <span className="text-[#FCB040] font-bold">#TheTravelProjekt</span> on Instagram to be featured on our official journal.
            </p>
          </div>
        </div>

        {/* Bottom Rights & Microcopy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#686174] gap-4">
          <p>© {new Date().getFullYear()} The Travel Projekt. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#FCB040]">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[#FCB040]">Terms of Service</Link>
            <Link href="/enquire" className="hover:text-[#FCB040]">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
