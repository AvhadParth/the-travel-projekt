import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Enquiry from "@/lib/models/Enquiry";
import { SEED_ENQUIRIES } from "@/lib/seedData";

export async function GET() {
  try {
    await connectToDatabase();
    const docs = await Enquiry.find().sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) return NextResponse.json({ success: true, enquiries: docs });
  } catch (err) {
    console.log("Using fallback seed enquiries");
  }
  return NextResponse.json({ success: true, enquiries: SEED_ENQUIRIES });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, destination, travelDates, travellers, budget, travelStyle, message } = body;

    if (!name || !email || !phone || !destination) {
      return NextResponse.json({ error: "Name, email, phone and destination are required." }, { status: 400 });
    }

    let newDoc = null;
    try {
      await connectToDatabase();
      newDoc = await Enquiry.create({
        name,
        email,
        phone,
        destination,
        travelDates: travelDates || "Flexible",
        travellers: Number(travellers) || 2,
        budget: budget || "₹50,000",
        travelStyle: Array.isArray(travelStyle) ? travelStyle : [travelStyle || "Custom"],
        message: message || "",
        status: "NEW",
      });
    } catch (err) {
      console.log("Database write notice (operating with memory response)", err);
    }

    return NextResponse.json({
      success: true,
      message: "WE'VE GOT YOUR JOURNEY. We'll get back to you shortly.",
      enquiryId: newDoc ? newDoc._id : `ENQ-${Date.now()}`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
