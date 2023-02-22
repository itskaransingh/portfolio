import Image from "next/image"
import { jakarta } from "../app/fonts"

type Props = {}

const Navbar = (props: Props) => {

const navlinks = [
  {
    title:'Who am i?',
    href:'#about',
  },
  {
    title:'Skills',
    href:'#skills',
  },
  {
    title:'Projects',
    href:'#projects',
  },
  {
    title:'Contact',
    href:'#contact',
  },
  
]

  return (
    <nav  className={jakarta.className + 'relative lower-glassmorphism bg-nav  h-16 shadow-md px-[132px] py-3 w-full'}>
        <div className="flex justify-between  items-center">
          <div>
            <Image src='/svg/logo.webp'  alt="my logo" height={28} width={28}/>
          </div>
          <div className="flex gap-[48px] font-semibold ">
               {
                navlinks.map(({title,href},i)=>(
                  <div key={i}>
                    <a href={href}>{title}</a>
                  </div>
                ))
               }
          </div>
        </div>
    </nav>
  )
}

export default Navbar