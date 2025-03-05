import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
    <Link to={`/dashboard/resume/${resume._id}/edit`} className="text-black">
        <div className="bg-white shadow-lg rounded-lg border p-14 py-24 flex flex-col h-[280px] items-center justify-center hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <Notebook size={64} className="mx-auto" />
        </div>
        <h2 className="text-sm font-semibold mt-4 text-center ">
            {resume.title} 
        </h2>
    </Link>
  )
}

export default ResumeCardItem