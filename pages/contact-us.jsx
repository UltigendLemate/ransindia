// import { Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import CountCard from "../components/count";
import WhyUsCard from "../components/whyUsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import Heading1 from "../components/Heading1";
import Subtext from "../components/Subtext";
import More from "../components/More";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="font-poppins pt-20">
        {/* who we are */}
        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5">
          <div className="max-w-[1180px] ml-auto mr-auto grid md:grid-cols-12">
            <div className="md:col-span-5">
              <Heading1 title="PROFESSIONAL SERVICE " />
              <h6 className="py-1"></h6>
              <Heading1 title="AND SUPPORT." />
              <h6 className="py-1"></h6>
              <Heading1 title="IN SEARCH OF EXCELLENCE" />
            </div>
            <div className=" space-y-2 md:col-span-7 px-5">
              <h6 className="border border-dgray mt-5 w-[100px]"></h6>
              <Subtext
                smallPadding
                title="Thanks to a structure organised by offices as well as vast International experience, any client in any part of the world has the latest advances in technology available to them, as well as the professionalism and proximity of a large brand.."
              />
              <Subtext
                smallPadding
                title="With our extensive distribution and technical service networks, you may find us very near to you. To purchase our products, ask for a quote, or report a problem in the operation of your equipment, please fill out this form."
              />
              <div>
                <h6 className="text-base md:text-lg font-poppins font-[200] text-black">
                  For more information, you can contact us at:
                </h6>
                <h6 className="text-base md:text-lg font-poppins font-[200] text-black">
                  Foodservice:{" "}
                  <span className="text-redred font-medium">
                    ​​​​info@fagorprofessional.com
                  </span>
                </h6>
              </div>
              <div className="pt-5">
                <More title="Download Corporate Presentation" bold />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5 bg-dgray">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <div className="grid grid-cols-12">
              <div className="md:col-span-5">
                <h4 className="text-white text-4xl font-roboto font-light ml-20">
                  RANS INDIA
                </h4>
              </div>
              <div className="md:col-span-7">
                <h4 className="text-white">
                  <h6 className="pb-5">
                    Santxolopetegi Auzoa, 22. 20560, Oñati (Gipuzkoa).
                  </h6>
                  <h6>E-Mail: info@fagorprofessional.com</h6>
                  <h6>Telephone Switchboard: +34 943 71 80 30</h6>
                  <h6>Fax: +34 943 71 81 81</h6>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="w-full pt-10 md:py-10 lg:py-16 lg:px-0 md:px-8 px-5 bg-vlgray">
          <div className="max-w-screen-lg ml-auto mr-auto">
            <div className="p-4 md:p-8">
              <h1 className="text-dgray text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
                Contact US
              </h1>
              <form className="flex flex-col items-center">
                <div className="md:w-3/4 lg:w-2/3 xl:w-4/5">
                  <div className="flex flex-col md:flex-row">
                    <input
                      id="name"
                      type="text"
                      className="my-2 py-2 px-4  border text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-1 focus:ring-redred"
                      placeholder="Name"
                    />
                    <input
                      id="email"
                      type="email"
                      className="my-2 py-2 px-4  border text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-1 focus:ring-redred"
                      placeholder="Email"
                    />
                  </div>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="my-2 py-2 px-4  border text-gray-300 w-full outline-none focus:ring-1 focus:ring-redred"
                  />
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Say Something"
                    className="my-2 py-2 px-4  border text-gray-300 w-full outline-none focus:ring-1 focus:ring-redred"
                  ></textarea>
                </div>
                <button className="py-2 my-5 px-3 border border-red-500 text-xl text-redred font-normal font-roboto bg-white hover:bg-redred hover:text-white duration-100 ease-in-out flex items-center space-x-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* numbers */}

        <div className="w-full lg:px-0 md:px-8 px-5 bg-dgray h-[50vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28008.34163714369!2d77.23792486878659!3d28.65843996840499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1703091414099!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="object-contain"
          ></iframe>
        </div>
      </section>
    </DefaultLayout>
  );
}
