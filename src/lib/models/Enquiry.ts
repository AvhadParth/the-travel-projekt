import mongoose, { Schema, Document } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travellers: number;
  budget: string;
  travelStyle: string[];
  message: string;
  status: "NEW" | "CONTACTED" | "IN DISCUSSION" | "QUOTED" | "BOOKED" | "COMPLETED" | "CANCELLED";
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    destination: { type: String, required: true },
    travelDates: { type: String, required: true },
    travellers: { type: Number, default: 2 },
    budget: { type: String, required: true },
    travelStyle: [{ type: String }],
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "IN DISCUSSION", "QUOTED", "BOOKED", "COMPLETED", "CANCELLED"],
      default: "NEW",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
