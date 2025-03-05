import React from 'react'

function PersonalDetailPreview({ resumeInfo }) {
    return (
        <div>
            <h1 className='text-xl font-bold text-center'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                {resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
            <h3 className='text-sm text-center font-medium'>{resumeInfo?.jobTitle}</h3>
            <p className='text-center text-xs font-normal'>{resumeInfo?.address}</p>
            <div className='flex justify-between'
                style={{
                    color: resumeInfo?.themeColor
                }}>
                <p className=' text-xs font-normal'>{resumeInfo?.phone}</p>
                <p className=' text-xs font-normal'>{resumeInfo?.email}</p>
            </div>
            <hr className='border-[1.5px] my-2' 
            style={{
                borderColor: resumeInfo?.themeColor
            }}
            />

            <p>{resumeInfo?.city}</p>
            <p>{resumeInfo?.state}</p>
            <p>{resumeInfo?.zip}</p>
            <p>{resumeInfo?.website}</p>
            <p>{resumeInfo?.linkedin}</p>
            <p>{resumeInfo?.github}</p>
        </div>
    )
}

export default PersonalDetailPreview