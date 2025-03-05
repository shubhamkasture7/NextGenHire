import React from "react";

function EducationalPreview({ resumeInfo }) {
  return (
    <div className="my-4">
      <h2
        className="font-bold text-lg mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        className="mb-4 border-t-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.education?.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold text-gray-800">
                {edu.universityName}
              </h3>
              <p className="text-sm text-gray-600">
                {edu.degree} in {edu.major}
              </p>
            </div>
            <h5 className="text-xs text-gray-500 italic">
              {edu.startDate} - {edu.endDate}
            </h5>
          </div>
          <p className="text-sm text-gray-700 mt-2">{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
