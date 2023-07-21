import React, { createContext, useEffect, useState} from "react";
export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts] = useState([]);
  const [userCounter, setUserCounter] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://zsqur.quickvara.com/api/v1/users/signup")
      .then((res) => res.json())
      .then((data) => setUserCounter(data));
  }, []);

  const [counter, setCounter] = useState([]);
  useEffect(() => {
    fetch("https://zsqur.quickvara.com/api/v1/product/category/type")
      .then((res) => res.json())
      .then((data) => setCounter(data?.countProduct));
  }, [reload]);

  const info = {
    counterPosts,
    userCounter,
    counter,
    filterPost,
    setFilterPost,
    setLoading,
    loading,
    reload,
    setReload,
  };
  return (
    <APIContext.Provider value={info}>
      {children}
    </APIContext.Provider>
  );
};

export default ApiContext;
