import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true }
});

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
