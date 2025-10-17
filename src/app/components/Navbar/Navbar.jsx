import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='p-5 flex gap-5 items-center justify-center'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                 <Link href="/services">Services</Link>
                  <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;