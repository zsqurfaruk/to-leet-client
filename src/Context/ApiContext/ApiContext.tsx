import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";
import React, { createContext, useEffect, useState} from "react";
export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [personalPost, setPersonalPost] = useState([]);
  const [profileImageReload, setProfileImageReload] = useState(false)
  const [feedbacks, setFeedback] = useState([]);


  const [counter, setCounter] = useState([]);
  useEffect(() => {
    fetch("https://zsqur.quickvara.com/api/v1/product/category/type")
      .then((res) => res.json())
      .then((data) => setCounter(data?.countProduct));
  }, [reload]);

  const info = {
    
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
