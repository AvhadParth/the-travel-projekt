"use client";

import React, { useState, useEffect } from "react";
import { Mail, Search, Filter, RefreshCw, CheckCircle2, Clock, Calendar, Users, DollarSign, Send } from "lucide-react";
import { SEED_ENQUIRIES } from "@/lib/seedData";

const CRM_STATUSES = [
  "NEW",
  "CONTACTED",
  "DISCUSSION",
  "QUOTED",
  "BOOKED",
  "COMPLETED",
  "CANCELLED",
];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<any[]>(SEED_ENQUIRIES);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/enquiries");
      if (res.ok) {
        const data = await res.json();
        if (data.enquiries && data.enquiries.length > 0) {
          setEnquiries(data.enquiries);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (enq: any, index: number, newStatus: string) => {
    setUpdatingId(enq._id || index.toString());
    try {
      await fetch("/api/admin/enquiries", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: enq._id, email: enq.email, status: newStatus }),
      });

      // Update local state
      setEnquiries((prev) =>
        prev.map((e, idx) => (idx === index || e.email === enq.email ? { ...e, status: newStatus } : e))
      );
    } catch (err) {
      console.log(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = enquiries.filter((e) => {
    const matchesSearch =
      (e.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.destination || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040]/20 text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-[#FCB040]" />
            <span>Trip Planner & Custom Enquiries</span>
          </div>
          <h1 className="font-display font-black text-3xl text-[#2C2640]">
            ENQUIRIES CRM PIPELINE
          </h1>
          <p className="text-xs text-[#686174]">
            Manage incoming customer leads, assign quotes, track discussions, and update booking status.
          </p>
        </div>

        <button
          onClick={fetchEnquiries}
          disabled={loading}
          className="px-4 py-2.5 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-bold text-xs uppercase transition-colors flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          <span>Refresh Leads</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E9D4B5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#686174] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by customer, email, destination..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-xs font-bold text-[#2C2640] outline-none focus:border-[#2C2640]"
          />
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0">
          <button
            onClick={() => setStatusFilter("ALL")}
            className={`px-3 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors ${
              statusFilter === "ALL"
                ? "bg-[#2C2640] text-white"
                : "bg-[#FFF8ED] text-[#686174] hover:bg-[#E9D4B5]/40"
            }`}
          >
            ALL ({enquiries.length})
          </button>
          {CRM_STATUSES.map((status) => {
            const count = enquiries.filter((e) => e.status === status).length;
            const active = statusFilter === status;
            return (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors ${
                  active
                    ? "bg-[#FCB040] text-[#2C2640]"
                    : "bg-[#FFF8ED] text-[#686174] hover:bg-[#E9D4B5]/40"
                }`}
              >
                {status} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* CRM Pipeline Table */}
      <div className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E9D4B5] text-[#686174] font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Customer Details</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Travel Dates & Guests</th>
                <th className="py-3 px-4">Budget</th>
                <th className="py-3 px-4">Current Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FFF8ED]">
              {filtered.map((enq: any, idx: number) => (
                <tr key={idx} className="hover:bg-[#FFF8ED]/50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="block font-bold text-[#2C2640] text-sm">{enq.name}</span>
                    <span className="block text-[11px] text-[#686174]">{enq.email}</span>
                    <span className="block text-[11px] text-[#686174]">{enq.phone || "No phone provided"}</span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-extrabold text-sm text-[#2C2640] block">{enq.destination}</span>
                    {enq.travelStyle && Array.isArray(enq.travelStyle) && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {enq.travelStyle.map((style: string) => (
                          <span key={style} className="px-1.5 py-0.5 rounded bg-[#FFF8ED] border border-[#E9D4B5] text-[9px] font-bold text-[#686174]">
                            {style}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>

                  <td className="py-4 px-4 text-[#686174]">
                    <div className="font-bold text-[#2C2640] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FCB040]" />
                      <span>{enq.travelDates}</span>
                    </div>
                    <div className="text-[11px] flex items-center gap-1 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-[#686174]" />
                      <span>{enq.travellers} Guests</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 font-bold text-[#2C2640]">
                    {enq.budget}
                  </td>

                  <td className="py-4 px-4">
                    <select
                      value={enq.status || "NEW"}
                      disabled={updatingId === (enq._id || idx.toString())}
                      onChange={(e) => handleStatusChange(enq, idx, e.target.value)}
                      className="px-3 py-1.5 rounded-full border-2 border-[#FCB040] bg-[#FFF8ED] text-[#2C2640] font-extrabold text-[11px] uppercase tracking-wider outline-none cursor-pointer focus:bg-white"
                    >
                      {CRM_STATUSES.map((statusOption) => (
                        <option key={statusOption} value={statusOption}>
                          {statusOption}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="py-4 px-4">
                    <button
                      onClick={() => alert(`Opening proposal editor for ${enq.name} (${enq.email})`)}
                      className="px-3 py-1.5 rounded-xl bg-[#2C2640] text-[#FFF8ED] font-extrabold text-[11px] hover:bg-[#FCB040] hover:text-[#2C2640] transition-colors flex items-center gap-1.5"
                    >
                      <Send className="w-3 h-3" />
                      <span>Send Proposal</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
