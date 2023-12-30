'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='bg-[#013B94]'>
      <nav
        className='flex items-center justify-between p-6 mx-auto lg:px8 max-w-7xl'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Booking.com</span>
            <img
              className='w-auto h-12'
              src='https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w'
              alt=''
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
