import Image from "next/image";
import Service1 from "../assests/images/service1.png";
import Service2 from "../assests/images/service2.png";
import Service3 from "../assests/images/service3.png";
import Service4 from "../assests/images/service4.png";

const Services = () => {
  return (
    <div className=" my-12 text-black dark:text-white">
      <p className=" text-[3rem] lg:text-[4rem] font-bold font-poppins text-center">
        Services
      </p>
      <div className="w-[50%] mx-auto  font-poppins text-center pt-6 pb-12">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>
      <div className="dark:text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] font-poppins">
        <div className="bg-gray-200 rounded-[14px] pt-12 pb-3 px-5">
          <div className="h-[82px] flex  items-center">
            <Image
              className="w-[70px] h-[70px]"
              src={Service1}
              alt="service1"
              width="40"
              height="40"
            />
          </div>
          <div>
            <p className="font-semibold text-3xl py-4">UI/UX </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-[14px] pt-12 pb-3 px-5">
          <div className="h-[82px] flex  items-center">
            <Image
              className="w-[72px] h-[82px]"
              src={Service2}
              alt="service2"
              width="40"
              height="40"
            />
          </div>
          <div>
            <p className="font-semibold text-3xl py-4">Web Design </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-[14px] pt-12 pb-3 px-5">
          <div className="h-[82px] flex  items-center">
            <Image
              className="w-[47px] h-[82px]"
              src={Service3}
              alt="service3"
              width="40"
              height="30"
            />
          </div>{" "}
          <div>
            <p className="font-semibold text-3xl py-4">App Design </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-[14px] pt-12 pb-3 px-5">
          <div className="h-[82px] flex  items-center">
            <Image
              className="w-[82px] h-[70px]"
              src={Service4}
              alt="service4"
              width="40"
              height="40"
            />
          </div>{" "}
          <div>
            <p className="font-semibold text-3xl py-4">Graphic Design </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
