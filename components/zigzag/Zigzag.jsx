import Image from "next/image";
import profile from "../../src/assets/images/snehal.jpeg";
import cv from "../../src/assets/images/snehal.jpeg";

const Zigzag = () => {
  return (
    <section>
      <div className="main-width items-center lg:flex lg:justify-center lg:gap-14">
        <div className="about-img">
          <Image src={profile} alt="profile picture" width={450} height={450} />
        </div>
        <div className="about-content title">
          <h2 className="fadeIn font-bold pb-5">About Me </h2>
          <h3 className="fadeIn"> Developer & Designer </h3>
          <p className="fadeIn">I am Snehal</p>
          <button className="btn-green mt-4 mr-3 fadeIn" type="button">
            Let us Talk
          </button>
          <a
            href="https://www.canva.com/design/DAFdklNl0ko/nUrSfntnHQiPGHLklO9mCg/view?utm_content=DAFdklNl0ko&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            downloaded
            target="_blank"
          >
            <button class="fadeIn mt-4 btn-green" type="button">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Zigzag;
