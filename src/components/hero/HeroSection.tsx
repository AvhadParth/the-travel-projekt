"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles, ChevronDown, Star } from "lucide-react";
import {
  LogoSunRays,
  LogoSunglasses,
  LogoSunscreen,
  LogoTropicalLeaf,
  LogoSuitcaseDoodle,
  LogoCameraDoodle,
  LogoCompassRose,
  LogoPassportBook,
  HandDrawnUnderline,
} from "../ui/BrandDoodles";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8ED] overflow-hidden">
      {/* Background Ambient Warm Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#FCB040]/15 rounded-full blur-3xl pointer-events-none" />

      {/* --- SYMMETRICAL FLOATING & DRAGGABLE BRAND DOODLES --- */}
      
      {/* LEFT MARGIN (4 DOODLES) */}
      {/* 01. Left Top: Sun Rays */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -80, bottom: 100 }}
        animate={{ y: [0, -10, 0, 6, 0], rotate: [-6, -2, -6, -10, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute top-20 sm:top-24 left-2 sm:left-10 z-20 cursor-grab active:cursor-grabbing"
      >
        <LogoSunRays className="w-14 h-11 sm:w-20 sm:h-16 text-[#FCB040] drop-shadow-md" />
      </motion.div>

      {/* 02. Left Upper-Mid: Retro Sunglasses */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ y: [0, 8, 0, -12, 0], rotate: [-12, -8, -12, -15, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute top-48 sm:top-56 left-1 sm:left-8 z-20 cursor-grab active:cursor-grabbing"
      >
        <LogoSunglasses className="w-16 h-11 sm:w-24 sm:h-16 text-[#2C2640] drop-shadow-md" />
      </motion.div>

      {/* 03. Left Lower-Mid: Stitched Leather Suitcase */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ y: [0, -12, 0, 8, 0], rotate: [6, 10, 6, 2, 6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute top-[68%] left-2 sm:left-10 z-20 cursor-grab active:cursor-grabbing"
      >
        <LogoSuitcaseDoodle className="w-18 h-12 sm:w-28 sm:h-20 text-[#2C2640] drop-shadow-md" />
      </motion.div>

      {/* 04. Left Bottom: Passport Booklet */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ y: [0, 10, 0, -8, 0], rotate: [-8, -4, -8, -12, -8] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute bottom-16 left-3 sm:left-14 z-20 cursor-grab active:cursor-grabbing hidden sm:block"
      >
        <LogoPassportBook className="w-14 h-16 sm:w-20 sm:h-24 text-[#2C2640] drop-shadow-md" />
      </motion.div>

      {/* RIGHT MARGIN (4 DOODLES) */}
      {/* 05. Right Top: Tropical Monstera Leaf */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -80, bottom: 100 }}
        animate={{ y: [0, -12, 0, 10, 0], rotate: [12, 8, 12, 16, 12] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute top-20 sm:top-24 right-2 sm:right-12 z-20 cursor-grab active:cursor-grabbing"
      >
        <LogoTropicalLeaf className="w-16 h-18 sm:w-24 sm:h-28 text-[#2C2640] drop-shadow-md" />
      </motion.div>

      {/* 06. Right Upper-Mid: Compass Rose Dial */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ y: [0, 10, 0, -10, 0], rotate: [0, 15, 0, -15, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute top-48 sm:top-56 right-2 sm:right-10 z-20 cursor-grab active:cursor-grabbing"
      >
        <LogoCompassRose className="w-14 h-14 sm:w-20 sm:h-20 text-[#FCB040] drop-shadow-md" />
      </motion.div>

      {/* 07. Right Lower-Mid: Sunscreen Bottle */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ y: [0, -8, 0, 12, 0], rotate: [6, 2, 6, 10, 6] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute top-[68%] right-3 sm:right-12 z-20 cursor-grab active:cursor-grabbing"
      >
        <LogoSunscreen className="w-12 h-16 sm:w-18 sm:h-24 text-[#2C2640] drop-shadow-md" />
      </motion.div>

      {/* 08. Right Bottom: Vintage Camera */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        animate={{ y: [0, 12, 0, -8, 0], rotate: [-15, -10, -15, -18, -15] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        className="absolute bottom-16 right-3 sm:right-14 z-20 cursor-grab active:cursor-grabbing hidden sm:block"
      >
        <LogoCameraDoodle className="w-18 h-14 sm:w-26 sm:h-20 text-[#2C2640] drop-shadow-md" />
      </motion.div>

      {/* ----------------------------------------------------------------------------- */}

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8">
        
        {/* Organic Brand Pill Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4.5 py-1.5 rounded-full bg-[#FFE0A8]/80 border border-[#FCB040]/60 text-[#2C2640] font-bold text-[11px] sm:text-xs uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FCB040]" />
          <span>Authentic Travel Platform</span>
        </div>

        {/* Hero Headline: Slim Cursive "you've" + Normal Bold "NEVER BEEN." + Organic Underline */}
        <h1 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tight text-[#2C2640] leading-[1.05] sm:leading-[1.02]">
          GO SOMEWHERE <br />
          <span className="font-handwriting font-normal text-[#FCB040] italic lowercase text-5xl sm:text-8xl lg:text-9xl mr-3 inline-block -rotate-3">
            you've
          </span>{" "}
          <span className="relative inline-block text-[#2C2640]">
            NEVER BEEN.
            <HandDrawnUnderline className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-5 text-[#FCB040]" />
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#686174] font-medium leading-relaxed px-2">
          Journeys, experiences and stories for people who'd rather collect memories than souvenirs.
        </p>

        {/* Clean Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/journeys"
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>Explore Journeys</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <Link
            href="/planner"
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white border-2 border-[#2C2640] text-[#2C2640] hover:bg-[#FFE0A8]/40 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCB040]" />
            <span>Plan My Trip</span>
          </Link>
        </div>

        {/* Social Proof Trust Strip */}
        <div className="flex items-center justify-center pt-2">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#E9D4B5] text-[11px] sm:text-xs shadow-sm">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Traveller"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Traveller"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="Traveller"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1 text-[#FCB040]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#2C2640]">4.9/5 Rating by 2,400+ Travellers</span>
          </div>
        </div>

        {/* Hero Cinematic Feature Banner */}
        <div className="relative mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white max-w-5xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=80"
            alt="Kashmir Valley Shikara Sunset"
            className="w-full h-64 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2640]/85 via-transparent to-transparent flex items-end p-4 sm:p-10">
            <div className="text-left text-[#FFF8ED] space-y-1">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                Featured Spot
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-3xl text-white">
                Dal Lake, Srinagar • Kashmir
              </h3>
              <p className="text-sm text-[#E9D4B5] font-medium hidden sm:block">
                Private sunset houseboat stays starting from ₹28,500
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#686174] animate-bounce">
          <span>Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCB040]" />
        </div>
      </div>
    </section>
  );
}
