import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useContext } from "react";
import DistrictsOfBarisal from "../DistrictsOfBarisal/DistrictsOfBarisal";
import DistrictsOfChittagong from "../DistrictsOfChittagong/DistrictsOfChittagong";
import DistrictsOfDhaka from "../DistrictsOfDhaka/DistrictsOfDhaka";
import DistrictsOfKhulna from "../DistrictsOfKhulna/DistrictsOfKhulna";
import DistrictsOfMym from "../DistrictsOfMymensingh/DistrictsOfMymensingh";
import DistrictsOfRajshahi from "../DistrictsOfRajshahi/DistrictsOfRajshahi";
import DistrictsOfRangpur from "../DistrictsOfRangpur/DistrictsOfRangpur";
import DistrictsOfSylhet from "../DistrictsOfSylhet/DistrictsOfSylhet";
import FilterModal from "@/components/Home/Banner/Modal/FilterModal";

const AllDistricts = () => {
  const { divisionNameEng, setDivisionNameEng, setDistrictsName }: any = useContext(StateContext);
  const handlePrevious = () => {
    setDivisionNameEng({});
    setDistrictsName({})
  };

  const lang = localStorage.getItem("lan");

  return (
    <section className="lg:mt-72 lg:ml-4 mx-7 md:mx-14 lg:mx-0">
      
      <div>
        <h1
          onClick={handlePrevious}
          className="text-secondary text-sm mb-5 cursor-pointer hover:underline"
        >
          {!lang ? "Change Division?" : "বিভাগ পরিবর্তন?"}
        </h1>
        <h1 className="text-2xl mb-5 border-l-4 border-b-4 border-accent pl-2 text-black">
        {!lang ? (
          <span>Districts of {divisionNameEng?.eng}:</span>
        ) : (
          <span className="text-xl">
            {divisionNameEng?.ban} এর জেলাসমুহঃ
          </span>
        )}
        <FilterModal></FilterModal>
      </h1>
        {divisionNameEng?.eng === "Dhaka" && (
          <DistrictsOfDhaka></DistrictsOfDhaka>
        )}
        {divisionNameEng?.eng === "Chittagong" && (
          <DistrictsOfChittagong></DistrictsOfChittagong>
        )}
        {divisionNameEng?.eng === "Rajshahi" && (
          <DistrictsOfRajshahi></DistrictsOfRajshahi>
        )}
        {divisionNameEng?.eng === "Khulna" && (
          <DistrictsOfKhulna></DistrictsOfKhulna>
        )}
        {divisionNameEng?.eng === "Sylhet" && (
          <DistrictsOfSylhet></DistrictsOfSylhet>
        )}
        {divisionNameEng?.eng === "Barisal" && (
          <DistrictsOfBarisal></DistrictsOfBarisal>
        )}
        {divisionNameEng?.eng === "Rangpur" && (
          <DistrictsOfRangpur></DistrictsOfRangpur>
        )}
        {divisionNameEng?.eng === "Mymensingh" && (
          <DistrictsOfMym></DistrictsOfMym>
        )}
      </div>
    </section>
  );
};

export default AllDistricts;
