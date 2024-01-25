import React, { useState } from "react";
import Image from "next/image";

export default function CTA(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      className="py-2 px-3 border border-red-500 text-xl text-redred font-normal font-roboto bg-white hover:bg-redred hover:text-white duration-100 ease-in-out flex items-center space-x-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{props.title}</span>
      <span className="max-h-full ">
        <Image
          src={hover ? "/images/arrow.png" : "/images/arrowred.png"}
          height={25}
          width={25}
          alt="arrow"
          className="rotate-90"
        />
      </span>
    </button>
  );
}
