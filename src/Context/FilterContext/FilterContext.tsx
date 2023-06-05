import Loading from "@/components/Loading/Loading";
import React, { createContext, useState,useEffect } from "react";

export const FilterContext = createContext({});

const FilterInfo = ({ children }: any) => {
  const [filterCity, setFilterCity] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  const info = {
    filterCity, setFilterCity
  };

  // const token = "4876e888bc2b2c9d71140fcb7fae7d191094dc7be24c25d9f782c630b19886abf0b4822e5f486eee976ca942d9649254d002d5096c771ae16a42b21f9da5547d63b5d98e655f505603386e4b0ee952fb071aab1cf0290ff9a7f3496d8e87335160e91d6b55836aa04f4056330b10c0985b78c16b103f3995471cd16fa5b7b1ef079dbe3556da9ec5b08560b2"
  // // const isFirstVisit = !localStorage.getItem('token');

  // if (token) {
  //   // Set the data in the sessionStorage
  //   sessionStorage.setItem('token', token);
  
  //   // Set a flag in the localStorage to indicate that the user has visited before
  //   localStorage.setItem('token', 'true');
  // }

  return <FilterContext.Provider value={info}> {loading ? <Loading></Loading> : children}</FilterContext.Provider>;
};

export default FilterInfo;
