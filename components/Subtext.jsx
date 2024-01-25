import React from "react";

export default function Subtext(props) {
  return (
    <div
      className={`text-base md:text-lg font-poppins font-[200] text-black ${
        props.smallPadding ? "pt-2" : "py-5"
      }`}
    >
      {props.title}
    </div>
  );
}
