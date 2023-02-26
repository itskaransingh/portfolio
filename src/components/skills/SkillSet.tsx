import Image from "next/image";
import React from "react";
import Skill from "./Skill";

type Props = {};

const SkillSet = (props: Props) => {
  return (
    <>
      {/* Wrapper */}
      <div
        className="flex justify-center
         items-center gap-2.5 max-sm:scale-75" 
      >
        <Skill title="CSS" s={40} src="/skills/cssskill.webp"/>

        {/* Left line */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <Skill title="Mongo DB" s={40} src="/skills/mongoskill.webp"/>
          <Skill title="Tailwind CSS" s={40} src="/skills/tlwskill.webp"/>
          <Skill title="React Js" src="/skills/reactskill.webp"/>
        </div>
        {/* Left line */}

        {/* Center Vertical line */}

        <div className="flex flex-col gap-2.5 justify-center items-center">
          <Skill title="Figma" s={30} src="/skills/figmaskill.webp"/>
          <Skill title="Astro" s={35} src="/skills/astroskill.webp" />
          {/* Logo */}
          <div className="bg-[#251C31] relative overflow-hidden rounded-full bg-logo-bg-radial flex justify-center items-center max-sm:h-28 max-sm:w-28 h-44 w-44">
            <div className="absolute inset-0  animate-pulse bg-logo-bg-radial "></div>
            <Image
              src="/svg/logo.svg"
              className="drop-shadow-logo max-sm:h-16 max-sm:w-16"
              alt="my skills"
              width={76}
              height={90}
            
            />
          </div>
          {/* Logo */}
          <Skill title="Next JS" s={40} src="/skills/nextskill.webp"/>
          <Skill title="Redux" s={40} src="/skills/reduxskill.webp"/>
        </div>
        {/* Center Horizontal line */}

        {/* Right line */}

        <div className="flex flex-col gap-10 justify-center items-center">
          <Skill title="Express JS" s={60} src="/skills/expressskill.webp"/>
          <Skill title="JavaScript" s={32} src="/skills/jsskill.webp"/>
          <Skill title="Node JS" s={45} src="/skills/nodeskill.webp"/>
        </div>
        {/* Right line */}

        <Skill title="TypeScript" s={35} src="/skills/tsskill.webp"/>
      </div>
    </>
  );
};

export default SkillSet;
