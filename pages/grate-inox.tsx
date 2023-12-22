import DefaultLayout from "@/layouts/default";
import React from "react";
import data from "@/public/rans/image_data.json";
import { Image } from "@nextui-org/react";
import { useState } from "react";

type Props = {};

const GrateInox = (props: Props) => {
  // console.log(data)
  return (
    <DefaultLayout>
      {/* <div>this is test</div> */}
      <section className="">
        <div className="h-[50vh] md:h-[100vh]  text-white relative bg-grate-hero bg-center bg-no-repeat bg-cover ">
          <div className="h-full w-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="text-center text-white leading-[35px] md:leading-none lg:text-6xl md:text-5xl text-4xl font-semibold space-y-5">
              <div className="pt-[15vh] md:pt-[30vh]">
                <div className="flex justify-center">
                  <Image
                    src={"/images/grate-inox.png"}
                    height={60}
                    width={200}
                    alt="rans"
                    className="ml-auto mr-auto md:mb-3 scale-75 md:scale-100 bg-white rounded-sm"
                  />
                </div>
                <h1>Stainless Steel</h1> <h1>Drainage Systems</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='bg-white aspect-square border-2 border-black '> */}
        {/* filter data for category = Bakery and then display image for all  */}
        <div className="max-w-screen-xl ml-auto mr-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 items-center  gap-5 px-5 my-10">
            {data
              .filter((item) => item.category === "Grate Inox")
              .map((item) => (
                <div
                  key={item.path}
                  className="border text-center p-5 shadow-md rounded-md  ml-auto mr-auto w-full h-full"
                >
                  <div className="flex justify-center">
                    <Image
                      width={300}
                      className="aspect-square  object-contain bg-white w-full ml-auto mr-auto"
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

export default GrateInox;
