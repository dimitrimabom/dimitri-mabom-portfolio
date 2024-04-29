import { Section } from "./Section";
import { NextIcon } from "./icons/NextIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";

export const Technologie = () => {
  return (
    <Section>
      {/* <h1 className=" text-5xl">Technologie</h1> */}
      <div className="flex content-center justify-around py-5 gap-2">
        <a className="flex content-center justify-center flex-col items-center" href="">
        <ReactIcon size={"55px"}/>
          {/* <span>React</span> */}
        </a>

        <a className="flex content-center justify-center flex-col items-center" href="">
        <NextIcon size={"45px"}/>
          {/* <span>NextJs</span> */}
        </a>

        <a className="flex content-center justify-center flex-col items-center" href="">
        <TypescriptIcon size={"45px"}/>
          {/* <span>TypeScript</span> */}
        </a>

        <a className="flex content-center justify-center flex-col items-center" href="">
        <TailwindIcon size={"60px"}/>
          {/* <span>Tailwind CSS</span> */}
        </a>
      </div>
    </Section>
  );
};
