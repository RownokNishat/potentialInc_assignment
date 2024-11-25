"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjugeua", // Replace with your EmailJS Service ID
        "template_ux5eiko", // Replace with your EmailJS Template ID
        form.current,
        "gVku00cn1JiTacdPT" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!"); // Use toast instead of alert
          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the email."); // Use toast instead of alert
        }
      );
  };

  return (
    <div className="my-24 max-w-[932px] mx-auto text-black dark:text-white">
      <p className="text-5xl font-bold font-poppins text-center">
        Let's Design Together
      </p>
      <div className="font-poppins text-center font-[400] leading-[31px] text-[21px] py-8 px-8">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row justify-center gap-4 pt-12 px-8">
          <input
            className="md:w-[627px] h-[75px] text-[#797979] font-[400] text-[21px] p-5 bg-[#F8F8F8] border-[1px] border-[#AFAFAF] rounded-[14px]"
            type="email" // Change type to email for better validation
            name="user_email" // Add a name attribute for EmailJS
            placeholder="Enter Your Email"
            required // Make it required for validation
          />
          <button
            type="submit"
            className="w-full md:w-[222px] h-[75px] bg-theme rounded-[14px] text-[1.5rem] font-[600] text-[#FFFFFF]"
          >
            Contact Me
          </button>
        </div>
      </form>
      <ToastContainer /> {/* Add ToastContainer to render the toasts */}
    </div>
  );
}

export default ContactMe;
