import Loading from "@/components/Loading/Loading";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const privateRoute = (WrappedComponent: any) => {
  const AuthWrapper = (props: any) => {
    const { user, loading }: any = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/signIn");
      }
    }, [router, user]);

    if (loading) {
      return <Loading></Loading>;
    }
    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default privateRoute;
