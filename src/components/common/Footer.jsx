import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#F87516] to-[#5E11FF]">
      <div className="max-w-6xl h-14 mx-auto flex justify-center items-center">
        <div className="flex flex-row justify-between items-center w-full text-white">
          <div>© 2023 Copyright. All rights reserved by QodeMatrix</div>
          <div className="flex gap-2">
            <p className=" hover:text-richblack-25 text-richblack-100">
              Documentation
            </p>
            <p className="hover:text-richblack-25 text-richblack-100">
              Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
