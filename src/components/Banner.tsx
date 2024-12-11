import React from 'react'
import Image from 'next/image'
import banner from '@/assets/Banner.svg'
import { Button } from './ui/button'
import { Icons } from '@/assets/svg/Icons'

export default function Banner() {
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] banner">
                <div className="relative">
                    <Image src={banner} width={1000} height={1000} alt='banner' />
                    <Icons.star className='absolute top-28 left-28 ' />
                    <Icons.star className='absolute top-10 right-28 ' />
                    <Icons.star className='absolute bottom-44 left-28 ' />
                    <Icons.star className='absolute bottom-20 right-10 ' />
                </div>
                <div className="flex flex-col  justify-center space-y-5 px-10">
                    <p className='font-bold text-8xl leading-none -tracking-wide'>PAYDAY
                        <br />
                        SALES NOW
                    </p>
                    {/* <p className='font-bold text-8xl leading-relaxed'>SALES NOW</p> */}
                    <p className='text-[#231300] font-medium text-3xl text-balance leading-none'>Spend minimal $100 get 30% off
                        voucher code for your next purchase</p>
                    <p className='font-bold text-2xl tracking-wider leading-none'>1 June - 10 June 2021</p>
                    <p className='font-normal text-xl tracking-tighter leading-none'>*Terms & Conditions apply</p>
                    <Button className='text-2xl py-6 w-fit'>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}
