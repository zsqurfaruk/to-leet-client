import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";
import React, { createContext, useEffect, useState} from "react";
export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  // const [counterPosts, setCounterPosts] = useState([]);
  const [userCounter, setUserCounter] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [personalPost, setPersonalPost] = useState([]);
  const [profileImageReload, setProfileImageReload] = useState(false)
  const [feedbacks, setFeedback] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/users/signup")
  //     .then((res) => res.text())
  //     .then((data) =>{
  //       const decryptedUser = decryptFunction(data);
  //       const parsedUser = JSON.parse(decryptedUser);
  //       // console.log(parsedUser)
  //       setUserCounter(parsedUser)
  //       setProfileImageReload(true)
  //     });
  // }, [profileImageReload,setProfileImageReload]);

  const [counter, setCounter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/category/type")
      .then((res) => res.json())
      .then((data) => setCounter(data?.countProduct));
  }, [reload]);

  const info = {
    userCounter,
    counter,
    filterPost,
    setFilterPost,
    setLoading,
    loading,
    reload,
    setReload,
    personalPost, setPersonalPost,
    profileImageReload, setProfileImageReload,
    profileLoading, setProfileLoading,
    feedbacks, setFeedback
  };
  return (
    <APIContext.Provider value={info}>
      {children}
    </APIContext.Provider>
  );
};

export default ApiContext;
