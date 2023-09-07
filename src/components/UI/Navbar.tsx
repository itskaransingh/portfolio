'use client'

import Image from "next/image"
import Link from "next/link"
import { jakarta } from "../../app/fonts"
import { navLinks } from "../../utils/data"
import {motion} from 'framer-motion'
import { navVariants } from "../../utils/motion"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <motion.nav 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={jakarta.className + 'relative lower-glassmorphism bg-nav  h-16 shadow-md lg:px-[132px] md:px-[80px] px-[23px] py-3 w-full'}>
        <div className="flex justify-between  items-center">
          <Link href={'/'}>
            <Image src='/svg/logo.svg'  alt="my logo" height={28} width={28}/>
          </Link>
          <div className="flex  max-lg:fixed     bottom-3 max-lg:rounded-md  left-0 right-0 md:text-base max-lg:text-sm  max-lg:max-w-[90%] max-lg:mx-auto   font-semibold ">
            <div className=" flex max-lg:items-center h-full w-full  max-lg:relative max-lg:lower-glassmorphism max-lg:bg-secondary gap-[48px] max-md:gap-4 max-lg:justify-center max-lg:gap-8 max-lg:py-3 max-lg:px-2">

               {
                 navLinks.map(({text,url},i)=>(
                   <div key={i} className={`${i===0?'hidden md:block':''}`}>
                    <a href={url}>{text}</a>
                  </div>
                ))
              }
              </div>
             
          </div>
        </div>
    </motion.nav>
  )
}

export default Navbar