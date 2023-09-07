import Image from 'next/image'
import React from 'react'

type Props = {
    src?:string,
    title?:string,
    s?:number,
}

const Skill = ({title='JavaSript',src="/skills/js.svg",s=30}: Props) => {
  return (
    <div title={title} className="bg-[#251C31] rounded-full flex justify-center items-center h-16 w-16">
    <Image
      src={src}
      className="pointer-events-none  select-none"

      alt="my skills"
      width={s}
      height={s}
    />
  </div>
  )
}

export default Skill