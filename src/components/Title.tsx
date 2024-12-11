import React from 'react'
import { Icons } from '@/assets/svg/Icons'


export default function Title({ title }: { title?: string }) {
    return (
        <div className='py-10 '>
            <p className=' text-4xl font-bold leading-normal relative   text-black'> {title}     <Icons.stick className='absolute top-1.5 -z-50 left-48 w-24 h-14' /></p>
        </div>
    )
}
