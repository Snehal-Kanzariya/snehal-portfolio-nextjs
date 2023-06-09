import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profile from "../../src/assets/images/snehal.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Zigzag = () => {
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

  return (
    <section id="about">
      <div className="main-width items-center lg:flex lg:justify-center lg:gap-14">
        <div className="about-img">
          <Image
            src={profile}
            alt="profile picture"
            className="rounded-xl w-full lg:w-[450px] h-[450px] object-cover"
          />
        </div>
        <div className="about-content title lgscreen:pt-3" ref={boxesRef}>
          <h2 className="fadeIn font-bold">About Me </h2>
          <h3 className="fadeIn pt-2"> Developer & Designer </h3>
          <p className="fadeIn">I am Snehal</p>
          <button
            className="btn-green mt-3 lg:mt-4 mr-2 lg:mr-3 fadeIn"
            type="button"
          >
            Let us Talk
          </button>
          <Link
            href="https://www.canva.com/design/DAFdklNl0ko/nUrSfntnHQiPGHLklO9mCg/view?utm_content=DAFdklNl0ko&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            downloaded="true"
            target="_blank"
          >
            <button className="fadeIn mt-4 btn-green" type="button">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Zigzag;
