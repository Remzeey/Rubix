import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" bg-slate-900 text-black w-full h-24 ">
      <div className=" flex flex-row font-bold  gap-1 ">
        <div className=" rounded-3xl  m-2 ">
          <Image src={"/logo.jpg"} alt="logo" width="50" height="50" />
        </div>
        <div className="text-white  m-2 ">MAXIMUM RUBIX</div>
      </div>
    </div>
  );
};

export default Header;
