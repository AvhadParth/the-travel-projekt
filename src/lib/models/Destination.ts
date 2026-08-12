import mongoose, { Schema, Document } from "mongoose";

export interface IDestination extends Document {
  name: string;
  slug: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  bestTime: string;
  idealDuration: string;
  startingPrice: number;
  budgetRange: string;
  travelStyles: string[];
  highlights: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  featured: boolean;
  published: boolean;
  createdAt: Date;
}

const DestinationSchema = new Schema<IDestination>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    heroImage: { type: String, required: true },
    gallery: [{ type: String }],
    bestTime: { type: String, required: true },
    idealDuration: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    budgetRange: { type: String, required: true },
    travelStyles: [{ type: String }],
    highlights: [{ type: String }],
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Destination || mongoose.model<IDestination>("Destination", DestinationSchema);
