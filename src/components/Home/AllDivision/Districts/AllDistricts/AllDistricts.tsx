import React from "react";
import DistrictsOfBarisal from "../DistrictsOfBarisal/DistrictsOfBarisal";
import DistrictsOfChittagong from "../DistrictsOfChittagong/DistrictsOfChittagong";
import DistrictsOfDhaka from "../DistrictsOfDhaka/DistrictsOfDhaka";
import DistrictsOfKhulna from "../DistrictsOfKhulna/DistrictsOfKhulna";
import DistrictsOfMym from "../DistrictsOfMymensingh/DistrictsOfMymensingh";
import DistrictsOfRajshahi from "../DistrictsOfRajshahi/DistrictsOfRajshahi";
import DistrictsOfRangpur from "../DistrictsOfRangpur/DistrictsOfRangpur";
import DistrictsOfSylhet from "../DistrictsOfSylhet/DistrictsOfSylhet";
import FilterModal from "@/components/Home/Banner/Modal/FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { setDivisionNameEng } from "@/redux/features/DivisionFilter/DivisionFilterSlice";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";

const AllDistricts = () => {
  const dispatch = useDispatch();
  const handlePrevious = () => {
    dispatch(setDivisionNameEng({
      eng: "",
      ban: ""
    }));
    dispatch(setDistrictsName({
      eng: "",
      ban: ""
    }));
     
  };
  const divisionNameEng = useSelector((state: RootState) => state['qv-dn'].divisionNameEng);
  const lang = useSelector((state:any) => state.language.language);
  return (
    <section className="w-full lg:mt-72 lg:ml-4 pl-9 md:pl-0 md:mx-0">
      <div>
        <h1
          onClick={handlePrevious}
          className="text-warning text-sm mb-5 cursor-pointer hover:underline"
        >
          {!lang ? "Change Division?" : "বিভাগ পরিবর্তন?"}
        </h1>
        <h1 className="w-11/12 md:w-full text-2xl mb-5 border-l-4 border-b-4 border-warning pl-2 text-gray-700">
          {!lang ? (
            <span>Districts of {divisionNameEng?.eng}:</span>
          ) : (
            <span className="text-xl">{divisionNameEng?.ban} এর জেলাসমুহঃ</span>
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
