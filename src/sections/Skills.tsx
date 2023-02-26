
import Image from "next/image"
import { SectionTitle } from "../components/ui"
import { SkillSet } from "../components"

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="section   items-center flex  flex-col">
      <SectionTitle>
      My Skills
      </SectionTitle>
  <div className="items-center justify-center flex max-w-[100vw] overflow-x-hidden">

      {/* <Image src='/skills.webp' alt="my skills" width={700} height={700}/> */}
      <SkillSet />
  </div>
    </section>
  )
}

export default Skills