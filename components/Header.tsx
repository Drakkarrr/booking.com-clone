'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import { Popover, Transition } from '@headlessui/react';

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

const callsToAction = [
  { name: 'See Demo Booking', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Support', href: '#', icon: PhoneIcon },
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
            <span className='sr-only'>Booking.com clone</span>
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

        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center text-sm font-semibold leading-6 text-white gap-x-1'>
              Stays
              <ChevronDownIcon
                className='flex-none w-5 h-5 text-white'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel className='absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50'>
                      <div className='flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-gray-200'>
                        <item.icon
                          className='h-6 w-6 text-[#013B94] group-hover:text-blue-600'
                          aria-hidden='true'
                        />
                      </div>

                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-[#013B94]'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-[#013B94]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100'>
                      <item.icon
                        className='h-5 w-5 flex-none text-[#013B94]'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Flights
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Car Rentals
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Attractions
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Flight + Hotel
          </a>
        </Popover.Group>
      </nav>
    </div>
  );
};

export default Header;
