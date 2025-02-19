
import { SquarePlus } from "lucide-react";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Slab } from "react-loading-indicators";

function AddResume({ onResumeCreated }) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!title.trim()) return;
    if (!user) {
      setError("Please sign in to create a resume.");
      return;
    }

    setLoading(true);
    setError("");

    const resumeData = {
      title,
      userName: user.fullName || "Unknown User",
      userEmail: user.primaryEmailAddress?.emailAddress || "unknown@example.com",
      resumeId: uuidv4(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resumeData),
      });

      if (response.ok) {
        console.log("Resume saved!", resumeData);
        alert("Resume saved successfully!");
        setTitle("");
        setOpen(false);
        onResumeCreated(resumeData.resumeId);
      } else {
        setError("Error saving resume. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="bg-white shadow-lg rounded-lg border p-14 py-24 flex flex-col h-[280px] items-center justify-center hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <SquarePlus size={40} />
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Add New Resume</h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <input
              type="text"
              placeholder="Enter resume title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              disabled={loading}
            />
            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setOpen(false)} disabled={loading}>
                Cancel
              </button>
              <button
                className={`px-4 py-2 text-white rounded-md ${title.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
                onClick={handleCreate}
                disabled={!title.trim() || loading}
              >
                {loading ? <Slab color="#ff0572" size="small" text="Loading..." textColor="" /> : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddResume;
