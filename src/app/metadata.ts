import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferhat Bozkurt - Portfolio",
  description: "Ferhat Bozkurt - Bilgisayar Mühendisi ve Yazılım Geliştirici Portfolio Sitesi",
  metadataBase: new URL('https://ferhatbozkurtbm.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr': '/tr',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'Ferhat Bozkurt - Portfolio',
    description: 'Ferhat Bozkurt - Bilgisayar Mühendisi ve Yazılım Geliştirici Portfolio Sitesi',
    url: 'https://ferhatbozkurtbm.com',
    siteName: 'Ferhat Bozkurt Portfolio',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferhat Bozkurt - Portfolio',
    description: 'Ferhat Bozkurt - Bilgisayar Mühendisi ve Yazılım Geliştirici Portfolio Sitesi',
  },
}; 