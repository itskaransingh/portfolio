import Image from "next/image";
import Link from "next/link";
import type { FP } from "../sections/Projects";

const Project = ({ fp }: { fp: FP }) => {
  const { desc, github, img, lang, liveurl, srno, title } = fp;

  const isright = srno % 2 === 1;

  return (
      <div
        className={`items-start gap-6   justify-center ${
          isright ? "flex flex-col-reverse md:flex-row" : "flex flex-col-reverse   md:flex-row-reverse"
        }`}
        >
        {/* Text Content */}

        <div className={`flex flex-col `}>
          <div className={`font-semibold flex flex-col flex-wrap break-words ${!isright?'md:text-right':''}  gap-2 pb-5`}>
            <span className="text-info text-base">Featured Project</span>
            <div className="text-card text-3xl break-words">{title}</div>
          </div>
          <div className="md:relative">
            <div className="md:absolute md:inset-0">
              <div className={`md:p-6 shadow-xl ${isright? '' : 'md:right-48'}  md:w-[600px] md:h-[165px]  z-10  font-medium lower-glassmorphism relative text-card`}>
                {desc}
              </div>
              <div className={`flex ${!isright?'md:justify-end':''} gap-2 py-2 items-center`}>
                <Link
                  href={liveurl}
                  target="_blank"
                  className="md:cursor-pointer h-10 w-10 flex justify-center  items-center rounded-full bg-secondary"
                >
                  <Image
                    src="/svg/livearrow.svg"
                    alt="live link"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link
                  href={github}
                  target="_blank"
                  className="md:cursor-pointer scale-125 "
                >
                  <Image
                    src="/svg/github.svg"
                    alt="github link"
                    width={37}
                    height={37}
                  />
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* Image Showcase Section */}
        <div className="">
          <div className=" relative rounded-lg bg-[#2B0B3A] w-[582px] h-[341px]">
            <div className="absolute bottom-0 rounded-lg right-0 w-[500px] h-[300px]">
              hi
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Project;
