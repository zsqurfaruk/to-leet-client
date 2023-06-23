import axios from "axios";
import { GetStaticProps } from "next";
import React, { createContext, useEffect, useState, useContext } from "react";
import { StateContext } from "../StateContext/StateContext";
import Cookies from "js-cookie";
import Loading from "@/components/Loading/Loading";

export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts] = useState([]);
  const [userCounter, setUserCounter] = useState([]);
  const { filterModal, openModalValue }: any = useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [allDataLoading, setAllDataLoading] = useState(false);
  const [uniLoading, setUniLoading] = useState(false)

  const universityValue = Cookies.get("openMV");

  const handleFilterUniversity = () => {
    setUniLoading(true);
    fetch(`https://zsqur.to-leet.com/api/v1/product`)
      .then((res) => res.json())
      .then((data) => {
        const result = data?.filter(
          (post: any) => universityValue === post?.university?.eng
        );
        setUniLoading(false);
        setFilterPost(result);
      });
  };

  useEffect(() => {
    setAllDataLoading(true);
    fetch("http://localhost:5000/api/v1/product")
      .then((res) => res.json())
      .then((data) => {
        setCounterPosts(data);
        setAllDataLoading(false);
      });
  }, [reload]);

  useEffect(() => {
    fetch("https://zsqur.to-leet.com/api/v1/users/signup")
      .then((res) => res.json())
      .then((data) => setUserCounter(data));
  }, []);

  const [counter, setCounter] = useState([]);
  useEffect(() => {
    fetch("https://zsqur.to-leet.com/api/v1/product/category/type")
      .then((res) => res.json())
      .then((data) => setCounter(data?.countProduct));
  }, [reload]);

  const info = {
    counterPosts,
    userCounter,
    counter,
    handleFilterUniversity,
    filterPost,
    setFilterPost,
    setLoading,
    loading,
    reload,
    setReload,
    allDataLoading,
    uniLoading
  };
  return (
    <APIContext.Provider value={info}>
      {children}
    </APIContext.Provider>
  );
};

export default ApiContext;
