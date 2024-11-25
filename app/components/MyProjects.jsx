import Image from "next/image";
import p11 from "../assests/images/p11.png";
import p12 from "../assests/images/p12.png";
import p21 from "../assests/images/p21.png";
import p22 from "../assests/images/p22.png";
import p31 from "../assests/images/p31.png";
import p32 from "../assests/images/p32.png";

const MyProjects = () => {
  return (
    <div className="font-poppins my-24 text-black dark:text-white">
      {" "}
      <p className="font-semibold text-[3rem] lg:text-[4rem] leading-[6.1rem] text-center">
        My Projects
      </p>
      <p className="my-5 text-center w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>
      <div className="flex flex-wrap gap-3 justify-center my-12 dark:text-black">
        <button className="px-4 py-2 text-xl bg-[#e6e6e6] rounded-md">
          All
        </button>
        <button className="px-4 py-2 text-xl bg-[#e6e6e6] rounded-md">
          UI/UX
        </button>
        <button className="px-4 py-2 text-xl bg-theme rounded-md">
          Web Design
        </button>
        <button className="px-4 py-2 text-xl bg-[#e6e6e6] rounded-md">
          App Design
        </button>{" "}
        <button className="px-4 py-2 text-xl bg-[#e6e6e6] rounded-md">
          Graphic Design
        </button>
      </div>
      <div className="w-[80%] sm:w-[60%] md:w-[45%] mx-auto lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-11 my-24 font-poppins">
        {/* first project */}
        <div>
          <div className="px-5 h-[490px] bg-[#FFEBDB] rounded-lg">
            <div className="relative w-full ">
              <div className="relative w-full flex items-center justify-between ">
                {/* First Image */}
                <div className="relative top-[5.6rem] z-20">
                  <Image
                    src={p11} // Replace with your image path
                    alt="First Image"
                    width={275} // Adjust based on actual size
                    height={400} // Adjust based on actual size
                    // className="object-cover"
                  />
                </div>

                {/* Second Image */}
                <div className="absolute top-0 left-28 z-10">
                  <Image
                    src={p12} // Replace with your image path
                    alt="Second Image"
                    width={275} // Adjust based on actual size
                    height={490} // Adjust based on actual size
                    // className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-xl text-theme py-1">Web Design </p>
            <p className="text-2xl font-bold py-1">Ecom Web Page Design </p>
          </div>
        </div>
        {/* second project */}
        <div>
          <div className="px-5 h-[490px] bg-[#FFEBDB] rounded-lg">
            <div className="relative w-full ">
              <div className="relative w-full flex items-center justify-between ">
                {/* First Image */}
                <div className="relative top-[5.2rem] z-20">
                  <Image
                    src={p21} // Replace with your image path
                    alt="First Image"
                    width={275} // Adjust based on actual size
                    height={400} // Adjust based on actual size
                    // className="object-cover"
                  />
                </div>

                {/* Second Image */}
                <div className="absolute top-0 left-28 z-10">
                  <Image
                    src={p22} // Replace with your image path
                    alt="Second Image"
                    width={275} // Adjust based on actual size
                    height={490} // Adjust based on actual size
                    // className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-xl text-theme py-1">Web Design </p>
            <p className="text-2xl font-bold py-1">Ecom Web Page Design </p>
          </div>
        </div>
        {/* third project */}
        <div>
          <div className="px-5 h-[490px] bg-[#FFEBDB] rounded-lg">
            <div className="relative w-full ">
              <div className="relative w-full flex items-center justify-between ">
                {/* First Image */}
                <div className="relative top-[5.2rem] z-20">
                  <Image
                    src={p31} // Replace with your image path
                    alt="First Image"
                    width={275} // Adjust based on actual size
                    height={400} // Adjust based on actual size
                    // className="object-cover"
                  />
                </div>

                {/* Second Image */}
                <div className="absolute top-0 left-28 z-10">
                  <Image
                    src={p32} // Replace with your image path
                    alt="Second Image"
                    width={275} // Adjust based on actual size
                    height={490} // Adjust based on actual size
                    // className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-xl text-theme py-1">Web Design </p>
            <p className="text-2xl font-bold py-1">Ecom Web Page Design </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
