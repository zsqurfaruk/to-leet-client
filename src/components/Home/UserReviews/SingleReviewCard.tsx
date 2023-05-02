import React from "react";
import { MdOutlineRateReview } from "react-icons/md";
import style from "../../../styles/banner.module.css"

const SingleReviewCard = ({ reviews }:any) => {
  const { name, review } = reviews;

  return (
    <div className="card shadow-md shadow-accent">
      <div className="card-body">
        <MdOutlineRateReview  id={style.bannerTextColor} className="text-3xl"></MdOutlineRateReview>
        <p className="text-white">{review}</p>
        <div className="flex  items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="h-10 w-10" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt=""></img>
            </div>
          </div>
          <div>
            <h5 className="text-lg text-white">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewCard;
