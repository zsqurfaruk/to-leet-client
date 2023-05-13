import axios from "axios";
import { GetStaticProps } from "next";
import React, { createContext, useEffect, useState } from "react";

export const APIContext = createContext({});

const ApiContext = ({ children }: any) => {
  const [counterPosts, setCounterPosts]= useState([])
  const [userCounter, setUserCounter]= useState([])
//   axios.get('http://localhost:5000/api/v1/product')
// .then(function (response: any) {
//   // handle success
//   setCounterPosts(response.data);
// })
// .catch(function (error:any) {
//   // handle error
//   console.log(error);
// })
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
  const info = {
    counterPosts,
    userCounter
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
