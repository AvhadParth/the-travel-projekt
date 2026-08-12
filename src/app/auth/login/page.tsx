"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, User, Lock, Compass } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@thetravelprojekt.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        if (data.user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err: any) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#2C2640] flex flex-col font-body">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-md mx-auto w-full flex items-center justify-center">
        <div className="w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E9D4B5] shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FCB040] text-[#2C2640] flex items-center justify-center mx-auto shadow-md">
              <Compass className="w-7 h-7" />
            </div>
            <h1 className="font-display font-black text-3xl text-[#2C2640]">
              WELCOME BACK
            </h1>
            <p className="text-xs text-[#686174]">
              Log in to view saved journeys and track enquiry status.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-100 text-red-700 text-xs font-bold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-[#2C2640]">
                Email Address
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3.5 top-3.5 text-[#686174]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase text-[#2C2640]">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3.5 top-3.5 text-[#686174]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E9D4B5] bg-[#FFF8ED] text-[#2C2640] outline-none focus:border-[#FCB040] transition-colors text-sm font-medium"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FFF8ED] text-[11px] text-[#686174]">
              💡 <strong>Demo Credentials:</strong><br />
              Admin: <code>admin@thetravelprojekt.com</code> / <code>admin123</code>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#2C2640] text-[#FFF8ED] hover:bg-[#FCB040] hover:text-[#2C2640] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
            >
              {loading ? <span>Authenticating...</span> : <span>Log In →</span>}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
