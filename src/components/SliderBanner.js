// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import Modal from "./Modal";

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <SwiperSlide>
        <div className="container mx-auto xl:h-[80vh] z-20  lg:h-[80vh] h-[40vh] lg:bg-hero-image1 lg:bg-transparent bg-slate-100 lg:bg-cover  bg-no-repeat lg:bg-right-bottom pt-5 lg:pt-0">
          {/* modal call  */}

          <div className="px-5 lg:px-12 md:flex justify-between lg:h-full font-raleway ">
            <div className="flex justify-center items-center">
              <div className="text-start">
                <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                  We are happy to help you!
                </h1>
                <p className="lg:w-7/12 text-gray-900 text-[14px] md:text-lg font-medium">
                  To set a background image in a React application, you can use
                  the inline style attribute or create a CSS file and import it
                  into your React component. Here's an example of how you can
                  set a background image using inline styles
                </p>
                <button
                  onClick={handleOpenModal}
                  className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto xl:h-[80vh] z-20 lg:h-[80vh] h-[40vh] lg:bg-hero-image2 lg:bg-transparent bg-slate-100 lg:bg-cover  bg-no-repeat lg:bg-center pt-5 lg:pt-0">
          {/* modal call  */}

          <div className="px-5 lg:px-12 md:flex justify-between lg:h-full font-raleway ">
            <div className="flex justify-center items-center">
              <div className="text-start">
                <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                  We are happy to help you!
                </h1>
                <p className="lg:w-7/12 text-gray-900 text-[14px] md:text-lg font-medium">
                  To set a background image in a React application, you can use
                  the inline style attribute or create a CSS file and import it
                  into your React component. Here's an example of how you can
                  set a background image using inline styles
                </p>
                <button
                  onClick={handleOpenModal}
                  className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto xl:h-[80vh] z-20  lg:h-[80vh] h-[40vh] lg:bg-hero-image3 lg:bg-transparent bg-slate-100 lg:bg-cover  bg-no-repeat lg:bg-center pt-5 lg:pt-0">
          {/* modal call  */}

          <div className="px-5 lg:px-12 md:flex justify-between lg:h-full font-raleway ">
            <div className="flex justify-center items-center">
              <div className="text-start">
                <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                  We are happy to help you!
                </h1>
                <p className="lg:w-6/12 text-gray-900 text-[14px] md:text-lg font-medium">
                  To set a background image in a React application, you can use
                  the inline style attribute or create a CSS file and import it
                  into your React component. Here's an example of how you can
                  set a background image using inline styles
                </p>
                <button
                  onClick={handleOpenModal}
                  className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto xl:h-[80vh] z-20  lg:h-[80vh] h-[40vh] lg:bg-hero-image4 lg:bg-transparent bg-slate-100 lg:bg-cover  bg-no-repeat lg:bg-center pt-5 lg:pt-0">
          {/* modal call  */}

          <div className="px-5 lg:px-12 md:flex justify-between lg:h-full font-raleway ">
            <div className="flex justify-center items-center">
              <div className="text-start">
                <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                  We are happy to help you!
                </h1>
                <p className="lg:w-6/12 text-gray-900 text-[14px] md:text-lg font-medium">
                  To set a background image in a React application, you can use
                  the inline style attribute or create a CSS file and import it
                  into your React component. Here's an example of how you can
                  set a background image using inline styles
                </p>
                <button
                  onClick={handleOpenModal}
                  className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
