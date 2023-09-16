/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Ratings from "./Ratings";
import { useSelector } from "react-redux";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";
import Slider from "react-slick";

const FeedbackPost = () => {
  const { userCounter,feedbacks, setFeedback }: any = useContext(APIContext);
  const [userRole, setUserRole] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/feedback")
      .then((res) => res.json())
      .then((data) => {
        const decryptedData = decryptFunction(data?.getFeedbacks);
        const parsedData = JSON.parse(decryptedData);
        setFeedback(parsedData);
      });
  }, [setFeedback]);
  const lang = useSelector((state: any) => state.language.language);
  const email = decryptTransform(Cookies.get("qv-acn"));
  useEffect(() => {
    userCounter.forEach((userRole: any) => {
      if (userRole?.role === "admin" && userRole?.email === email) {
        setUserRole(userRole?.role);
      }
    });
  }, [email, userCounter]);

  const handleDelete = async (id: any) => {
    const willDelete = await swal({
      title: !lang ? "Are you sure?" : "আপনি কি নিশ্চিত?",
      text: !lang
        ? "Are you sure that you want to delete your feedback?"
        : "আপনি কি নিশ্চিত যে আপনি আপনার মতামতটি মুছে ফেলতে চান?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/feedback/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.message === "success") {
          swal({
            text: !lang
              ? "Deleted! Your feedback has been deleted!"
              : "আপনার মতামতটি মুছে ফেলা হয়েছে।",
            icon: "success",
          });
        }
      } catch (error) {
        swal(
          "Error",
          "An error occurred while deleting your account.",
          "error"
        );
      }
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50px",
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
          centerPadding: "50px",
        },
      },
    ],
  };
  return (
    <section className=" ">
      <div className="lg:w-10/12 mx-auto pt-14">
        <div>
          {!lang ? (
            <h1 className="text-center text-3xl md:text-4xl font-semibold text-warning">
              Feedback
            </h1>
          ) : (
            <h1 className="text-center text-xl md:text-2xl font-semibold text-warning">
              প্রতিক্রিয়া
            </h1>
          )}
          {!lang ? (
            <p className="text-center px-2 lg:px-0">
              We love seeing our users' joy when using our services,
              <br className="hidden md:flex" /> and we love giving them a great
              experience{" "}
            </p>
          ) : (
            <p className="text-center px-2 lg:px-0 text-sm mt-1">
              আমরা আমাদের পরিষেবাগুলি ব্যবহার করার সময় আমাদের ব্যবহারকারীদের
              আনন্দ <br className="hidden md:flex" /> দেখতে পছন্দ করি এবং আমরা
              তাদের একটি দুর্দান্ত অভিজ্ঞতা দিতে পছন্দ করি
            </p>
          )}
        </div>
        <Slider {...settings}>
          {feedbacks?.map((feedback: any) => (
            <Card
              key={feedback._id}
              shadow={false}
              className="shadow-md hover:ease-in-out hover:duration-700 px-4 bg-gray-100 bg-opacity-75 hover:bg-primary"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-2"
              >
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      {feedback.name}
                    </Typography>
                    <div className="flex items-center gap-0">
                      <Ratings feedback={feedback}></Ratings>
                    </div>
                  </div>
                  <Typography color="blue-gray"> {feedback.address}</Typography>
                </div>
              </CardHeader>
              
              <CardBody className="mb-6 p-0">
                {feedback.description.length > 140 ? (
                  <Typography>
                    &quot;{feedback.description.slice(0, 140)}... &quot;
                  </Typography>
                ) : (
                  <Typography>
                    &quot;{feedback.description.slice(0, 200)}&quot;
                  </Typography>
                )}
              </CardBody>
              {email && userRole && (
                <button
                  onClick={() => handleDelete(feedback._id)}
                  className="btn btn-warning btn-sm mb-2 -mt-3"
                >
                  {!lang ? "Delete" : "মুছে ফেলুন"}
                </button>
              )}
            </Card>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeedbackPost;

// Fetch data and pass it as a prop
