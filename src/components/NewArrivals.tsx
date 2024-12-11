import React from 'react'
import Title from './Title'
import Image from 'next/image'
import one from "@/assets/arrivals/1.svg"
import two from "@/assets/arrivals/2.svg"
import three from "@/assets/arrivals/3.svg"
import { Icons } from '@/assets/svg/Icons'

export default function NewArrivals() {
    return (
        <div>
            <Title title='NEW ARRIVALS' />
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 px-10">
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
                    <Image src={two} width={1000} height={1000} alt='two' />
                    <div className="flex items-center justify-between mt-5">
                        <div className="space-y-1">
                            <p className='text-[1.2rem] font-medium text-[#191919] leading-none tracking-tight'>Coats & Jackets</p>
                            <p className='text-[#7F7F7F] text-sm leading-none tracking-tight'>Explore Now!</p>
                        </div>
                        <Icons.arrow className='w-[1.2rem]' />
                    </div>
                </div>
                <div className="">
                    <Image src={three} width={1000} height={1000} alt='three' />
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
