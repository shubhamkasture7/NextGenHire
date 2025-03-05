import React, { useContext, useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext';
import Button from '../../../../../../components/reuseble/Button';
import axios from 'axios';

function PersonalDetails({ enableNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const { user } = useUser(); // Get logged-in user
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeInfo({ ...resumeInfo, [name]: value });
        enableNext(false);
    };

    // Handle form submission
    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
      
        try {
          // API call to save personal details (Commenting out backend connection)
          // const response = await axios.post('http://localhost:5000/api/personal-details', resumeInfo);
          // if (response.status === 201) {
          //   enableNext(true); // Enable the next step if save is successful
          // }
          console.log("Mock save:", resumeInfo);
          enableNext(true);
        } catch (error) {
          setError('An error occurred while saving the resume data.');
        } finally {
          setLoading(false);
        }
    };

    return (
        <div className="border-t-purple-500 border-t-4 p-5 shadow-lg rounded-lg bg-slate-200">
            <h2 className="font-bold text-lg">Personal Details</h2>
            <p>Let's start with basic information.</p>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={onSave}>
                <div className="grid grid-cols-2 gap-3 mt-4">
                    {/* First Name (Required) */}
                    <div>
                        <label className="block text-sm text-gray-700" htmlFor="firstName">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={resumeInfo.firstName || ''}
                            onChange={handleChange}
                            className="mt-1 h-10 p-4 w-full rounded-md border-gray-500 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm text-gray-700" htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={resumeInfo.lastName || ''}
                            onChange={handleChange}
                            className="mt-1 h-10 p-4 w-full rounded-md border-gray-500 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Job Title */}
                    <div className="col-span-2">
                        <label className="block text-sm text-gray-700" htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={resumeInfo.jobTitle || ''}
                            onChange={handleChange}
                            className="mt-1 h-10 p-4 w-full rounded-md border-gray-500 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm text-gray-700" htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={resumeInfo.phone || ''}
                            onChange={handleChange}
                            className="mt-1 h-10 p-4 w-full rounded-md border-gray-500 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Email (Required) */}
                    <div>
                        <label className="block text-sm text-gray-700" htmlFor="email">Email *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={resumeInfo.email || ''}
                            onChange={handleChange}
                            className="mt-1 h-10 p-4 w-full rounded-md border-gray-500 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Address */}
                    <div className="col-span-2">
                        <label className="block text-sm text-gray-700" htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={resumeInfo.address || ''}
                            onChange={handleChange}
                            className="mt-1 h-10 p-4 w-full rounded-md border-gray-500 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Save Button */}
                    <div className="mt-2 col-span-2 flex justify-end">
                        <Button type="submit" className="w-20 mt-4 text-lg" disabled={loading}>
                            {loading ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PersonalDetails;
