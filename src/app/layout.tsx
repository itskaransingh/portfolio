import { preahvihear } from './fonts'
import { Footer, Navbar, SideSocial, SideNav } from '../components/UI'
import './globals.css'
import { AnalyticsWrapper } from '../components/analytics'
import { Metadata } from 'next'
import { siteConfig } from '../utils/siteConfig'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  keywords: ["karan singh", "thekaransingh", "portfolio", "fullstack developer", "itskaransingh"],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#170A28" },
    { media: "(prefers-color-scheme: dark)", color: "#170A28" },
  ],
  icons: {
    icon: siteConfig.logo,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={preahvihear.className}>
      <body className='bg-primary scroll-smooth text-[#ffffff]'>
        <header className='fixed w-screen z-30 '>
          <Navbar />
        </header>
        <aside>
          <SideNav />
        </aside>
        <main>
          {children}

        </main>
        <aside>
          <SideSocial />
        </aside>
        <footer className='flex justify-center items-center h-20'>
          <Footer />
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
