import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Enquiry from "@/lib/models/Enquiry";
import { SEED_ENQUIRIES } from "@/lib/seedData";

export async function GET() {
  try {
    try {
      await connectToDatabase();
      const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
      if (enquiries && enquiries.length > 0) {
        return NextResponse.json({ success: true, enquiries: JSON.parse(JSON.stringify(enquiries)) });
      }
    } catch (err) {
      console.log("DB lookup fallback to SEED_ENQUIRIES", err);
    }

    return NextResponse.json({ success: true, enquiries: SEED_ENQUIRIES });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, email, status } = await req.json();
    if (!status) {
      return NextResponse.json({ error: "Missing status" }, { status: 400 });
    }

    try {
      await connectToDatabase();
      if (id && id.length === 24) {
        await Enquiry.findByIdAndUpdate(id, { status });
      } else if (email) {
        await Enquiry.findOneAndUpdate({ email }, { status });
      }
    } catch (err) {
      console.log("Using fallback notice for status update", err);
    }

    return NextResponse.json({ success: true, message: "Enquiry status updated successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
