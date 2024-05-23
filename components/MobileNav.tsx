'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className="w-auto max-w-auto">
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/icons/hamburger.svg"
                    width={36}
                    height={36}
                    alt="hamburger icon"
                    className="cursor-pointer sm:hidden"/>
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-inherit dark:bg-slate-800 dark:bg-opacity-85">
            <Link href="/" className="flex items-center gap-1">
                    <Image
                    src="/icons/logo.svg"
                    width={64}
                    height={64}
                    alt="logo"
                    className='max sm:size-10'/>

                    <p className="text-[22px] font-extrabold text-green-800 dark:text-white">KONEECT</p>
                </Link>

                <div className="flex h-[calc(100vh-72px)]
                flex-col justify-between overflow-y-auto">
                  <SheetClose asChild>
                    <section className='flex h-full flex-col gap-6 pt-16 text-green-800 dark:text-white'>
                    {sidebarLinks.map((link) =>{
                const isActive = pathname === link.route;

                return(
                    <SheetClose asChild key={link.route}>
                    <Link
                        href={link.route}
                        key={link.label}
                        className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-100',{
                            'bg-green-200 bg-opacity-15': isActive,
                        })}>


                        <Image
                            src={link.imgUrl}
                            alt={link.label}
                            width={20}
                            height={20}/>
                        <p className="font-semibold">
                            {link.label}
                        </p>                        

                    </Link>
                    </SheetClose>
                )
            } )}
                    </section>
                    </SheetClose>  
                </div>
                        </SheetContent>
                    </Sheet>

    </section>
  )
}

export default MobileNav