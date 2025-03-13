import React from "react";
import Image from "next/image";
import robert from "../public/robert-downey-jr-2018-wallpapers (1).jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen ">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 container mx-auto gap-12  flex items-center justify-center h-full text-center text-black">
        <div className="flex-1 ml-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide amazing services to make your life easier. Let's build
            something great together!
          </p>
          <Link
            href="#services"
            className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            lets connect
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src={robert}
            width={500}
            height={500}
            objectFit="contain"
            className="rounded"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
