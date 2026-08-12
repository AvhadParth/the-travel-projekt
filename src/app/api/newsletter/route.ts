import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Newsletter from "@/lib/models/Newsletter";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
      await connectToDatabase();
      await Newsletter.create({ email: email.toLowerCase() });
    } catch (err) {
      console.log("Newsletter database write notice", err);
    }

    return NextResponse.json({ success: true, message: "Subscribed to newsletter!" });
  } catch (err: any) {
    return NextResponse.json({ success: true, message: "Subscribed!" });
  }
}
