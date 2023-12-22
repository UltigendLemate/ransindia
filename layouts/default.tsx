import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col  h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl  flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center h-[40px] py-2">
        <div className="flex space-x-2 items-center">
          <span className="text-lg mr-2">&#169;</span>
          <p>Copyright Rans-India | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
