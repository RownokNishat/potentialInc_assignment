"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assests/images/logo.png";
import Ham from "../assests/images/burger-menu.svg";
import Close from "../assests/images/cross.png";
import DownloadButton from "../reusableComponent/DownloadCv";
import DarkModeToggle from "./DarkModeToogle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#FBFBFB] dark:bg-[#1E1E1E] rounded">
      <div className="flex justify-between items-center dark:text-white p-4">
        <div className="flex items-center gap-3 xl:gap-5">
          <Image src={Logo} width={60} height={70} alt="Logo" />
          <p className="text-5xl font-mon text-[#1E1E1E] dark:text-white">
            <span className="font-bold">M</span>
            <span>umair </span>
          </p>
        </div>

        {/* Hamburger Menu */}
        <div className="block lg:hidden">
          <DarkModeToggle />
          <button className="ps-4" onClick={toggleMenu}>
            <Image src={Ham} width={40} height={40} alt="Menu" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <div className="flex gap-[0.75rem] lg:gap-[0.8rem] font-poppins">
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
            <DownloadButton />
            <DarkModeToggle />

            {/* <button className="bg-theme lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] rounded-md text-[#FFFFFF]">
              Download CV
            </button> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
            <div className="flex items-center justify-between w-full p-12">
              <div className="flex items-center gap-3">
                <Image src={Logo} width={60} height={70} alt="Logo" />
                <p className="text-5xl font-mon text-white">
                  <span className="font-bold">M</span>
                  <span>umair </span>
                </p>
              </div>
              <Image
                className="text-white cursor-pointer"
                onClick={toggleMenu}
                src={Close}
                width={60}
                height={70}
                alt="Close"
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <a
                href="#home"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                About Me
              </a>
              <a
                href="#services"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#contacts"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Contacts
              </a>
              <DownloadButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
