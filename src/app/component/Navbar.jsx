import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    
  return (
    <div className='flex justify-between sticky top-0 items-center z-20 p-4 '>
        <div className='flex items-center gap-5'>
            <Link href="/" className='text-2xl font-semibold'>Aryan Verma</Link>
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