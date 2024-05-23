// components/Sidebar.tsx
'use client'

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname(); 
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-transparent dark:bg-black p-6 pt-28 text-lime-900 text-opacity-90 font-sans dark:text-white max-sm:hidden lg:w-[320px]">
      <div className='flex flex-1 flex-col mt-20 gap-20'>
        {sidebarLinks.map((link) =>{
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

          return(
            <Link
              href={link.route}
              key={link.label}
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                'bg-green-200 dark:bg-slate-700 bg-opacity-80 dark:bg-opacity-80': isActive,
              })}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>                        
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
