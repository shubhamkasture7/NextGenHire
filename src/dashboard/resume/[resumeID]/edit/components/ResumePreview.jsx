import React, {useContext} from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import { ResumeInfoContext } from '../../../../../context/ResumeInfoContext';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePriview from './preview/ExperiencePriview';
import ProjectsPreview from './preview/ProjectPriview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg p-14 h-full border-t-[20px] '
    style={{
      borderColor: resumeInfo?.themeColor
      }}
    > 
        {/* personal details  */}
          <PersonalDetailPreview resumeInfo={resumeInfo}/>
        {/* summary */}
          <SummeryPreview resumeInfo={resumeInfo}/>
        {/* experience details  */}
        <ExperiencePriview resumeInfo={resumeInfo}/>
      
        {/* education details  */}
      <EducationalPreview resumeInfo={resumeInfo}/>
        {/* project details  */}
        <ProjectsPreview resumeInfo={resumeInfo}/>
      {/* skills */}
      <SkillsPreview resumeInfo={resumeInfo}/>
        
    </div>
  )
}

export default ResumePreview