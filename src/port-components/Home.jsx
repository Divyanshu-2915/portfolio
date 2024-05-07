import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faPenNib,
  faPenRuler,
  faArrowRight,
  faUserGraduate,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReviewPage from "./Reviews";
import ContactPage from './Contact';
import FooterPage from "./Footer";
import NavbarPage from "./Navbar";

library.add(
  faLaptopCode,
  faPenNib,
  faPenRuler,
  faArrowRight,
  faUserGraduate,
  faBriefcase
);
const HomePage = () => {
  return (
    <>
      <section className="flex flex-col gap-2 text-[#2B283E]">
        <NavbarPage/>
        {/* --- */}
        <section>
          <div className="font-basicFive flex flex-col gap-2 justify-center items-center h-max p-2 mt-16 w-full">
            <h1 className="text-[6vh] xxm:text-[8vh] xl:text-[10vh]">-Hello !</h1>
            <div className="flex flex-row gap-2 text-[7vh] xxm:text-[9vh] xl:text-[11vh] text-center">
              <h1>I'm</h1>
              <h1 className="text-[#7469B6] underline underline-offset-[15px]">
                Divyanshu,
              </h1>
            </div>
            <h1 className="text-[10vh] xxm:text-[14vh] xl:text-[18vh] text-center">Designer & Developer</h1>
            <img src="../images/banner.png" alt="" className=" rounded-2xl" />
            <div className="bg-[#EEEEEE] flex flex-col gap-4 w-max p-2 rounded-3xl m:flex-row m:rounded-full font-basicFour">
              <button className=" h-12 w-44 text-2xl rounded-3xl bg-[#7469B6] text-[#EEEEEE] flex gap-2 justify-center items-center">
                Resume
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-[#47A992] rounded-full p-2 h-6 w-6"
                  size="sm"
                />
              </button>
              <button className=" h-12 w-48 text-2xl border border-black rounded-3xl bg-[#FFE6E6] px-2">
                Connect with me
              </button>
            </div>
          </div>
        </section>
        {/* --- */}
        <section>
          <div className="h-max py-16 bg-[#7469B6] flex flex-col gap-8 justify-center w-full">
            <div className="font-basicSix  text-[#EEEEEE] px-8 flex flex-col m:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col gap-2 font-medium text-[6vh] xm:text-[7vh]">
                <h1>-Services</h1>
                <div className="flex flex-row gap-2 text-[9vh] xm:text-[10vh]">
                  <h1>My</h1>
                  <h1 className="text-[#47A992]">Services</h1>
                </div>
              </div>
              <div className="bg-[#EEEEEE] rounded-full text-[3vh] flex flex-row gap-4 font-basicNine">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-[#7469B6] rounded-full p-2 h-6 w-6 m-2"
                  size="sm"
                />
                <button className="bg-[#47A992] rounded-full px-2">
                  {" "}
                  View all services
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-16 justify-center items-center xl:flex-row">
              <div className="h-96 w-72 rounded-full bg-[#A1A1D8] flex flex-col gap-2 justify-center items-center text-[#F3F3FA] hover:bg-[#D6D9EF] hover:text-[#2B283E]">
                <div className="bg-[#BDC0E4] h-24 w-24 flex justify-center items-center rounded-full hover:bg-[#E8EBF7] hover:text-[#2B283E]">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-5xl" />
                </div>
                <h1 className="text-2xl font-basicNine">Web Development</h1>
                <p className="text-xl font-basicFive text-center w-60 p-2 h-52">
                  Developing responsive websites with fully functional frontend
                  part using technologies like React.js, Node.js, GSAP
                </p>
              </div>
              <div className="h-96 w-72 rounded-full bg-[#A1A1D8] flex flex-col gap-2 justify-center items-center text-[#F3F3FA] hover:bg-[#D6D9EF] hover:text-[#2B283E]">
                <div className="bg-[#BDC0E4] h-24 w-24 flex justify-center items-center rounded-full hover:bg-[#E8EBF7] hover:text-[#2B283E]">
                  <FontAwesomeIcon icon={faPenNib} className="text-5xl" />
                </div>
                <h1 className="text-2xl font-basicNine">UI/UX Design</h1>
                <p className="text-xl font-basicFive text-center  w-60 p-2 h-52">
                  Designing intuitive interfaces and delivering user-friendly
                  solutions that are easy for customers to navigate, ensuring a
                  seamless user experience.
                </p>
              </div>
              <div className="h-96 w-72 rounded-full bg-[#A1A1D8] flex flex-col gap-2 justify-center items-center text-[#F3F3FA] hover:bg-[#D6D9EF] hover:text-[#2B283E]">
                <div className="bg-[#BDC0E4] h-24 w-24 flex justify-center items-center rounded-full hover:bg-[#E8EBF7] hover:text-[#2B283E]">
                  <FontAwesomeIcon icon={faPenRuler} className="text-5xl" />
                </div>
                <h1 className="text-2xl font-basicNine">Graphic Designer</h1>
                <p className="text-xl font-basicFive text-center w-60 p-2 h-52">
                  Creating visually appealing designs and delivering
                  user-friendly graphics that are engaging, ensuring an
                  enjoyable and accessible experience for customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* --- */}
        <section>
          <div className="h-max py-24 flex flex-col lg:flex-row gap-4 justify-center items-center w-full">
            <div className="lg:w-1/2 lg:h-3/4 flex justify-end items-center">
              <img src="../images/port.png" alt="" className="rounded-3xl" />
            </div>
            <div className="lg:w-1/2 lg:h-3/4 flex justify-center items-center">
              <div className="font-basicFour text-[6vh] xm:text-[7vh] flex flex-col gap-2 justify-center lg:items-start px-4 items-center">
                <h1>-About Me</h1>
                <div className="flex flex-col gap-0 lg:gap-2 leading-tight lg:leading-normal text-[9vh] xm:text-[10vh] lg:flex-row items-center lg:items-start">
                  <h1>Who is</h1>
                  <h1 className="text-[#7469B6] text-center">Divyanshu Dadheech ?</h1>
                </div>
                <p className="text-2xl lg:w-3/4 text-center lg:text-left">
                  Dedicated professional with a history of meeting company goals
                  utilizing consistent and organized practices. Skilled in
                  working under pressure and adapting to new situations and
                  challenges to best enhance the organizational brand. A quick
                  adapter which helps me to learn new things easily and early
                  and with my positive approach I convert my learning into
                  positive actions and then it into positive results
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* --- */}
        <section>
          <div className="h-max py-16 w-full flex flex-col gap-4 justify-center items-center">
            <div className="h-max w-full text-center font-basicFour py-4 flex flex-col gap-4 text-[#2B283E]">
              <h1 className="text-[6vh] xm:text-[7vh]">-Education & Work</h1>
              <div className="flex flex-col leading-tight lg:leading-normal lg:flex-row gap-0 lg:gap-2 font-basicFour text-[9vh] xm:text-[10vh] justify-center items-center">
                <h1>My</h1>
                <h1 className="text-[#7469B6]">Education</h1>
                <h1>&</h1>
                <h1>Work</h1>
                <h1 className="text-[#7469B6]">Experience</h1>
              </div>
            </div>
            <div className="h-3/4 w-full flex flex-col lg:flex-row gap-4 justify-center items-center">
              <div className="bg-[#e8ebf7] lg:h-80 lg:w-96 rounded-3xl flex flex-col gap-2 w-80 h-96">
                <div className="text-[#7469B6] flex flex-row gap-4 justify-center text-4xl py-4 font-basicNine border-b border-[#2B283E]">
                  <FontAwesomeIcon icon={faUserGraduate} />
                  <h1>Education</h1>
                </div>
                <div className="flex flex-col gap-8 px-2 py-4">
                  <div className="font-basicFour px-2">
                    <p className="text-2xl">Sangam University</p>
                    <p className="text-xl">
                      {" "}
                      Bachelor's of Computer Application
                    </p>
                    <p className="text-xl">2020-2023</p>
                  </div>
                  <div className="font-basicFour px-2">
                    <p className="text-2xl">Rajasthan State Open School</p>
                    <p className="text-xl">Senior Secondary</p>
                    <p className="text-xl">2018-2019</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#e8ebf7] lg:h-80 lg:w-96 rounded-3xl flex flex-col gap-2 w-80 h-96">
                <div className="text-[#7469B6] flex flex-row gap-4 justify-center text-4xl py-4 font-basicNine border-b border-[#2B283E]">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <h1>Experience</h1>
                </div>
                <div className="flex flex-col gap-8 px-2 py-4">
                  <div className="font-basicFour px-2">
                    <p className="text-2xl">Hashtrust Technologies</p>
                    <p className="text-xl">React JS Developer Intern</p>
                    <p className="text-xl">2023-2024</p>
                  </div>
                  <div className="font-basicFour px-2">
                    <p className="text-2xl">Graphic Designer</p>
                    <p className="text-xl">Sangam University</p>
                    <p className="text-xl">2022-2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- */}
        <section>
          <div className="h-max w-full bg-[#7469B6] flex flex-col gap-8 py-16">
            <div className="font-basicSix text-4xl text-[#EEEEEE] px-8 flex flex-col m:flex-row gap-10 items-center justify-between">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-[6vh] xm:text-[7vh]">-Projects</h1>
                <div className="flex flex-col m:flex-row gap-2 text-[9vh] xm:text-[10vh] text-center leading-tight lg:leading-normal">
                  <h1>My Latest</h1>
                  <h1 className="text-[#47A992]"> Projects</h1>
                </div>
              </div>
              <div className="bg-[#EEEEEE] rounded-full text-[3vh] flex flex-row gap-4 font-basicNine">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-[#7469B6] rounded-full p-2 h-6 w-6 m-2"
                  size="sm"
                />
                <button className="bg-[#47A992] rounded-full px-2">
                  {" "}
                  View all projects
                </button>
              </div>
            </div>
            <div className="h-max flex flex-col gap-8 justify-center items-center">
              <div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#8D89CB]">
                <div className="xl:w-1/2 rounded-3xl w-full p-2">
                  <img
                    src="../images/work-trifusion.png"
                    alt=""
                    className="h-full w-full rounded-3xl p-4"
                  />
                </div>
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col xl:flex-row gap-2 text-2xl">
                    <li className="w-44 h-10 text-center">Web Design</li>
                    <li className="w-48 h-10 text-center">Web Development</li>
                    <li className="w-44 h-10 text-center">UI/UX Design</li>
                  </ul>
                  <h1 className="text-4xl underline underline-offset-[8px]">The TriFusion</h1>
                  <p className="xl:w-3/4 text-2xl">
                    It's an portfolio webpage for an startup which provides
                    services in field of digital industry and development
                  </p>
                </div>
              </div>
              <div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#A1A1D8]">
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col gap-2 xl:flex-row text-2xl">
                    <li className="w-44 h-10 text-center">Web Design</li>
                    <li className="w-48 h-10 text-center">Web Development</li>
                    <li className="w-44 h-10 text-center">UI/UX Design</li>
                  </ul>
                  <h1 className="text-4xl text-center xl:text-left underline underline-offset-[8px]">RatanShree Naturals</h1>
                  <p className="xl:w-3/4 text-2xl">
                    It's an E-Commerce an online platform where users can
                    purchase Premixes of their choice and much more.
                  </p>
                </div>
                <div className="xl:w-1/2 rounded-3xl w-full p-2">
                  <img
                    src="../images/work-ratanshree.png"
                    alt=""
                    className="h-full w-full rounded-3xl p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- */}
        <section>
          <div className="h-max w-full flex flex-col gap-2 py-16">
                                <div className="font-basicSix p-8 w-full">
              <div className="flex flex-col gap-2 font-medium items-center lg:items-start leading-tight lg:leading-normal">
                <h1 className="text-[6vh] xm:text-[7vh]">-Skill Set</h1>
                  <h1 className="text-[#47A992] text-[9vh] xm:text-[10vh] text-center lg:text-left">Technologies & Tools</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center h-max p-2 lg:m-4">
            <div className="m:flex m:flex-row gap-8 p-2 grid grid-cols-2">
                <img src="../images/icons/canva-logo.png" alt=""      className=" w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                <img src="../images/icons/figma-logo.png" alt=""      className=" w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                <img src="../images/icons/gsap-logo.png" alt=""       className=" w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                <img src="../images/icons/html-logo.png" alt=""       className=" w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                </div>
                <div className="m:flex m:flex-row gap-8 p-2 grid grid-cols-2">
                <img src="../images/icons/javascript-logo.png" alt="" className="w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                <img src="../images/icons/react-logo.png" alt=""      className="w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                <img src="../images/icons/rest-logo.png" alt=""       className="w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                <img src="../images/icons/tailwind-logo.png" alt=""   className="w-20 h-20 shadow-md shadow-[#7469B6] rounded-3xl p-2"/>
                </div>
                </div>
          </div>
        </section>
        {/* --- */}
        <ContactPage/>
        <ReviewPage/>
        <FooterPage/>
      </section>
    </>
  );
};

export default HomePage;
