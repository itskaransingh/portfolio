import Image from "next/image"
import { jakarta } from "../app/fonts"
import { navLinks } from "../utils/data"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav  className={jakarta.className + 'relative lower-glassmorphism bg-nav  h-16 shadow-md px-[132px] py-3 w-full'}>
        <div className="flex justify-between  items-center">
          <div>
            <Image src='/logo.webp'  alt="my logo" height={28} width={28}/>
          </div>
          <div className="flex gap-[48px] font-semibold ">
               {
                navLinks.map(({text,url},i)=>(
                  <div key={i}>
                    <a href={url}>{text}</a>
                  </div>
                ))
               }
          </div>
        </div>
    </nav>
  )
}

export default Navbar