import React from "react";


const HeroSection = () => {
 
  // const [service, setService] = useState(Services);
  return (
    <div className="">
      
      <div
        className="lg:h-screen h-[48vh] lg:bg-hero-image lg:bg-transparent bg-slate-100 bg-contain bg-no-repeat bg-center pt-24 lg:pt-0 lg:mt-2"
      >
        <div className=" container px-5 lg:px-14 md:flex justify-between lg:h-full font-raleway ">
          <div className="flex justify-center items-center">
            <div className="text-start py-2">
              <h1 className="text-2xl py-2 md:text-4xl font-raleway font-bold">
                We are happy to help you!
              </h1>
              <p className="lg:w-8/12 text-gray-900 text-[14px] md:text-lg font-medium">
                To set a background image in a React application, you can use
                the inline style attribute or create a CSS file and import it
                into your React component. Here's an example of how you can set
                a background image using inline styles
              </p>
              <button className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
