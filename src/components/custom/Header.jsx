import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../../dashboard';

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='flex justify-between bg-gray-200 text-white p-3 px-5'>
            <img src='/logo.svg' alt="LOGO" />

            {isSignedIn ?
                <div className='flex items-center gap-2'>
                    <Link to={'./dashboard'}>
                    <button style={{ backgroundColor: '#9f5bff' }} className=' dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' >
                        Dashboard 
                    </button>
                    
                    </Link>
                    <spam className='justify-center'><UserButton /> </spam>
                </div> :
                <Link to={'/auth/sign-in'}>
                    
                    <button style={{ backgroundColor: '#9f5bff' }} className=' dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                        Get Started
                    </button>
                </Link>
            }
        </div>
    )
}

export default Header