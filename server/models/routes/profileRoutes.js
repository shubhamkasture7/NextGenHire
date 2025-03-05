import express from "express";
import Profile from "../Profile.js"; // Ensure file extension is included

const router = express.Router();

// Save Profile Data
router.post("/profile", async (req, res) => {
    try {
        const { userId, email, linkedin } = req.body;

        if (!userId || !email || !linkedin) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Check if user profile exists
        let profile = await Profile.findOne({ userId });

        if (profile) {
            // Update existing profile
            profile.email = email;
            profile.linkedin = linkedin;
            await profile.save();
        } else {
            // Create new profile
            profile = new Profile({ userId, email, linkedin });
            await profile.save();
        }

        res.json({ message: "Profile details saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error. Please try again." });
    }
});

export default router; // ✅ Fix: Export default
