import React,{useContext} from 'react';
import PopularAreaOfDhakaBan from "../../AllPopularAreas/PopularAreaOfDhaka/PopularAreaOfDhakaBan";
import PopularAreaOfChittagongBan from "../../AllPopularAreas/PopularAreaOfChittagong/PopularAreaOfChittagongBan";
import PopularAreaOfRajBan from "../../AllPopularAreas/PopularAreaOfRajshahi/PopularAreaOfRajBan";
import PopularAreaOfSylhetBan from "../../AllPopularAreas/PopularAreaOfSylhet/PopularAreaOfSylhetBan";
import PopularAreaOfRangpurBan from "../../AllPopularAreas/PopularAreaOfRangpur/PopularAreaOfRangpurBan";
import PopularAreaOfMymBan from "../../AllPopularAreas/PopularAreaOfMymensingh/PopularAreaOfMymBan";
import PopularAreaOfBariBan from "../../AllPopularAreas/PopularAreaOfBarisal/PopularAreaOfBariBan";
import PopularAreaOfKhulnaBan from "../../AllPopularAreas/PopularAreaOfKhulna/PopularAreaOfKhulnaBan";
import { StateContext } from '@/Context/StateContext/StateContext';
const AllAreasBan = () => {
    const { cityName, setCityName, cityNameBan, setCityNameBan }: any =
    useContext(StateContext);
    const lang = localStorage.getItem("lan");
    return (
       <section>
         {
            !lang && <h1 className="text-xl mb-5 pl-2 pb-1 border-l-4 border-b-4 border-accent text-black">
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
        }
        <div>
             {
         !lang &&(cityName === "Dhaka" || cityNameBan === "ঢাকা")  && <PopularAreaOfDhakaBan></PopularAreaOfDhakaBan>
      }
      {
         !lang && (cityName === "Chittagong" || cityNameBan==="চট্টগ্রাম") && <PopularAreaOfChittagongBan></PopularAreaOfChittagongBan>
      }
      {!lang && (cityName === "Rajshahi" || cityNameBan==="রাজশাহী") && (
        <PopularAreaOfRajBan></PopularAreaOfRajBan>
      )}
       {!lang && (cityName === "Sylhet" || cityNameBan==="সিলেট") && <PopularAreaOfSylhetBan></PopularAreaOfSylhetBan>}

       {!lang && (cityName === "Rangpur" || cityNameBan==="রংপুর") && <PopularAreaOfRangpurBan></PopularAreaOfRangpurBan>}
       {!lang && (cityName === "Barisal" || cityNameBan==="বরিশাল") && <PopularAreaOfBariBan></PopularAreaOfBariBan>}
       {!lang && (cityName === "Khulna" || cityNameBan==="খুলনা") && <PopularAreaOfKhulnaBan></PopularAreaOfKhulnaBan>}
       {!lang && (cityName === "Mymensingh" || cityNameBan==="ময়মনসিংহ")  && (
        <PopularAreaOfMymBan></PopularAreaOfMymBan>
      )}
        </div>
       </section>
    );
};

export default AllAreasBan;