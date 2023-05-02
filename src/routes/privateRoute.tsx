import { useRouter } from 'next/router';
import { useEffect } from 'react';

function privateRoute(Component:any) {
  return function AuthenticatedComponent(props:any) {
    const router = useRouter();
    const token = localStorage?.getItem('token');

    useEffect(() => {
      if (!token) {
        router.push('/signIn');
      }
    }, [router, token]);

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
