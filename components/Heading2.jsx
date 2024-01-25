import React from "react";

export default function Heading2(props) {
  return (
    <div className="text-2xl md:text-3xl font-roboto font-[400] text-dgray">
      {props.title}
    </div>
  );
}
