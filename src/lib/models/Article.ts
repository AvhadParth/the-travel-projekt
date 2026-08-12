import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  slug: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  coverImage: string;
  excerpt: string;
  content: string;
  relatedDestinationSlugs: string[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    readTime: { type: String, required: true },
    publishedAt: { type: String, required: true },
    coverImage: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    relatedDestinationSlugs: [{ type: String }],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Article || mongoose.model<IArticle>("Article", ArticleSchema);
