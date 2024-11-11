import React from "react";
import {
  Bs3Circle,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsMailbox,
  BsMapFill,
  BsTwitter,
} from "react-icons/bs";
import { FaHeart, FaPersonArrowDownToLine } from "react-icons/fa6";
import { MdEmail, MdFacebook, MdPhone, MdPlace, MdSend } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen bg-primary flex flex-col  lg:grid grid-cols-2 grid-rows-[1fr 1fr 1fr]">
      {/* TODO: Titel */}
      <h1 className=" text-white my-10 mx-5 font-bold text-[32px]  leading-normal sm:text-center lg:text-start">
        Join our <br /> platform now <br />
        <span className="text-Secandary logo">and</span> learn together!
      </h1>
      {/* TODO: BOX info */}
      <div className="grid grid-cols-[1fr_30rem_1fr]  gap-6 grid-rows-3 ite lg:row-[2/3] lg:grid-cols-[0px_30rem_1fr]">
        <div className="text-white font-medium text-[16px] flex items-center justify-center col-[2/3] row-[1/2] lg:justify-start">
          <MdEmail className="text-Secandary text-4xl mr-5" />
          nouraldeenmahmo@gmail.com
        </div>
        <div className="text-white font-medium text-[16px]  flex items-center justify-center   col-[2/3] row-[2/3] bg-[#570A5750] rounded-2xl border-3 border-solid border-Secandary lg:justify-start ">
          <MdPhone className="text-Secandary text-4xl mr-5" />
          +905 528 660 328
        </div>
        <div className="text-white font-medium text-[16px] flex items-center justify-center col-[2/3] row-[3/4] lg:justify-start">
          <MdPlace className="text-Secandary text-4xl mr-5" />
          Syria_Aleppo_Azaz
        </div>
      </div>

      {/* TODO: BOX Input */}
      <div className=" bg-Fourth rounded-3xl  flex  flex-col gap-5 mx-5  p-5 mt-16 lg:row-[1/4] justify-between">
        <h1 className="text-2xl font-semibold text-start text-primary mt-5 ">
          I’m interested in...
        </h1>
        <div className="flex flex-wrap gap-5 justify-start items-center mt-[50px]">
          <a
            href=""
            className="logo no-underline px-4 py-5 bg-Secandary border-2 border-solid border-Secandary rounded-lg text-Fourth text-xl font-semibold "
          >
            UI/UX design
          </a>
          <a
            href=""
            className=" Box_Hover no-underline px-4 py-5 text-accentary border-2 border-solid  rounded-lg  text-xl font-semibold "
          >
            Web design
          </a>
          <a
            href=""
            className="Box_Hover no-underline px-4 py-5 text-accentary border-2 border-solid rounded-lg  text-xl font-semibold "
          >
            Python
          </a>
          <a
            href=""
            className="Box_Hover no-underline px-4 py-5 text-accentary border-2 border-solid rounded-lg  text-xl font-semibold "
          >
            Graphic design
          </a>
          <a
            href=""
            className="Box_Hover no-underline px-4 py-5 text-accentary border-2 border-solid rounded-lg  text-xl font-semibold "
          >
            Other
          </a>
          <a
            href=""
            className="Box_Hover no-underline px-4 py-5 text-accentary border-2 border-solid rounded-lg text-xl font-semibold "
          >
            Design system
          </a>
        </div>
        <div className="mt-14 flex flex-col gap-9">
          <div>
            <input
              type="text"
              name="names"
              placeholder="Your name"
              className=" w-[90%] p-2 mx-5 border-0 bg-Fourth border-b-4 border-Secandary  focus:outline-none font-medium text-primary  "
            />
          </div>
          <div>
            <input
              type="text"
              name="names"
              placeholder="Your email"
              className=" w-[90%] p-2 mx-5 border-0 bg-Fourth border-b-4 border-accentary  focus:outline-none font-medium text-primary  "
            />
          </div>
          <div>
            <input
              type="text"
              name="names"
              placeholder="Your message"
              className=" w-[90%] p-2 mx-5 border-0 bg-Fourth border-b-4 border-accentary  focus:outline-none font-medium text-primary  "
            />
          </div>
        </div>
        <div className="mt-36 mb-5 ml-5 flex items-start">
          <a
            href=""
            className=" flex items-center no-underline px-4 py-5 bg-Secandary border-2 border-solid  rounded-xl text-Fourth text-xl font-semibold "
          >
            <MdSend className="text-Fourth text-4xl mr-5" />
            Send Message
          </a>
        </div>
      </div>
      {/* TODO: BOX Contact */}
      <div className="mt-16 flex gap-14 items-center justify-center lg:justify-start lg:row-[3/4] lg:ml-5 lg:mt-48 ">
        <a
          href="
          https://www.facebook.com/nouraldeen.mahmo/"
          className=" w-20 h-20 rounded-full bg-Secandary flex items-center justify-center"
        >
          <BsFacebook className="text-Fourth text-4xl logo " />
        </a>
        <a
          href="https://www.instagram.com/nour.aldeen.mahmo/"
          className=" w-20 h-20 rounded-full bg-Secandary flex items-center justify-center"
        >
          <BsInstagram className="text-Fourth text-4xl logo" />
        </a>
        <a
          href="https://github.com/dashboard"
          className=" w-20 h-20 rounded-full bg-Secandary flex items-center justify-center"
        >
          <BsGithub className="text-Fourth text-4xl logo " />
        </a>
      </div>
    </div>
  );
};

export default Home;
