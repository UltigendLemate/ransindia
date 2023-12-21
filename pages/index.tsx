import { Link } from "@nextui-org/link";
import Image from "next/image";

// import { Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import CountUp from "react-countup";
import { Stats } from "fs";
import CountCard from "../components/count";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function IndexPage() {
  const statsData = [
    {
      count: 100,
      title: "Customers",
    },
    {
      count: 100,
      title: "Customers",
    },
    {
      count: 100,
      title: "Customers",
    },
  ];

  const stats = statsData.map((data, index) => {
    return <CountCard props={data} key={index} />;
  });
  return (
    <DefaultLayout>
      <section className="font-poppins">
        {/* hero section  */}
        <div className="h-[50vh] md:h-[100vh]  text-white relative ">
          <Image
            src={"/images/hero.jpg"}
            height={1080}
            width={1920}
            alt="hero"
            className="w-full object-cover max-h-screen h-[50vh] md:h-full"
          />
          <div className="h-full w-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 ">
            <div className="absolute lg:left-[10%] lg:bottom-[20%] md:left-[8%] md:bottom-[10%] left-[5%] bottom-[10%] text-white leading-[29px] md:leading-none lg:text-6xl md:text-5xl text-4xl font-semibold space-y-5">
              <h1>Life in the Kitchen</h1> <h1>Just Got Easier</h1>
            </div>
            <div className="absolute lg:right-[10%] lg:bottom-[23%] lg:scale-150 md:scale-125 hidden md:block overflow-hidden">
              <Image
                src="/images/logo.png"
                height={120}
                width={120}
                alt="rans"
                className="bg-white overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* about us */}
        <div className="w-full py-10 lg:py-16 lg:px-0 md:px-8 px-5" id="about">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <h1 className="text-5xl font-semibold text-left">About RANS</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3">
              <div>
                <h3 className=" py-5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  ipsam perspiciatis officiis repellat excepturi enim deleniti
                  fugiat accusantium veritatis! Itaque, nostrum minus
                  perferendis consequatur possimus et rerum iure explicabo a.
                  Molestiae consequuntur, incidunt alias et eum sapiente
                  accusantium provident nisi animi vel, quod quia amet possimus?
                  Ullam, veniam sapiente quasi dicta perferendis, labore nihil
                  quas dolorem fuga sit nisi sint voluptatibus provident ipsa
                  iste dolor beatae tenetur repellendus ut, eius iusto
                  voluptatum incidunt consequuntur. Quae eius esse saepe nostrum
                  repudiandae? lorem456
                </h3>
              </div>
              <div>
                <Image
                  width={800}
                  height={500}
                  alt="NextUI hero Image with delay"
                  src="/images/about.jpg"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 py-10">
              {stats}
            </div>
          </div>
        </div>

        {/* why rans */}
        <div className="w-full  py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <h1 className="text-5xl font-semibold text-left pb-16">
              Why RANS?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Card className="py-4 bg-blue-100">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mr-auto ml-auto"
                    src="/images/like.png"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <h1 className="text-center text-4xl font-semibold">
                    Quality
                  </h1>
                  <p className="text-base py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis recusandae unde beatae quam, distinctio inventore
                    dolorem, tenetur sequi hic cupiditate ad nemo ut quaerat. At
                    cum quidem recusandae molestias asperiores.
                  </p>
                </CardBody>
              </Card>
              <Card className="py-4 bg-yellow-100">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mr-auto ml-auto"
                    src="/images/like.png"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <h1 className="text-center text-4xl font-semibold">
                    Quality
                  </h1>
                  <p className="text-base py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis recusandae unde beatae quam, distinctio inventore
                    dolorem, tenetur sequi hic cupiditate ad nemo ut quaerat. At
                    cum quidem recusandae molestias asperiores.
                  </p>
                </CardBody>
              </Card>
              <Card className="py-4 bg-green-100">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mr-auto ml-auto"
                    src="/images/like.png"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <h1 className="text-center text-4xl font-semibold">
                    Quality
                  </h1>
                  <p className="text-base py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis recusandae unde beatae quam, distinctio inventore
                    dolorem, tenetur sequi hic cupiditate ad nemo ut quaerat. At
                    cum quidem recusandae molestias asperiores.
                  </p>
                </CardBody>
              </Card>
              <Card className="py-4 bg-blue-100">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mr-auto ml-auto"
                    src="/images/like.png"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <h1 className="text-center text-4xl font-semibold">
                    Quality
                  </h1>
                  <p className="text-base py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis recusandae unde beatae quam, distinctio inventore
                    dolorem, tenetur sequi hic cupiditate ad nemo ut quaerat. At
                    cum quidem recusandae molestias asperiores.
                  </p>
                </CardBody>
              </Card>
              <Card className="py-4 bg-yellow-100">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mr-auto ml-auto"
                    src="/images/like.png"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <h1 className="text-center text-4xl font-semibold">
                    Quality
                  </h1>
                  <p className="text-base py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis recusandae unde beatae quam, distinctio inventore
                    dolorem, tenetur sequi hic cupiditate ad nemo ut quaerat. At
                    cum quidem recusandae molestias asperiores.
                  </p>
                </CardBody>
              </Card>
              <Card className="py-4 bg-green-100">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl mr-auto ml-auto"
                    src="/images/like.png"
                    width={100}
                    height={100}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <h1 className="text-center text-4xl font-semibold">
                    Quality
                  </h1>
                  <p className="text-base py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis recusandae unde beatae quam, distinctio inventore
                    dolorem, tenetur sequi hic cupiditate ad nemo ut quaerat. At
                    cum quidem recusandae molestias asperiores.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* our clients */}
        <div className="w-full  py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <h1 className="text-5xl font-semibold text-left pb-10">
              Our Clients
            </h1>
            <Swiper
              slidesPerView={"auto"}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              autoplay={{
                disableOnInteraction: false,
              }}
              navigation={true}
              loop={true}
              // centeredSlides={true}
              spaceBetween={30}
              modules={[Autoplay, Navigation]}
              className="mySwiper "
            >
              <SwiperSlide className="swipeslide ml-auto mr-auto lg:p-0 md:p-10p-16">
                <div className="flex justify-center">
                  <Image
                    src={"/images/facebook.png"}
                    height={55}
                    width={160}
                    alt={"facebook"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swipeslide ml-auto mr-auto lg:p-0 md:p-10p-16">
                <div className="flex justify-center">
                  <Image
                    src={"/images/facebook.png"}
                    height={55}
                    width={160}
                    alt={"facebook"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swipeslide ml-auto mr-auto lg:p-0 md:p-10p-16">
                <div className="flex justify-center">
                  <Image
                    src={"/images/facebook.png"}
                    height={55}
                    width={160}
                    alt={"facebook"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swipeslide ml-auto mr-auto lg:p-0 md:p-10p-16">
                <div className="flex justify-center">
                  <Image
                    src={"/images/facebook.png"}
                    height={55}
                    width={160}
                    alt={"facebook"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swipeslide ml-auto mr-auto lg:p-0 md:p-10p-16">
                <div className="flex justify-center">
                  <Image
                    src={"/images/facebook.png"}
                    height={55}
                    width={160}
                    alt={"facebook"}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* contact us */}
        <div
          className="w-full py-10 lg:py-16 lg:px-0 md:px-8 px-5 bg-blue-100 "
          id="contact"
        >
          <div className="lg:max-w-screen-lg ml-auto mr-auto  ">
            <h1 className="text-5xl font-semibold text-left pb-10">
              Contact Us
            </h1>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <ul className="space-y-8">
                  <li className="flex space-x-2 items-center">
                    <Image
                      src={"/images/phone.png"}
                      height={25}
                      width={25}
                      alt="phone"
                    />
                    <p className="text-xl">+91 6393698670</p>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image
                      src={"/images/email.png"}
                      height={26}
                      width={26}
                      alt="phone"
                    />
                    <p className="text-xl">dummydummy@gamil.com</p>
                  </li>
                  <li className="flex space-x-2 items-center">
                    <Image
                      src={"/images/location.png"}
                      height={25}
                      width={25}
                      alt="phone"
                    />
                    <p className="text-xl">
                      DSM-439, 4th Floor, DLF Towers, Shivaji Marg, New Delhi -
                      110015 (India)
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28008.34163714369!2d77.23792486878659!3d28.65843996840499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1703091414099!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="object-contain"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
