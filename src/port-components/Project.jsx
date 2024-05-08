import React from 'react'
import Navbar from './Navbar'
import FooterPage from './Footer'

const ProjectPage = () => {
  return (
    <>
    <Navbar/>
    <section>
          <div className="h-max w-full bg-[#7469B6] flex flex-col gap-8 py-16">
            <div className="font-basicSix text-4xl text-[#EEEEEE] px-8 flex flex-col m:flex-row gap-10 items-center justify-center">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-[6vh] xm:text-[7vh]">-Projects</h1>
                <div className="flex flex-col m:flex-row gap-2 text-[9vh] xm:text-[10vh] text-center leading-tight lg:leading-normal">
                  <h1>My Latest</h1>
                  <h1 className="text-[#47A992]"> Projects</h1>
                </div>
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
                  <h1 className="text-2xl">Freelancer</h1>
                  <p className="xl:w-3/4 text-2xl">
                    It's an portfolio webpage for an startup which provides
                    services in field of digital industry and development.
                  </p>
                </div>
              </div>
              {/* --- */}
              <div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#A1A1D8]">
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col gap-2 xl:flex-row text-2xl">
                    <li className="w-44 h-10 text-center">Web Design</li>
                    <li className="w-48 h-10 text-center">Web Development</li>
                    <li className="w-44 h-10 text-center">UI/UX Design</li>
                  </ul>
                  <h1 className="text-4xl text-center xl:text-left underline underline-offset-[8px]">RatanShree Naturals</h1>
                  <h1 className="text-2xl">Freelancer</h1>
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
              {/* --- */}
                            <div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#8D89CB]">
                <div className="xl:w-1/2 rounded-3xl w-full p-2">
                  <img
                    src="../images/work-skits.png"
                    alt=""
                    className="h-full w-full rounded-3xl p-4"
                  />
                </div>
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col xl:flex-row gap-2 text-2xl">
                    <li className="w-44 h-10 text-center">Web Design</li>
                    <li className="w-44 h-10 text-center">UI/UX Design</li>
                  </ul>
                  <h1 className="text-4xl underline underline-offset-[8px]">S-Kits</h1>
                  <h1 className="text-2xl">Freelancer</h1>
                  <p className="xl:w-3/4 text-2xl">
                    It's an E-Commerce an online platform where users can
                    purchase Chemicals, Science lab items and Mechenical / Electrical related Projects.
                  </p>
                </div>
              </div>
              {/* --- */}
<div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#A1A1D8]">
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col gap-2 xl:flex-row text-2xl">
                    <li className="w-44 h-10 text-center">Logo Design</li>
                    <li className="w-48 h-10 text-center">Graphic Design</li>
                  </ul>
                  <h1 className="text-4xl text-center xl:text-left underline underline-offset-[8px]">Raindrops Resturant</h1>
                  <h1 className="text-2xl">Freelancer</h1>
                  <p className="xl:w-3/4 text-2xl">
                    Designed and Created the logo for the resturant.
                  </p>
                </div>
                <div className="xl:w-1/2 rounded-3xl w-full p-2">
                  <img
                    src="../images/work-raindrop.png"
                    alt=""
                    className="h-full w-full rounded-3xl p-4"
                  />
                </div>
              </div>
              {/* --- */}
                            <div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#8D89CB]">
                <div className="xl:w-1/2 rounded-3xl w-full p-2">
                  <img
                    src="../images/work-hashtrust.png"
                    alt=""
                    className="h-full w-full rounded-3xl p-4"
                  />
                </div>
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col xl:flex-row gap-2 text-2xl">
                    <li className="w-44 h-10 text-center">Web Design</li>
                    <li className="w-48 h-10 text-center">UI/UX Design </li>
                  </ul>
                  <h1 className="text-4xl underline underline-offset-[8px]">PDF Chat Bot</h1>
                  <h1 className="text-2xl">Hashtrust Technologies</h1>
                  <p className="xl:w-3/4 text-2xl">
                    It's an webpage which provides user to upload PDF and then chat with AI, and answers all users questions which are related to uploaded PDF.
                  </p>
                </div>
              </div>
              {/* --- */}
              <div className="h-max xl:h-96 w-11/12 rounded-3xl flex flex-col xl:flex-row gap-4 bg-[#A1A1D8]">
                <div className="xl:w-1/2 rounded-3xl font-basicFour text-[#F3F3FA] flex flex-col gap-4 justify-center items-center xl:items-start p-8">
                  <ul className="flex flex-col gap-2 xl:flex-row text-2xl">
                    <li className="w-44 h-10 text-center">Logo Design</li>
                    <li className="w-48 h-10 text-center">Graphic Design</li>
                  </ul>
                  <h1 className="text-4xl text-center xl:text-left underline underline-offset-[8px]">Sangam University</h1>
                  <h1 className="text-2xl">Sangam University (Student)</h1>
                  <p className="xl:w-3/4 text-2xl">
                    Designed logo for Arts club and also prepared multiple informative, invitation and promotion templates.
                  </p>
                </div>
                <div className="xl:w-1/2 rounded-3xl w-full p-2">
                  <img
                    src="../images/work-sangam.png"
                    alt=""
                    className="h-full w-full rounded-3xl p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterPage/>
    </>
  )
}

export default ProjectPage