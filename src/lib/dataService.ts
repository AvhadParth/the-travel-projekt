import { connectToDatabase } from "@/lib/db";
import Destination from "@/lib/models/Destination";
import Journey from "@/lib/models/Journey";
import Experience from "@/lib/models/Experience";
import Article from "@/lib/models/Article";
import Enquiry from "@/lib/models/Enquiry";
import User from "@/lib/models/User";
import { SEED_DESTINATIONS, SEED_JOURNEYS, SEED_EXPERIENCES, SEED_ARTICLES, SEED_ENQUIRIES } from "@/lib/seedData";
import bcrypt from "bcryptjs";

// Safe wrapper functions with MongoDB database attempt and seamless fallback to seed data
export async function getDestinations() {
  try {
    await connectToDatabase();
    const docs = await Destination.find({ published: true }).lean();
    if (docs && docs.length > 0) return JSON.parse(JSON.stringify(docs));
  } catch (err) {
    console.log("Using fallback seed destinations dataset", err);
  }
  return SEED_DESTINATIONS;
}

export async function getDestinationBySlug(slug: string) {
  try {
    await connectToDatabase();
    const doc = await Destination.findOne({ slug, published: true }).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (err) {
    console.log("Using fallback seed destination lookup", err);
  }
  return SEED_DESTINATIONS.find((d) => d.slug === slug) || null;
}

export async function getJourneys() {
  try {
    await connectToDatabase();
    const docs = await Journey.find({ published: true }).lean();
    if (docs && docs.length > 0) return JSON.parse(JSON.stringify(docs));
  } catch (err) {
    console.log("Using fallback seed journeys dataset", err);
  }
  return SEED_JOURNEYS;
}

export async function getJourneyBySlug(slug: string) {
  try {
    await connectToDatabase();
    const doc = await Journey.findOne({ slug, published: true }).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (err) {
    console.log("Using fallback seed journey lookup", err);
  }
  return SEED_JOURNEYS.find((j) => j.slug === slug) || null;
}

export async function getExperiences() {
  try {
    await connectToDatabase();
    const docs = await Experience.find({ published: true }).lean();
    if (docs && docs.length > 0) return JSON.parse(JSON.stringify(docs));
  } catch (err) {
    console.log("Using fallback seed experiences dataset", err);
  }
  return SEED_EXPERIENCES;
}

export async function getArticles() {
  try {
    await connectToDatabase();
    const docs = await Article.find({ published: true }).lean();
    if (docs && docs.length > 0) return JSON.parse(JSON.stringify(docs));
  } catch (err) {
    console.log("Using fallback seed articles dataset", err);
  }
  return SEED_ARTICLES;
}

export async function getArticleBySlug(slug: string) {
  try {
    await connectToDatabase();
    const doc = await Article.findOne({ slug, published: true }).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (err) {
    console.log("Using fallback seed article lookup", err);
  }
  return SEED_ARTICLES.find((a) => a.slug === slug) || null;
}

export async function getEnquiries() {
  try {
    await connectToDatabase();
    const docs = await Enquiry.find().sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) return JSON.parse(JSON.stringify(docs));
  } catch (err) {
    console.log("Using fallback seed enquiries dataset", err);
  }
  return SEED_ENQUIRIES;
}

export async function seedDatabase() {
  try {
    await connectToDatabase();
    
    // Seed Destinations
    await Destination.deleteMany({});
    await Destination.insertMany(SEED_DESTINATIONS);

    // Seed Journeys
    await Journey.deleteMany({});
    await Journey.insertMany(SEED_JOURNEYS);

    // Seed Experiences
    await Experience.deleteMany({});
    await Experience.insertMany(SEED_EXPERIENCES);

    // Seed Articles
    await Article.deleteMany({});
    await Article.insertMany(SEED_ARTICLES);

    // Seed Enquiries
    await Enquiry.deleteMany({});
    await Enquiry.insertMany(SEED_ENQUIRIES);

    // Seed Admin User
    await User.deleteMany({});
    const hashedAdminPassword = await bcrypt.hash("admin123", 10);
    await User.create({
      name: "The Travel Projekt Admin",
      email: "admin@thetravelprojekt.com",
      passwordHash: hashedAdminPassword,
      role: "admin",
    });

    return { success: true, message: "Database successfully seeded!" };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
