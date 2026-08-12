"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Compass } from "lucide-react";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromPath = searchParams.get("from") || "/admin/dashboard";

  const [email, setEmail] = useState("admin@thetravelprojekt.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Successful login -> redirect to admin dashboard
      router.push(fromPath);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-[#E9D4B5] shadow-2xl relative z-10 space-y-6">
      <div>
        <h1 className="font-display font-black text-2xl sm:text-3xl text-[#2C2640]">
          Admin Sign In
        </h1>
        <p className="text-xs text-[#686174] mt-1 font-medium">
          Authenticate to access CMS content, enquiries CRM & operational settings.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#686174]">
            Admin Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#686174] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@thetravelprojekt.com"
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-sm font-bold text-[#2C2640] focus:outline-none focus:border-[#2C2640] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#686174]">
            Admin Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-[#686174] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#E9D4B5] bg-[#FFF8ED]/50 text-sm font-bold text-[#2C2640] focus:outline-none focus:border-[#2C2640] transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
        >
          <span>{loading ? "Authenticating Admin..." : "Access Admin Dashboard"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      {/* Demo Credentials Tip */}
      <div className="pt-4 border-t border-[#E9D4B5] text-center">
        <p className="text-[11px] text-[#686174]">
          Default Admin Seed: <strong className="text-[#2C2640]">admin@thetravelprojekt.com</strong> / <strong className="text-[#2C2640]">admin123</strong>
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col justify-center items-center px-4 py-12 font-body relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FCB040]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <div className="mb-8 text-center space-y-2 relative z-10 flex flex-col items-center">
        <Link href="/" className="inline-flex flex-col items-center gap-2 group">
          <img
            src="/logo.jpg"
            alt="The Travel Projekt Logo"
            className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-[#FCB040] group-hover:scale-105 transition-transform"
          />
          <span className="font-display font-black text-2xl tracking-tight text-[#2C2640]">
            THE TRAVEL PROJEKT
          </span>
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C2640] text-[#FFF8ED] font-bold text-[10px] uppercase tracking-widest mt-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FCB040]" />
          <span>Staff & Administrator Portal</span>
        </div>
      </div>

      {/* Suspense Container for CSR Baileout */}
      <Suspense fallback={
        <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-[#E9D4B5] shadow-2xl text-center text-xs font-bold text-[#686174]">
          Loading Admin Portal...
        </div>
      }>
        <AdminLoginForm />
      </Suspense>

      {/* Return to Public Website */}
      <div className="mt-8 relative z-10">
        <Link
          href="/"
          className="text-xs font-bold text-[#686174] hover:text-[#2C2640] flex items-center gap-1.5 transition-colors"
        >
          <Compass className="w-4 h-4 text-[#FCB040]" />
          <span>← Back to Public Website</span>
        </Link>
      </div>
    </div>
  );
}
