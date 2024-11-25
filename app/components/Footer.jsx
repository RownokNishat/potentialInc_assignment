import Image from "next/image";
import Logo from "../assests/images/logo.png";
import fb from "../assests/images/facebook.svg";
import tw from "../assests/images/twitter.svg";
import ins from "../assests/images/instagram.svg";
import ln from "../assests/images/linkedin.png";
import fb2 from "../assests/images/facebook2.svg";
import tw2 from "../assests/images/twitter2.png";
import ins2 from "../assests/images/instagram2.svg";
import ln2 from "../assests/images/linkedin2.png";
import LinkImage from "../reusableComponent/reusableImage/LinkImage";
const Footer = () => {
  return (
    <div className="text-black dark:text-white bg-[#F8F8F8] dark:bg-[#1E1E1E]">
      <div className="flex justify-center gap-3 xl:gap-5 pt-24">
        <Image src={Logo} width={60} height={70} alt="Logo" />
        <p className="text-5xl font-mon text-[#1E1E1E] dark:text-white">
          <span className="font-bold">M</span>
          <span>umair </span>
        </p>
      </div>
      <div className="my-20">
        <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-[0.75rem] lg:gap-[0.8rem] font-poppins">
            <a
              href="#home"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-theme transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-theme transition"
            >
              About Me
            </a>
            <a
              href="#services"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-theme transition"
            >
              Services
            </a>
            <a
              href="#projects"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-theme transition"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-theme transition"
            >
              Testimonials
            </a>
            <a
              href="#contacts"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-theme transition"
            >
              Contacts
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">
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
      </div>
      <div className=" bg-[#545454] dark:bg-[#121212] text-[#FFFFFF] tracking-widest h-[80px] flex items-center justify-center">
        <p className="text-center text-xl">
          © 2023 <span className="text-theme font-[700] text-xl">Mumair</span>{" "}
          All Rights Reserved , Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
