import Loading from "@/components/Loading/Loading";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

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
  const [districtLocation, setDistrictLocation] = useState("");
  const [openModalEng, setOpenModalEng] = useState(false);
  const [openModalValue, setOpenModalValue] = useState({});
  const [filterModal, setFilterModal] = useState(false);
  const [filterModalValue, setFilterModalValue] = useState({});
  const [typeCount, setTypeCount] = useState([]);

  const city = Cookies.get("city")
  const area = Cookies.get("area")
  const district = Cookies.get("district")
  const division = Cookies.get("division")
  const filter = Cookies.get("filterMV")
  const [filterValue, setFilterValue] = useState({
    cityName: city,
    homePopularAreaName: area,
    filterModalValue: filter,
    divisionNameEng: division,
    districtsName: district,
     
  });
  const handleOpenModalEng = () => setOpenModalEng(!openModalEng);
  const handleFilterModal = () => setFilterModal(!filterModal);
// console.log(filterValue)
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
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
  return <StateContext.Provider value={info}>{loading ? <Loading></Loading> : children}</StateContext.Provider>;
};

export default StateInfo;
