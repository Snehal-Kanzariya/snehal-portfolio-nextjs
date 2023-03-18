import Image from "next/image";
import React from "react";
import project1 from "../../src/assets/images/foodie.png";

const ProjectZigzag = () => {
  return (
    <>
      <section class="projects">
        <div class="main-width">
          <div class="title pb-10 fadeIn">
            <h2 class="no-pt mx-auto text-center font-bold">Projects</h2>
          </div>
          <div class="project grid grid-cols-1 gap-8 lg:gap-12 lg:pt-[88px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center lg:pb-10">
              <div class="img relative inline-block w-full overflow-hidden pt-[55.87%] align-top">
                <Image
                  src={project1}
                  alt="project1"
                  className="absolute inset-0 block h-full w-full object-cover"
                />
              </div>
              <div class="project-info text-center fadeIn">
                <h3 class="project-name">Foodie</h3>
                <div class="pro-desc fadeIn">
                  <p className="pt-2">
                    It was my first react web application project that I created
                    during my namste react live cource I use swiggy public api
                    for data I use redux (global level manage data) and I use
                    parcel (bunddler) in this project I Implement tailwind css
                    for desining layout.
                  </p>
                </div>
                <div class="mt-5 fadeIn">
                  <button type="button" class="btn-green">
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center lg:pb-10">
              <div class="img lg:order-1 fadeIn relative inline-block w-full overflow-hidden pt-[55.87%] align-top">
                <Image
                  src={project1}
                  alt="project1"
                  className="absolute inset-0 block h-full w-full object-cover"
                />
              </div>
              <div class="project-info text-center fadeIn">
                <h3 class="project-name">Foodie</h3>
                <div class="pro-desc pt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi
                    ut tortor nec nulla commodo malesuada sit amet vel lacus.
                    Fusce eget efficitur libero. Morbi dapibus porta quam
                    laoreet placerat.
                  </p>
                </div>
                <div class="mt-5">
                  <button type="button" class="btn-green">
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
