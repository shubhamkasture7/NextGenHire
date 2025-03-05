import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-4">
      <h2
        className="font-bold text-lg mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        className="mb-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.experience?.map((exp, index) => (
        <div key={index} className="mb-4">
          {/* Flex container for title & date alignment */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold text-gray-800">{exp.title}</h3>
              <h4 className="text-sm ">
                {exp.companyName}
                {exp.city && `, ${exp.city}`}
                {exp.state && `, ${exp.state}`}
              </h4>
            </div>
            <h5 className="text-xs italic">
              {exp.startDate} - {exp.endDate || "Present"}
            </h5>
          </div>
          <p className="text-sm  mt-1">{exp.workSummery}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
 