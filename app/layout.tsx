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
          logoPlacement: 'none',
          socialButtonsVariant: 'auto',
          socialButtonsPlacement: 'bottom'
        },
        variables: {
          colorText: '#ffffff',
          colorPrimary: '#38761d',
          colorBackground: '#91c12e',
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
        <body className={`${inter.className} bg-[#91c12e] dark:bg-black transition-opacity-colors duration-300`}>
          {children}
          <div className="flex fixed top-1">
            <img className="animate-in duration-1000 transition-opacity-colors fade-in-5" src="/icons/intro.svg" width={200} height={200} alt="intro"/>
          </div>
          <div className="animate-in duration-1000 transition-opacity-colors fade-in-10">
          <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
