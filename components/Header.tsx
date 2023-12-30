'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';

const products = [
  {
    name: 'Book a Stay',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'Book a Flight',
    description: 'Speak directly to your customers',
    href: '#',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Contact our Support Team',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: ChatBubbleLeftIcon,
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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

        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='w-6 h-6' aria-hidden='true' />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
