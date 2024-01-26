import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
export default function WhyUsCard({ props }) {
  return (
    <Card className={`p-4 md:p-5 ${props.bgColor} rounded-none`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-dgray">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mr-auto ml-auto "
          src={`/images/${props.image}`}
          width={100}
          height={100}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 font-roboto">
        <h1 className="text-center text-lg lg:text-4xl  font-normal py-2">
          {props.heading}
        </h1>
        <p className="md:text-lg md:py-2 font-light">{props.desc}</p>
      </CardBody>
    </Card>
  );
}
