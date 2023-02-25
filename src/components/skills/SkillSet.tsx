import Image from "next/image";
import React from "react";
import Skill from "./Skill";

type Props = {};

const SkillSet = (props: Props) => {
  return (
    <div>
      {/* Wrapper */}
      <div
        className="flex justify-center
         items-center gap-2.5"
      >
        <Skill />

        {/* Left line */}
        <div className="flex flex-col gap-9 justify-center items-center">
          <Skill title="Mongo DB" s={40} src="/skills/mongo.svg"/>
          <Skill />
          <Skill title="React Js" src="/skills/react.svg"/>
        </div>
        {/* Left line */}

        {/* Center Horizontal line */}

        <div className="flex flex-col gap-2.5 justify-center items-center">
          <Skill />
          <Skill />
          {/* Logo */}
          <div className="bg-[#251C31] rounded-full bg-logo-bg-radial flex justify-center items-center h-44 w-44">
            <Image
              src="/svg/logo.svg"
              className="drop-shadow-logo"
              alt="my skills"
              width={76}
              height={90}
            />
          </div>
          {/* Logo */}
          <Skill />
          <Skill />
        </div>
        {/* Center Horizontal line */}

        {/* Right line */}

        <div className="flex flex-col gap-9 justify-center items-center">
          <Skill title="Express JS" s={60} src="/skills/exp.svg"/>
          <Skill />
          <Skill title="Node JS" s={45} src="/skills/node.svg"/>
        </div>
        {/* Right line */}

        <Skill />
      </div>
    </div>
  );
};

export default SkillSet;
