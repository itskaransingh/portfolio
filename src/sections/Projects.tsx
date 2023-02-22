import { poppins } from "../app/fonts";
import { Project } from "../components";
import {featuredprojects} from '../utils/data'

type Props = {};



const Projects = (props: Props) => {
 
  return (
    <section
      id="projects"
      className="section items-center flex  flex-col"
    >
      <h2 className="section-heading pb-16 text-center">My Projects</h2>

      <div className={poppins.className + ' flex flex-col gap-16'}>
        {featuredprojects.map((fp) => (
          <Project fp={fp} key={fp.srno} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

export type  FP = typeof featuredprojects[0]