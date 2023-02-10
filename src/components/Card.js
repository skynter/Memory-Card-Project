import { click } from "@testing-library/user-event/dist/click";
import React from "react";

export default function Card({
  bgMainColor,
  bgSecondaryColor,
  cardTitle,
  myImg,
  clickStatus,
  number,
  myFn,
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center lg:gap-3 gap-1 border-2  border-slate-400 text-white rounded-lg ${bgMainColor} cursor-pointer hover:border-red-400 hover:border-4`}
      onClick={myFn}
      id={clickStatus}
      number={number}
    >
      <div
        className={`${bgSecondaryColor} lg:h-3/4 lg:w-5/6 sm:max-md:w-36 md:max-lg:w-44 w-24 h-28 rounded-lg flex justify-center items-center`}
        id={clickStatus}
        number={number}
      >
        <img
          src={myImg}
          className="w-[85%] h-[85%] rounded-lg"
          id={clickStatus}
          number={number}
        />
      </div>
      <p
        className="text-xs text-center lg:text-xl"
        id={clickStatus}
        number={number}
      >
        {" "}
        {cardTitle}{" "}
      </p>
    </div>
  );
}
