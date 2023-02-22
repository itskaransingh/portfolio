import { preahvihear } from './fonts'
import { Footer, Navbar } from '../components'
import './globals.css'



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
        <main>
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
