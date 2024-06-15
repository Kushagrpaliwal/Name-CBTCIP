import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/Magicbutton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">


      <div className="flex flex-col items-center">
        <h1 className="heading text-4xl font-bold text-center lg:max-w-[45vw]">
          Transform Your Digital Presence With Our Expertise
        </h1>
        <p className="text-white-200 md:mt-6 my-5 text-center font-thin">
          Contact me today to start a conversation about reaching your goals together.
        </p>
        <a href="mailto:paliwalkusahgra07@gmail.com">
          <MagicButton
            text="Connect With Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kushagra Paliwal
        </p>

        <div className="flex items-center md:gap-3 gap-6 footer">

          <a href="https://github.com/Kushagrpaliwal">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <Image src="/git.svg" height={25} width={25} alt="social" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/kushagra-paliwal/">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <Image src="/link.svg" height={25} width={25} alt="social" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;