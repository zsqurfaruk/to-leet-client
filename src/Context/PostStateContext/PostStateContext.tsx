import React, { createContext, useState } from "react";

export const PostStateContext = createContext({});

const PostInfo = ({ children }: any) => {
  const [postCityNameBan, setPostCityNameBan] = useState("");
  const [postCityNameEng, setPostCityNameEng] = useState("");
  const [postAreaName, setPostAreaName] = useState("");
  const [size, setSize] = useState(null);

  const handlePostOpenModal = (value: any) => setSize(value);
  //   const handlePostOpenModal = () => setPostOpenModal(!postOpenModal);

  console.log(postAreaName);
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
  };

  return (
    <PostStateContext.Provider value={info}>
      {children}
    </PostStateContext.Provider>
  );
};

export default PostInfo;
