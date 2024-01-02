import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { TestReport } from "../constants/index";
import doctor from "../img/drbackground.png";

const Card = () => {
  const items = [
    "HIV",
    "Fever",
    "Anti PVR",
    "CT Scane",
    "HIV",
    "Fever",
    "Anti PVR",
    "CT Scane",
  ];
  const [test, setTest] = useState(TestReport);
  return (
    <div className="container mx-auto mt-10 md:mt-14 ">
        <div className="md:flex justify-between h-full md:h-[80vh] ">
          <div className="w-full md:w-[45%] h-full flex ">
            <img className="h-full w-max  " src={doctor} alt="doctor" />
          </div>
          <div className="w-full md:w-[60%] relative">
            <div className="">
              <div className="text-start mt-[20%]">
                <h1 className="text-2xl md:text-4xl font-raleway font-bold ">
                  Should You Get Tested?
                </h1>
                <p className="font-raleway text-[16px] py-4 ">
                  To set a background image in a React application, you can use
                  the inline style attribute or create a CSS file and import it
                  into your React component. Here's an example of how you can
                  set a background image using inline styles
                </p>
              </div>
              <div className="bg-theme1 p-2 md:p-6 rounded-sm  absolute bottom-0 inset-x-0">
                <h2 className="text-start font-raleway font-bold text-whitecolor text-2xl">
                  Infection we test for!
                </h2>
                <ul className="grid grid-cols-2 lg:grid-cols-4 text-start py-6">
                  {items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="font-semibold text-sm text-whitecolor"
                      >
                        &bull; {item}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex justify-start">
                  <button className="bg-whitecolor text-black  text-sm rounded-[20px] md:text-sm leading-none font-semibold px-6 py-2">
                    Book An Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-[5%] ">
        {test.map((item, index) => (
          <div className="shadow-lg shadow-slate-400 rounded-xl pb-4">
            <div className="bg-theme1 p-10 rounded-t-3xl">
              <h2 className="text-center text-whitecolor font-raleway font-bold">
                {item.testName}
              </h2>
            </div>
            <div className="flex justify-center items-center ">
              <div className="border-2 border-theme1 bg-white rounded-full h-20 w-20 -mt-[10%]">
                <img
                  className="h-full w-full p-6 object-cover"
                  src={item.logo}
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <h1 className="font-raleway text-[18px] text-center font-bold py-5">
                {item.offers}
              </h1>
              <div className="flex justify-between px-6 py-1 ">
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR1.testTypeName}
                </p>
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR1.testTypeValue}
                </p>
              </div>
              <hr />
              <div className="flex justify-between px-6 py-1">
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR2.testTypeName}
                </p>
                <p className="font-raleway text-[14px] font-semibold">
                  {item.testTypeR2.testTypeValue}
                </p>
              </div>
              <hr />
              <div className="flex justify-between px-6 py-1">
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR3.testTypeName}
                </p>
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR3.testTypeValue}
                </p>
              </div>
              <hr />
              <div className="flex justify-between px-6 py-1">
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR4.testTypeName}
                </p>
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR4.testTypeValue}
                </p>
              </div>
              <hr />
              <div className="flex justify-between px-6 py-1">
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR5.testTypeName}
                </p>
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR5.testTypeValue}
                </p>
              </div>
              <hr />
              <div className="flex justify-between px-6 py-1">
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR6.testTypeName}
                </p>
                <p className="font-raleway text-[14px] font-semibold text-gray-900">
                  {item.testTypeR6.testTypeValue}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center my-6">
              <button className="md:w-1/2 py-1 px-2 bg-theme1 text-lg text-white rounded-lg mx-auto flex justify-center items-center">
                <span>Book Now</span> <MdArrowRightAlt className="pt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
