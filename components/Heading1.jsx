import React from "react";

export default function Heading1(props) {
  return (
    <div className="text-2xl md:text-4xl font-roboto font-[300] text-dgray">
      {props.title}
    </div>
  );
}
