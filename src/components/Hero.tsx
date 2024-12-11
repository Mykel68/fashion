import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import HeroImage from "@/assets/heroImage.svg"
import { Icons } from '@/assets/svg/Icons'
import { cn } from "@/lib/utils"
export default function Hero() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-10 pt-10 bg-[#F4F6F5] rounded-[3rem]'>
            <div className="space-y-2 ">
                <p className='text-8xl font-bold  leading-none tracking-wider text-black'>
                    LET'S
                    <br />
                    EXPLORE
                    <br />
                    UNIQUE
                    <br />
                    CLOTHES.
                </p>
                <p className='text-3xl leading-normal font-normal tracking-normal text-[#191818]'>Live for Influential and Innovative fashion!</p>
                <Button className='text-2xl py-6'>Shop Now</Button>
            </div>
            <div className="relative">

                <Icons.star className='absolute -top-5 ' />
                <Icons.star className='absolute top-10 right-40' />

                <Image src={HeroImage} width={1000} height={1000} alt='hero' />
                <Icons.star className='absolute bottom-5 left-10' />

                <Icons.star className='absolute bottom-24 right-10' />

            </div>
        </div>
    )
}
