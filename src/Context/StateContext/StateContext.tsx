import React, { createContext, useState } from "react";

export const StateContext = createContext({});

const StateInfo = ({ children }: any) => {
  const [tokenValidation, setTokenValidation] = useState("");
  const [filterTypeCity, setFilterTypeCity] = useState(false);
  const [filterTypeDivision, setFilterTypeDivision] = useState(false);
  const [cityName, setCityName] = useState({});
  const [homePopularAreaName, setHomePopularAreaName] = useState({});
  const [divisionNameEng, setDivisionNameEng] = useState({});
  const [districtsName, setDistrictsName] = useState({});
  const [previous, setPrevious] = useState("");
  const [language, setLanguage] = useState(false);
  const [districtLocation, setDistrictLocation] = useState("");
  const [openModalEng, setOpenModalEng] = useState(false);
  const [openModalValue, setOpenModalValue] = useState({});
  const [filterModal, setFilterModal] = useState(false);
  const [filterModalValue, setFilterModalValue] = useState({});
  const [typeCount, setTypeCount] = useState([]);
  const [filterValue, setFilterValue] = useState({
    cityName: cityName,
    homePopularAreaName: homePopularAreaName,
    filterModalValue: filterModalValue,
    divisionNameEng: divisionNameEng,
    districtsName: districtsName,
  });
  const handleOpenModalEng = () => setOpenModalEng(!openModalEng);
  const handleFilterModal = () => setFilterModal(!filterModal);
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
    homePopularAreaName,
    setHomePopularAreaName,
    divisionNameEng,
    setDivisionNameEng,
    setDistrictLocation,
    districtLocation,
    setOpenModalEng,
    openModalEng,
    handleOpenModalEng,
    openModalValue,
    setOpenModalValue,
    typeCount,
    setTypeCount,
    districtsName,
    setDistrictsName,
    handleFilterModal,
    filterModal,
    setFilterModal,
    filterModalValue,
    setFilterModalValue,
    filterValue,
    setFilterValue,
  };
  return <StateContext.Provider value={info}>{children}</StateContext.Provider>;
};

export default StateInfo;
