import Loading from "@/components/Loading/Loading";
import React, { createContext, useState,useEffect } from "react";

export const FilterContext = createContext({});

const FilterInfo = ({ children }: any) => {
  const [lang, setLang] = useState(false);
  const [filterCity, setFilterCity] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[loading])
  const info = {
    filterCity, setFilterCity,
    lang, setLang
  };

  return <FilterContext.Provider value={info}>  {loading ? <Loading></Loading> : children}</FilterContext.Provider>;
};

export default FilterInfo;
