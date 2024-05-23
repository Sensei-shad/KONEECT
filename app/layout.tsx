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
          socialButtonsVariant: 'blockButton'
        },
        variables: {
          colorText: '#000000',
          colorPrimary: '#38761d',
          colorBackground: '#ffffff',
          colorInputBackground: '#ffffff',
          colorInputText: '#000000',
          colorNeutral: 'black'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-white dark:bg-black transition-opacity-colors duration-300`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
