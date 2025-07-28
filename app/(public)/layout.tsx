import LandingNavbar from '@/components/navigation/navbar/LandingNavbar'
import { ReactNode } from 'react'

const LandingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='background-light850_dark100 relative'>
            <LandingNavbar />
            
            <div className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 '>
                {children}
            </div>
            
        </main>
    )
}

export default LandingLayout