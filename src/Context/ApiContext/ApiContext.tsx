import axios from "axios";
import { GetStaticProps } from "next";
import React, { createContext, useEffect, useState, useContext } from "react";
import { StateContext } from "../StateContext/StateContext";
import Cookies from "js-cookie";

export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts] = useState([]);
  const [userCounter, setUserCounter] = useState([]);
  const { filterModal, openModalValue }: any = useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  const [allDataLoading, setAllDataLoading] = useState(false)

 const universityValue = Cookies.get("openMV")

  const handleFilterUniversity = () => {
    setLoading(true)
    fetch(`http://localhost:5000/api/v1/product`)
      .then((res) => res.json())
      .then((data) => {
        const result = data?.filter(
          (post: any) => universityValue === post?.university?.eng);
        setLoading(false)
        setFilterPost(result);
      });
  };

  useEffect(() => {
    setAllDataLoading(true)
    fetch("http://localhost:5000/api/v1/product")
      .then((res) => res.json())
      .then((data) => {setCounterPosts(data)
        setAllDataLoading(false)});
  }, [reload]);



  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users/signup")
      .then((res) => res.json())
      .then((data) => setUserCounter(data));
  }, []);
 
  const [counter, setCounter] = useState([])
  useEffect(()=>{
   fetch('http://localhost:5000/api/v1/product/category/type')
   .then(res=>res.json())
   .then(data=> setCounter(data?.countProduct))
  },[reload])

  const info = {
    counterPosts,
    userCounter,
    counter,
    handleFilterUniversity,
    filterPost,
    setFilterPost,
    setLoading,
    loading,
    reload, setReload,
    allDataLoading
  };
  return <APIContext.Provider value={info}>{children}</APIContext.Provider>;
};

export default ApiContext;
