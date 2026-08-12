import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Admin Portal | The Travel Projekt",
  description: "Internal management portal for The Travel Projekt staff",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] font-body flex">
      {/* Separate Admin Navigation Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
