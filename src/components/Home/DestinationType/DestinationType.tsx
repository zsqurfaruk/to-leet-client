/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DesEng from "./DesEng";
import DesBan from "./DesBan";
import Cookies from "js-cookie";

const DestinationType = () => {
  const lang = Cookies.get("lan");
  return (
    <section className="mb-20 mt-10 lg:-mt-24">
      {!lang ? (
        <h1
         
          className="text-center text-3xl font-semibold lg:-mt-4 text-warning"
        >
          What's your need?
        </h1>
      ) : (
        <h1
        
          className="text-center text-xl font-semibold lg:-mt-4 text-warning"
        >
          আপনার প্রয়োজন অনুযায়ী খুজুন
        </h1>
      )}

      {!lang ? <DesEng></DesEng> : <DesBan></DesBan>}
    </section>
  );
};

export default DestinationType;
