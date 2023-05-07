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

const PopularCities = () => {
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
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline lg:-ml-4"
      >
        {lang ? "Change city?" : "শহর পরিবর্তন?"}
      </h1>

      {lang ? (
        <h1 className="text-2xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
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
      ) : (
        <h1 className="text-xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
          {cityNameBan}
          {(!lang && cityName === "Dhaka" && "ঢাকা") ||
            (cityName === "Chittagong" && "চট্টগ্রাম") ||
            (cityName === "Rajshahi" && "রাজশাহী") ||
            (cityName === "Sylhet" && "সিলেট") ||
            (cityName === "Barisal" && "বরিশাল") ||
            (cityName === "Khulna" && "খুলনা") ||
            (cityName === "Rangpur" && "রংপুর") ||
            (cityName === "Mymensingh" && "ময়মনসিংহ")}{" "}
          এর জনপ্রিয় এলাকাসমূহ
        </h1>
      )}
      {lang && (cityName === "Dhaka" || cityNameBan === "ঢাকা")  && <PopularCityOfDhaka></PopularCityOfDhaka>}
      {
         !lang &&(cityName === "Dhaka" || cityNameBan === "ঢাকা")  && <PopularAreaOfDhakaBan></PopularAreaOfDhakaBan>
      }
      {lang && (cityName === "Chittagong" || cityNameBan==="চট্টগ্রাম")&& (
        <PopularCityOfChittagong></PopularCityOfChittagong>
      )}
      {
         !lang && (cityName === "Chittagong" || cityNameBan==="চট্টগ্রাম") && <PopularAreaOfChittagongBan></PopularAreaOfChittagongBan>
      }
      {lang && (cityName === "Rajshahi" || cityNameBan==="রাজশাহী") && (
        <PopularCityOfRajshahi></PopularCityOfRajshahi>
      )}
      {!lang && (cityName === "Rajshahi" || cityNameBan==="রাজশাহী") && (
        <PopularAreaOfRajBan></PopularAreaOfRajBan>
      )}

      {lang && (cityName === "Sylhet" || cityNameBan==="সিলেট") && <PopularCityOfSylhet></PopularCityOfSylhet>}
      {!lang && (cityName === "Sylhet" || cityNameBan==="সিলেট") && <PopularAreaOfSylhetBan></PopularAreaOfSylhetBan>}

      {lang && (cityName === "Rangpur" || cityNameBan==="রংপুর") && <PopularCityOfRangpur></PopularCityOfRangpur>}
      {!lang && (cityName === "Rangpur" || cityNameBan==="রংপুর") && <PopularAreaOfRangpurBan></PopularAreaOfRangpurBan>}

      {lang && (cityName === "Barisal" || cityNameBan==="বরিশাল") && <PopularCityOfBarisal></PopularCityOfBarisal>}
      {!lang && (cityName === "Barisal" || cityNameBan==="বরিশাল") && <PopularAreaOfBariBan></PopularAreaOfBariBan>}

      {lang && (cityName === "Khulna" || cityNameBan==="খুলনা") && <PopularCityOfKhulna></PopularCityOfKhulna>}
      {!lang && (cityName === "Khulna" || cityNameBan==="খুলনা") && <PopularAreaOfKhulnaBan></PopularAreaOfKhulnaBan>}

      {lang && (cityName === "Mymensingh" || cityNameBan==="ময়মনসিংহ")  && (
        <PopularCityOfMymensingh></PopularCityOfMymensingh>
      )}
      {!lang && (cityName === "Mymensingh" || cityNameBan==="ময়মনসিংহ")  && (
        <PopularAreaOfMymBan></PopularAreaOfMymBan>
      )}
    </section>
  );
};

export default PopularCities;
