import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const ProfileForm = () => {
    const { user } = useUser(); // Get the logged-in user's info
    const [formData, setFormData] = useState({
        email: "",
        linkedin: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setMessage("Please log in to save details.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/profiles/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id, // Clerk's authenticated user ID
                    email: formData.email,
                    linkedin: formData.linkedin
                })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Profile details saved successfully!");
            } else {
                setMessage(data.error || "Failed to save details.");
            }
        } catch (error) {
            setMessage("Error saving details. Please try again.");
        }
    };

    return (
        <div className="p-5 border rounded-lg shadow-md max-w-md mx-auto bg-white">
            <h2 className="text-lg font-bold">Profile Details</h2>
            {message && <p className="text-red-500">{message}</p>}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* LinkedIn Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                    <input
                        type="url"
                        name="linkedin"
                        required
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;
