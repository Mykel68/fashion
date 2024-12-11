import React from 'react'
import { Icons } from '@/assets/svg/Icons'
import navBarLink from '@/constants/navLink'
import { Button } from './ui/button'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between px-6 py-4'>
            <div className="flex gap-2 items-center justify-center">
                <Icons.logo />
                <p className='text-4xl font-bold leading-normal tracking-wider text-black'>FASHION</p>
            </div>
            <div className='flex space-x-10 items-center '>
                {
                    navBarLink.map(({ name, href }, index) => {
                        return (

                            <a href={href} key={index} className='text-xl tracking-wide leading-normal font-medium text-black hover:text-primary'>{name}</a>

                        )
                    })
                }
                <Button className='text-2xl py-5'>SIGN UP</Button>
            </div>
        </div>
    )
}
