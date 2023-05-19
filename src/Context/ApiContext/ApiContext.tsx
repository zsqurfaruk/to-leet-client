import axios from "axios";
import { GetStaticProps } from "next";
import React, { createContext, useEffect, useState,useContext } from "react";
import { StateContext } from "../StateContext/StateContext";

export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts]= useState([])
  const [userCounter, setUserCounter]= useState([])
  const {filterModal}:any = useContext(StateContext)
//   axios.get('http://localhost:5000/api/v1/product')
// .then(function (response: any) {
//   // handle success
//   setCounterPosts(response.data);
// })
// .catch(function (error:any) {
//   // handle error
//   console.log(error);
// })
// useEffect(()=>{
//   fetch('http://localhost:5000/api/v1/product')
//   .then(res=>res.json())
//   .then(data=>setCounterPosts(data))
// },[])
useEffect(()=>{
  fetch('http://localhost:5000/api/v1/product')
  .then(res=>res.json())
  .then(data=>setCounterPosts(data))
},[])
 

useEffect(()=>{
  fetch('http://localhost:5000/api/v1/users/signup')
  .then(res=>res.json())
  .then(data=>setUserCounter(data?.data))
},[])
const handleFilter =()=>{
  counterPosts.filter((lc)=> lc === filterModal )
}
  const info = {
    counterPosts,
    userCounter,
    handleFilter
  };
  return <APIContext.Provider value={info}>{children}</APIContext.Provider>;
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/api/v1/product");
//   const data = await res.json();
//   console.log(data)
//   return {
//     props: {
//       products: data,
//     },
//   };
// };
export default ApiContext;
