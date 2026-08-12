"use client";

import React, { useState } from "react";
import { Settings, ShieldCheck, Key, Save, CheckCircle2 } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="p-6 sm:p-10 max-w-4xl w-full mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
          <Settings className="w-3.5 h-3.5 text-[#FCB040]" />
          <span>System & Account Configuration</span>
        </div>
        <h1 className="font-display font-black text-3xl text-[#2C2640]">
          ADMIN SETTINGS & SECURITY
        </h1>
        <p className="text-xs text-[#686174]">
          Configure admin email alerts, change master password, and manage database seed fallbacks.
        </p>
      </div>

      {saved && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl border border-[#E9D4B5] shadow-lg space-y-6">
        <div className="space-y-4">
          <h3 className="font-display font-extrabold text-lg text-[#2C2640]">Admin Profile</h3>
          
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#686174]">Admin Name</label>
            <input
              type="text"
              defaultValue="The Travel Projekt Admin"
              className="w-full px-4 py-2.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-xs font-bold text-[#2C2640] outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#686174]">Admin Email</label>
            <input
              type="email"
              defaultValue="admin@thetravelprojekt.com"
              className="w-full px-4 py-2.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-xs font-bold text-[#2C2640] outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#FFF8ED] space-y-4">
          <h3 className="font-display font-extrabold text-lg text-[#2C2640]">Security & Password</h3>
          
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#686174]">New Admin Password</label>
            <input
              type="password"
              placeholder="Leave blank to keep current password"
              className="w-full px-4 py-2.5 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-xs font-bold text-[#2C2640] outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-black text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Admin Settings</span>
        </button>
      </form>
    </main>
  );
}
