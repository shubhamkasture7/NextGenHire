import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const ResumeSchema = new mongoose.Schema({
  resumeId: { type: String, default: uuidv4, unique: true },
  title: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
});

const Resume = mongoose.model("resumeData", ResumeSchema);
export default Resume;
