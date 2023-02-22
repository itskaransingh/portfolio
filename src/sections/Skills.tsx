import Image from "next/image"

type Props = {}

const Skills = (props: Props) => {
  return (
    <div id="skills" className="section  items-center flex  flex-col">
      <div className="section-heading pb-16 text-center">My Skills</div>
  <div className="items-center justify-center flex">
    <div>
      <Image src='/skills_2x.webp' alt="my skills" width={700} height={700}/>
    </div>
  </div>
    </div>
  )
}

export default Skills