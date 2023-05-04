import privateRoute from "@/routes/privateRoute";
import { useRouter } from "next/router";
import React from "react";


const Promote = () => {
    const router = useRouter()
    const { post }:any = router.query
    const decodedObject = JSON.parse(decodeURIComponent(post))
    
  return (
    <div className="my-10">
      <small>{decodedObject?.amount}</small>
      <img src={decodedObject.image} alt="" />
    </div>
  );
};

export default privateRoute(Promote);