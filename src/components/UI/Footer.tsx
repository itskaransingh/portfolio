import Link from "next/link"
import { socialLinks } from "../../lib/data"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex max-md:pb-[64px] justify-center items-center gap-3">
      

      {socialLinks.map((sl)=>(
        <Link href={sl.link} title={sl.title} target={'_blank'} key={sl.id} className='h-16 flex justify-center items-center fill-white lg:cursor-pointer cursor-default hover:fill-slate-400 w-16 '> 
          {sl?.svg}
        </Link>
        ))}
     
    </div>
  )
}

export default Footer