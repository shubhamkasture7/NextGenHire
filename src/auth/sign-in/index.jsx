import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function signInPage() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
  <SignIn />
    </div>
      
    </>
  )
}

export default signInPage