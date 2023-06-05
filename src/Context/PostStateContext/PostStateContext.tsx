import React, { createContext, useState } from "react";

export const PostStateContext = createContext({});

const PostInfo = ({ children }: any) => {
  const [postCityNameEng, setPostCityNameEng] = useState({});
  const [postAreaName, setPostAreaName] = useState({});
  const [postDistrictsName, setPostDistrictsName] = useState({});
  const [postDivisionNameEng, setPostDivisionNameEng] = useState({});
  const [getPostPopularAreaName, setGetPostPopularAreaName] = useState({});
  const [postUniversityModalValue, setPostUniversityModalValue] = useState({});
  const [postOpenModal, setPostOpenModal] = useState(false);
  const [postUniversityModal, setPostUniversityModal] = useState(false);
  const [getUniversityModalValue, setGetUniversityModalValue] = useState({})
  const [modalValue, setModalValue] = useState({});
  const [bedNumbers, setBedNumbers] = useState({});
  const [bedRooms, setBedRooms] = useState({});
  const [bathRooms, setBathRooms] = useState({});
  const [wifi, setWifi] = useState({});
  const [totalBed, setTotalBed] = useState({})
  
  // const [popularAreaNameForPost, setPopularAreaNameForPost] = useState("");
  // const handlePostOpenModal = (value: any) => setSize(value);
  const handlePostOpenModal = () => setPostOpenModal(!postOpenModal);
  const handlePostUniversityModal = () =>
    setPostUniversityModal(!postUniversityModal);

  const info = {
    postCityNameEng,
    setPostCityNameEng,
    setPostAreaName,
    postAreaName,
    handlePostOpenModal,
    postDivisionNameEng,
    setPostDivisionNameEng,
    getPostPopularAreaName,
    setGetPostPopularAreaName,
    postOpenModal,
    setPostOpenModal,
    modalValue,
    setModalValue,
    postDistrictsName,
    setPostDistrictsName,
    postUniversityModal,
    setPostUniversityModal,
    handlePostUniversityModal,
    postUniversityModalValue, setPostUniversityModalValue,
    getUniversityModalValue, setGetUniversityModalValue,
    bedNumbers, setBedNumbers,
    bedRooms, setBedRooms,
    bathRooms, setBathRooms,
    wifi, setWifi,
    totalBed, setTotalBed
     
  };

  return (
    <PostStateContext.Provider value={info}>
      {children}
    </PostStateContext.Provider>
  );
};

export default PostInfo;
