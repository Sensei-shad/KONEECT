import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "KONEECT",
  description: "Where Shared Bonds Begin",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const HomeLayout = ({ children}: { children: ReactNode}) => {
  return (
    <main className = 'relative bg-white dark:bg-black'>
        <Navbar/>

        <div className='flex'> 
            <Sidebar/>
            
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                    <div className="w-full">{children}</div> 
                </section>
        </div>
    </main>
  )
}

export default HomeLayout
