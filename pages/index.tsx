import { Link } from "@nextui-org/link";
import Image from "next/image";

// import { Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import CountUp from "react-countup";
import { Stats } from "fs";
import CountCard from "../components/count";
import WhyUsCard from "../components/whyUsCard";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Subtext from "../components/Subtext";
import CTA from "../components/CTA";
import More from "../components/More";

export default function IndexPage() {
  const statsData = [
    {
      color: "",
      count: 100,
      title: "Customers",
    },
    {
      color: "",
      count: 100,
      title: "Customers",
    },
    {
      color: "",
      count: 100,
      title: "Customers",
    },
  ];

  const whyUsData = [
    {
      bgColor: "bg-green-100",
      image: "infra.png",
      heading: "Infrastructure",
      desc: "We are a leading kitchen equipment manufacturing company in India with largest infrastructure facility having a Turnover of 37 million USD. The total production area is spread across 5000 sqr. mtr. with machinery worth 1 million USD.",
    },
    {
      bgColor: "bg-blue-100",
      image: "design.png",
      heading: "Our Design",
      desc: "All foodService equipment are designed by a team of professional designers on solid work platform. Each specialised designed jobs can be remotely co-ordinated with customers, clarifying design details and each section analysis. ",
    },
    {
      bgColor: "bg-pink-100",
      image: "production.png",
      heading: "Production",
      desc: "Equipment are further manufactured on our fully automated production line using the latest turret punching machines and CNC press brake machines All components are assembled on assembly lines.",
    },
    {
      bgColor: "bg-red-100",
      image: "quality.png",
      heading: "Quality",
      desc: "We provide after sales service across India with a team of more than 20 technicians. Quality equipment backed by efficient service is the hallmark of our success ! ",
    },
    {
      bgColor: "bg-yellow-100",
      image: "service.png",
      heading: "Service",
      desc: "SolidWorks ensures efficient assembly. Quality parts undergo strict production checks. Design manual covers specifics. Post-production, equipment undergoes testing and packaging.",
    },
    {
      bgColor: "bg-violet-100",
      image: "safety.png",
      heading: "Safety",
      desc: "We are committed to protect the environment, preserve the health and safety of our employees, suppliers and ensuring the safe operations of our processes.",
    },
  ];

  const whyuscomponents = whyUsData.map((data, index) => {
    return <WhyUsCard props={data} key={index} />;
  });
  const stats = statsData.map((data, index) => {
    return <CountCard props={data} key={index} />;
  });
  return (
    <DefaultLayout>
      <section className="font-poppins">
        {/* hero section  */}
        <div className="h-[50vh] md:h-[100vh] ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-full w-full"
          >
            <SwiperSlide className="h-full w-full bg-[url('/images/hero.jpg')]">
              <div className="bg-black/40 w-full h-full relative">
                <div className="absolute bottom-20 left-[15%] text-white text-7xl font-roboto font-thin">
                  Rans India
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-full bg-[url('/images/hero.jpg')]">
              <div className="bg-black/40 w-full h-full relative">
                <div className="absolute bottom-20 left-[15%] text-white text-7xl font-roboto font-thin">
                  Rans India
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* food service */}
        <div className="w-full py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-screen-lg ml-auto mr-auto grid md:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <Image
                src={"/images/salad.jpg"}
                height={500}
                width={500}
                alt="foodservice"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <Heading2 title="Foodservice" />
                <More title="See More" />
              </div>
              <Subtext title="We are endorsed by more than 60 years of experience in manufacturing appliances for the Foodservice industry. As specialists in the manufacturing of industrial equipment, discover our catalogue of:  commercial cooking ranges, ovens, dishwashers and refrigeration equipment. We are endorsed by more than 60 years of experience in manufacturing appliances for the Foodservice industry. As specialists in the manufacturing of industrial equipment, discover our catalogue of:  commercial cooking ranges, ovens, dishwashers and refrigeration equipment." />
              <CTA title="DOWNLOAD CATALOGUE" />
            </div>
          </div>
        </div>

        {/* our customers */}
        <div className="w-full py-10 lg:py-20 lg:px-0 md:px-8 px-5 bg-vlgray">
          <div className="max-w-[1180px] ml-auto mr-auto grid md:grid-cols-3 grid-cols-1 gap-10 ">
            <div className="pr-20">
              <Heading1 title="Our Customers" />
              <Subtext title="At Fagor Professional we are specialists in creating spaces that are tailored to your needs.  Discover some of our most interesting projects." />
              <More title="See all" bold />
            </div>
            <div className="w-full h-full">
              <div className="relative">
                <Image
                  src={"/images/c1.png"}
                  height={300}
                  width={300}
                  alt="kitchen"
                  className="mb-5 w-full h-full"
                />
                <div className="bg-redred hover:bg-redred/90 cursor-pointer p-5 h-[80px] w-[80px] absolute bottom-0 right-0 flex items-center justify-center">
                  <Image
                    src={"/images/arrow.png"}
                    height={200}
                    width={200}
                    alt="arrow"
                  />
                </div>
              </div>
              <Heading2 title="Arzak Restaurant" />
              <Subtext title="3 Michelin stars" smallPadding />
            </div>
            <div className="w-full h-full">
              <div className="relative">
                <Image
                  src={"/images/c1.png"}
                  height={300}
                  width={300}
                  alt="kitchen"
                  className="mb-5 w-full h-full"
                />
                <div className="bg-redred hover:bg-redred/90 cursor-pointer p-5 h-[80px] w-[80px] absolute bottom-0 right-0 flex items-center justify-center">
                  <Image
                    src={"/images/arrow.png"}
                    height={200}
                    width={200}
                    alt="arrow"
                  />
                </div>
              </div>
              <Heading2 title="Arzak Restaurant" />
              <Subtext title="3 Michelin stars" smallPadding />
            </div>
          </div>
        </div>

        {/* new and events */}
        <div className="w-full py-10 lg:py-20 lg:px-0 md:px-8 px-5 ">
          <div className="max-w-[1180px] ml-auto mr-auto  ">
            <div className="grid grid-cols-2 px-20">
              <div className="pl-10">
                <Heading1 title="NEWS AND EVENTS" className="col-span-3" />
              </div>
              <div className="">
                <div className="border-t-1 border-dgray border-2"></div>
                <Subtext
                  title="
                  Access our news page and learn about all our news. Discover our most recent projects, our new products and the dates of the upcoming fairs and events we will be participating in."
                />
              </div>
            </div>
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
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                },
              }}
              loop
              className="mySwiper h-full w-full mt-10"
            >
              <SwiperSlide className="h-full ">
                <div className="bg-vlgray">
                  <div className="bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-[400px] ">
                    <div className="w-full h-full hover:bg-white/50 duration-150"></div>
                  </div>
                  <div className="px-4 py-3">
                    <h6 className="text-lg font-poppins font-light">
                      22.01.2024
                    </h6>
                    <h6 className="text-lg font-poppins font-light text-redred">
                      Join us here inn this
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-full ">
                <div className="bg-vlgray">
                  <div className="bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-[400px] ">
                    <div className="w-full h-full hover:bg-white/50 duration-150"></div>
                  </div>
                  <div className="px-4 py-3">
                    <h6 className="text-lg font-poppins font-light">
                      22.01.2024
                    </h6>
                    <h6 className="text-lg font-poppins font-light text-redred">
                      Join us here inn this
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-full ">
                <div className="bg-vlgray">
                  <div className="bg-[url('/images/nature.jpg')] bg-center bg-no-repeat bg-cover h-[400px] ">
                    <div className="w-full h-full hover:bg-white/50 duration-150"></div>
                  </div>
                  <div className="px-4 py-3">
                    <h6 className="text-lg font-poppins font-light">
                      22.01.2024
                    </h6>
                    <h6 className="text-lg font-poppins font-light text-redred">
                      Join us here inn this
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

{
  /* about us */
}
{
  /* <div className="w-full py-10 lg:py-16 lg:px-0 md:px-8 px-5" id="about">
          
          <div className="max-w-screen-lg ml-auto mr-auto">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-left">
              About RANS
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 md:text-lg">
              <div>
                <h3 className="pt-5 pb-2 ">
                  RANS Technocrats is a renowned Indian company with 27 years of
                  experience in manufacturing kitchen equipment for the
                  foodservice industry. The company prides itself on its updated
                  technology and advanced products that meet the needs of hotels
                  and restaurants across India.
                </h3>
                <h3 className="pb-5 pt-2 ">
                  RANS Technocrats caters to customers throughout India with a
                  dedicated team that provides service and support. The
                  company&apos;s state-of-the-art machinery and commitment to
                  quality have enabled it to deliver equipment that meets
                  international standards.
                </h3>
              </div>
              <div>
                <Image
                  width={800}
                  height={500}
                  alt="NextUI hero Image with delay"
                  src="/images/kitchen.png"
                  className="rounded-md "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 pt-10">
              {stats}
            </div>
          </div>
        </div> */
}

{
  /* why rans */
}
{
  /* <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-left pb-10 md:pb-16">
              Why RANS?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {whyuscomponents}
            </div>
          </div>
        </div> */
}

{
  /* our clients */
}
{
  /* <div className="w-full  pt-20 pb-20 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-screen-lg ml-auto mr-auto ">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-left pb-16 md:pb-10 ">
              Our Clients
            </h1>
            <Image
              src={"/images/clients1.svg"}
              height={1080}
              width={1920}
              alt="brands"
              className="lg:mb-16 md:mb-10 mb-6"
            />
            <Image
              src={"/images/clients2.svg"}
              height={1080}
              width={1920}
              alt="brands"
              className=""
            />
          </div>
        </div> */
}

{
  /* contact us */
}
{
  /* <div
          className="w-full py-10 lg:py-16 lg:px-0 md:px-8 px-5 bg-blue-100 "
          id="contact"
        >
          <div className="lg:max-w-screen-lg ml-auto mr-auto  ">
            <div className="grid md:grid-cols-2 gap-10 ">
              <div>
                <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-left pb-10">
                  Contact Us
                </h1>
                <ul className="space-y-8">
                  <li className="flex space-x-3 items-center">
                    <Image
                      src={"/images/phone.png"}
                      height={25}
                      width={25}
                      alt="phone"
                    />
                    <p className=" md:text-xl">+91 9811028292</p>
                  </li>
                  <li className="flex space-x-3 items-center">
                    <Image
                      src={"/images/email.png"}
                      height={26}
                      width={26}
                      alt="phone"
                    />
                    <p className=" md:text-xl">info@ransindia.com</p>
                  </li>
                  <li className="flex space-x-3 items-center">
                    <Image
                      src={"/images/location.png"}
                      height={25}
                      width={25}
                      alt="phone"
                      className="mb-auto"
                    />
                    <div className=" md:text-xl">
                      <h6 className="font-bold"> Corporate Office </h6>
                      <p>
                        201, Samrat Bhawan, Ranjeet Nagar Commercial Complex,
                        (Near Satyam Cinema) New Delhi – 110008
                      </p>
                    </div>
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
        </div> */
}
