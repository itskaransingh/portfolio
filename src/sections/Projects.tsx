import { poppins } from "../app/fonts";
import { Project } from "../components";

type Props = {};

const featuredprojects = [
  {
    srno: 1,
    title: "Picstack - A Social Media Web App",
    img: "/projects/picstack.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum facilis magnam perferendis natus liberoinventore, assumenda quidem reprehenderit, aliquam enim esse quod? Maxime nobis dolorum corporis rem laboriosam amet.",
    lang: ["Javascript", "React", "Sanity", "Tailwind CSS"],
    liveurl: "https://picstack26.netlify.app",
    github: "https://github.com/KaranSingh2666/picstack",
  },
  {
    srno: 2,
    title: "Picstack - A Social Media Web App",
    img: "/projects/picstack.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum facilis magnam perferendis natus liberoinventore, assumenda quidem reprehenderit, aliquam enim esse quod? Maxime nobis dolorum corporis rem laboriosam amet.",
    lang: ["Javascript", "React", "Sanity", "Tailwind CSS"],
    liveurl: "https://picstack26.netlify.app",
    github: "https://github.com/KaranSingh2666/picstack",
  },
  {
    srno: 3,
    title: "Picstack - A Social Media Web App",
    img: "/projects/picstack.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum facilis magnam perferendis natus liberoinventore, assumenda quidem reprehenderit, aliquam enim esse quod? Maxime nobis dolorum corporis rem laboriosam amet.",
    lang: ["Javascript", "React", "Sanity", "Tailwind CSS"],
    liveurl: "https://picstack26.netlify.app",
    github: "https://github.com/KaranSingh2666/picstack",
  },
];


const Projects = (props: Props) => {
 
  return (
    <section
      id="projects"
      className="section items-center flex  flex-col"
    >
      <div className="section-heading pb-16 text-center">My Projects</div>

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