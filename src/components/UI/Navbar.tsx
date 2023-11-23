'use client'

import Image from "next/image"
import Link from "next/link"
import { navLinks } from "../../lib/data"
import {motion} from 'framer-motion'
import { navVariants } from "../../lib/motion"
import { cn } from "@/src/lib/utils"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <motion.nav 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={'relative lower-glassmorphism bg-nav  h-16 shadow-md lg:px-[132px] md:px-[80px] px-[23px] py-3 w-full'}>
        <div className="flex justify-between  items-center">
          <Link href={'/'}>
            <Image src='/svg/logo.svg'  alt="my logo" height={28} width={28}/>
          </Link>
          <div className="flex  max-lg:fixed     bottom-3   left-0 right-0 md:text-base max-lg:text-sm  max-lg:max-w-[80%] max-md:max-w-[90%] max-lg:mx-auto   font-semibold ">
            <div className=" flex max-lg:items-center max-lg:rounded-full max-lg:overflow-hidden h-full w-full  max-lg:relative max-lg:lower-glassmorphism max-lg:bg-secondary gap-[48px] max-md:gap-5 max-lg:justify-center max-lg:gap-8 max-lg:py-3 max-lg:px-2">

               {
                 navLinks.map(({text,url},i)=>(
                   <Link  href={url} key={i} className={cn(`lg:cursor-pointer cursor-default`, {
                    'hidden md:block': i===0,
                   })}>
                    <span className="">{text}</span>
                  </Link>
                ))
              }
              </div>
             
          </div>
        </div>
    </motion.nav>
  )
}

export default Navbar