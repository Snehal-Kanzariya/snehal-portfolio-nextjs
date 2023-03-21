import Image from "next/image";
import Typed from "typed.js";
import facebook from "../../src/assets/images/facebookIcon.png";
import instagram from "../../src/assets/images//instagram.png";
import twitter from "../../src/assets/images//twitter.png";
import linkedin from "../../src/assets/images//linkedin.png";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const boxesRef = useRef(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray(boxesRef.current);
    boxes.forEach((fadeIn, i) => {
      const anim = gsap.fromTo(
        fadeIn,
        { autoAlpha: 0, y: 40 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: fadeIn,
        animation: anim,
        toggleActions: "play none none none",
        once: true,
      });
    });
  }, []);

  // typejs
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
    <div ref={boxesRef} className="banner-content pt-[5%]">
      <h3 className="fadeIn">Hi There!</h3>
      <h1 className="main-title text-5xl font-bold my-6 text-white fadeIn">
        I am <span className="typing-element text-green"></span>
      </h1>
      <p className="mb-8 w-full max-w-md text-sm text-gray font-normal tracking-wide fadeIn">
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
      </p>
      <div className="flex social-icon fadeIn">
        <a href="https://www.linkedin.com/in/snehal-kanzariya/" target="_blank">
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
      <button className="btn-green fadeIn" type="button">
        More About Me
      </button>
    </div>
  );
};

export default Banner;
