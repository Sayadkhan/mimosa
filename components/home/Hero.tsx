import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plafairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full  grid grid-rows-8 gap-5 items-center relative">
        {/* 1st row */}
        {/* <div className="w-full h-full"></div> */}
        {/* 2nd row */}
        <div className="w-full h-[8rem]  grid grid-cols-[30%_auto] items-center gap-20">
          {/* 2nd row left side */}
          <div className="w-full h-full overflow-hidden border rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/17987769/pexels-photo-17987769/free-photo-of-woman-with-red-hair-taking-pictures-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Woman wearing Sheer Dress underwater"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          {/* 2nd row right side */}
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">Awaken Your</h2>
          </div>
        </div>

        <hr className="border-grey" />
        {/* 3rd row */}
        <div className="w-full h-[8rem]  grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(plafairDisplay.className, "headline-1 lowercase")}
            >
              Inner
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden border rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/17995409/pexels-photo-17995409/free-photo-of-smiling-woman-in-traditional-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman wearing Sheer Dress underwater"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">
              Goddess<span className="text-green">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-grey" />
        {/* 4th row */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">Unveiling</h2>
          </div>
          <div className="w-full h-full overflow-hidden border rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/1573141/pexels-photo-1573141.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Woman wearing Sheer Dress underwater"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-grey" />
        {/* 5th row */}
        <div className="w-full h-[8rem]  grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden border rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/1573141/pexels-photo-1573141.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Woman wearing Sheer Dress underwater"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 font-bold uppercase">
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase"
                )}
              >
                With
              </span>{" "}
              M
              <span
                className={cn(
                  plafairDisplay.className,
                  "font-normal lowercase text-pink"
                )}
              >
                i
              </span>
              mosa
              <span className="text-orange">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-grey" />
        {/* 6th row */}
        {/* <div className="w-full h-full"></div> */}

        {/* packages button */}
        <Link
          href="/#packages"
          className="bg-dark/80 backdrop-blur-lg text-light w-40 h-40 rounded-full overflow-hidden flex justify-center items-center uppercase text-lg absolute left-[40%] bottom-[15%] z-[1] group shadow-2xl shadow-dark/50 hover:shadow-violet/50 eoq"
        >
          <p className="z-[3]">packages</p>
          {/* filler */}
          <span className="z-[2] absolute top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet/80  group-hover:top-1/2 eoq"></span>
          {/* filler 2 */}
          <span className="z-[2] absolute -top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet/80  group-hover:top-0 eoq"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
