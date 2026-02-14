"use client"; 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
            fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 border-b
            ${isScrolled 
                ? 'bg-black/30 backdrop-blur-lg border-white/10 shadow-xl py-3' 
                : 'bg-transparent border-transparent py-5'
            }
        `}>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <Link href="/" className='text-2xl font-bold tracking-tight text-white'>
                        Aryan Verma
                    </Link>
                </div>
                <div>
                    <Link href="https://www.linkedin.com/in/aryan5084102/" target='_blank' className='font-medium text-white hover:text-[#3bdf7f] transition-colors'>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;