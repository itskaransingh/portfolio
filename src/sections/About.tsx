'use client'

import Image from "next/image";
import { SectionTitle } from "../components/UI";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="section flex flex-col ">
      <SectionTitle>
       Who am i?
      </SectionTitle>
    
      <div className="flex flex-col max-md:gap-4 md:flex-row max-md:items-center justify-around ">
        <div className="relative ">
          <span className="absolute -left-20 -top-20 bg-gradient-radial md:h-[500px] md:w-[430px]"></span>
          <div className="relative   max-md:mx-auto w-3/4">
            <Image
             
              src="/pic_scetch_2x.webp"
              className="absolute   max-md:top-[-9.5px] top-[-11px] "
              alt="my photo"
              height={453}
              width={377.93}
            />
            <Image
              src="/picpp_color.webp"
              className=" rounded-xl"
              alt="my photo"
              height={438}
              width={379.93}
            />
          </div>
        </div>
        <div className="flex justify-center items-start gap-2 flex-col">
          <span className="text-2xl">I am a</span>
          <div className="text-4xl">Self Thaught</div>
          <div className="text-4xl">Web Developer</div>
          <span className="text-2xl">coding since the age of</span>
          <span className=" block text-4xl md:cursor-pointer  text-secondary">fourteen</span>
          {/* <span className="invisible hover:visible md:cursor-pointer " >14</span> */}
        </div>
      </div>
    </section>
  );
};

export default About;
