import React from 'react';
import Underline from './Underline';
import { Button } from './ui/Shinybuttons';
import { skills } from '@/lib';

const Skills = () => {
  return (
    <div className="w-full py-20" id="skills">
      <div className="flex justify-center font-bold text-4xl md:text-5xl title">
        <h1>Check Out My</h1>
        <span className="text-lightpurple">&nbsp;Skills</span>
      </div>
      <Underline />
      <div className="flex flex-wrap px-4 gap-3  items-center justify-center shiny">
        {skills.map((name, index) => (
          <Button
            key={index}
            borderRadius="1.5rem" // Adjusted the border radius for smaller buttons
            className="bg-darkpurple text-black dark:text-white border-lightpurple dark:border-slate-800 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base"
          >
            {name.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
