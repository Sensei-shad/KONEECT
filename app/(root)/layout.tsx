import StreamVideoProvider from '@/providers/StreamClientProvider';
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "KONEECT",
  description: "Where Shared Bonds Begin",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const Rootlayout = ({ children}: Readonly<{ children: ReactNode}>) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    
    </main>
  )
}

export default Rootlayout