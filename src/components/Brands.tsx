import React from 'react'
import amazon from '@/assets/brand/amazon.svg'
import HM from '@/assets/brand/H&M.svg'
import lacoste from '@/assets/brand/lacoste.svg'
import levi from '@/assets/brand/levi.svg'
import OBEY from '@/assets/brand/OBEY.svg'
import shopify from '@/assets/brand/shopify.svg'
import Image from 'next/image'

export default function Brands() {
    return (
        <div className='bg-[#EBD96B] h-[6.5rem] w-full flex items-center justify-around '>
            <Image src={HM} width={100} height={100} alt='H&M' className='mix-blend-multiply h-16' />
            <Image src={OBEY} width={100} height={100} alt='OBEY' className='mix-blend-multiply h-16' />
            <Image src={shopify} width={100} height={100} alt='shopify' className='mix-blend-multiply h-16' />
            <Image src={lacoste} width={100} height={100} alt='lacoste' className='mix-blend-multiply h-16' />
            <Image src={levi} width={100} height={100} alt='levi' className='mix-blend-multiply h-16' />
            <Image src={amazon} width={100} height={100} alt='amazon' className='mix-blend-multiply h-16' />
        </div>
    )
}
