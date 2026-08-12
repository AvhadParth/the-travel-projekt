import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  title: string;
  location: string;
  category: "Adventure" | "Luxury" | "Backpacking" | "Couples" | "Family" | "Culture" | "Nature" | "Food" | "Photography" | "Wellness";
  description: string;
  duration: string;
  startingPrice: number;
  image: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    category: {
      type: String,
      enum: ["Adventure", "Luxury", "Backpacking", "Couples", "Family", "Culture", "Nature", "Food", "Photography", "Wellness"],
      required: true,
    },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);
