import React from "react";

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-4">
      <h2
        className="font-bold text-lg mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        className="mb-4 border-t-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className="grid grid-cols-2 gap-4">
        {resumeInfo?.skills?.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium ">{skill.name}</p>
              <p className="text-xs ">{skill.rating}%</p>
            </div>
            {/* progress bar for show to there skills */}
            <div className="w-4/5 bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="h-2 rounded-md"
                style={{
                  width: `${skill.rating}%`,
                  backgroundColor: resumeInfo?.themeColor || "#4A90E2",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
