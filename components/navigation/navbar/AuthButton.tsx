import React from 'react'

import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import ROUTES from '@/constants/routes'

const AuthButton = () => {
    return (
            <div className="flex justify-end items-center p-4 gap-4 h-16">
                <SignedOut>
                    <SignInButton />
                    <SignUpButton>
                        <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                        Sign Up
                        </button>
                    </SignUpButton>
                </SignedOut>

                <SignedIn>
                    <Link href={ROUTES.DASHBOARD}>
                    <Image
                        src="/icons/user.svg"
                        alt="User"
                        width={24}
                        height={24}
                        className='invert-colors'
                    />
                    </Link>
                    <UserButton />
                </SignedIn>
            </div>
    )
}

export default AuthButton
