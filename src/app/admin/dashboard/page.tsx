import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Compass,
  FileText,
  Mail,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { getDestinations, getJourneys, getExperiences, getArticles, getEnquiries } from "@/lib/dataService";

export default async function AdminDashboardPage() {
  const destinations = await getDestinations();
  const journeys = await getJourneys();
  const experiences = await getExperiences();
  const articles = await getArticles();
  const enquiries = await getEnquiries();

  const newEnquiriesCount = enquiries.filter((e: any) => !e.status || e.status === "NEW").length;

  return (
    <main className="p-6 sm:p-10 max-w-7xl w-full mx-auto space-y-8">
      {/* Admin Top Welcome Banner */}
      <div className="bg-[#2C2640] text-[#FFF8ED] p-8 rounded-3xl border border-[#3F375B] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Protected Admin System</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
            THE TRAVEL PROJEKT CONTROLS
          </h1>
          <p className="text-xs text-[#E9D4B5] mt-1 font-medium">
            Operational Overview • Logged in as <strong className="text-white">admin@thetravelprojekt.com</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/enquiries"
            className="px-5 py-3 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-md flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>View Enquiries ({newEnquiriesCount} New)</span>
          </Link>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#E9D4B5] shadow-sm space-y-1">
          <span className="block text-[10px] font-bold uppercase text-[#686174]">Total Destinations</span>
          <span className="font-display font-black text-3xl text-[#2C2640]">{destinations.length}</span>
          <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Live in CMS
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E9D4B5] shadow-sm space-y-1">
          <span className="block text-[10px] font-bold uppercase text-[#686174]">Active Journeys</span>
          <span className="font-display font-black text-3xl text-[#2C2640]">{journeys.length}</span>
          <span className="text-[10px] text-[#686174] font-medium">Curated Itineraries</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E9D4B5] shadow-sm space-y-1">
          <span className="block text-[10px] font-bold uppercase text-[#686174]">Experiences</span>
          <span className="font-display font-black text-3xl text-[#2C2640]">{experiences.length}</span>
          <span className="text-[10px] text-[#686174] font-medium">Bespoke Activities</span>
        </div>

        <div className="bg-[#FCB040]/20 p-5 rounded-2xl border border-[#FCB040] space-y-1">
          <span className="block text-[10px] font-bold uppercase text-[#2C2640]">New Enquiries</span>
          <span className="font-display font-black text-3xl text-[#2C2640]">{newEnquiriesCount}</span>
          <span className="text-[10px] text-[#2C2640] font-bold">Action Required</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E9D4B5] shadow-sm space-y-1">
          <span className="block text-[10px] font-bold uppercase text-[#686174]">Journal Articles</span>
          <span className="font-display font-black text-3xl text-[#2C2640]">{articles.length}</span>
          <span className="text-[10px] text-[#686174] font-medium">Published Posts</span>
        </div>
      </div>

      {/* Quick Enquiries CRM Section */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D4B5] shadow-lg space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-2xl text-[#2C2640] flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#FCB040]" />
              <span>RECENT TRIP ENQUIRIES</span>
            </h2>
            <p className="text-xs text-[#686174]">
              Customer leads submitted through the public website & trip planner.
            </p>
          </div>

          <Link
            href="/admin/enquiries"
            className="text-xs font-bold text-[#FCB040] hover:underline flex items-center gap-1"
          >
            <span>Full CRM Pipeline →</span>
          </Link>
        </div>

        {/* Enquiry Table Preview */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E9D4B5] text-[#686174] font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Customer Name</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Dates & Guests</th>
                <th className="py-3 px-4">Budget Range</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FFF8ED]">
              {enquiries.slice(0, 5).map((enq: any, idx: number) => (
                <tr key={idx} className="hover:bg-[#FFF8ED]/50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="block font-bold text-[#2C2640] text-sm">{enq.name}</span>
                    <span className="block text-[11px] text-[#686174]">{enq.email}</span>
                  </td>
                  <td className="py-4 px-4 font-bold text-[#2C2640]">
                    {enq.destination}
                  </td>
                  <td className="py-4 px-4 text-[#686174]">
                    {enq.travelDates} ({enq.travellers} Guests)
                  </td>
                  <td className="py-4 px-4 font-bold text-[#2C2640]">
                    {enq.budget}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full bg-[#FCB040] text-[#2C2640] font-extrabold text-[10px] uppercase tracking-wider">
                      {enq.status || "NEW"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick CMS Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admin/destinations"
          className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-md hover:border-[#2C2640] transition-all group space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFF8ED] text-[#2C2640] flex items-center justify-center font-bold group-hover:bg-[#FCB040] transition-colors">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-lg text-[#2C2640]">Destinations CMS</h3>
          <p className="text-xs text-[#686174]">Manage published destinations, hero images, ideal duration, and starting rates.</p>
          <span className="text-xs font-bold text-[#FCB040] inline-flex items-center gap-1">Manage Destinations →</span>
        </Link>

        <Link
          href="/admin/journeys"
          className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-md hover:border-[#2C2640] transition-all group space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFF8ED] text-[#2C2640] flex items-center justify-center font-bold group-hover:bg-[#FCB040] transition-colors">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-lg text-[#2C2640]">Journeys CMS</h3>
          <p className="text-xs text-[#686174]">Create, edit, or publish multi-day curated itineraries and day-by-day plans.</p>
          <span className="text-xs font-bold text-[#FCB040] inline-flex items-center gap-1">Manage Journeys →</span>
        </Link>

        <Link
          href="/admin/journal"
          className="bg-white p-6 rounded-3xl border border-[#E9D4B5] shadow-md hover:border-[#2C2640] transition-all group space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFF8ED] text-[#2C2640] flex items-center justify-center font-bold group-hover:bg-[#FCB040] transition-colors">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-lg text-[#2C2640]">Journal Articles</h3>
          <p className="text-xs text-[#686174]">Publish editorial stories, slow travel guides, and author articles.</p>
          <span className="text-xs font-bold text-[#FCB040] inline-flex items-center gap-1">Manage Journal →</span>
        </Link>
      </div>
    </main>
  );
}
