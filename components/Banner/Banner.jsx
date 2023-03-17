import Image from "next/image";
import React, { useEffect } from "react";
import Typed from "typed.js";
import facebook from "../../src/images/facebookIcon.png";
import instagram from "../../src/images/instagram.png";
import twitter from "../../src/images/twitter.png";
import linkedin from "../../src/images/linkedin.png";

const Banner = () => {
  useEffect(() => {
    // Initialize a new Typed instance
    const typed = new Typed(".typing-element", {
      strings: ["Snehal Kanzariya.", "React Developer.", "Web Designer."],
      typeSpeed: 100,
      loop: true,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="banner-content pt-[5%]">
        <h3>Hi There!</h3>
        <h1 className="text-5xl font-bold my-6">
          I am <span className="typing-element text-green"></span>
        </h1>
        <p className="mb-8 w-full max-w-md text-sm text-gray font-normal tracking-wide">
          Lorem Ipsum has been the standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type
        </p>
        <div className="flex social-icon">
          <a href="#">
            <Image src={linkedin} alt="facebookIcon" width={16} height={16} />
          </a>
          <a href="#">
            <Image src={instagram} alt="facebookIcon" width={16} height={16} />
          </a>
          <a href="#">
            <Image src={twitter} alt="facebookIcon" width={16} height={16} />
          </a>
          <a href="#">
            <Image src={facebook} alt="facebookIcon" width={16} height={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
