import React, { useState } from "react";
import background from "../img/backgroundimg.jpeg";
import Service from "./Service";
import Footer from "../components/Footer";
import Card from "./Card";
import { Services } from "../constants/index";
const HeroSection = () => {
  const service = Services;
  // const [service, setService] = useState(Services);
  return (
    <div>
      <div
        className="h-full md:h-[80vh] "
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" container mx-auto md:flex justify-between h-full ">
          <div className="w-full md:w-1/2 flex justify-center items-center ">
            <div className=" text-start">
              <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                We are happy to help you
              </h1>
              <p className=" text-gray-900 text-[12px] md:text-[16px]">
                To set a background image in a React application, you can use
                the inline style attribute or create a CSS file and import it
                into your React component. Here's an example of how you can set
                a background image using inline styles
              </p>
              <button className="bg-theme1  text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5">
                Book An Appointment
              </button>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
      <Card />
      <Service service={service} />
      <Footer />
    </div>
  );
};

export default HeroSection;
