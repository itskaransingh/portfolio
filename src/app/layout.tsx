import { Footer, Navbar, SideSocial, SideNav } from "../components/UI";
import "./globals.css";
import { AnalyticsWrapper } from "../components/analytics";
import { Metadata } from "next";
import { siteConfig } from "../lib/siteConfig";
import { cn } from "../lib/utils";
import { Poppins } from "next/font/google";

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
  keywords: [
    "karan singh",
    "thekaransingh",
    "portfolio",
    "fullstack developer",
    "itskaransingh",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#170A28" },
    { media: "(prefers-color-scheme: dark)", color: "#170A28" },
  ],
  authors: [
    {
      name: "itskaransingh",
      url: "https://github.com/itskaransingh",
    },
  ],
  creator: "itskaransingh",
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
    images: [siteConfig.ogImage],
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
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export const poppins = Poppins({
  weight: ["400", "600", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,
          "bg-primary overflow-x-hidden font-poppins antialiased scroll-smooth text-[#ffffff]"
        )}
      >
        <header className="fixed w-screen z-30 ">
          <Navbar />
        </header>
        <aside>
          <SideNav />
        </aside>
        <main className="">{children}</main>
        <aside>
          <SideSocial />
        </aside>
        <footer className="flex justify-center items-center h-20">
          <Footer />
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
