import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            about pages
            <nav>
                <Link href='/about/address'>Address</Link>
                
            </nav>
        </div>
    );
};

export default page;