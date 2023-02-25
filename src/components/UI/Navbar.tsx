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
    className={jakarta.className + 'relative lower-glassmorphism bg-nav  h-16 shadow-md md:px-[132px] px-[23px] py-3 w-full'}>
        <div className="flex justify-between  items-center">
          <div>
            <Image src='/svg/logo.svg'  alt="my logo" height={28} width={28}/>
          </div>
          <div className="flex  max-md:hidden     bottom-3 max-md:rounded-md  left-0 right-0 md:text-base max-md:text-sm  max-md:max-w-[90%] max-md:mx-auto   font-semibold ">
            <div className=" flex max-md:items-center h-full w-full  max-md:relative max-md:lower-glassmorphism max-md:bg-secondary gap-[48px] max-md:gap-4 max-md:justify-center max-md:py-3 max-md:px-2">

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