"use client";

import MainSection from "@/components/MainSection";
import Pill from "@/components/Pill";
import Project from "@/components/Project";
import { useState } from "react";

const categories = ["UX/UI", "Branding", "Print", "Illustration"];

export default function Home() {
  const [activePill, setActivePill] = useState<string[]>([]);
  const handlePillClick = (text: string) => {
    if (activePill.includes(text)) setActivePill(activePill.filter((pill) => pill !== text));
    else setActivePill([...activePill, text]);
  };
  return (
    <>
      <MainSection />
      <div className="flex flex-col items-center gap-6 py-12 max-w-full lg:w-10/12">
        <div className="flex gap-6 items-center h-24 overflow-x-auto w-full hiddeScroll px-4 border-black border-t lg:justify-center">
          {categories.map((category) => (
            <Pill
              key={category}
              text={category}
              active={activePill.includes(category)}
              onClick={handlePillClick}
            />
          ))}
        </div>
        <div className="projects w-full px-4">
          <Project data={{ name: "Project name", image: "http://lorempixel.com.br/1000/500" }} />
          <Project data={{ name: "Project name", image: "http://lorempixel.com.br/1000/500" }} />
          <Project data={{ name: "Project name", image: "http://lorempixel.com.br/1000/500" }} />
        </div>
        <div className="py-12">
          <button className="rounded-full w-[207px] py-3 text-base font-semibold bg-gray-200">
            Load more
          </button>
        </div>
      </div>
    </>
  );
}
