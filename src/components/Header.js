import React from "react";

export default function Header({ myScore, myHighScore }) {
  return (
    <div className="flex justify-center py-6">
      <div className="p-3 border-4 border-slate-400 lg:w-1/3 rounded-lg flex flex-col justify-center items-center gap-2 drop-shadow-lg bg-slate-700 hover:border-red-400">
        <h1 className="text-white lg:text-4xl text-xl"> Memory Game </h1>
        <div className="flex w-full lg:justify-around gap-5 lg:gap-0 ">
          <p className="headerScore">
            {" "}
            Score : <span className="scoreValue">{myScore} </span>{" "}
          </p>
          <p className="headerScore">
            {" "}
            High Score : <span className="scoreValue">
              {" "}
              {myHighScore}{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
