import Image from "next/image";
import React from "react";
import facebook from "../../src/assets/images/facebookIcon.png";
import instagram from "../../src/assets/images//instagram.png";
import twitter from "../../src/assets/images//twitter.png";
import linkedin from "../../src/assets/images//linkedin.png";

const ContactMe = () => {
  return (
    <>
      <section class="Contact Me">
        <div class="main-width">
          <div class="title fadeIn">
            <h2 class="no-pt mx-auto text-center font-bold">Connect Me</h2>
          </div>
          <div class="contact-inner flex flex-col items-center justify-center">
            <div class="form lg:mt-20 mb-5 p-[50px] mt-10 rounded-lg bg-blue w-full max-w-[640px]">
              <div class="name fadeIn">
                <input type="text" name="name" id="name" placeholder="name" />
              </div>
              <div class="email fadeIn">
                <input
                  type="email"
                  name="name"
                  id="name"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div class="message fadeIn">
                <textarea rows="5" cols="40" placeholder="Message"></textarea>
              </div>
              <div class="social-icon fadeIn">
                <a
                  href="https://www.linkedin.com/in/snehal-kanzariya/"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="facebookIcon"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#">
                  <Image
                    src={instagram}
                    alt="facebookIcon"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#">
                  <Image
                    src={twitter}
                    alt="facebookIcon"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#">
                  <Image
                    src={facebook}
                    alt="facebookIcon"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
              <a href="#">
                <button class="btn-green mt-5 fadeIn">Hire Me</button>
              </a>
            </div>
          </div>
          {/* <div class="copyright absolute bottom-3 fadeIn pt-5">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>
              <span class="cursor-pointer">Snehal Kanzariya</span>
              All Rights Reserved.
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactMe;
