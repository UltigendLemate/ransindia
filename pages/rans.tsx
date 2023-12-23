import DefaultLayout from "@/layouts/default";
import React from "react";
import data from "@/public/rans/image_data.json";
import { Image, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Skeleton } from "@nextui-org/react";

type Props = {};

const Rans = (props: Props) => {
  const [selected, setSelected] = useState("Bakery");
  const categories = [
    "Bakery",
    "Cold Equipment",
    "Cooking",
    "Hygiene",
    "Pantry & Fast Food",
    "Preparation",
    "Wash Up",
    "Service",
  ];
  // console.log(data)
  return (
    <DefaultLayout>
      <section className=" ">
        {/* hero section  */}
        <div className="h-[50vh] md:h-[100vh]  text-white relative bg-rans-hero bg-center bg-no-repeat bg-cover ">
          <div className="h-full w-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="text-center text-white leading-[35px] md:leading-none lg:text-6xl md:text-5xl text-2xl font-semibold space-y-5">
              <div className="pt-[15vh] md:pt-[30vh]">
                <div className="flex justify-center">
                  <Image
                    src={"/images/rans.png"}
                    height={60}
                    width={200}
                    alt="rans"
                    className="ml-auto mr-auto md:mb-3 scale-75 md:scale-100 bg-blend-overlay rounded-sm"
                  />
                </div>
                <h1>The Premium</h1> <h1>Foodservice Equipments</h1>
              </div>
            </div>
          </div>
        </div>
        {/* products sectioon */}

        <div className="max-w-screen-xl ml-auto mr-auto">
          {/* products */}
          <div className="hidden lg:block">
            <ul className="flex  space-x-10 justify-center text-lg my-10">
              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`${
                    selected == item
                      ? "text-blue-500 border-b-blue-500 border-b-2"
                      : ""
                  }cursor-pointer hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center py-5 lg:hidden">
            <Select
              label="Choose Category"
              className="max-w-xs"
              defaultSelectedKeys={["Bakery"]}
            >
              {categories.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                  onClick={() => setSelected(item)}
                  className={`${
                    selected == item
                      ? "text-blue-500 border-b-blue-500 border-b-2"
                      : ""
                  }cursor-pointer hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500`}
                >
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
          {/* <div className='bg-white aspect-square border-2 border-black '> */}
          {/* filter data for category = Bakery and then display image for all  */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-2 items-center  gap-5 px-5">
            {data
              .filter((item) => item.category === selected)
              .map((item) => (
                <div
                  key={item.path}
                  className="border text-center p-5 shadow-md rounded-md  ml-auto mr-auto w-full"
                >
                  <div className="flex justify-center">
                    <Image
                      isZoomed={true}
                      width={300}
                      className="aspect-square  object-contain w-full ml-auto mr-auto"
                      src={`/rans/${item.path}`}
                      alt={item.name}
                    />
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
          </div>
        </div>
        {/* <Image
                width={300}
                className='aspect-square border-2 border-black object-contain bg-white'
                src={`/rans/${data[0].path}`}
                
                alt={data[0].name}
            /> */}
      </section>
    </DefaultLayout>
  );
};

export default Rans;
