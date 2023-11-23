"use client";

import Image from "next/image";
import { SectionTitle } from "../components/UI";
import { motion } from "framer-motion";
import { fadeIn, slideIn, wallDrop, zoomIn } from "../lib/motion";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="section flex flex-col ">
      <SectionTitle>Who am i?</SectionTitle>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col max-md:gap-4 md:flex-row max-md:items-center justify-around "
      >
        <div className="relative ">
          <motion.span
            variants={zoomIn(0, 1)}
            className="absolute -left-20 -top-20 bg-gradient-radial md:h-[500px] md:w-[430px]"
          ></motion.span>

          {/* My Images  */}
          <div className="relative   max-md:mx-auto w-3/4">
            {/* Sketch image */}
            <motion.div
              initial="initial"
              whileHover={"drop"}
              whileInView="animate"
              variants={wallDrop}
              className="absolute   max-md:top-[-9.5px] top-[-11px] "
            >
              <Image

                className="pointer-events-none  select-none"
                src="/pic_scetch_2x.webp"
                alt="my photo"
                height={453}
                width={377.93}
              />
            </motion.div>

            {/* Colorfull Image */}
            <Image
              src="/picpp_color.webp"
              className=" rounded-xl pointer-events-none  select-none"
              alt="my photo"
              height={438}
              width={379.93}
            />
          </div>
        </div>
        <motion.div
          variants={slideIn("left")}
          className="flex justify-center items-start gap-2 flex-col"
        >
          <motion.span
            variants={fadeIn("left", "spring", 0 * 0.5)}
            className="text-2xl"
          >
            I am a
          </motion.span>
          <motion.div
            variants={fadeIn("left", "spring", 0.1 * 0.5)}
            className="text-4xl"
          >
            Self Taught
          </motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 0.2 * 0.5)}
            className="text-4xl"
          >
            Web Developer
          </motion.div>
          <motion.span
            variants={fadeIn("left", "spring", 0.3 * 0.5)}
            className="text-2xl"
          >
            coding since the age of
          </motion.span>
          <motion.span
            variants={fadeIn("left", "spring", 0.4 * 0.5)}
            className=" block text-4xl md:cursor-pointer  text-secondary"
          >
            fourteen
          </motion.span>
          {/* <span className="invisible hover:visible md:cursor-pointer " >14</span> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
