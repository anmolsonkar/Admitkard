import React from "react";
import Typed from "react-typed";

export default function Main() {
  return (
    <div className="flex-1 overflow-y-auto text-black ">
      <div className="mt-[50px] lg:max-h-screen lg:mt-[140px]  w-full mx-auto text-center flex flex-col justify-center">
        <p className="text-[#2299E8] text-lg font-bold p-2">
          Your one-stop gateway to studying abroad!
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Study Abroad with Admitkard
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-md md:text-4xl lg:text-5xl font-medium py-4">
            What's your dream country
            <Typed
              className="text-md md:text-4xl lg:text-5xl font-bold md:pl-4 pl-1"
              strings={[
                "USA",
                "Canada",
                "Australia",
                "UK",
                "New Zealand",
                "Germany",
                "Singapore",
              ]}
              typeSpeed={100}
              backSpeed={120}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#666666]">
          Monitor the status of your applications directly on your dashboard.
        </p>
        <button className="bg-[#2299E8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
