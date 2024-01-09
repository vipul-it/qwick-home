import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TestReport } from "../constants/index";
import doctor from "../img/drbackground.png";
import Modal from "../components/Modal";

const Card = () => {
  // we test for
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

  const test = TestReport;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    
      <div className="container mx-auto px-5 lg:pl-12 ">
        
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 gap-3 lg:mt-14 mt-10">
          <div className="w-full h-full lg:col-span-5 ">
            <img className="w-full h-full" src={doctor} alt="doctor" />
          </div>
          <div className=" lg:col-span-7">
            <div className="">
              <div className="text-start lg:mt-[15%] mt-4 ">
                <h1 className="text-2xl md:text-4xl font-raleway font-bold my-2">
                  Should You Get Tested?
                </h1>
                <p className="font-raleway text-gray-900 text-[14px] md:text-lg font-medium lg:my-2 pr-5 lg:pr-12">
                  To set a background image in a React application, you can use
                  the inline style attribute or create a CSS file and import it
                  into your React component. Here's an example of how you can
                  set a background image
                </p>
                <div className="bg-theme1 p-10 md:p-10 rounded-sm  mt-10">
                  <h2 className="text-start font-raleway font-bold text-whitecolor text-2xl">
                    Infection we test for!
                  </h2>
                  <ul className="grid grid-cols-2 lg:grid-cols-4 text-start py-2">
                    {items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="font-medium my-1 font-poppins text-whitecolor"
                        >
                          &bull; {item}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-start">
                    <button onClick={handleOpenModal} className="bg-whitecolor text-black hover:bg-theme1light text-sm rounded-[20px] md:text-sm leading-none font-semibold px-6 py-3 mt-4">
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== card====  */}
      <div className="container mx-auto px-5 lg:px-12 ">
        <div className="bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:my-16 my-12">
          {test.map((item, index) => (
            <div
              key={index}
              className="shadow-lg rounded-2xl hover:shadow-slate-400 pb-4 hover:bg-slate-50/50"
            >
              <div className="bg-theme1 py-10 px-5 border rounded-t-2xl">
                <h2 className="text-center text-xl text-whitecolor font-raleway pb-4 font-bold ">
                  {item.testName}
                </h2>
              </div>
              <div className="flex justify-center items-center ">
                <div className="border-[3px] border-theme1 bg-white rounded-full h-20 w-20 -mt-10">
                  <img
                    className="h-full w-full p-5 object-cover"
                    src={item.logo}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="font-raleway text-[18px] text-center font-bold py-5">
                  {item.offers}
                </h1>
                <div className="flex justify-between px-6 py-1 ">
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR1.testTypeName}
                  </p>
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR1.testTypeValue}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between px-6 py-1">
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR2.testTypeName}
                  </p>
                  <p className="font-poppins text-[14px] font-semibold">
                    {item.testTypeR2.testTypeValue}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between px-6 py-1">
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR3.testTypeName}
                  </p>
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR3.testTypeValue}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between px-6 py-1">
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR4.testTypeName}
                  </p>
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR4.testTypeValue}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between px-6 py-1">
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR5.testTypeName}
                  </p>
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR5.testTypeValue}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between px-6 py-1">
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR6.testTypeName}
                  </p>
                  <p className="font-poppins text-[14px] font-semibold text-gray-900">
                    {item.testTypeR6.testTypeValue}
                  </p>
                </div>
              </div>
              <div className=" my-6">
                <button onClick={handleOpenModal} className="w-8/12 py-2 px-2 flex justify-center items-center bg-theme1 hover:bg-theme1h text-lg text-white rounded-lg mx-auto">
                  <span>Book Now</span> <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
