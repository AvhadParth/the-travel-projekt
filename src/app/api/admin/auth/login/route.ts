import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Admin from "@/lib/models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || process.env.AUTH_SECRET || "ttp_admin_secret_key_2026_super_secure";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Admin email and password are required" }, { status: 400 });
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. Try DB lookup first
    try {
      await connectToDatabase();
      const admin = await Admin.findOne({ email: cleanEmail });
      if (admin) {
        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if (isMatch) {
          const token = jwt.sign(
            { id: admin._id, email: admin.email, role: "admin", name: admin.name },
            JWT_SECRET,
            { expiresIn: "7d" }
          );
          const res = NextResponse.json({
            success: true,
            admin: { email: admin.email, role: "admin", name: admin.name },
          });
          res.cookies.set("ttp_admin_session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
          });
          return res;
        }
      }
    } catch (err) {
      console.log("DB lookup skipped, checking fallback admin credentials", err);
    }

    // 2. Controlled fallback for default admin credentials
    if (cleanEmail === "admin@thetravelprojekt.com" && password === "admin123") {
      const token = jwt.sign(
        { email: cleanEmail, role: "admin", name: "The Travel Projekt Admin" },
        JWT_SECRET,
        { expiresIn: "7d" }
      );
      const res = NextResponse.json({
        success: true,
        admin: { email: cleanEmail, role: "admin", name: "The Travel Projekt Admin" },
      });
      res.cookies.set("ttp_admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return res;
    }

    return NextResponse.json({ error: "Invalid admin credentials" }, { status: 401 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Authentication failed" }, { status: 500 });
  }
}
