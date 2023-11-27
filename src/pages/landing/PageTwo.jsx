import React from "react";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import onne from "../../assets/one.svg";
import twoo from "../../assets/two.svg";
import threee from "../../assets/three.svg";

function PageTwo() {
  const data = [
    {
      id: 1,
      img: one,
      heading: "Register and input your Crop Details",
      content: "Easily set up your account and input the detail of your crops.",
      justify: "self-start",
      label: onne,
    },
    {
      id: 2,
      img: two,
      heading: "Enable location access",
      content:
        "Grant permission to access your location to enable correct wheather predictions.",
      justify: "self-center",
      label: twoo,
    },
    {
      id: 3,
      img: three,
      heading: "View result",
      content: "View crop planting and harvesting report and download report",
      justify: "self-end",
      label: threee,
    },
  ];
  return (
    <div className="bg-[#FFFBA7] pt-[5.12rem] pb-[3rem] px-[1.5rem]  ">
      <h2 className="font-semibold text-center text-4xl mb-[5.81rem]">
        How it <span className="text-[#408D03] text-4xl ">works</span>
      </h2>

      <div className="flex justify-between h-[50rem]">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col items-center gap-[2rem] ${item.justify}`}
            >
              <div className="w-[25rem] h-[34.5rem] bg-[#E4FF7A] shadow-2xl rounded-[0.3125rem] ">
                <img src={item.img} alt="" className=" h-[19rem] w-full  " />
                <h6 className="px-[2rem] py-[1rem] font-semibold text-xl ">
                  {item.heading}
                </h6>
                <p className="px-[2rem] ">{item.content}</p>
              </div>
              <img src={item.label} alt="" className="w-[4rem]  " />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PageTwo;
