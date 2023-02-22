
import { Hero,About, Skills, Projects, Contact } from "../sections"


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>

  )
}

export default Home