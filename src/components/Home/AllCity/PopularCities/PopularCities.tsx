import { StateContext } from "@/Context/StateContext/StateContext";
import { Checkbox } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import PopularCityOfDhaka from "../Cities/PopularCityOfDhaka/PopularCityOfDhaka";
import PopularCityOfChittagong from "../Cities/PopularOfChittagong/PopularOfChittagong";
import PopularCityOfRajshahi from "../Cities/PopularOfRajshahi/PopularOfRajshahi";
import PopularCityOfSylhet from "../Cities/PopularCityOfSylhet/PopularCityOfSylhet";
import PopularCityOfRangpur from "../Cities/PopularCityOfRangpur/PopularCityOfRangpur";
import PopularCityOfBarisal from "../Cities/PopularCityOfBarisal/PopularCityOfBarisal";
import PopularCityOfKhulna from "../Cities/PopularCityOfKhulna/PopularCityOfKhulna";
import PopularCityOfMymensingh from "../Cities/PopularCityOfMymensingh/PopularCityOfMymensingh";
 

const PopularCities = () => {
  const { cityName, setCityName }: any = useContext(StateContext);
 const handlePrevious=()=>{
    setCityName("")
 }
  return (
    <section>
        <h1 onClick={handlePrevious} className="text-black text-xl mb-5 cursor-pointer hover:underline lg:-ml-4">Change city?</h1>
      <h1 className="text-3xl mb-5 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
        {cityName}
      </h1>
     {
        cityName === "Dhaka" && <PopularCityOfDhaka></PopularCityOfDhaka>
     }
     {
        cityName === "Chittagong" && <PopularCityOfChittagong></PopularCityOfChittagong>
     }
     {
        cityName === "Rajshahi" && <PopularCityOfRajshahi></PopularCityOfRajshahi>
     }
     {
        cityName === "Sylhet" && <PopularCityOfSylhet></PopularCityOfSylhet>
     }
     {
        cityName === "Rangpur" && <PopularCityOfRangpur></PopularCityOfRangpur>
     }
     {
        cityName === "Barisal" && <PopularCityOfBarisal></PopularCityOfBarisal>
     }
     {
        cityName === "Khulna" && <PopularCityOfKhulna></PopularCityOfKhulna>
     }
     {
        cityName === "Mymensingh" && <PopularCityOfMymensingh></PopularCityOfMymensingh>
     }
    </section>
  );
};

export default PopularCities;
