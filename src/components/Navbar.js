import React, { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import quickLogo from "../img/quickLogo.jpg";
import Modal from "./Modal";
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="container mx-auto bg-white sticky top-0  z-50">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className=" lg:px-12 px-4 py-4 flex justify-between items-center ">
        <div>
          <img className="lg:w-[120px] w-[100px]" src={quickLogo} alt="logo" />
        </div>

        <div className="flex gap-3">
          <div className="flex md:gap-2 items-center font-semibold text-[9px] md:text-sm leading-none">
            <div className="flex items-center cursor-pointer gap-1 lg:text-sm text-[10px]">
              <MdOutlinePhoneInTalk />
              <span className=" font-poppins lg:text-sm text-[11px]">
                7865498375
              </span>
            </div>
            <div className="hidden cursor-pointer  lg:flex items-center gap-1">
              <IoLocationOutline />
              <span className="font-poppins lg:text-sm text-[11px]">
                Send a Address
              </span>
            </div>
          </div>

          <button
            onClick={handleOpenModal}
            className="bg-theme1 hover:bg-theme1h font-poppins text-whitecolor text-[10px] md:text-sm rounded-sm  leading-none font-medium px-3 py-2.5"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
