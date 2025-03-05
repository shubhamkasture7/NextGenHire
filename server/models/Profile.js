import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    linkedin: { type: String, required: true }
});

// ✅ Use `export default` instead of `module.exports`
const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
