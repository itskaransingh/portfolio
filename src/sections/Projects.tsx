"use client";

import { Project } from "../components";
import { SectionTitle } from "../components/UI";
import { featuredprojects } from "../lib/data";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="section items-center flex  flex-col">
      <SectionTitle>My Projects</SectionTitle>

      <div className={"flex flex-col overflow-hidden w-full gap-16"}>
        {featuredprojects.map((project) => (
          <Project project={project} key={project.srno} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

export type FP = (typeof featuredprojects)[0];
