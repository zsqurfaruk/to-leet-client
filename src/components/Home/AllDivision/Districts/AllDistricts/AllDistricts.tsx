import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import DistrictsOfDhaka from "../DistrictsOfDhaka/DistrictsOfDhaka";
import DistrictsOfChittagong from "../DistrictsOfChittagong/DistrictsOfChittagong";
import DistrictsOfRajshahi from "../DistrictsOfRajshahi/DistrictsOfRajshahi";
import DistrictsOfSylhet from "../DistrictsOfSylhet/DistrictsOfSylhet";
import DistrictsOfRangpur from "../DistrictsOfRangpur/DistrictsOfRangpur";
import DistrictsOfMymensingh from "../DistrictsOfMymensingh/DistrictsOfMymensingh";
import DistrictsOfKhulna from "../DistrictsOfKhulna/DistrictsOfKhulna";
import DistrictsOfBarisal from "../DistrictsOfBarisal/DistrictsOfBarisal";
import DistrictsOfDhakaBan from "../DistrictsOfDhaka/DistrictsOfDhakaBan";
import DistrictsOfBarishalBan from "../DistrictsOfBarisal/DistrictsOfBarishalBan";
import DistrictsOfChittaBan from "../DistrictsOfChittagong/DistrictsOfChittaBan";
import DistrictsOfKhulnaBan from "../DistrictsOfKhulna/DistrictsOfKhulnaBan";
import DistrictsOfMymBan from "../DistrictsOfMymensingh/DistrictsOfMymBan";
import DistrictsOfRajBan from "../DistrictsOfRajshahi/DistrictsOfRajBan";
import DistrictsOfRangpurBan from "../DistrictsOfRangpur/DistrictsOfRangpurBan";
import DistrictsOfSylhetBan from "../DistrictsOfSylhet/DistrictsOfSylhetBan";

const AllDistricts = () => {
  const { divisionNameEng , setDivisionNameEng, divisionNameBan, setDivisionNameBan }: any =
    useContext(StateContext);
  const handlePrevious = () => {
    setDivisionNameEng("");
    setDivisionNameBan("");
  };

  const lang = localStorage.getItem("lan");

  return (
    <section  className="flex items-center lg:mt-40 lg:ml-8 mx-auto lg:w-full">
      <div>
      <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline lg:-ml-4"
      >
        {lang ? "Change Division?" : "বিভাগ পরিবর্তন?"}
      </h1>

      {lang ? (
        <h1 className="text-2xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
         Districts of {divisionNameEng}{" "}
          {(lang && divisionNameBan === "ঢাকা" && "Dhaka") ||
            (divisionNameBan === "চট্টগ্রাম" && "Chittagong") ||
            (divisionNameBan === "রাজশাহী" && "Rajshahi") ||
            (divisionNameBan === "সিলেট" && "Sylhet") ||
            (divisionNameBan === "বরিশাল" && "Barisal") ||
            (divisionNameBan === "খুলনা" && "Khulna") ||
            (divisionNameBan === "রংপুর" && "Rangpur") ||
            (divisionNameBan === "ময়মনসিংহ" && "Mymensingh")}
        </h1>
      ) : (
        <h1 className="text-xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
          {divisionNameBan}
          {(!lang && divisionNameEng === "Dhaka" && "ঢাকা") ||
            (divisionNameEng === "Chittagong" && "চট্টগ্রাম") ||
            (divisionNameEng === "Rajshahi" && "রাজশাহী") ||
            (divisionNameEng === "Sylhet" && "সিলেট") ||
            (divisionNameEng === "Barisal" && "বরিশাল") ||
            (divisionNameEng === "Khulna" && "খুলনা") ||
            (divisionNameEng === "Rangpur" && "রংপুর") ||
            (divisionNameEng === "Mymensingh" && "ময়মনসিংহ")}{" "}
          এর জেলাসমূহ
        </h1>
      )}
      {lang &&(divisionNameEng === "Dhaka" || divisionNameBan === "ঢাকা") && <DistrictsOfDhaka></DistrictsOfDhaka>}
      {
         !lang &&(divisionNameEng === "Dhaka" || divisionNameBan === "ঢাকা")  && <DistrictsOfDhakaBan></DistrictsOfDhakaBan>
      }
      {lang && (divisionNameEng === "Chittagong" || divisionNameBan==="চট্টগ্রাম" )&& (
        <DistrictsOfChittagong></DistrictsOfChittagong>
      )}
      {
         !lang && (divisionNameEng === "Chittagong" || divisionNameBan==="চট্টগ্রাম") && <DistrictsOfChittaBan></DistrictsOfChittaBan>
      }
      {lang && (divisionNameEng === "Rajshahi"  ) && (
        <DistrictsOfRajshahi></DistrictsOfRajshahi>
      )}
      {!lang && (divisionNameEng === "Rajshahi" || divisionNameBan==="রাজশাহী") && (
        <DistrictsOfRajBan></DistrictsOfRajBan>
      )}

      {lang && (divisionNameEng === "Sylhet" || divisionNameBan==="সিলেট") &&  <DistrictsOfSylhet></DistrictsOfSylhet>}
      {!lang && (divisionNameEng === "Sylhet" || divisionNameBan==="সিলেট") && <DistrictsOfSylhetBan></DistrictsOfSylhetBan>}

      {lang && (divisionNameEng === "Rangpur" || divisionNameBan==="রংপুর") &&  <DistrictsOfRangpur></DistrictsOfRangpur>}
      {!lang && (divisionNameEng === "Rangpur" || divisionNameBan==="রংপুর") && <DistrictsOfRangpurBan></DistrictsOfRangpurBan>}

      {lang && (divisionNameEng === "Barisal" || divisionNameBan==="বরিশাল") &&  <DistrictsOfBarisal></DistrictsOfBarisal>}
      {!lang && (divisionNameEng === "Barisal" || divisionNameBan==="বরিশাল") &&  <DistrictsOfBarishalBan></DistrictsOfBarishalBan>}

      {lang && (divisionNameEng === "Khulna" || divisionNameBan==="খুলনা") &&  <DistrictsOfKhulna></DistrictsOfKhulna>}
      {!lang && (divisionNameEng === "Khulna" || divisionNameBan==="খুলনা") && <DistrictsOfKhulnaBan></DistrictsOfKhulnaBan>}

      {lang && (divisionNameEng === "Mymensingh" || divisionNameBan==="ময়মনসিংহ")  && (
         <DistrictsOfMymensingh></DistrictsOfMymensingh>
      )}
      {!lang && (divisionNameEng === "Mymensingh" || divisionNameBan==="ময়মনসিংহ")  && (
        <DistrictsOfMymBan></DistrictsOfMymBan>
      )}
      </div>
    </section>
  );
};

export default AllDistricts;
