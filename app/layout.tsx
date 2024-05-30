// app/layout.tsx
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar'; // Adjust the import path as necessary
import Sidebar from '@/components/Sidebar'; // Adjust the import path as necessary
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KONEECT",
  description: "Video Calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoPlacement: 'inside',
          logoLinkUrl: '/icons/logo.svg',
          socialButtonsVariant: 'auto',
          socialButtonsPlacement: 'bottom',
        },
        variables: {
          colorText: '#ffffff',
          colorPrimary: '#2d581d',
          colorBackground: '#92af68',
          colorInputBackground: '#f3f6f4',
          colorInputText: 'black',
          colorNeutral:'black',
          colorDanger:'',
          colorTextOnPrimaryBackground:'white',
          colorTextSecondary:'white',
          colorWarning:'white'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-white dark:bg-black transition-opacity-colors duration-300 text-black dark:text-white`}>
        <img className="fixed top-1 left-7 aria-hidden:true hidden" alt="intro" src="/icons/intro.svg" height={260} width={260}/>
          {children}
          <div className="animate-in duration-1000 transition-opacity-colors fade-in-10">
          <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
