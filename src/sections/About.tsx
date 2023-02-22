import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="section flex flex-col ">
      <h2 className="section-heading pb-16 text-center">Who Am I?</h2>
      <div className="flex flex-col md:flex-row justify-around ">
        <div className="relative ">
          <span className="absolute -left-20 -top-20 bg-gradient-radial h-[500px] w-[430px]"></span>
          <div className="relative w-3/4">
            <Image
              src="/pic_scetch_2x.webp"
              className="absolute  top-[-12px] hover:hidden"
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
