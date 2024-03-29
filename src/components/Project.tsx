import Image from "next/image";
import Link from "next/link";
import type { FP } from "../sections/Projects";
import { cn } from "../lib/utils";

const Project = ({ project }: { project: FP }) => {
  const { desc, github, img, toolsAndTech, liveurl, srno, title } = project;

  const isright = srno % 2 === 1;

  return (
    <div
      className={`items-start gap-6   justify-center ${
        isright
          ? "flex flex-col-reverse lg:flex-row"
          : "flex flex-col-reverse   lg:flex-row-reverse"
      }`}
    >
      {/* Text Content */}

      <div className={`flex flex-col `}>
        <div
          className={`font-semibold flex flex-col flex-wrap break-words ${
            !isright ? "lg:text-right" : ""
          }  gap-2 pb-5`}
        >
          <span className="text-info text-base">Featured Project</span>
          <div className="text-card text-3xl break-words line-clamp-2">
            {title}
          </div>
        </div>
        <div className="lg:relative">
          <div className="lg:absolute lg:inset-0 ">
            <div
              className={cn(`lg:p-6 p-3 shadow-xl  w-full  relative    !rounded-2xl lg:min-h-[165px]  from-transparent to-primary  overflow-hidden z-10  font-medium lower-glassmorphism  text-card`, {
                "bg-gradient-to-r lg:w-[600px]": isright,
                "bg-gradient-to-l lg:right-[11.5rem] lg:w-[570px]": !isright,
              })}
            >
              <Image
                src="/extras/projectdesc_gm.webp"
                alt="mirror effect"
                width={650}
                height={200}
                className="absolute   overflow-hidden pointer-events-none  select-none  inset-0 h-full w-full"
              />
              {desc}
            </div>
            <div
              className={`flex ${
                !isright ? "lg:justify-end" : ""
              } gap-2 py-2 items-center`}
            >
            {liveurl &&  <Link
                href={liveurl}
                target="_blank"
                className="lg:cursor-pointer cursor-default h-10 w-10 flex justify-center  items-center rounded-full bg-secondary"
              >
                <Image
                  src="/svg/livearrow.svg"
                  alt="live link"
                  width={25}
                  height={25}
                />
              </Link>}
            {github &&  <Link
                href={github}
                target="_blank"
                className="lg:cursor-pointer pl-1 cursor-default scale-125 "
              >
                <Image
                  src="/svg/github.svg"
                  alt="github link"
                  width={37}
                  height={37}
                />
              </Link>}
            </div>
          </div>
        </div>
      </div>

      {/* Image Showcase Section */}
      <div className="">
        <div className=" relative rounded-lg bg-[#2B0B3A] w-[582px] h-[341px]">
          <marquee direction={`${isright ? "left" : "right"}`}>
            <div
              className={`flex ${
                isright ? "md:justify-end" : "md:justify-start"
              } items-center pt-2 gap-5 `}
            >
              {toolsAndTech?.map((l, i) => (
                <p
                  className="text-sm px-2 py-0.5 rounded-md  font-semibold"
                  key={i}
                >
                  {l}
                </p>
              ))}
            </div>
          </marquee>
          <div
            className={`absolute  bottom-0 rounded-lg overflow-hidden right-0 w-[500px] h-[300px] ${
              isright ? "right-0 max-md:left-0" : "left-0"
            }`}
          >
            <Image
              src={img}
              alt={title}
              width={500}
              height={500}
              className=" h-full  w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
