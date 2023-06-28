/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import styles from "../../styles/about.module.css"

const AboutEng = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-10/12 mx-auto py-10 text-gray-700">
      <h1 className={`${styles.aboutStyle}   md:text-2xl font-semibold text-warning`}>
       QuickVara: The Ultimate Rental Solution
      </h1>
     <div className="text-justify -mt-4">
     <br />
      In today's fast-paced and ever-changing world, finding the right space for
      your needs can be a daunting task. Whether you require extra storage for
      your belongings, a workshop to pursue your hobbies, or a retail space to
      showcase your products, the search for suitable rentals can be
      time-consuming and frustrating. But worry no more! <br />
      Welcome to QuickVara, <span className="text-warning font-semibold"> QuickVara </span> is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience.
      <span className="hidden lg:inline"> At  <span className="text-warning font-semibold"> QuickVara </span>, we understand that everyone's requirements are unique, and finding the perfect space should be a seamless process. We have
        leveraged the power of technology to create an intuitive and
        user-friendly online platform that connects renters with an extensive
        network of property owners offering diverse spaces for rent.
      </span>
      <br />
      <div className={open ? "scroll-smooth" : "pb-5"}>
        <div>
          <button
            className={open ? "flex" : "hidden py-5"}
            onClick={() => setOpen(!open)}
          >
            Show more{" "}
            <AiFillCaretDown className="mt-1 text-xl text-warning"/>
          </button>
          <div className={open ? "hidden" : "block"}>
            <span className="lg:hidden inline">
              At  <span className="text-warning font-semibold"> QuickVara </span>, we understand that everyone's requirements are unique,
              and finding the perfect space should be a seamless process. We
              have leveraged the power of technology to create an intuitive and
              user-friendly online platform that connects renters with an
              extensive network of property owners offering diverse spaces for
              rent.
            </span>
            <br />
            <h1 className="text-2xl text-warning font-semibold">
              Here's what sets 'QuickVara' apart from traditional rental services:
            </h1>
            <br />
            <span className="text-lg text-warning font-semibold">
              Comprehensive Space Options:
            </span>
            <br /> Whether you're searching for a cozy apartment, a spacious
            garage, or a commercial shop,
            <span className="text-warning font-semibold"> QuickVara </span> has
            got you covered. Our platform features a wide range of rental
            options, catering to various needs and preferences. With our vast
            selection, you'll find the ideal space to suit your requirements.
            <br />
            <br />
            <span className="text-lg text-warning font-semibold">
              Advanced Search and Filtering:
            </span>
            <br /> Our website offers a sophisticated search and filtering
            system, enabling you to narrow down your options effortlessly.
            Specify your desired location, size, amenities, and budget, and our
            intelligent algorithms will present you with tailored results,
            saving you valuable time and effort.
            <br />
            <br />
            <span className="text-lg text-warning font-semibold">
              Detailed Property Profiles:
            </span>
            <br />
            Each rental space listed on  <span className="text-warning font-semibold"> QuickVara </span> comes with a comprehensive
            profile, including high-resolution photos, detailed descriptions,
            amenities, availability, and pricing information. This wealth of
            information allows you to make an informed decision about which
            space best aligns with your needs.
            <br />
            <br />
            <span className="text-lg text-warning font-semibold">
              Transparent Rental Process:
            </span>
            <br />
            <span className="text-warning font-semibold"> QuickVara </span>
            believes in transparency, which is why we facilitate direct
            communication between renters and property owners. Through our
            secure messaging system, you can ask questions, discuss terms, and
            negotiate rental agreements without any intermediaries, ensuring a
            smooth and transparent rental process.
            <br />
            <br />
            <span className="text-lg  text-warning font-semibold">
              Secure and Trustworthy:
            </span>
            <br /> We prioritize your safety and peace of mind.
            <span className="text-warning font-semibold"> QuickVara </span>
            thoroughly verifies property owners and ensures that all listings
            are legitimate and accurate.
            <br />
            <span className="text-warning font-semibold"> QuickVara </span> is
            revolutionizing the way people search for and rent homes, garages,
            and shops. Our innovative online platform, coupled with our
            commitment to exceptional customer service, aims to make your rental
            experience seamless, efficient, and enjoyable.
            <br />
            <br />
            So, whether you're an entrepreneur looking for a prime retail
            location, a hobbyist in need of a dedicated workshop, or simply
            seeking extra storage space,
            <span className="text-warning font-semibold"> QuickVara </span> is
            here to provide you with the perfect solution. Visit our website
            today and embark on a hassle-free journey to find your ideal rental
            space!
          </div>
        </div>
        <button
          className={open ? "hidden" : "flex"}
          onClick={() => setOpen(!open)}
        >
          Show less <IoMdArrowDropup className="mb-1 text-3xl text-warning" />
        </button>
      </div>
     </div>
    </div>
  );
};

export default AboutEng;
