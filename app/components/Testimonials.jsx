import React from "react";
import testimonial from "../assests/images/testimonial.png";
import Image from "next/image";
import quoteMark from "../assests/images/quote.png";
function Testimonials() {
  return (
    <div className=" my-24 text-black dark:text-white">
      <p className="text-[3rem] lg:text-[4rem] font-[700] font-poppins text-center leading-[6.3rem] ">
        Testimonial
      </p>
      <div className=" mx-auto text-[1.3rem] font-[400] font-poppins leading-[2rem]  text-center pt-6 pb-12">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row bg-[#F8F8F8] p-4 rounded-md w-[80%] mx-auto">
        <Image
          className="w-[235px] h-[235px] rounded-full"
          width="235"
          height="235"
          src={testimonial}
          alt="testimonial"
        ></Image>
        <div className="font-poppins ">
          <div className="relative my-1 p-4 text-[21px] font-[400] leading-[31.5px] text-justify ">
            {/* Blockquote with top-left opening and bottom-right closing quotes */}
            <blockquote className="relative text-lg text-gray-700 font-serif leading-relaxed pl-8 pr-8">
              {/* Opening quote */}
              <span className="absolute left-0 top-0 text-orange-500 text-4xl font-bold">
                <Image
                  alt="quote"
                  src={quoteMark}
                  width="15"
                  height="15"
                ></Image>
              </span>
              Lorem ipsum dolor sit amet consectetur. In enim cursus odio
              accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices.
              {/* Closing quote */}
              <span className="absolute ml-2 bottom-0 text-orange-500 text-4xl font-bold">
                <Image
                  alt="quote"
                  src={quoteMark}
                  width="15"
                  height="15"
                ></Image>
              </span>
            </blockquote>
          </div>
          <div className="px-12">
            {" "}
            <p className="text-[24px] font-[500] leading-[36px]">Name</p>
            <p className="text-[19px] font-[400] leading-[28.5px]">CEO</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <div className="flex gap-3">
          <div className="w-14 h-4 bg-[#D9D9D9] rounded-lg"></div>
          <div className="w-14 h-4 bg-theme rounded-lg"></div>
          <div className="w-14 h-4 bg-[#D9D9D9] rounded-lg"></div>
          <div className="w-14 h-4 bg-[#D9D9D9] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
