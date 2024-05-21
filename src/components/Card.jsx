import React from "react";

const Card = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-center border-[2px] p-5 rounded-md
     shadow-md max-w-xs mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-20">
      <img
        src={image}
        alt={heading}
        className="mb-4 w-full max-h-60 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2 text-center">{heading}</h2>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};

export default Card;
