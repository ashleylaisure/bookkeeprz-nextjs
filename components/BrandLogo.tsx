import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const BrandLogo = () => {
    return (
        <div>
            <Link href="/" className='flex items-center gap-1'>
                <Image
                    src="/book-icons/book-simple.png"
                    alt="Bookkeeprz Logo"
                    width={23}
                    height={23}
                />

                <p className='h2-bold font-playwrite text-dark-100 dark:text-light-900 max-sm:hidden'>
                    book<span className='text-primary-500'>keeprz</span>
                </p>
            </Link>
        </div>
    )
}

export default BrandLogo

