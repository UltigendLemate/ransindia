import React from "react";
import CountUp from "react-countup";

export default function CountCard({ props }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-10 px-2 w-full lg:w-full  md:py-10 p-3 shadow-lg bg-blue-200 font-semibold">
      <CountUp
        end={props.count}
        suffix="+"
        className="text-black text-xl sm:text-2xl md:text-5xl "
        duration={2}
        enableScrollSpy={true}
        scrollSpyDelay={10}
      />
      <h1 className="text-xl sm:text-2xl font-semibold md:text-4xl">
        {props.title}
      </h1>
    </div>
  );
}
