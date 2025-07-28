import SocialAuthForm from '@/components/forms/SocialAuthForm'
import Image from 'next/image'
import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='flex-center min-h-screen bg-auth-light 
            dark:bg-auth-dark bg-cover bg-no-repeat bg-center px-4 py-10'>

            <section className='light-border background-light800_dark200 shadow-light100_dark100 
                min-w-full rounded-[10px] border px-4 py-10 shadow-md 
                sm:min-w-[520px] sm:px-8'>
                <div className='flex-between gap-2'>
                    <div className='space-y-2.5'>
                        <p className='h2-bold font-playwrite text-dark-100 dark:text-light-900 max-sm:hidden'>
                            book<span className='text-primary-500'>keeprz</span>
                        </p>
                        <p className='paragraph-regular text-dark500_light400'>Youre all in one Reading Tracker</p>
                    </div>
                    <Image
                        src="images/site-logo.svg"
                        alt="DevFlow Logo"
                        width={50}
                        height={50}
                        className='object-contain'
                    />
                </div>

                {children}
            </section>
            
        </main>
    )
}

export default AuthLayout