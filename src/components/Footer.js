import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto  bg-theme1 text-white py-5">
      <div className=" grid md:grid-cols-3 gap-1  lg:px-24 px-5 lg:justify-items-center">
        <div>
          <h1 className="text-2xl font-medium py-1 font-poppins capitalize">
            {" "}
            CATEGORIES
          </h1>
          <ul className="text-sm lg:text-md">
            <li className="">
              <span className="cursor-pointer hover:border-b">
                Health & Home
              </span>
            </li>
            <li className="">
              <span className="cursor-pointer hover:border-b">Salon & Spa</span>
            </li>
            <li className="">
              <span className="cursor-pointer hover:border-b">
                Physiotherapy
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-medium py-1 font-poppins capitalize">
            UseFul Links
          </h1>
          <ul className="text-sm lg:text-md">
            <li className="">
              <span className="cursor-pointer hover:border-b">
                Health & Home
              </span>
            </li>
            <li className="">
              <span className="cursor-pointer hover:border-b">Salon & Spa</span>
            </li>
            <li className="">
              <span className="cursor-pointer hover:border-b">
                Physiotherapy
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-medium py-1 font-poppins capitalize">
            Contact Us
          </h1>
          <ul className="text-sm lg:text-md">
            <li className="">
              <span className="cursor-pointer hover:border-b">
                Support@gmail.com
              </span>
            </li>
            <li className="">
              <span className="cursor-pointer hover:border-b">
                +91 98734668735
              </span>
            </li>
            <li className="">
              <span className="cursor-pointer hover:border-b">
                Need assistance? Give us a call.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-white/75 border-b-[1px] py-3"></p>
      <div className="flex justify-center items-center px-5 lg:px-24 text-sm mt-3">
        &copy; {currentYear}, All Rights Reserved Quick Home Services. Designed
        by Mighty Warner’s LLC.
      </div>
    </div>
  );
};

export default Footer;
