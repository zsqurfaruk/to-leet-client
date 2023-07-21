import axios from "axios";
import { GetStaticProps } from "next";
import React, { createContext, useEffect, useState, useContext } from "react";
import { StateContext } from "../StateContext/StateContext";
import Cookies from "js-cookie";
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts] = useState([]);
  const [userCounter, setUserCounter] = useState([]);
  const { filterModal }: any = useContext(StateContext);
  const [filterPost, setFilterPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [allDataLoading, setAllDataLoading] = useState(false);
  const [uniLoading, setUniLoading] = useState(false)

  // const universityValue = Cookies.get("openMV");
  // const router = useRouter();
  // const params = router.asPath;
  // const refreshParams = params.split("/");

  // console.log(universityValue)
  // const uniValue = decodeURIComponent(refreshParams[2])
  // console.log(uniValue)
  // const router = useRouter();
  // const params = router.asPath;
  // const refreshParams = params.split("/");
  // const uniValue = (decodeURIComponent(refreshParams[2]))
  // console.log(uniValue)
  // const openModalValue = useSelector((state:any) => state.openModalValue );
  // const handleFilterUniversity = () => {
  //   setUniLoading(true);
  //   fetch(`http://localhost:5000/api/v1/product`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const result = data.filter(
  //         (post: any) => {
  //           if(openModalValue?.eng){
  //             return  openModalValue?.eng?.eng === (post.university?.eng )
  //           }
  //         }
  //       );
  //       setUniLoading(false);
  //       setFilterPost(result);
  //     });
  // };
  // console.log(filterPost)

  // useEffect(() => {
  //   setAllDataLoading(true);
  //   fetch("https://zsqur.quickvara.com/api/v1/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCounterPosts(data);
  //       setAllDataLoading(false);
  //     });
  // }, [reload]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users/signup")
      .then((res) => res.json())
      .then((data) => setUserCounter(data));
  }, []);

  const [counter, setCounter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/product/category/type")
      .then((res) => res.json())
      .then((data) => setCounter(data?.countProduct));
  }, [reload]);

  const info = {
    counterPosts,
    userCounter,
    counter,
    // handleFilterUniversity,
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
