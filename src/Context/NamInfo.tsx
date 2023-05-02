import React, { createContext, useState } from "react";

export const NameContext = createContext({});

const NamInfo = ({ children }: any) => {
  const [rentName, setRentName] = useState('');

  const info = {
    rentName,
    setRentName,
  };

  return <NameContext.Provider value={info}>{children}</NameContext.Provider>;
};

export default NamInfo;
