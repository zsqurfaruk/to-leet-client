import React, { createContext, useState } from "react";

export const FilterContext = createContext({});

const FilterInfo = ({ children }: any) => {
  const [filterCity, setFilterCity] = useState({})

  const info = {
    filterCity, setFilterCity
  };

  return <FilterContext.Provider value={info}>{children}</FilterContext.Provider>;
};

export default FilterInfo;
