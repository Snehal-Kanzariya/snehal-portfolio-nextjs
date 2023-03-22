import Image from "next/image";
import profile from "../../src/assets/images/snehal.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import project1 from "../../src/assets/images/foodie.png";
import { useEffect, useRef } from "react";
import Link from "next/link";

const ProjectZigzag = () => {
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
      <section className="projects" id="project">
        <div className="main-width">
          <div ref={boxesRef} className="title pb-10 fadeIn">
            <h2 className="no-pt mx-auto text-center font-bold">Projects</h2>
          </div>
          <div className="project grid grid-cols-1 gap-8 lg:gap-12 lg:pt-[88px]">
            <div
              ref={boxesRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center lg:pb-10"
            >
              <div className="img relative inline-block w-full overflow-hidden pt-[55.87%] align-top">
                <Image
                  src={project1}
                  alt="project1"
                  className="absolute rounded-xl inset-0 block h-full w-full object-cover fadeIn"
                />
              </div>
              <div className="project-info text-center fadeIn">
                <h3 className="project-name fadeIn">Foodie</h3>
                <div className="pro-desc fadeIn">
                  <p className="pt-2">
                    It was my first react web application project that I created
                    during my namste react live cource I use swiggy public api
                    for data I use redux (global level manage data) and I use
                    parcel (bunddler) in this project I Implement tailwind css
                    for desining layout.
                  </p>
                </div>
                <div className="mt-5 fadeIn">
                  <Link
                    href="https://github.com/Snehal-Kanzariya/namste-react-practice"
                    target="_blank"
                  >
                    <button type="button" className="btn-green fadeIn">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              ref={boxesRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center lg:pb-10"
            >
              <div className="img fadeIn lg:order-1 fadeIn relative inline-block w-full overflow-hidden pt-[55.87%] align-top">
                <Image
                  src={project1}
                  alt="project1"
                  className="absolute inset-0 block h-full w-full object-cover"
                />
              </div>
              <div className="project-info text-center fadeIn">
                <h3 className="project-name fadeIn">Foodie</h3>
                <div className="pro-desc pt-3 fadeIn">
                  <p className="fadeIn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi
                    ut tortor nec nulla commodo malesuada sit amet vel lacus.
                    Fusce eget efficitur libero. Morbi dapibus porta quam
                    laoreet placerat.
                  </p>
                </div>
                <div className="mt-5">
                  <button type="button" className="btn-green fadeIn">
                    <a
                      href="https://github.com/Snehal-Kanzariya/namste-react-practice"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectZigzag;
