'use client'

import { poppins } from "../app/fonts";
import { Project} from "../components";
import { SectionTitle } from "../components/UI";
import {featuredprojects} from '../utils/data'

type Props = {};



const Projects = (props: Props) => {
 
  return (
    <section
      id="projects"
      className="section items-center flex  flex-col"
    >
    
    <SectionTitle>
         My Projects
    </SectionTitle>

      <div className={poppins.className + ' flex flex-col overflow-hidden w-full gap-16'}>
        {featuredprojects.map((fp) => (
          <Project fp={fp} key={fp.srno} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

export type  FP = typeof featuredprojects[0]