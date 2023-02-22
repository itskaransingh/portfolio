import Image from "next/image";
import Link from "next/link";
import type { FP } from "../sections/Projects";

const Project = ({ fp }: { fp: FP }) => {
  const { desc, github, img, lang, liveurl, srno, title } = fp;

  const isright = srno % 2 === 1;

  return (
    <div>
      <div
        className={`items-start gap-6  justify-center ${
          isright ? "flex" : "flex flex-row-reverse"
        }`}
        >
        {/* Text Content */}

        <div className={`flex flex-col `}>
          <div className={`font-semibold flex flex-col break-words ${!isright?'text-right':''}  gap-2 pb-5`}>
            <span className="text-info text-base">Featured Project</span>
            <div className="text-card text-3xl ">{title}</div>
          </div>
          <div className="relative">
            <div className="absolute inset-0">
              <div className={`p-6 shadow-xl ${isright? '' : 'right-48'}  w-[600px] h-[165px]  z-10  font-medium lower-glassmorphism relative text-card`}>
                {desc}
              </div>
              <div className={`flex ${!isright?'justify-end':''} gap-2 py-2 items-center`}>
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
    </div>
  );
};

export default Project;
