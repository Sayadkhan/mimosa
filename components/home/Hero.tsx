import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full  grid grid-rows-8 gap-5 items-center">
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
            <h2 className="text-8xl uppercase font-semibold">
              Lorem ipsum dolor
            </h2>
          </div>
        </div>

        <hr className="border-grey" />
        {/* 3rd row */}
        <div className="w-full h-[8rem]  grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold ">Lorem</h2>
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
            <h2 className="text-8xl uppercase font-semibold">Lorem ipsum</h2>
          </div>
        </div>

        <hr className="border-grey" />
        {/* 4th row */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">Lorem ips</h2>
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
            <h2 className="text-8xl uppercase font-semibold">
              Lorem ips lorem
            </h2>
          </div>
        </div>

        <hr className="border-grey" />
        {/* 6th row */}
        {/* <div className="w-full h-full"></div> */}
      </div>
    </section>
  );
};

export default Hero;
