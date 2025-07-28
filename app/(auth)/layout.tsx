import BrandLogo from '@/components/BrandLogo'
import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='flex-center min-h-screen bg-auth-light 
            dark:bg-auth-dark bg-cover bg-no-repeat bg-center px-4 py-10'>

            <section className='light-border background-light800_dark200 shadow-light100_dark100 
                min-w-full rounded-[10px] border px-4 py-10 shadow-md 
                sm:min-w-[520px] sm:px-8'>

                <BrandLogo />

                {children}
            </section>
            
        </main>
    )
}

export default AuthLayout