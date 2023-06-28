import { StateContext } from "@/Context/StateContext/StateContext";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";

function PrivateRoute(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const { tokenValidation, setTokenValidation }: any =
      useContext(StateContext);
    const router = useRouter();
    const cookieValue = Cookies.get('token');
    const token = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
    useEffect(() => {
      if (!token || tokenValidation === "Invalid token") {
        Cookies.remove("token");
        Cookies.remove("authentication");
        Cookies.remove("firstName");
        Cookies.remove("lastName");
        const { asPath } = router;
        router.push(`/signIn?next=${asPath}`);
      } else {
        fetch("https://zsqur.quickvara.com/api/v1/users/me", {
          method: "POST",
          headers: {
            "content-type": "application/json",
             authorization: `bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setTokenValidation(data?.error));
      }
    }, [router, setTokenValidation, token, tokenValidation]);
    return token ? <Component {...props} token={token} /> : null;
  };
}

export default PrivateRoute;
