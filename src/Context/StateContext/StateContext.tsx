import React, { createContext, useState } from "react";

export const StateContext = createContext({});

const StateInfo = ({ children }: any) => {
  const [tokenValidation, setTokenValidation] = useState("");
  const [filterTypeCity, setFilterTypeCity] = useState(false)
  const [filterTypeDivision, setFilterTypeDivision] = useState(false)
  const [cityName, setCityName] = useState("")
  const [cityNameBan, setCityNameBan] = useState("")
  const [divisionNameEng, setDivisionNameEng] = useState("");
  const [divisionNameBan, setDivisionNameBan] = useState("");
  const [previous, setPrevious] = useState("");
  const [language, setLanguage] = useState(false);
  const [districtLocation, setDistrictLocation] = useState("");
  const [openModalEng, setOpenModalEng] = useState(false);
  const [openModalBan, setOpenModalBan] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false)
 
  const handleOpenModalEng = () => setOpenModalEng(!openModalEng);
  const handleOpenModalBan = () => setOpenModalBan(!openModalBan);
  // const [open, setOpen] = useState<boolean>(false);

  // const handleClickOpen = () => {
  //   setIsOpen(true);
  //   console.log("jkjkj")
  // };
  // const [size, setSize] = useState(null);
  // const handleOpen = (value:any) => setSize(value);
  const info = {
    tokenValidation,
    setTokenValidation,
    filterTypeCity,
    setFilterTypeCity,
    filterTypeDivision,
    setFilterTypeDivision,
    setCityName,
    cityName,
    setPrevious,
    previous,
    setLanguage,
    language,
    setCityNameBan,
    cityNameBan,
    divisionNameEng,
    setDivisionNameEng,
    setDivisionNameBan,
    divisionNameBan,
    setDistrictLocation,
    districtLocation,
    setOpenModalEng,
    openModalEng,
    handleOpenModalEng,
    openModalBan,
    setOpenModalBan,
    handleOpenModalBan,
  

  };
  return <StateContext.Provider value={info}>{children}</StateContext.Provider>;
};

export default StateInfo;
