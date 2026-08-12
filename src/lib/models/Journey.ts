import mongoose, { Schema, Document } from "mongoose";

export interface IItineraryDay {
  dayNumber: number;
  title: string;
  location: string;
  description: string;
  activities: string[];
  meals: string;
  stay: string;
  image?: string;
}

export interface IJourney extends Document {
  title: string;
  slug: string;
  destinationSlug: string;
  destinationName: string;
  durationDays: number;
  price: number;
  currency: string;
  heroImage: string;
  summary: string;
  itinerary: IItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  travelStyles: string[];
  maxGroupSize: number;
  nextDates: string[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
}

const ItineraryDaySchema = new Schema<IItineraryDay>({
  dayNumber: { type: Number, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  activities: [{ type: String }],
  meals: { type: String, default: "Breakfast included" },
  stay: { type: String, default: "Boutique Hotel / Resort" },
  image: { type: String },
});

const JourneySchema = new Schema<IJourney>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    destinationSlug: { type: String, required: true },
    destinationName: { type: String, required: true },
    durationDays: { type: Number, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    heroImage: { type: String, required: true },
    summary: { type: String, required: true },
    itinerary: [ItineraryDaySchema],
    inclusions: [{ type: String }],
    exclusions: [{ type: String }],
    travelStyles: [{ type: String }],
    maxGroupSize: { type: Number, default: 12 },
    nextDates: [{ type: String }],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Journey || mongoose.model<IJourney>("Journey", JourneySchema);
