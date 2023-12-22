import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
export default function WhyUsCard({ props }) {
  return (
    <Card className={`p-4 md:p-5 ${props.bgColor}`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mr-auto ml-auto"
          src={`/images/${props.image}`}
          width={100}
          height={100}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h1 className="text-center text-4xl font-semibold py-2">
          {props.heading}
        </h1>
        <p className="text-lg py-2">{props.desc}</p>
      </CardBody>
    </Card>
  );
}
