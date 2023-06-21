/* eslint-disable react/no-unescaped-entities */
import React,{useContext} from "react";
import DesEng from "./DesEng";
import DesBan from "./DesBan";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { StateContext } from "@/Context/StateContext/StateContext";
 

const DestinationType = () => {
  const {lang}:any = useContext(FilterContext)
  const {filterTypeDivision, divisionNameEng}:any = useContext(StateContext)
  
  return (
    <section  className={
      filterTypeDivision && Object.keys(divisionNameEng).length === 0
        ? "mb-20 mt-10 lg:-mt-[296px]"
        : filterTypeDivision && divisionNameEng
        ? "mb-20 mt-10 lg:-mt-[235px]"
        : "mb-20 mt-10 lg:-mt-52"
    }
     >
      {!lang ? (
        <h1 className="text-center text-3xl font-semibold lg:-mt-4 text-warning">
          What's your need?
        </h1>
      ) : (
        <h1 className="text-center text-xl font-semibold lg:-mt-6 text-warning">
          আপনার প্রয়োজন অনুযায়ী খুজুন
        </h1>
      )}

      {!lang ? <DesEng></DesEng> : <DesBan></DesBan>}
    </section>
  );
};

export default DestinationType;
