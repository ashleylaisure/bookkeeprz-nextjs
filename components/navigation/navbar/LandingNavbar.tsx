
import Link from 'next/link'
import React from 'react'
import Theme from './Theme'
import MobileNavigation from './MobileNavigation'
import AuthButton from './AuthButton'
import BrandLogo from '@/components/BrandLogo'
import ROUTES from '@/constants/routes'

const LandingNavbar = () => {
    return (
        <nav className="flex-between background-light900_dark200 
        fixed z-50 w-full gap-5 p-3 shadow-light-300 dark:shadow-none sm:px-12">

            <div className="flex-between gap-5">
                <BrandLogo />

                {/* <MobileNavigation /> */}
                {/* need to implement mobile navigation with different links */}
            </div>

            <div className="flex-between gap-5 max-sm:hidden">
                <Link href={ROUTES.FEATURES}>Features</Link>

                <Link href={ROUTES.PRICING}>Pricing</Link>

                <Link href={ROUTES.ABOUT}>About</Link>
            </div>
                
            <AuthButton />

        </nav>
    )
}

export default LandingNavbar
