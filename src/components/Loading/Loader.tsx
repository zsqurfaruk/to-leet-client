import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center my-10 h-96 items-center">
      <ThreeDots 
      height="40" 
      width="60" 
      radius="0"
      color="#1490a3d6" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true} 
      />
    </div>
  );
};

export default Loader;
