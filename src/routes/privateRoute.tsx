import { StateContext } from '@/Context/StateContext/StateContext';
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';

function privateRoute(Component:any) {
  return function AuthenticatedComponent(props:any) {
    const {tokenValidation, setTokenValidation}:any = useContext(StateContext)
    const router = useRouter();
    const token = localStorage?.getItem('token');

    useEffect(() => {
      if (!token || tokenValidation === "Invalid token") {
        localStorage.removeItem('token')
        router.push("/signIn");
      } else {
        fetch("http://localhost:5000/api/v1/users/me", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setTokenValidation(data?.error));
      }
    }, [router, setTokenValidation, token, tokenValidation]);
console.log(tokenValidation)
    return token ? <Component {...props} token={token} /> : null;
  };
}

export default privateRoute;



// import Loading from "@/components/Loading/Loading";
// import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
// import { useRouter } from "next/router";
// import { useContext, useEffect } from "react";

// const privateRoute = (WrappedComponent: any) => {
//   const AuthWrapper = (props: any) => {
//     const { getToken, loading }: any = useContext(AuthContext);
//     const router = useRouter();

//     useEffect(() => {
//       if (!getToken) {
//         router.push("/signIn");
//       }
//     }, [getToken, router]);

//     if (loading) {
//       return <Loading></Loading>;
//     }
//     return <WrappedComponent {...props} />;
//   };

//   return AuthWrapper;
// };

// export default privateRoute;
