// components/ThemeToggle.tsx
'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = async () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-slate-100 dark:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <img src='/icons/Light-Mode.svg' width={32}
                    height={32}
                    alt="light"
                    /> : <img src='/icons/Dark-Mode.svg' width={32}
                    height={32}
                    alt="dark"
                    />}
    </button>
  );
};

export default ThemeToggle;
