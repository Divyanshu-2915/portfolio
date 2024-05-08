import React from 'react'
import Navbar from './Navbar'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faPenNib,
  faPenRuler,
  faBoxesPacking,
  faIndustry,
  faDiagramNext
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactPage from './Contact';
import FooterPage from './Footer';
library.add(
  faLaptopCode,
  faPenNib,
  faPenRuler,
  faBoxesPacking,
  faIndustry,
  faDiagramNext
);

const ServicePage = () => {
  return (
    <>
    <Navbar/>
    <section>
          <div className="h-max py-16 bg-[#7469B6] flex flex-col gap-8 justify-center w-full">
            <div className="font-basicSix  text-[#EEEEEE] px-8 flex flex-col m:flex-row gap-4 items-center justify-center">
              <div className="flex flex-col gap-2 font-medium text-[6vh] xm:text-[7vh] text-center">
                <h1>-Services</h1>
                <div className="flex flex-row gap-2 text-[9vh] xm:text-[10vh]">
                  <h1>My</h1>
                  <h1 className="text-[#47A992]">Services</h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
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
            <div className="flex flex-col gap-16 justify-center items-center xl:flex-row">
                <div className="h-96 w-72 rounded-full bg-[#A1A1D8] flex flex-col gap-2 justify-center items-center text-[#F3F3FA] hover:bg-[#D6D9EF] hover:text-[#2B283E]">
                <div className="bg-[#BDC0E4] h-24 w-24 flex justify-center items-center rounded-full hover:bg-[#E8EBF7] hover:text-[#2B283E]">
                  <FontAwesomeIcon icon={faDiagramNext} className="text-5xl" />
                </div>
                <h1 className="text-2xl font-basicNine">Web Designing</h1>
                <p className="text-xl font-basicFive text-center w-60 p-2 h-52">
                  Developing responsive websites with fully functional frontend
                  part using technologies like React.js, Node.js, GSAP
                </p>
              </div>
              <div className="h-96 w-72 rounded-full bg-[#A1A1D8] flex flex-col gap-2 justify-center items-center text-[#F3F3FA] hover:bg-[#D6D9EF] hover:text-[#2B283E]">
                <div className="bg-[#BDC0E4] h-24 w-24 flex justify-center items-center rounded-full hover:bg-[#E8EBF7] hover:text-[#2B283E]">
                  <FontAwesomeIcon icon={faIndustry} className="text-5xl" />
                </div>
                <h1 className="text-2xl font-basicNine">Logo Design</h1>
                <p className="text-xl font-basicFive text-center w-60 p-2 h-52">
                  Developing responsive websites with fully functional frontend
                  part using technologies like React.js, Node.js, GSAP
                </p>
              </div>
              <div className="h-96 w-72 rounded-full bg-[#A1A1D8] flex flex-col gap-2 justify-center items-center text-[#F3F3FA] hover:bg-[#D6D9EF] hover:text-[#2B283E]">
                <div className="bg-[#BDC0E4] h-24 w-24 flex justify-center items-center rounded-full hover:bg-[#E8EBF7] hover:text-[#2B283E]">
                  <FontAwesomeIcon icon={faBoxesPacking} className="text-5xl" />
                </div>
                <h1 className="text-2xl font-basicNine">Packaging Design</h1>
                <p className="text-xl font-basicFive text-center w-60 p-2 h-52">
                  Developing responsive websites with fully functional frontend
                  part using technologies like React.js, Node.js, GSAP
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
        <section>
            <div className='border border-black h-max w-full py-8'>
                <div className='flex flex-col gap-4 justify-center items-center font-basicNine xl:text-[15vh] text-[9vh] text-center'>
                    <h1>Let's Create an</h1>
                        <h1 className='text-[#7469B6]'>Amazing Project</h1>
                        <h1>Together</h1>
                </div>
            </div>
        </section>
        <ContactPage/>
        <FooterPage/>
    </>
  )
}

export default ServicePage