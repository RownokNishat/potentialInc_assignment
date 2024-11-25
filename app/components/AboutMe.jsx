import Slider from "../reusableComponent/slider/Slider";
import AboutMeImage from "../assests/images/aboutMeImage.png";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-start items-center gap-8 text-black dark:text-white font-poppins">
      <div className="flex justify-start items-start">
        <Image alt="about me" src={AboutMeImage} width="1200" heigth="1200" />
      </div>
      <div>
        <p className="text-[3rem] lg:text-[4rem] font-[600] py-2  leading-[6.1rem]">
          About Me
        </p>
        <p className="  text-justify font-[400] leading-[1.95rem] text-[1.3rem] py-2">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className=" text-[24px] font-[600] leading-[36px] py-3">
          <Slider label="Ux" value="90"></Slider>
          <Slider label="Web Design" value="96"></Slider>
          <Slider label="App Design" value="92"></Slider>
          <Slider label="Graphic Design" value="97"></Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
