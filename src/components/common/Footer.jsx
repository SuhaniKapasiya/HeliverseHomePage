import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#F87516] to-[#5E11FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-white">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            © 2023 Copyright. All rights reserved by QodeMatrix
          </div>
          <div className="flex gap-2">
            <p className="hover:text-richblack-25 text-richblack-100">
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
