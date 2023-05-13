import React, { createContext, useState } from "react";

export const PostStateContext = createContext({});

const PostInfo = ({ children }: any) => {
  const [postCityNameBan, setPostCityNameBan] = useState("");
  const [postCityNameEng, setPostCityNameEng] = useState("");
  const [postAreaName, setPostAreaName] = useState("");
  const [postDivisionNameBan, setPostDivisionNameBan] = useState("");
  const [postDivisionNameEng, setPostDivisionNameEng] = useState("");
  const [getPopularAreaName, setGetPopularAreaName] = useState("");
  const [size, setSize] = useState(null);
  const [postOpenModal, setPostOpenModal] = useState(false)
  const [modalValue, setModalValue] = useState("")

  // const handlePostOpenModal = (value: any) => setSize(value);
    const handlePostOpenModal = () => setPostOpenModal(!postOpenModal);
 console.log(postOpenModal)
 
  const info = {
    postCityNameBan,
    setPostCityNameBan,
    postCityNameEng,
    setPostCityNameEng,
    setPostAreaName,
    postAreaName,
    handlePostOpenModal,
    size,
    setSize,
    postDivisionNameBan,
    setPostDivisionNameBan,
    postDivisionNameEng,
    setPostDivisionNameEng,
    getPopularAreaName, setGetPopularAreaName,
    postOpenModal, setPostOpenModal,
    modalValue, setModalValue
  };

  return (
    <PostStateContext.Provider value={info}>
      {children}
    </PostStateContext.Provider>
  );
};

export default PostInfo;
