import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import Magicbutton from "./ui/Magicbutton";
import Underline from "./Underline";

const Projects = () => {
  return (
    <div className="mt-12 w-full py-20 project">
      {/* Large screen layout */}
      <div className=" md:block">
       <div className="flex justify-center font-bold text-4xl md:text-5xl title ">
        <h1>Check Some Of My</h1>
        <span className="text-lightpurple">&nbsp;Projects</span>
      </div>
        <div className="underline">
          <Underline />
        </div>

        {/* Project 1 */}
        <div className="flex flex-row mt-12 mt-[100px] project1">
          <div className="w-[60%] flex flex-col items-center text-center px-12 pt-10 projectcolumn">
            <h1 className="text-3xl font-bold">Travel Website</h1>
            <p className="font-thin mt-2 text-[14px] px-10">
              It is a responsive UI/UX based travel website designed with Next.js and Tailwind CSS. Its designed to showcase its application of getting the best possible routes for your destinations and visits.
            </p>
            <div className="mt-5 mb-5">
            <a href="https://travel-website-one-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Magicbutton text="Check Live" icon={<FaLocationArrow />} />
            </a>
            </div>
          </div>
          <div className="w-[40%] rounded-xl projectimg">
            <Image src="/travel.png" height={1050} width={500} alt="projectimg" className="w-full h-auto object-fit rounded-xl" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-row mt-10 mt-[200px]  project1">
          <div className="w-[60%] flex flex-col items-center text-center px-12 pt-10 projectcolumn">
            <h1 className="text-3xl font-bold">Todomon</h1>
            <p className="font-thin mt-2 text-[14px] px-10">
              Welcome to my to-do list! This is where I organize my tasks, goals, and daily activities to stay productive and focused.
            </p>
            <div className="mt-5 mb-5">
            <a href="https://todomon-one.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Magicbutton text="Check Live" icon={<FaLocationArrow />} />
            </a>
            </div>
          </div>
          <div className="w-[40%] rounded-xl projectimg">
            <Image src="/todo.png" height={650} width={600} alt="projectimg" className="rounded-xl" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-row mt-10 mt-[200px] project1">
          <div className="w-[40%] rounded-xl projectimg">
            <Image src="/apple.png" height={500} width={450} alt="projectimg" className="rounded-xl w-full h-auto " />
          </div>
          <div className="w-[60%] flex flex-col items-center text-center px-12 pt-10 projectcolumn">
            <h1 className="text-3xl font-bold">Apple Website</h1>
            <p className="font-thin mt-2 text-[14px] px-10">
              Explore innovation at its finest with Apple, where sleek design meets cutting-edge technology.
            </p>
            <div className="mt-5 mb-5">
            <a href="https://apple-website-topaz.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Magicbutton text="Check Live" icon={<FaLocationArrow />} />
            </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-row mt-10  mt-[200px] project1">
          <div className="w-[40%] rounded-xl projectimg">
            <Image src="/weathermon.png" height={500} width={450} alt="projectimg" className="rounded-xl w-full h-auto " />
          </div>
          <div className="w-[60%] flex flex-col items-center text-center px-12 pt-10 projectcolumn">
            <h1 className="text-3xl font-bold">Weathermon</h1>
            <p className="font-thin mt-2 text-[14px] px-10">
              Prepare for any forecast with Weathermon, your trusted weather companion.
            </p>
            <div className="mt-5 mb-5">
            <a href="https://github.com/Kushagrpaliwal/Weathermon" target="_blank" rel="noopener noreferrer">
              <Magicbutton text="Check Live" icon={<FaLocationArrow />} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
