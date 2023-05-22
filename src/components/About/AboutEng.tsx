/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";

const AboutEng = () => {
  const [open, setOpen] = useState(true);
 
  return (
    <div className="w-10/12 mx-auto py-10 text-justify">
      <h1 className="text-2xl font-semibold text-accent">
        "To-Leet": The Ultimate Rental Solution
      </h1>
      <br />
      In today's fast-paced and ever-changing world, finding the right space for
      your needs can be a daunting task. Whether you require extra storage for
      your belongings, a workshop to pursue your hobbies, or a retail space to
      showcase your products, the search for suitable rentals can be
      time-consuming and frustrating. But worry no more! Welcome to To-Leet, the
      newly launched online home, mess,hostel, office, garage, and shop rental
      service company that aims to simplify your rental experience. At To-Leet,
      we understand that everyone's requirements are unique, and finding the
      perfect space should be a seamless process. We have leveraged the power of
      technology to create an intuitive and user-friendly online platform that
      connects renters with an extensive network of property owners offering
      diverse spaces for rent.
      <br />
      <div className={open ? " scroll-smooth" : " pb-5"}>
        <div>
          <button
            className={open ? "flex" : "hidden py-5"}
            onClick={() => setOpen(!open)}
          >
            Show more <AiFillCaretDown className="mt-1 text-xl text-accent" />
          </button>
          <p className={open ? "hidden" : "block"}>
            <br />
            <h1 className="text-2xl   text-accent">
              {" "}
              Here's what sets To-Leet apart from traditional rental services:
            </h1>
            <br />
            <span className="text-xl text-accent">
              Comprehensive Space Options:
            </span>{" "}
            <br /> Whether you're searching for a cozy apartment, a spacious
            garage, or a commercial shop,
            <span className="text-accent"> To-Leet</span> has got
            you covered. Our platform features a wide range of rental options,
            catering to various needs and preferences. With our vast selection,
            you'll find the ideal space to suit your requirements.
            <br />
            <br />
            <span className="text-xl  text-accent">
              {" "}
              Advanced Search and Filtering:
            </span>{" "}
            <br /> Our website offers a sophisticated search and filtering
            system, enabling you to narrow down your options effortlessly.
            Specify your desired location, size, amenities, and budget, and our
            intelligent algorithms will present you with tailored results,
            saving you valuable time and effort.
            <br />
            <br />
            <span className="text-xl  text-accent">
              {" "}
              Detailed Property Profiles:
            </span>{" "}
            <br />
            Each rental space listed on To-Leet comes with a comprehensive
            profile, including high-resolution photos, detailed descriptions,
            amenities, availability, and pricing information. This wealth of
            information allows you to make an informed decision about which
            space best aligns with your needs.
            <br />
            <br />
            <span className="text-xl text-accent">
              Transparent Rental Process:
            </span>{" "}
            <br /> To-Leet believes in transparency, which is why we facilitate
            direct communication between renters and property owners. Through
            our secure messaging system, you can ask questions, discuss terms,
            and negotiate rental agreements without any intermediaries, ensuring
            a smooth and transparent rental process.
            <br />
            <br />
            <span className="text-xl text-accent">
              {" "}
              Secure and Trustworthy:
            </span>{" "}
            <br /> We prioritize your safety and peace of mind. To-Leet
            thoroughly verifies property owners and ensures that all listings
            are legitimate and accurate.
            <br />
            To-Leet is revolutionizing the way people search for and rent homes,
            garages, and shops. Our innovative online platform, coupled with our
            commitment to exceptional customer service, aims to make your rental
            experience seamless, efficient, and enjoyable.
            <br />
            <br />
            So, whether you're an entrepreneur looking for a prime retail
            location, a hobbyist in need of a dedicated workshop, or simply
            seeking extra storage space, To-Leet is here to provide you with the
            perfect solution. Visit our website today and embark on a
            hassle-free journey to find your ideal rental space!
          </p>
        </div>
        <button
          className={open ? "hidden" : "flex"}
          onClick={() => setOpen(!open)}
        >
          Show less <IoMdArrowDropup className="mb-1 text-3xl text-accent" />
        </button>
      </div>
    </div>
  );
};

export default AboutEng;
