import { Link } from "@nextui-org/link";
import Image from "next/image";

// import { Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import CountUp from "react-countup";
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
    {
      color: "",
      count: 100,
      title: "Customers",
    },
  ];

  const whyUsData = [
    {
      bgColor: "bg-vlgray",
      image: "infra.png",
      heading: "Infrastructure",
      desc: "We are a leading kitchen equipment manufacturing company in India with largest infrastructure facility having a Turnover of 37 million USD. The total production area is spread across 5000 sqr. mtr. with machinery worth 1 million USD.",
    },
    {
      bgColor: "bg-vlgray",
      image: "design.png",
      heading: "Our Design",
      desc: "All foodService equipment are designed by a team of professional designers on solid work platform. Each specialised designed jobs can be remotely co-ordinated with customers, clarifying design details and each section analysis. ",
    },
    {
      bgColor: "bg-vlgray",
      image: "production.png",
      heading: "Production",
      desc: "Equipment are further manufactured on our fully automated production line using the latest turret punching machines and CNC press brake machines All components are assembled on assembly lines.",
    },
    {
      bgColor: "bg-vlgray",
      image: "quality.png",
      heading: "Quality",
      desc: "We provide after sales service across India with a team of more than 20 technicians. Quality equipment backed by efficient service is the hallmark of our success ! ",
    },
    {
      bgColor: "bg-vlgray",
      image: "service.png",
      heading: "Service",
      desc: "SolidWorks ensures efficient assembly. Quality parts undergo strict production checks. Design manual covers specifics. Post-production, equipment undergoes testing and packaging.",
    },
    {
      bgColor: "bg-vlgray",
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
      <section className="font-poppins py-20">
        {/* who we are */}
        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-[1180px] ml-auto mr-auto grid md:grid-cols-2 grid-cols-1">
            <div className="max-w-[400px]">
              <h6 className="font-roboto font-medium text-[17px] pb-5">
                FAGOR PROFESSIONAL, WHO WE ARE
              </h6>
              <Heading1 title="FROM 1960, UNTIL WE " />
              <h6 className="py-1"></h6>
              <Heading1 title="BECAME A LEADER" />
              <h6 className="border border-dgray mt-5 w-[100px]"></h6>
            </div>
            <div className="max-w-[500px] space-y-2">
              <Subtext
                smallPadding
                title="At Fagor Professional, we are world leaders in manufacturing equipment for the hospitality, catering and laundry sectors.​ Ever since we started in 1960, we've always had our sights set firmly on the future. That's why our story has been defined by believing in talent and pursuing an idea: competing at the highest level and always evolving."
              />
              <Subtext
                smallPadding
                title="We are a great team of professionals who are dedicated to professionals. We listen to, understand and empathise with them in order to meet their needs and help them overcome even the toughest challenges by creating innovative products."
              />
              <Subtext
                smallPadding
                title="For this purpose, our extensive catalogue boasts products that are perfect for even the most demanding professionals, bolstered by an array of services that make our distributor's daily lives as efficient as possible."
              />
              <div className="pt-5">
                <More title="Download Corporate Presentation" bold />
              </div>
            </div>
          </div>
        </div>

        {/* why us */}
        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold text-left pb-10 md:pb-16">
              Why RANS?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {whyuscomponents}
            </div>
          </div>
        </div>

        {/* numbers */}
        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-[1180px] ml-auto mr-auto grid md:grid-cols-2 grid-cols-1">
            <div className="max-w-[450px] ">
              <h6 className="font-roboto font-medium text-[17px] pb-5">
                ONNERA GROUP, A LEADING COMPANY
              </h6>
              <Heading1 title="WITHIN A LARGE" />
              <h6 className="py-1"></h6>
              <Heading1 title="EXPANDING GROUP. " />
              <div className="space-y-2">
                <Subtext
                  smallPadding
                  title="In order to offer the quality, service and solutions that a professional needs, you must have the strength and fortitude of a large company.  Fagor Professional is part of the ONNERA Group business group, dedicated to providing equipment solutions for the food service, laundry and refrigeration application industries."
                />
                <Subtext
                  smallPadding
                  title="ONNERA Group has 7 manufacturing plants, 35 business offices and more than 2200 employees all over the world. Currently, it is the leading company for food service, hotel and refrigeration equipment in Spain, the sixth in Europe, and the tenth worldwide."
                />
                <div className="pt-5">
                  <More title="Download Corporate Presentation" bold />
                </div>
              </div>
            </div>
            <div className="max-w- px-5">
              <h3 className="md:text-4xl pb-2">RANS GROUP IN NUMBERS</h3>
              <h6 className="font-roboto font-medium text-[15px] pb-5">
                FAGOR PROFESSIONAL, WHO WE ARE
              </h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 pt-10">
                {stats}
              </div>
            </div>
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
