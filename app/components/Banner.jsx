import Image from "next/image";
import BannerImage from "../assests/images/bannerImage.png";
import fb from "../assests/images/facebook.svg";
import tw from "../assests/images/twitter.svg";
import ins from "../assests/images/instagram.svg";
import ln from "../assests/images/linkedin.png";
import fb2 from "../assests/images/facebook2.svg";
import tw2 from "../assests/images/twitter2.png";
import ins2 from "../assests/images/instagram2.svg";
import ln2 from "../assests/images/linkedin2.png";
import LinkImage from "../reusableComponent/reusableImage/LinkImage";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 my-24 text-black dark:text-white">
      <div className="flex justify-center flex-col items-start">
        <p className="font-poppins font-[600] leading-[36px] text-[1.5rem] mt-0 lg:mt-8">
          Hi I am{" "}
        </p>
        <p className="font-poppins font-[600] leading-[3rem] text-[1.5rem] xl:text-[3rem] text-theme">
          Muhammad Umair{" "}
        </p>
        <p className="font-poppins font-[700] leading-relaxed xl:leading-[7.5rem] text-[3rem] lg:text-[3.8rem]  xl:text-[6rem]">
          UI & UX
        </p>
        <p className="font-poppins font-[700] leading-relaxed xl:leading-[7.5rem] text-[3rem] lg:text-[3.8rem] xl:text-[6rem] md:ms-28 lg:ms-56">
          Designer
        </p>

        <p className="font-poppins font-[400] leading-[31.5px] py-4 text-[1.3rem] text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <a href="#contacts">
          <button className=" bg-theme text-white py-[1rem] px-[3rem] rounded-md text-xl">
            Hire Me
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center xl:justify-end lg:items-center">
        <Image
          className=""
          src={BannerImage}
          alt="Banner Image"
          width={600}
          height={600}
        />
        <div className="block dark:hidden">
          <div className="flex gap-4 py-4">
            <Image
              className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
              src={fb}
              alt="Banner Rectangle"
              width={35}
              height={35}
            />
            <Image
              className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
              src={tw}
              alt="Banner Rectangle"
              width={35}
              height={35}
            />
            <Image
              className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
              src={ins}
              alt="Banner Rectangle"
              width={35}
              height={35}
            />
            <LinkImage
              route="https://www.linkedin.com/in/rownok-jahan-nishat/"
              src={ln}
            />
          </div>
        </div>
        <div className="hidden dark:text-white dark:block">
          <div className="flex gap-4 py-4">
            <Image
              className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
              src={fb2}
              alt="Banner Rectangle"
              width={35}
              height={35}
            />
            <Image
              className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
              src={tw2}
              alt="Banner Rectangle"
              width={35}
              height={35}
            />
            <Image
              className="cursor-pointer hover:border-[3px] hover:border-theme hover:rounded-full"
              src={ins2}
              alt="Banner Rectangle"
              width={35}
              height={35}
            />

            <LinkImage
              route="https://www.linkedin.com/in/rownok-jahan-nishat/"
              src={ln2}
            />
          </div>
        </div>
        {/* <Image
          className="absolute lg:top-24 xl:top-24 lg:right-[6.8rem] xl:right-28"
          src={BannerRectangle}
          alt="Banner Rectangle"
          width={400}
          height={500}
        /> */}
      </div>
    </div>
  );
};

export default Banner;
