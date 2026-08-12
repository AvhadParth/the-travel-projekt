"use client";

import React from "react";
import { Users, Mail, Phone, Calendar, Search } from "lucide-react";
import { SEED_ENQUIRIES } from "@/lib/seedData";

export default function AdminLeadsPage() {
  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
          <Users className="w-3.5 h-3.5 text-[#FCB040]" />
          <span>Customer Relationship Directory</span>
        </div>
        <h1 className="font-display font-black text-3xl text-[#2C2640]">
          CUSTOMERS & LEADS DIRECTORY
        </h1>
        <p className="text-xs text-[#686174]">
          Directory of registered travellers, previous bookers, and active proposal inquiries.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-lg overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#E9D4B5] text-[#686174] font-bold uppercase tracking-wider">
              <th className="py-3 px-4">Customer Name</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">Preferred Destinations</th>
              <th className="py-3 px-4">Total Inquiries</th>
              <th className="py-3 px-4">Lifecycle Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FFF8ED]">
            {SEED_ENQUIRIES.map((e, idx) => (
              <tr key={idx} className="hover:bg-[#FFF8ED]/50 transition-colors">
                <td className="py-4 px-4 font-bold text-sm text-[#2C2640]">{e.name}</td>
                <td className="py-4 px-4 text-[#686174]">{e.email} • {e.phone}</td>
                <td className="py-4 px-4 font-bold text-[#2C2640]">{e.destination}</td>
                <td className="py-4 px-4 text-[#686174]">1 Submitted Inquiry</td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] uppercase">
                    {e.status || "NEW"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
