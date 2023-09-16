import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import lottiImage from "../../../image/animation_lm4r72df (1).json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { StateContext } from "@/Context/StateContext/StateContext";
import { setFilterModalValue } from '@/redux/features/FilterModalSlice/FilterModalSlice';
import FeedbackModal from "../Banner/Modal/FeedbackModal/FeedbackModal";

export const ContactUs = () => {
  const {handleFeedbackModal, setFilterModalValue}:any = useContext(StateContext)
  const lang = useSelector((state: any) => state.language.language);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [feedbackValue, setFeedbackvalue] = useState({})
  const handleFeedback = (data:any) => {
    const valueName={
      name: data.name,
      address:data.address,
      description:data.description
    }
    if(valueName){
      setFeedbackvalue(valueName)
      setFilterModalValue(true)
      handleFeedbackModal()
    }
  };



  return (
    <section>
      {!lang ? (
        <h1 className="text-center text-2xl md:text-4xl font-semibold  text-warning mt-14 mb-5">
          We appreciate your opinion
        </h1>
      ) : (
        <h1 className="text-center text-lg md:text-2xl font-semibold  text-warning mt-14 mb-5">
          আমরা আপনার মতামতকে মূল্যায়ন করি
        </h1>
      )}
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-warning border-b py-5  w-10/12 mx-auto">
          {/* <Image
            className="h-96 w-11/12 mx-auto hidden md:flex"
            src={image}
            alt={"Male"}
          ></Image> */}
          <Lottie
              className="h-96 w-11/12 mx-auto md:-ml-10 lg:ml-0 lg:scale-125 -mt-16 hidden md:flex"
              animationData={lottiImage}
              loop={true}
              draggable= "false"
            ></Lottie>

          <div>
          <div className="lg:w-10/12 mx-auto">
              <label className="label ">
                {!lang ? (
                  <span className="label-text text-warning">Full Name</span>
                ) : (
                  <span className="label-text text-warning"> নাম </span>
                )}
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder={
                  !lang ? "Write your full name..." : "আপনার নাম লিখুন..."
                }
                className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full"
              />
              {/* {errors.title && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )} */}
            </div>
            <div className="lg:w-10/12 mx-auto ">
              <label className="label">
                {!lang ? (
                  <span className="label-text text-warning">Address</span>
                ) : (
                  <span className="label-text text-warning"> আপনার ঠিকানা </span>
                )}
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder={
                  !lang ? "Write your address..." : "আপনার ঠিকানা লিখুন..."
                }
                className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full"
              />
              {/* {errors.title && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )} */}
            </div>
            <div className="lg:w-10/12 mx-auto">
              <label className="label">
                {!lang ? (
                  <span className="label-text text-warning"> Your feedback</span>
                ) : (
                  <span className="label-text text-warning"> আপনার মন্তব্য </span>
                )}
              </label>
              <textarea
                {...register("description")}
                className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full h-28"
                placeholder={
                  !lang
                    ? "Write your short feedback..."
                    : "আপনার সংক্ষিপ্ত মন্তব্য লিখুন..."
                }
              ></textarea>
              {/* {errors.description && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )} */}
            </div>
            {/* <button
              type="submit"
              value="Submit"
              className="btn btn-warning flex justify-end"
            /> */}
            <div className="flex justify-end lg:w-10/12 mx-auto">
              {!lang ? (
                <Button onClick={handleSubmit(handleFeedback)} className="
              bg-warning my-3  w-full">Submit</Button>
              ) : (
                <Button  onClick={handleSubmit(handleFeedback)} className=" bg-warning my-3  w-full">সাবমিট করুন </Button>
              )}
            </div>
          </div>
          </div>
      </div>
      <FeedbackModal feedbackValue={feedbackValue}></FeedbackModal>
    </section>
  );
};

export default ContactUs;

  // bg-gradient-to-r from-accent via-primary to-accent text-warning