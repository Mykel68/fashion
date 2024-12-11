import React from 'react'
import Title from './Title'
import Image from 'next/image'
import one from "@/assets/fav/one.svg"
import two from "@/assets/fav/two.svg"
import { Icons } from '@/assets/svg/Icons'

export default function YoungFavourite() {
    return (
        <div>
            <Title title='Young&apos;s Favourite' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 px-10">
                <div className="">
                    <Image src={one} width={1000} height={1000} alt='one' />
                    <div className="flex items-center justify-between mt-5">
                        <div className="space-y-1">
                            <p className='text-[1.2rem] font-medium text-[#191919] leading-none tracking-tight'>Coats & Jackets</p>
                            <p className='text-[#7F7F7F] text-sm leading-none tracking-tight'>Explore Now!</p>
                        </div>
                        <Icons.arrow className='w-[1.2rem]' />
                    </div>
                </div>
                <div className="">
                    <Image src={two} width={1000} height={1000} alt='one' />
                    <div className="flex items-center justify-between mt-5">
                        <div className="space-y-1">
                            <p className='text-[1.2rem] font-medium text-[#191919] leading-none tracking-tight'>Coats & Jackets</p>
                            <p className='text-[#7F7F7F] text-sm leading-none tracking-tight'>Explore Now!</p>
                        </div>
                        <Icons.arrow className='w-[1.2rem]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
