import React, { useState } from "react";
const Service = ({ service }) => {
  const [count, setCount] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const handleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <div className="md:p-5 bg-gray-50 ">
        <div className="my-8">
          <h1 className="font-raleway font-bold text-center text-4xl">
            Recomended Services
          </h1>
          <h1 className="font-raleway text-center text-gray-800 text-lg">
            Recomended Services Subtitle
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 place-items-center mx-[5%]">
          {service
            .slice(0, showAll ? service.length : count)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white w-full h-full lg:w-96 lg:h-68 border border-gray-200 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-full h-32 border-b-8 border-theme1">
                    <img
                      className="w-full h-full"
                      src={item.img}
                      alt="service"
                    />
                  </div>
                  <div className="py-6">
                    <h1 className="font-semibold text-[20px] font-raleway">
                      {item.service}
                    </h1>
                    <p className=" text-[14px] ">
                      {item.description}
                    </p>
                    <p className="text-[16px] font-bold py-2">
                      Start From-<span>{item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center my-4  ">
          {service.length > count && (
            <button
              onClick={handleShow}
              className="bg-transparent border  hover:bg-theme1 font-raleway font-bold hover:text-white border-gray-800 md:w-64  text-black text-sm  md:text-sm leading-none  px-6 py-3 mt-5"
            >
              {showAll ? "SEE LESS" : "SEE ALL"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
