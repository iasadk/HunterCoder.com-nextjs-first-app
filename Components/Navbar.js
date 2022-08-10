import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex justify-center p-4 bg-red-100 min-w-full">
            <ul className='flex flex-row'>
                <Link href="/">
                    <li className='mx-10 font-semibold text-xl transition-colors delay-100 ease-linear  hover:text-red-700 hover:cursor-pointer'>Home</li>
                </Link>
                <Link href="/About">
                    <li className='mx-10 font-semibold text-xl transition-colors delay-100 ease-linear hover:text-red-700 hover:cursor-pointer'>About</li>

                </Link>
                <Link href="/Blog">
                    <li className='mx-10 font-semibold text-xl transition-colors delay-100 ease-linear hover:text-red-700 hover:cursor-pointer'>Blog</li>

                </Link>
                <Link href="/Contact">
                    <li className='mx-10 font-semibold text-xl transition-colors delay-100 ease-linear hover:text-red-700 hover:cursor-pointer'>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar