import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg.svg";

function Hero() {
  return (
    <div
      className="w-screen h-full flex flex-col items-center justify-center pt-[5.19rem] pb-[10rem] px-[25.69rem] bg-no-repeat bg-cover text-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1 className="text-4xl  font-bold ">
        Sow Smart, Reap Big Elevate your farming experience{" "}
      </h1>
      <p className="mt-[1rem] mb-[4.5rem] ">
        Improve your crops yield by planting and harvesting <br /> at the right
        season.
      </p>
      <input
        type="text"
        placeholder="What do you want to plant?"
        className="bg-white py-[1.37rem] w-full border border-[#403E3E] shadow-xl pl-[2.19rem] "
      />
      <Link
        to="/account-setup"
        className="bg-[#408D03] text-white w-[12.43rem] h-[2.75rem] rounded-[0.312rem] text-[1.25rem] font-medium mt-[2rem] flex items-center justify-center "
      >
        <p>Get report</p>
      </Link>
    </div>
  );
}

export default Hero;
