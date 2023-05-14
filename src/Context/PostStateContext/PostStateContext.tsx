import React, { createContext, useState } from "react";

export const PostStateContext = createContext({});

const PostInfo = ({ children }: any) => {
  const [postCityNameEng, setPostCityNameEng] = useState({});
  const [postAreaName, setPostAreaName] = useState("");
  const [postDivisionNameBan, setPostDivisionNameBan] = useState("");
  const [postDivisionNameEng, setPostDivisionNameEng] = useState("");
  const [getPostPopularAreaName, setGetPostPopularAreaName] = useState({});
  const [size, setSize] = useState(null);
  const [postOpenModal, setPostOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState({});
  const [popularAreaNameForPost, setPopularAreaNameForPost] = useState("");
  // const handlePostOpenModal = (value: any) => setSize(value);
  const handlePostOpenModal = () => setPostOpenModal(!postOpenModal);
  console.log(postCityNameEng,);
  console.log(getPostPopularAreaName,);

  const info = {
    
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
    getPostPopularAreaName, setGetPostPopularAreaName,
    postOpenModal,
    setPostOpenModal,
    modalValue,
    setModalValue,
    popularAreaNameForPost,
    setPopularAreaNameForPost,
  };

  return (
    <PostStateContext.Provider value={info}>
      {children}
    </PostStateContext.Provider>
  );
};

export default PostInfo;
