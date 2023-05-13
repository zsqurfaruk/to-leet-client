import React, { useContext } from "react";
import PopularCityOfDhaka from "../../AllPopularAreas/PopularAreaOfDhaka/PopularAreaOfDhaka";
import PopularCityOfChittagong from "../../AllPopularAreas/PopularAreaOfChittagong/PopularAreaOfChittagong";
import PopularCityOfRajshahi from "../../AllPopularAreas/PopularAreaOfRajshahi/PopularAreaOfRajshahi";
import PopularCityOfSylhet from "../../AllPopularAreas/PopularAreaOfSylhet/PopularAreaOfSylhet";
import PopularCityOfRangpur from "../../AllPopularAreas/PopularAreaOfRangpur/PopularAreaOfRangpur";
import PopularCityOfBarisal from "../../AllPopularAreas/PopularAreaOfBarisal/PopularAreaOfBarisal";
import PopularCityOfKhulna from "../../AllPopularAreas/PopularAreaOfKhulna/PopularAreaOfKhulna";
import PopularCityOfMymensingh from "../../AllPopularAreas/PopularAreaOfMymensingh/PopularAreaOfMymensingh";
import { StateContext } from "@/Context/StateContext/StateContext";
const AllAresEng = () => {
    const { cityName, setCityName, cityNameBan, setCityNameBan }: any =
    useContext(StateContext);
    const lang = localStorage.getItem("lan");
  return (

   <section>
     {lang && (
        <h1 className="text-2xl mb-5 pb-1 pl-2 border-l-4 border-b-4 border-accent text-black">
          Popular area of {cityName}{" "}
          {(lang && cityNameBan === "ঢাকা" && "Dhaka") ||
            (cityNameBan === "চট্টগ্রাম" && "Chittagong") ||
            (cityNameBan === "রাজশাহী" && "Rajshahi") ||
            (cityNameBan === "সিলেট" && "Sylhet") ||
            (cityNameBan === "বরিশাল" && "Barisal") ||
            (cityNameBan === "খুলনা" && "Khulna") ||
            (cityNameBan === "রংপুর" && "Rangpur") ||
            (cityNameBan === "ময়মনসিংহ" && "Mymensingh")}
        </h1>
      ) }
    <div>
      {lang && (cityName === "Dhaka" || cityNameBan === "ঢাকা") && (
        <PopularCityOfDhaka></PopularCityOfDhaka>
      )}

      {lang && (cityName === "Chittagong" || cityNameBan === "চট্টগ্রাম") && (
        <PopularCityOfChittagong></PopularCityOfChittagong>
      )}

      {lang && (cityName === "Rajshahi" || cityNameBan === "রাজশাহী") && (
        <PopularCityOfRajshahi></PopularCityOfRajshahi>
      )}

      {lang && (cityName === "Sylhet" || cityNameBan === "সিলেট") && (
        <PopularCityOfSylhet></PopularCityOfSylhet>
      )}

      {lang && (cityName === "Rangpur" || cityNameBan === "রংপুর") && (
        <PopularCityOfRangpur></PopularCityOfRangpur>
      )}

      {lang && (cityName === "Barisal" || cityNameBan === "বরিশাল") && (
        <PopularCityOfBarisal></PopularCityOfBarisal>
      )}

      {lang && (cityName === "Khulna" || cityNameBan === "খুলনা") && (
        <PopularCityOfKhulna></PopularCityOfKhulna>
      )}

      {lang && (cityName === "Mymensingh" || cityNameBan === "ময়মনসিংহ") && (
        <PopularCityOfMymensingh></PopularCityOfMymensingh>
      )}
    </div>
   </section>
  );
};

export default AllAresEng;
