import { Link } from "@nextui-org/link";
import Image from "next/image";
import DefaultLayout from "@/layouts/default";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="font-poppins pt-20">
        {/* who we are */}
        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-[1180px] ml-auto mr-auto grid ">
            <h4 className="text-dgray text-4xl font-roboto font-light pb-10">
              NEWS AND EVENTS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-vlgray md:col-span-2 col-span-1">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  loop
                  className="mySwiper h-[300px] md:h-[400px] "
                >
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>{" "}
                </Swiper>
                <div className="px-4 py-3">
                  <h6 className="text-lg font-poppins font-light">
                    22.01.2024
                  </h6>
                  <h6 className="text-lg font-poppins font-light text-redred">
                    Join us here inn this
                  </h6>
                </div>
              </div>
              <div className="bg-vlgray col-span-1">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  breakpoints={{
                    "@0.75": {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                  }}
                  loop
                  className="mySwiper h-[300px] md:h-[400px] "
                >
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                </Swiper>
                <div className="px-4 py-3">
                  <h6 className="text-lg font-poppins font-light">
                    22.01.2024
                  </h6>
                  <h6 className="text-lg font-poppins font-light text-redred">
                    Join us here inn this
                  </h6>
                </div>
              </div>
              <div className="bg-vlgray  col-span-1">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  loop
                  className="mySwiper h-[300px] md:h-[400px] "
                >
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>{" "}
                </Swiper>
                <div className="px-4 py-3">
                  <h6 className="text-lg font-poppins font-light">
                    22.01.2024
                  </h6>
                  <h6 className="text-lg font-poppins font-light text-redred">
                    Join us here inn this
                  </h6>
                </div>
              </div>
              <div className="bg-vlgray md:col-span-2 col-span-1">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  breakpoints={{
                    "@0.75": {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                  }}
                  loop
                  className="mySwiper h-[300px] md:h-[400px] "
                >
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                </Swiper>
                <div className="px-4 py-3">
                  <h6 className="text-lg font-poppins font-light">
                    22.01.2024
                  </h6>
                  <h6 className="text-lg font-poppins font-light text-redred">
                    Join us here inn this
                  </h6>
                </div>
              </div>
              <div className="bg-vlgray md:col-span-2 col-span-1">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  loop
                  className="mySwiper h-[300px] md:h-[400px] "
                >
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>{" "}
                </Swiper>
                <div className="px-4 py-3">
                  <h6 className="text-lg font-poppins font-light">
                    22.01.2024
                  </h6>
                  <h6 className="text-lg font-poppins font-light text-redred">
                    Join us here inn this
                  </h6>
                </div>
              </div>
              <div className="bg-vlgray col-span-1">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  breakpoints={{
                    "@0.75": {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                  }}
                  loop
                  className="mySwiper h-[300px] md:h-[400px] "
                >
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                  <SwiperSlide className=" bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-full over"></SwiperSlide>
                </Swiper>
                <div className="px-4 py-3">
                  <h6 className="text-lg font-poppins font-light">
                    22.01.2024
                  </h6>
                  <h6 className="text-lg font-poppins font-light text-redred">
                    Join us here inn this
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
