'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const SocialAuthForm = () => {

    const handleSignIn = () => {}
        // Logic for handling sign-in with social auth
        
        return (
        <div className='mt-10 flex flex-wrap gap-2.5'>

            <Button className="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5" onClick={() => handleSignIn()}>
                <Image
                    src="/icons/google.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className='mr-2.5 object-contain'
                />
                <span>Log in with Google</span>
            </Button>
            
        </div>
    )
}

export default SocialAuthForm
