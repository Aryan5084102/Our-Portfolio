import React from 'react'
import Image from 'next/image'
import logo from '../favicon.ico'
import Link from 'next/link'

const Navbar = () => {
    
  return (
    <div className='flex justify-between sticky top-0 items-center z-20  mx-auto w-[85%] p-4 '>
        <div className='flex items-center gap-5'>
            {/* <Image 
                width={100}
                height={50}
                src={logo}
                alt='Logo'
            /> */}
            <span className='text-2xl font-semibold'>Aryan Verma</span>
        </div>
        <div>
            <Link href="/services" className='cursor-pointer hover:text-[#3bdf7f]'>
                Our Services
            </Link>
        </div>
    </div>
  )
}

export default Navbar