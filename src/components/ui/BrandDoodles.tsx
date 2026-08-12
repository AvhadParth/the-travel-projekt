import React from "react";

// Organic Hand-drawn Underline (Authentic sketch stroke)
export function HandDrawnUnderline({ className = "w-full h-4 text-[#FCB040]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      <path
        d="M5 12 C 70 4, 220 16, 395 7 C 280 15, 140 5, 15 13"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnArrow({ className = "w-6 h-6 text-[#FCB040]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M3 12C8.5 11.5 15.5 12.5 20 8.5M20 8.5C18 10 17 12 16.5 14.5M20 8.5C17.5 8 15 7.5 13 6.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnCircle({ className = "w-12 h-12 text-[#FCB040]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M48 10C24 12 8 32 10 56C12 80 32 92 56 90C80 88 92 68 88 44C84 20 62 6 36 12C20 16 12 28 14 46"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SuitcaseIcon({ className = "w-6 h-6 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

// 01. LOGO DOODLE: Sun with Rays (Extracted from top of logo)
export function LogoSunRays({ className = "w-16 h-16 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M25 50 C25 25, 75 25, 75 50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="28" y1="18" x2="34" y2="26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="72" y1="18" x2="66" y2="26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="12" y1="36" x2="22" y2="38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="88" y1="36" x2="78" y2="38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// 02. LOGO DOODLE: Hand-drawn Retro Sunglasses
export function LogoSunglasses({ className = "w-20 h-16 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M15 35 C15 20, 50 20, 50 35 C50 55, 20 60, 15 35 Z" fill="#2C2640" stroke="currentColor" strokeWidth="3.5" />
      <path d="M70 35 C70 20, 105 20, 105 35 C105 55, 75 60, 70 35 Z" fill="#2C2640" stroke="currentColor" strokeWidth="3.5" />
      <path d="M50 30 Q60 22 70 30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M15 30 L5 25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M105 30 L115 25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="25" y1="30" x2="35" y2="45" stroke="#FFF8ED" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="30" x2="90" y2="45" stroke="#FFF8ED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 03. LOGO DOODLE: Sunscreen Lotion Bottle
export function LogoSunscreen({ className = "w-16 h-20 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="28" y="8" width="24" height="12" rx="4" fill="currentColor" />
      <path d="M20 22 H60 C65 22, 68 30, 65 50 L60 88 C59 93, 50 95, 40 95 C30 95, 21 93, 20 88 L15 50 C12 30, 15 22, 20 22 Z" fill="#FFF8ED" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="40" cy="55" r="10" fill="#FCB040" stroke="currentColor" strokeWidth="2.5" />
      <line x1="40" y1="38" x2="40" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="68" x2="40" y2="72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="23" y1="55" x2="27" y2="55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="53" y1="55" x2="57" y2="55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 04. LOGO DOODLE: Tropical Palm Leaf
export function LogoTropicalLeaf({ className = "w-20 h-24 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 105 C50 70, 50 40, 50 15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M50 15 C20 30, 15 65, 30 90 C38 100, 50 105, 50 105 C50 105, 62 100, 70 90 C85 65, 80 30, 50 15 Z" fill="#FFE0A8" fillOpacity="0.4" stroke="currentColor" strokeWidth="3.5" />
      <path d="M50 35 L25 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 55 L20 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 35 L75 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 55 L80 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 05. LOGO DOODLE: Vintage Stitched Suitcase
export function LogoSuitcaseDoodle({ className = "w-28 h-20 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="15" y="30" width="110" height="60" rx="8" fill="#FFF8ED" stroke="currentColor" strokeWidth="3.5" />
      <path d="M55 30 V18 C55 14, 85 14, 85 18 V30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M15 42 H30 V30" stroke="currentColor" strokeWidth="3" />
      <path d="M125 42 H110 V30" stroke="currentColor" strokeWidth="3" />
      <path d="M15 78 H30 V90" stroke="currentColor" strokeWidth="3" />
      <path d="M125 78 H110 V90" stroke="currentColor" strokeWidth="3" />
      <rect x="38" y="30" width="8" height="12" fill="currentColor" />
      <rect x="94" y="30" width="8" height="12" fill="currentColor" />
      <line x1="20" y1="48" x2="120" y2="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  );
}

// 06. LOGO DOODLE: Vintage Rangefinder Camera Doodle
export function LogoCameraDoodle({ className = "w-24 h-20 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="15" y="25" width="90" height="55" rx="10" fill="#FFF8ED" stroke="currentColor" strokeWidth="3.5" />
      <rect x="30" y="15" width="16" height="10" rx="2" fill="currentColor" />
      <circle cx="85" cy="20" r="4" fill="#FCB040" />
      <circle cx="60" cy="52" r="20" fill="#FFE0A8" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="60" cy="52" r="11" fill="currentColor" />
      <circle cx="57" cy="49" r="3" fill="#FFF8ED" />
    </svg>
  );
}

// 07. LOGO DOODLE: Organic Compass Rose Dial Doodle
export function LogoCompassRose({ className = "w-22 h-22 text-[#FCB040]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="3.5" strokeDasharray="4 2" />
      <path d="M50 15 L58 50 L50 85 L42 50 Z" fill="currentColor" />
      <path d="M50 50 L58 50 L50 85 Z" fill="#2C2640" />
      <circle cx="50" cy="50" r="6" fill="#FFF8ED" stroke="currentColor" strokeWidth="2.5" />
      <text x="50" y="11" textAnchor="middle" fill="#2C2640" fontSize="9" fontWeight="900">N</text>
    </svg>
  );
}

// 08. LOGO DOODLE: Organic Passport Booklet Doodle
export function LogoPassportBook({ className = "w-20 h-24 text-[#2C2640]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="18" y="15" width="64" height="90" rx="8" fill="#2C2640" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="16" stroke="#FCB040" strokeWidth="2.5" />
      <ellipse cx="50" cy="50" rx="16" ry="6" stroke="#FCB040" strokeWidth="2" />
      <line x1="50" y1="34" x2="50" y2="66" stroke="#FCB040" strokeWidth="2" />
      <text x="50" y="82" textAnchor="middle" fill="#FCB040" fontSize="8" fontWeight="800" letterSpacing="1">PASSPORT</text>
    </svg>
  );
}

export function SunDoodle({ className = "w-8 h-8 text-[#FCB040]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="25" cy="25" r="12" fill="#FCB040" />
      <path d="M25 5V9M25 41V45M5 25H9M41 25H45M11 11L14 14M36 36L39 39M11 39L14 36M36 14L39 11" stroke="#2C2640" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
