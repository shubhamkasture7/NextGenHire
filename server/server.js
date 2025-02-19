import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Resume from "./models/resume.js"; // Import Schema

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/ResumeData")
  .then(() => console.log("Connected to MongoDB (ResumeData) ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));

app.post("/api/resumes", async (req, res) => {
  try {
    const { title, userName, userEmail } = req.body;
    if (!title || !userName || !userEmail) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newResume = new Resume({ title, userName, userEmail });
    await newResume.save();

    res.status(201).json({ message: "Resume saved successfully", resumeId: newResume.resumeId });
  } catch (error) {
    console.error("Error saving resume:", error);
    res.status(500).json({ error: "Failed to save resume" });
  }
});

app.get("/api/resumes/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const resumes = await Resume.find({ userEmail }); // Fetch resumes by email
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
