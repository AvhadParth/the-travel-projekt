"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Mail,
  MapPin,
  Calendar,
  Compass,
  FileText,
  Users,
  Image as ImageIcon,
  Settings,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/enquiries", label: "Enquiries CRM", icon: Mail },
  { href: "/admin/destinations", label: "Destinations", icon: MapPin },
  { href: "/admin/journeys", label: "Journeys", icon: Calendar },
  { href: "/admin/experiences", label: "Experiences", icon: Compass },
  { href: "/admin/journal", label: "Journal Articles", icon: FileText },
  { href: "/admin/leads", label: "Customers / Leads", icon: Users },
  { href: "/admin/media", label: "Media Library", icon: ImageIcon },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide sidebar on /admin/login
  if (pathname === "/admin/login") return null;

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.log("Logout error", err);
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden bg-[#2C2640] text-[#FFF8ED] p-4 flex items-center justify-between border-b border-[#3F375B] sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="The Travel Projekt Logo"
            className="w-8 h-8 rounded-full object-cover border border-[#FCB040]"
          />
          <span className="font-display font-black text-base">ADMIN PORTAL</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-[#3F375B] text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-64 bg-[#2C2640] text-[#FFF8ED] border-r border-[#3F375B] flex flex-col z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header with Logo */}
        <div className="p-6 border-b border-[#3F375B] flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5">
            <img
              src="/logo.jpg"
              alt="The Travel Projekt Logo"
              className="w-9 h-9 rounded-full object-cover border border-[#FCB040] shadow-md shrink-0"
            />
            <div>
              <span className="font-display font-black text-base block text-white leading-none">
                THE TRAVEL PROJEKT
              </span>
              <span className="text-[10px] font-extrabold uppercase text-[#FCB040] tracking-widest">
                ADMIN SYSTEM
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto no-scrollbar">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all ${
                  active
                    ? "bg-[#FCB040] text-[#2C2640] shadow-lg shadow-[#FCB040]/20"
                    : "text-[#E9D4B5] hover:bg-[#3F375B] hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "text-[#2C2640]" : "text-[#FCB040]"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-4 border-t border-[#3F375B] space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full py-2.5 px-4 rounded-xl bg-[#3F375B] text-[#FFF8ED] hover:bg-white hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-between"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="w-full py-2.5 px-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-between"
          >
            <span>Sign Out</span>
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    </>
  );
}
