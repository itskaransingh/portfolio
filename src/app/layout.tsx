import { preahvihear } from './fonts'
import { Footer, Navbar, SideSocial } from '../components/ui'
import './globals.css'
import SideNav from '../components/ui/SideNav'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={preahvihear.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-primary text-[#ffffff]'>
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
      </body>
    </html>
  )
}
