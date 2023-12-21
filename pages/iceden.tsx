import DefaultLayout from '@/layouts/default'
import React from 'react'
import data from "@/public/rans/image_data.json"
import { Image } from "@nextui-org/react";
import { useState } from 'react'

type Props = {}

const Iceden = (props: Props) => {
 
    // console.log(data)
    return (
        <DefaultLayout>
            {/* <div>this is test</div> */}
            <section className='h-[90vh]'>
                idhar hero sectin kinda aega. peeche image and aage logo with ek link to download portfolio
            </section>




            {/* <div className='bg-white aspect-square border-2 border-black '> */}

            {/* filter data for category = Bakery and then display image for all  */}

<div className='grid lg:grid-cols-5 items-center mx-10 gap-3'>
            {
                data.filter((item) => item.category === "Iceden").map((item) => (
                    <div key={item.path}>
                        <Image
                            width={300}
                            className='aspect-square  object-contain bg-white'
                            src={`/rans/${item.path}`}

                            alt={item.name}
                        />
                        <p>{item.name}</p>
                    </div>
                ))
            }
            </div>
            {/* <Image
                width={300}
                className='aspect-square border-2 border-black object-contain bg-white'
                src={`/rans/${data[0].path}`}

                alt={data[0].name}
            /> */}

        </DefaultLayout>
    )
}

export default Iceden