import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPhone, faEnvelope, faLocationDot, faArrowRight);

const ContactPage = () => {
  return (
    <section className="flex flex-col m:flex-row justify-center items-center h-max bg-[#7469B6]">
      <div className="flex flex-col gap-2 m:w-1/2 3xl:w-1/3 p-8 m:p-12 3xl:p-16 text-[#EEEEEE]">
        <div className="font-basicSix text-[6vh] xm:text-[7vh] text-center m:text-start">
          <h1>-Contact</h1>
          <div className="flex flex-col gap-0 lg:flex-row lg:gap-2 text-[9vh] xm:text-[10vh] text-center m:text-start justify-center m:justify-start leading-tight lg:leading-normal">
            <h1>Let's</h1>
            <h1 className="text-[#47A992]">Connect</h1>
            <h1>&</h1>
          </div>
          <h1 className="text-[#47A992] text-5xl m:text-6xl text-center">Collaborate</h1>
        </div>
        <div className="text-2xl flex flex-col gap-2 p-4 text-center lg:text-left font-basicFour">
          <p>Interested in working with me?</p>
          <p>
            Together, we hold the power to design the world that we envision
          </p>
        </div>
        <div className="flex flex-col gap-4 text-xl font-basicFour">
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p>
            <a href="https://wa.me/9214505938">
            +91-9214505938
            </a>
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>dadheech.29divyanshu@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="m:w-1/2 3xl:w-2/3 flex justify-center items-center p-8 m:p-12 3xl:p-16 w-full">
        <form
          action="https://public.herotofu.com/v1/d0e0ad00-09c4-11ef-9ee0-f34ff020ebe0"
          method="post"
          accept-charset="UTF-8"
          className="flex flex-col gap-8 w-full m:w-3/4 3xl:w-2/3"
        >
          <div className="flex flex-col w-full gap-8 lg:gap-4 justify-center items-center lg:flex-row">
            <input
              name="Name"
              id="first_name"
              type="text"
              required
              placeholder="First Name*"
              className="w-full m:w-1/2 3xl:w-1/2 rounded-xl h-12 bg-[#a1a1d8] text-[#EEEEEE] placeholder:text-[#EEEEEE] placeholder:px-2"
            />
            <input
              name="Name"
              id="last_name"
              type="text"
              required
              placeholder="Last Name*"
              className="w-full m:w-1/2 3xl:w-1/2 rounded-xl h-12 bg-[#a1a1d8] text-[#EEEEEE] placeholder:text-[#EEEEEE] placeholder:px-2"
            />
          </div>
          <div className="flex flex-col w-full gap-8 lg:gap-4 justify-center items-center lg:flex-row">
            <input
              name="Email"
              id="email"
              type="email"
              placeholder="Email*"
              required
              className="w-full m:w-1/2 3xl:w-1/2 rounded-xl h-12 bg-[#a1a1d8] text-[#EEEEEE] placeholder:text-[#EEEEEE] placeholder:px-2"
            />
            <input
              name="Number"
              id="number"
              type="text"
              placeholder="Phone Number*"
              required
              className="w-full m:w-1/2 3xl:w-1/2 rounded-xl h-12 bg-[#a1a1d8] text-[#EEEEEE] placeholder:text-[#EEEEEE] placeholder:px-2"
            />
          </div>
          <div className="flex flex-row w-full gap-4">
            <input
              name="Subject"
              id="message"
              type="text"
              required
              placeholder="Subject*"
              className="w-full rounded-xl h-12 bg-[#a1a1d8] text-[#EEEEEE] placeholder:text-[#EEEEEE] placeholder:px-2"
            />
          </div>
          <div>
            <textarea
              name="Message"
              id="textarea"
              placeholder="Message*"
              className=" rounded-xl bg-[#a1a1d8] text-[#EEEEEE] placeholder:text-[#EEEEEE] placeholder:px-2 placeholder:py-2 w-full"
              rows="5"
              cols="40"
            ></textarea>
          </div>
          <div className="bg-[#EEEEEE] rounded-full text-[3vh] flex flex-row gap-4 font-basicNine w-max">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="bg-[#7469B6] rounded-full p-2 h-6 w-6 m-2"
              size="sm"
            />
            <input
              type="submit"
              value="Send Message"
              className="bg-[#47A992] rounded-full px-2 cursor-pointer"
            />
            <div
              className="absolute overflow-hidden whitespace-nowrap hidden"
              aria-hidden="true"
            >
              <input
                type="text"
                name="_gotcha"
                tabindex="-1"
                autocomplete="off"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;