import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Theme from './Theme'
import MobileNavigation from './MobileNavigation'
import AuthButton from './AuthButton'
import BrandLogo from '@/components/BrandLogo'

const Navbar = () => {
    return (
        <nav className="flex-between background-light900_dark200 
        fixed z-50 w-full gap-5 p-3 shadow-light-300 dark:shadow-none sm:px-12">
            <BrandLogo />

            <p>Global Search</p>

            <div className="flex-between gap-5">
                <Theme />

                <MobileNavigation />

                <AuthButton />
            </div>
        </nav>
    )
}

export default Navbar


