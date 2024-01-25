import React from "react";

export default function More(props) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-[50px] border border-redred"></div>
      <div
        className={`text-base md:text-base font-poppins ${
          props.bold ? "font-semibold" : "font-[200]"
        }  text-black hover:text-redred cursor-pointer`}
      >
        {props.title}
      </div>
    </div>
  );
}
