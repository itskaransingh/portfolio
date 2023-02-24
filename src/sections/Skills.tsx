
import Image from "next/image"
import { SectionTitle } from "../components/UI"

type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="section  items-center flex  flex-col">
      <SectionTitle>
      My Skills
      </SectionTitle>
  <div className="items-center justify-center flex">
    <div>
      <Image src='/skills.webp' alt="my skills" width={700} height={700}/>
    </div>
  </div>
    </section>
  )
}

export default Skills