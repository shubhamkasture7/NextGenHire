import React from "react";

function ProjectsPreview({ resumeInfo }) {
  return (
    <div className="my-4">
      <h2
        className="font-bold text-lg mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Projects
      </h2>
      <hr
        className="mb-4 border-t-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.project?.map((project, index) => (
        <div key={index} className="mb-4">
          {/* Flex container for project title & duration */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold ">{project.title}</h3>
              {project.technologies && (
                <p className="text-sm ">Tech: {project.technologies}</p>
              )}
            </div>
            <h5 className="text-xs italic">
              {project.startDate} - {project.endDate || "Present"}
            </h5>
          </div>
          <p className="text-sm  mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPreview;
