"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, User } from "lucide-react";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-300">
        <div className="bg-[#FFF8ED]/90 backdrop-blur-md rounded-full px-6 py-3 border border-[#E9D4B5] shadow-lg flex items-center justify-between">
          
          {/* Official Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="The Travel Projekt Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform border border-[#FCB040]"
            />
            <div className="flex flex-col">
              <span className="font-display font-black tracking-tight text-lg text-[#2C2640] leading-none">
                THE TRAVEL PROJEKT
              </span>
              <span className="text-[10px] font-bold text-[#FCB040] italic font-handwriting">
                stories, not transactions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-extrabold text-xs uppercase tracking-wider text-[#2C2640]">
            <Link href="/destinations" className="hover:text-[#FCB040] transition-colors">
              Destinations
            </Link>
            <Link href="/journeys" className="hover:text-[#FCB040] transition-colors">
              Journeys
            </Link>
            <Link href="/experiences" className="hover:text-[#FCB040] transition-colors">
              Experiences
            </Link>
            <Link href="/journal" className="hover:text-[#FCB040] transition-colors">
              Journal
            </Link>
            <Link href="/about" className="hover:text-[#FCB040] transition-colors">
              About
            </Link>
          </nav>

          {/* Actions & Search Trigger */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Button without Cmd+K badge */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full hover:bg-[#FFE0A8]/50 text-[#2C2640] transition-colors flex items-center gap-2"
              title="Search Destinations & Journeys"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Profile / Account link */}
            <Link
              href="/dashboard"
              className="p-2.5 rounded-full hover:bg-[#FFE0A8]/50 text-[#2C2640] transition-colors hidden sm:flex"
              title="User Account"
            >
              <User className="w-4 h-4" />
            </Link>

            {/* Plan My Trip primary CTA */}
            <Link
              href="/planner"
              className="px-5 py-2.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md hidden sm:inline-block"
            >
              Plan My Trip ↗
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-[#2C2640] lg:hidden hover:bg-[#FFE0A8]/50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#2C2640]/95 backdrop-blur-lg flex flex-col justify-center px-8 py-12 text-[#FFF8ED] space-y-8 animate-in fade-in duration-200">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#FFF8ED]/10 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FCB040]">
              Menu
            </span>
            <div className="flex flex-col gap-6 font-display font-extrabold text-3xl">
              <Link href="/destinations" onClick={() => setIsMobileMenuOpen(false)}>
                Destinations
              </Link>
              <Link href="/journeys" onClick={() => setIsMobileMenuOpen(false)}>
                Journeys
              </Link>
              <Link href="/experiences" onClick={() => setIsMobileMenuOpen(false)}>
                Experiences
              </Link>
              <Link href="/journal" onClick={() => setIsMobileMenuOpen(false)}>
                Journal
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#FFF8ED]/20 flex flex-col gap-4">
            <Link
              href="/planner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-center text-sm uppercase tracking-wider"
            >
              Plan My Trip 🧭
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full border border-[#FFF8ED] text-[#FFF8ED] font-extrabold text-center text-xs uppercase tracking-wider"
            >
              My Dashboard
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
