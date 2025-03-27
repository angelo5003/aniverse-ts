import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../server/database/mongoDb"; // Replace with the actual path to your MongoDB connection file
import mongoose from "mongoose";

// Example schema for testing (not saved permanently)
const testSchema = new mongoose.Schema({
  message: String,
});
const TestModel = mongoose.models.Test || mongoose.model("Test", testSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Connect to the database
    await connectDB();

    // Check the request method
    if (req.method === "POST") {
      // Insert a sample document
      await TestModel.create({ message: "Hello from MongoDB!" });
      return res
        .status(201)
        .json({ message: "Document inserted successfully!" });
    }

    if (req.method === "GET") {
      // Retrieve all documents
      const documents = await TestModel.find({});
      return res.status(200).json(documents);
    }

    // Method not allowed
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("❌ Database test failed:", error);
    res.status(500).json({ error: "Database connection test failed!" });
  }
}
