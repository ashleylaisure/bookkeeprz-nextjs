import ROUTES from '@/constants/routes';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Badge } from '../ui/badge';

interface Props {
    _id: string;
    name: string;
    numBooks: number;
    icon?: string; // Optional icon prop for future use
    showCount?: boolean;
    compact?: boolean;
}

const TagCard = ({_id, name, numBooks, showCount, compact, icon}: Props) => {
    return (
        <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
            <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                <div className="flex-center space-x-2">
                    <Image
                        src={icon || '/icons/tag.svg'}
                        alt={name}
                        width={15}
                        height={15}
                        className=""
                    />
                    <span>{name}</span>
                </div>
            </Badge>

            {showCount && <p className="small-medium text-dark500_light700">{numBooks} books</p>}
        </Link>
    )
}

export default TagCard

