/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import style from "../../../styles/banner.module.css";
import DesEng from "./DesEng";
import DesBan from "./DesBan";
import { StateContext } from "@/Context/StateContext/StateContext";

 

const DestinationType = () => {
  const { filterTypeCity, filterTypeDivision }: any = useContext(StateContext);
  const lang = localStorage.getItem("lan");
  return (
    <section className="mb-20 mt-10 lg:-mt-10">
      {!lang ? (
        <h1
          id={
            filterTypeCity || filterTypeDivision
              ? "text-secondary"
              : style.bannerTextColor
          }
          className="text-center text-3xl font-semibold lg:-mt-4"
        >
          What's your need?
        </h1>
      ) : (
        <h1
          id={
            filterTypeCity || filterTypeDivision
              ? "text-secondary"
              : style.bannerTextColor
          }
          className="text-center text-xl font-semibold lg:-mt-4"
        >
          আপনার প্রয়োজন অনুযায়ী খুজুন
        </h1>
      )}

      {!lang ? <DesEng></DesEng> : <DesBan></DesBan>}
    </section>
  );
};

export default DestinationType;
