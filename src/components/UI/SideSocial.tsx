import Link from "next/link"
import { socialLinks } from "../../utils/data"

type Props = {}

const SideSocial = (props: Props) => {
  return (
    <div className="fixed md:block hidden bottom-0 top-0 right-0">
        <div className="flex h-full items-center justify-end flex-col">
        {socialLinks.map((sl)=>(
        <Link href={sl.link} title={sl.title} target={'_blank'} key={sl.id} className='h-16 flex justify-center items-center fill-white md:cursor-pointer hover:fill-slate-400 w-16 '> 
          {sl?.svg}
        </Link>
        ))}
        <div className="h-[37%] bg-secondary  w-1">

        </div>
        </div>
        
    </div>
  )
}

export default SideSocial