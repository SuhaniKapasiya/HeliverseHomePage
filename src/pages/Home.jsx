import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import MotionArt_Effect from "../assets/MotionArtEffect-logo.png";
import logo from "../assets/motionarteffect-img2.png";
import image1 from "../assets/motionarteffect-img1.png";
import image2 from "../assets/motionarteffect-img3.png";
import star_img from "../assets/motionarteffect-img4.png";
import image5 from "../assets/motionarteffect-img5.png";
import image11 from "../assets/motionarteffect-img10.png";
import image10 from "../assets/motionarteffect-img11.png";
import image8 from "../assets/motionarteffect-img8.png";
import thumb from "../assets/motionarteffect-img6.png";
import moon from "../assets/motionarteffect-img7.png";
import light from "../assets/motionarteffect-img9.png";
import Card from "../components/Card";

const cardData = [
  {
    image: thumb,
    heading: "Light Weight",
    description: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    image: moon,
    heading: "100% Responsive",
    description: "Create a consistent visual experience across all devices.",
  },
  {
    image: light,
    heading: "User Friendly Interface",
    description:
      "Ensure a smooth experience for both applicants and administrators.",
  },
];
const Home = () => {
  return (
    <div className="">
      {/* section 1 */}
      <div className="flex justify-between items-center mt-10">
        <div className="flex-shrink-0">
          <img
            src={MotionArt_Effect}
            alt="Motion Art Effect Logo"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>

        <div className="hidden lg:block">
          <button
            className="font-semibold py-3 text-richblack-900 bg-richblack-5 mr-4 mt-2
        px-10 hover:bg-transparent hover:text-richblack-5 hover:scale-105 transition-all rounded-md border-richblack-5 border"
          >
            Purchase Now
          </button>
        </div>
      </div>

      {/* section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <div className="flex flex-col left-column mb-5 md:mb-0">
          <div className="gradient-text text-2xl font-bold w-full md:w-48">
            Transform Your Website
          </div>
          <div className="text-lg md:text-base">With Motion Art Effect</div>
        </div>

        <div className="middle-column col-span-2">
          <h1 className="text-3xl md:text-5xl font-bold w-full md:w-[70%]">
            Attract Your
            <br />
            Visitors Attention
            <br />
            With Colorful
            <br />
            <span className="gradient-text">Motion Art Effect</span>
          </h1>
          <p className="text-richblack-200 text-base md:text-xl w-full md:w-[70%] mt-5 md:mt-0">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </section>

      {/* section 3 */}
      <section className="mt-16 mb-16">
        <h2 className="text-2xl text-center mb-16">
          Trusted by thousands of users around the world
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          <div className="flex flex-row items-center justify-center">
            <img src={logo} alt="Logo" className="mb-4" />
            <div className="flex flex-col items-center">
              <img src={star_img} alt="Star Rating" className="mb-2" />
              <p className="text-center">4.5 Score.9 Reviews</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center">
            <img src={image1} alt="Image 1" className="mb-4" />
            <div className="flex flex-col items-center">
              <img src={star_img} alt="Star Rating" className="mb-2" />
              <p className="text-center">4.5 Score.9 Reviews</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center sm:col-span-2 lg:col-span-1 lg:col-start-auto">
            <img src={image2} alt="Image 2" className="mb-4" />
            <div className="flex flex-col items-center">
              <img src={star_img} alt="Star Rating" className="mb-2" />
              <p className="text-center">4.5 Score.9 Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="mb-40">
        <div className="flex gap-5">
          <div className="flex flex-col border-[2px] border-richblack-100 p-10 rounded-md ml-10 mr-5 shadow-md">
            <h2 className="font-semibold text-3xl lg:w-[80%] text-richblack-5 ">
              Apply On Section
            </h2>
            <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-left mt-5 mb-5">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
            <img src={image10} className="mt-5 mb-5" />
          </div>

          <div className="flex flex-col border-[2px] border-richblack-100 p-10 rounded-md ml-5 mr-10 shadow-md transform translate-y-20">
            <h2 className="font-semibold text-3xl lg:w-[80%] text-richblack-5">
              Apply On Page
            </h2>
            <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-left mt-5 mb-5">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
            <img src={image11} className="mt-5 mb-5" />
          </div>
        </div>
      </section>

      {/* section 5 */}

      <section>
        <div
          className="flex flex-col border-[2px] p-10 rounded-md shadow-md mb-16 ml-10 mr-10
           border-richblack-100 justify-center items-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
          }}
        >
          <h2 className="font-semibold text-3xl lg:w-[80%] text-richblack-5 text-center">
            Supported by All Popular Browsers
          </h2>
          <p className="text-base font-medium text-richblack-300 lg:w-[95%] text-center mb-10">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <img src={image8} />
        </div>
      </section>

      {/* section 6 */}
      <section>
        <div className="flex flex-col justify-center  items-center">
          <h2 className="font-semibold text-3xl lg:w-[80%] text-richblack-5 text-center">
            {" "}
            An All-Round Plugin With Powerful Features
          </h2>
          <p className="text-base font-medium text-richblack-300 lg:w-[65%] text-center mb-10">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
      </section>

      {/* section 7 */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
