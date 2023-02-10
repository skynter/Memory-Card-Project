import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex justify-center items-center py-2 bg-slate-600">
      <a href="https://github.com/skynter" target="_blank">
        {" "}
        <AiFillGithub className="text-3xl" />
      </a>
      <p className="text-xl text-white p-2"> Copyright © 2023 skynter</p>
    </div>
  );
}
