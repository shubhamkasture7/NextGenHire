import React, { useEffect, useState } from "react";
import AddResume from "../components/AddResume";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import ResumeCardItem from "../components/ResumeCardItem";

function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchResumes = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/resumes/${user.primaryEmailAddress?.emailAddress}`);
        if (!response.ok) throw new Error("Failed to fetch resumes");
    
        const data = await response.json();
        console.log("Fetched Resumes:", data);
        setResumes(data); // ✅ Update state with fetched resumes
      } catch (err) {
        setError("Error fetching resumes. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    

    fetchResumes();
  }, [user]);

  const handleResumeCreated = (_id) => {
    navigate(`/dashboard/resume/${_id}/edit`);
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume for your next job role</p>

      {/* Show loading or error message */}
      {loading && <p>Loading resumes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Resume List Placeholder */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        <AddResume onResumeCreated={handleResumeCreated} />
        {/* Add your resumes here */}
        {resumes.length > 0 && resumes.map((resume, index) => (
          <ResumeCardItem key={index} resume={resume} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;