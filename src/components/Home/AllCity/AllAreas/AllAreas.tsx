import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import PopularCityOfDhaka from "../../AllPopularAreas/PopularAreaOfDhaka/PopularAreaOfDhaka";
import PopularCityOfChittagong from "../../AllPopularAreas/PopularAreaOfChittagong/PopularAreaOfChittagong";
import PopularCityOfRajshahi from "../../AllPopularAreas/PopularAreaOfRajshahi/PopularAreaOfRajshahi";
import PopularCityOfSylhet from "../../AllPopularAreas/PopularAreaOfSylhet/PopularAreaOfSylhet";
import PopularCityOfRangpur from "../../AllPopularAreas/PopularAreaOfRangpur/PopularAreaOfRangpur";
import PopularCityOfBarisal from "../../AllPopularAreas/PopularAreaOfBarisal/PopularAreaOfBarisal";
import PopularCityOfKhulna from "../../AllPopularAreas/PopularAreaOfKhulna/PopularAreaOfKhulna";
import PopularCityOfMymensingh from "../../AllPopularAreas/PopularAreaOfMymensingh/PopularAreaOfMymensingh";
import PopularAreaOfDhakaBan from "../../AllPopularAreas/PopularAreaOfDhaka/PopularAreaOfDhakaBan";
import PopularAreaOfChittagongBan from "../../AllPopularAreas/PopularAreaOfChittagong/PopularAreaOfChittagongBan";
import PopularAreaOfRajBan from "../../AllPopularAreas/PopularAreaOfRajshahi/PopularAreaOfRajBan";
import PopularAreaOfSylhetBan from "../../AllPopularAreas/PopularAreaOfSylhet/PopularAreaOfSylhetBan";
import PopularAreaOfRangpurBan from "../../AllPopularAreas/PopularAreaOfRangpur/PopularAreaOfRangpurBan";
import PopularAreaOfMymBan from "../../AllPopularAreas/PopularAreaOfMymensingh/PopularAreaOfMymBan";
import PopularAreaOfBariBan from "../../AllPopularAreas/PopularAreaOfBarisal/PopularAreaOfBariBan";
import PopularAreaOfKhulnaBan from "../../AllPopularAreas/PopularAreaOfKhulna/PopularAreaOfKhulnaBan";
import AllAresEng from "./AllAresEng";
import AllAreasBan from "./AllAreasBan";

const AllAreas = () => {
  const { cityName, setCityName, cityNameBan, setCityNameBan }: any =
    useContext(StateContext);
  const handlePrevious = () => {
    setCityName("");
    setCityNameBan("");
  };

  const lang = localStorage.getItem("lan");

  return (
    <section>
      <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline"
      >
        {lang ? "Change city?" : "শহর পরিবর্তন?"}
      </h1>

       
      {lang ? <AllAresEng></AllAresEng> : <AllAreasBan></AllAreasBan>}
    </section>
  );
};

export default AllAreas;
