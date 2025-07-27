import ROUTES from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TagCard from '../cards/TagCard'

const fiveStarReads = [
    // Example data structure for recent 5-star reads
    { _id: "1", title: "Book Title 1", author: "Author 1", coverImage: "/path/to/cover1.jpg" },
    { _id: "2", title: "Book Title 2", author: "Author 2", coverImage: "/path/to/cover2.jpg" },
    { _id: "3", title: "Book Title 3", author: "Author 3", coverImage: "/path/to/cover3.jpg" },
    { _id: "4", title: "Book Title 4", author: "Author 4", coverImage: "/path/to/cover4.jpg" },
    { _id: "5", title: "Book Title 5", author: "Author 5", coverImage: "/path/to/cover5.jpg" },
]

const bookStatus = [
    { _id: "1", name: "read", numBooks: 10, icon: 'book-icons/reader.svg'},
    { _id: "2", name: "currentlyReading", numBooks: 5, icon: 'book-icons/reader.svg'},
    { _id: "3", name: "wantToRead", numBooks: 8, icon: 'book-icons/reader.svg'},
    { _id: "4", name: "dnf", numBooks: 2, icon: 'book-icons/reader.svg'}
]

const RightSidebar = () => {
    return (
        <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky
        right-0 top-0 flex h-screen w-[300px] flex-col gap-6 overflow-y-auto border-l p-6 
        shadow-light-300 dark:shadow-none max-md:hidden">
            <div>
                <h3 className="h3-bold text-dark200_light900">Recent 5 Star reads</h3>

                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {fiveStarReads.map(({ _id, title, author, coverImage }) => (
                        <Link
                            key={_id}
                            href={ROUTES.BOOK(_id)}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >

                            <h4 className="body-medium text-dark500_light700">{title}</h4>
                            <p className="text-dark400_light900">{author}</p>

                            <Image
                                src='/icons/chevron-right.svg'
                                alt="Chevron"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />

                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Book Status</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {bookStatus.map(({ _id, name, numBooks, icon }) => (
                        <TagCard 
                            key={_id} 
                            _id={_id} 
                            name={name} 
                            numBooks={numBooks}
                            icon={icon}
                            showCount
                            compact
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RightSidebar
