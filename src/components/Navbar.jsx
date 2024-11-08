import React from "react";
import Button from "./common/Button";

const Navbar = () => {
  return (
    <div className="flex pl-20 pr-20 p-10 justify-between ">
      <div className="flex items-center justify-between">Logo</div>
      <div className="flex justify-between gap-10 items-center">
        <p>Home </p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
        <Button
          text="CONTACT"
          bgColor="bg-red-500"
          textColor="text-white"
          width="w-40"
          height="h-12"
          onClick={() => console.log("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default Navbar;
