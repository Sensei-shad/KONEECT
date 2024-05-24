// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle'; // Adjust the import path as necessary

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-transparent dark:bg-transparent px-6 py-4 lg:px-10'>
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={96}
          height={96}
          alt="logo"
          className='max-sm:size-10'
        />
        <p className="text-[26px] font-extrabold text-green-900 dark:text-white max-sm:hidden">KONEECT</p>
      </Link>

      <div className="flex items-center gap-5">
        <ThemeToggle /> {/* Add the ThemeToggle component here */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
