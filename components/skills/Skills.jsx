import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import html from "../../src/assets/images/html-5.png";
import css from "../../src/assets/images/css-3.png";
import github from "../../src/assets/images/github.png";
import js from "../../src/assets/images/js.png";
import mui from "../../src/assets/images/muilogo.png";
import reacticon from "../../src/assets/images/reacticon.png";
import reduxicon from "../../src/assets/images/redux.png";
import tailwind from "../../src/assets/images/tailwind.png";

const Skills = () => {
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
    <>
      <section id="skills" ref={boxesRef} className="skills">
        <div className="main-width">
          <div className="title fadeIn">
            <h2 className="no-pt mx-auto text-center font-bold">
              Skills & Technology
            </h2>
          </div>
          <div className="skills-level">
            <div
              ref={boxesRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 py-10"
            >
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={html} alt="htmlicon" className="h-7 w-7" />
                <h4>HTML5</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={css} alt="htmlicon" className="h-7 w-7" />
                <h4>CSS3</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={js} alt="htmlicon" className="h-7 w-7" />
                <h4>Javascript</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={tailwind} alt="htmlicon" className="h-7 w-7" />
                <h4>Tailwind CSS</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={mui} alt="htmlicon" className="h-7 w-7" />
                <h4>Material-UI</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={reacticon} alt="htmlicon" className="h-7 w-7" />
                <h4>ReactJs</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={reduxicon} alt="htmlicon" className="h-7 w-7" />
                <h4>Redux</h4>
              </div>
              <div className="skill flex items-center fadeIn pl-10 gap-5">
                <Image src={github} alt="htmlicon" className="h-7 w-7" />
                <h4>Git</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
