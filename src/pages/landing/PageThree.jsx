import React from "react";
import userone from "../../assets/userone.svg";
import usertwo from "../../assets/usertwo.svg";
import userthree from "../../assets/userthree.svg";
import bg2 from "../../assets/bg2.svg";

function PageThree() {
  const data = [
    {
      id: 1,
      img: userone,
      name: "Mrs. Okeke",
      description: "Banana planter",
      comment:
        "I had issues with knowing the correct seasons to harvest and this made me to harvet mostly at the wrong time. Thank God for this Harbest System. Now i know",
      justify: "self-start",
    },
    {
      id: 2,
      img: usertwo,
      name: "Mrs. Zainab Ali",
      description: "Watermelon farmer",
      comment:
        "So easy to use and absolutely accurate! Now I am a happy farmer",
      justify: "self-end",
    },
    {
      id: 3,
      img: userthree,
      name: "Mr. Ahmed Tayo",
      description: "Beans farmer",
      comment:
        "I thought this was another random website but to my shock it is serving me very well and I have told all my friends.",
      justify: "self-start",
    },
  ];
  return (
    <div className="pt-[5.12rem] pb-[3rem] px-[1.5rem]  ">
      <h2 className="font-semibold text-center text-4xl mb-[3.18rem]">
        What others are saying
      </h2>
      <div className="flex items-center">
        <img src={bg2} alt="" className="w-[40rem] h-[45rem] " />
        <div className="flex flex-col gap-[1.75rem] w-[50%] ">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`bg-[#E2FFCB] rounded-[1.25rem] py-[1.58rem] px-[1.52rem] w-[33rem] h-[19rem] ${item.justify} `}
              >
                <div className="flex items-center gap-2 mb-[1.18rem] ">
                  <img src={item.img} alt="" className="w-[7rem] " />
                  <div>
                    <h3 className="font-bold text-2xl">{item.name}</h3>
                    <h4 className="font-medium">{item.description}</h4>
                  </div>
                </div>
                <p>{item.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PageThree;
