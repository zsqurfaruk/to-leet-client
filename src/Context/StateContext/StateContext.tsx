import React, { createContext, useEffect, useState } from "react";
 
export const StateContext = createContext({});

const StateInfo = ({ children }: any) => {
  const [tokenValidation, setTokenValidation] = useState("");
  const [filterTypeCity, setFilterTypeCity] = useState(false);
  const [filterTypeDivision, setFilterTypeDivision] = useState(false);
  const [previous, setPrevious] = useState("");
  const [openModalEng, setOpenModalEng] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [filterModalValue, setFilterModalValue] = useState({});
  const [typeCount, setTypeCount] = useState([]);
  const [destinationType, setDestinationType] = useState("")
  const [changedDetailsPic, setChangedDetailsPic] = useState(false)
  const [universityTypeFilter, setUniversityTypeFilter] = useState(false)
  const [storeUniFilterValue, setStoreUniFilterValue] = useState(false)
  const [ feedbackModal, setFeedbackModal] = useState(false)

  const handleOpenModalEng = () => setOpenModalEng(!openModalEng);
  const handleFilterModal = () => setFilterModal(!filterModal);
  const handleUniversityTypeFilterModal = () => setUniversityTypeFilter(!universityTypeFilter);
 const handleFeedbackModal =()=> setFeedbackModal(!feedbackModal)
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
    setPrevious,
    previous,
    setOpenModalEng,
    openModalEng,
    handleOpenModalEng,
    typeCount,
    setTypeCount,
    handleFilterModal,
    filterModal,
    setFilterModal,
    filterModalValue,
    setFilterModalValue,
    destinationType, setDestinationType,
    changedDetailsPic, setChangedDetailsPic,
    handleUniversityTypeFilterModal,
    universityTypeFilter, setUniversityTypeFilter,
    storeUniFilterValue, setStoreUniFilterValue,
    feedbackModal, setFeedbackModal,
    handleFeedbackModal
  };
  return <StateContext.Provider value={info}>{!loading && children}</StateContext.Provider>;
};

export default StateInfo;
