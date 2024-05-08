import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
library.add(faArrowRight);

const FooterPage = () => {
  return (
    <section className="flex flex-col h-max text-[#2B283E] p-8">
      <div className="h-max w-full flex flex-col gap-8">
        <div className="font-basicSix flex flex-col xl:flex-row gap-4 items-center justify-between my-8">
          <div className="flex flex-row gap-2 text-[6vh] xm:text-[7vh]">
            <h1>Let's</h1>
            <h1 className="text-[#47A992]">Connect</h1>
            <h1>There</h1>
          </div>
              <div className="bg-[#EEEEEE] rounded-full text-[3vh] flex flex-row gap-4 font-basicNine">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="bg-[#7469B6] rounded-full p-2 h-6 w-6 m-2"
                  size="sm"
                />
                <button className="bg-[#47A992] rounded-full px-2">
                <Link to='./Contact'>
                  {" "}
                  Hire me
                  </Link>
                </button>
              </div>
        </div>
        <div className="h-full w-full flex flex-col xm:grid xm:grid-cols-2 xl:flex xl:flex-row gap-8 justify-center items-center py-4  border-b border-[#7469B6] p-8">
          <div className="w-full m:w-1/2 xl:w-1/2 flex flex-col gap-2 font-basicSix">
            <h1 className="text-3xl px-4">Divyanshu</h1>
            <p className="text-2xl text-left px-4">
              A skilled Frontend developer with a passion for user-friendly web with crafting clean, maintainable code and collaborating with designers for optimal UX.
            </p>
          </div>
          <div className="w-full m:w-1/2 xl:w-1/2 flex flex-col gap-2 font-basicSix items-start">
            <h1 className="text-[#7469B6] text-3xl">Navigation</h1>
            <ul className="text-2xl w-full flex flex-col gap-4">
              <li><Link to='./Home'>Home</Link></li>
              <li><Link to='./Service'>Services</Link></li>
              <li><Link to='./Project'>Projects</Link></li>
            </ul>
          </div>
          <div className="w-full m:w-1/2 xl:w-1/2 flex flex-col gap-2 font-basicSix items-start">
            <h1 className="text-[#7469B6] text-3xl">Contact</h1>
            <ul className="text-2xl w-full flex flex-col gap-4">
              <li>+91-9214505938</li>
              <li>dadheech.29divyanshu@gmail.com</li>
              <li>example.com</li>
              <li>189,Vakil Colony, Bhilwara, Raj.</li>
            </ul>
          </div>
          <div className="w-full m:w-1/2 xl:w-1/2 flex flex-col gap-2 font-basicSix items-start">
            <h1 className="text-[#7469B6] text-3xl">Connect</h1>
            <ul className="text-2xl w-full flex flex-col gap-4">
              <li className="underline underline-offset-4"><a href='https://www.linkedin.com/in/divyanshu-dadheech-29d15p/'>LinkedIn</a></li>
              <li className="underline underline-offset-4"><a href='https://github.com/Divyanshu-2915'>Github</a></li>
              <li className="underline underline-offset-4"><a href='https://www.behance.net/divyansdadheec'>Behance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPage;