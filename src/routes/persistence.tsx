import Loading from "@/components/Loading/Loading";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const persistence = (WrappedComponent: any) => {
  const AuthWrapper = (props: any) => {
    const { getToken, loading }: any = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!getToken) {
        router.push("/signIn");
      } else {
        fetch("http://localhost:5000/api/v1/users/me")
          .then((res) => res.json())
          .then((data) =>  (data));
      }
    }, [getToken, router]);

    if (loading) {
      return <Loading></Loading>;
    }
    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default persistence;
