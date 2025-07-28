import { Button } from '@/components/ui/button'
import { SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <section className="flex-center text-balance flex-col gap-8 px-4">

                <h1 className="text-center text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4 font-playwrite">
                    Bookkeprz Landing Page
                </h1>

                <p className="text-lg lg:text-3xl max-w-screen-xl">
                    Your all-in-one reading tracking app.
                </p>
                <SignUpButton>
                    <Button className="text-lg p-6 rounded-xl flex gap-2">
                        Get started for free
                        <Image
                            src="/icons/arrow-right.svg"
                            alt="Arrow Right Icon"
                            width={20}
                            height={20}
                        />
                    </Button>
                </SignUpButton>
            </section>
        </>
    )
}

export default HomePage

