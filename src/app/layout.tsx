'use client';

import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import { useState } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  return (
    <html lang={i18n.language} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        {/* Animated Background */}
        <div className="animated-bg">
          {/* Single Wave */}
          <div className="wave"></div>

          {/* Particles */}
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>

          {/* Shooting Stars */}
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
        </div>

        <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/50 z-50 border-b border-gray-700">
          <div className="max-w-[1920px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Ferhat Bozkurt
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.home')}</Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.about')}</Link>
                <Link href="/skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.skills')}</Link>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.projects')}</Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.contact')}</Link>
                <button onClick={toggleLanguage} className="ml-4 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all">
                  {i18n.language === 'tr' ? 'EN' : 'TR'}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
              <Link href="/" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.home')}</Link>
              <Link href="/about" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.about')}</Link>
              <Link href="/skills" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.skills')}</Link>
              <Link href="/projects" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.projects')}</Link>
              <Link href="/contact" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">{t('navbar.contact')}</Link>
              <button onClick={toggleLanguage} className="mt-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all w-full">
                {i18n.language === 'tr' ? 'EN' : 'TR'}
              </button>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
