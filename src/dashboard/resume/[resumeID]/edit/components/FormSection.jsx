import React, { useState } from 'react'
import PersonalDetails from './forms/PersonalDetails'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
// import Button from '../../../../../components/reuseble/Button'
// import ProfileForm from '../../../../../components/ProfileForm';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

  const handleEnableNext = (isValid) => {
    setEnableNext(isValid);
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <button variant="outline" size="sm" className='flex gap-2 bg-white border-gray-950 p-2 rounded-md'>
          <LayoutGrid /> Theam
        </button>

        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <button
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
              className="bg-slate-100 border-l-2 border-l-black rounded-lg w-9 pl-2 border-red-500 hover:bg-green-500"
              size="sm"
            >
              <ArrowLeft />
            </button>
          )}
          <button
            disabled={!enableNext}
            className={`flex gap-2 px-4 py-2 rounded-lg transition text-white ${enableNext ? 'bg-purple-500 hover:bg-purple-800' : 'bg-gray-400 cursor-not-allowed'
              }`}
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </button>

        </div>
      </div>

      {/* personal details  */}
      {activeFormIndex === 1 && (
        <PersonalDetails enableNext={handleEnableNext} />

      )}

      {/* <ProfileForm /> it is not the part of project it is created for just testing purposes */}
      {/* summary */}
      {/* experience details */}
      {/* education details */}
      {/* project details */}
      {/* skills */}
    </div>
  )
}

export default FormSection
