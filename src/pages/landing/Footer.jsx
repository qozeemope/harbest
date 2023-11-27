import React from "react";

function Footer() {
  return (
    <footer className="bg-[#408D03] text-white py-[2.19rem] px-[12.50rem] w-full overflow-hidden  ">
      <div className="bg-[#FFFFFF33] flex px-[1.37rem] py-[1.25rem] rounded-[0.93rem] gap-[1.69rem] items-center justify-between mb-[3.12rem] ">
        <p className="text-lg font-medium ">Receive Instant notifications</p>
        <div className="bg-white py-[1.06rem] px-[1.44rem] rounded-[0.625rem] ">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-transparent border-none outline-none text-black mr-[1.25rem]"
          />
          <button className="bg-[#408D03] text-white w-[12.43rem] h-[2.75rem] rounded-[0.312rem] text-[1.25rem] font-medium ">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold text-xl">CONTACT</h4>
          <p>@Harbest.info</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-xl text-[#D9D9D9] ">PAGES</h4>
          <p>Home</p>
          <p>Planting Season</p>
          <p>Testimonials</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-xl text-[#D9D9D9] ">SOCIALS</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-xl text-[#D9D9D9] ">GET TO KNOW US</h4>
          <p>About us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
