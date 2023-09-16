import { Rating } from "@material-tailwind/react";
import React from "react";

const Ratings = ({ feedback }: any) => {
  return (
    <div>
      <Rating value={feedback?.rating} readonly  ratedColor="blue-gray" />
    </div>
  );
};

export default Ratings;
