import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center my-10 h-96 items-center">
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#1490a3d6"
        innerCircleColor="#1490a3d6"
        middleCircleColor="#1490a3d6"
      />
    </div>
  );
};

export default Loader;
