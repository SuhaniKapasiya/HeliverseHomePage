// import React from 'react'

// const Card = ({ image, heading, description }) => {
//   return (
//     <div className="flex flex-col items-center border-[2px] p-5 rounded-md shadow-md">
//       <img src={image}  className="mb-4" />
//       <h2 className="text-xl font-semibold mb-2">{heading}</h2>
//       <p className="text-base text-center">{description}</p>
//     </div>
//   );
// };

// export default Card

// Card.js
import React from 'react';

const Card = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-center border-[2px] p-5 rounded-md shadow-md">
      <img src={image}  className="mb-4" />
      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};

export default Card;

