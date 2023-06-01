import { StateContext } from "@/Context/StateContext/StateContext";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";

function privateRoute(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const { tokenValidation, setTokenValidation }: any =
      useContext(StateContext);
    const router = useRouter();
    const token = localStorage?.getItem("token");

    useEffect(() => {
      if (!token || tokenValidation === "Invalid token") {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        const { asPath } = router;
        router.push(`/signIn?next=${asPath}`);
      } else {
        fetch("https://zsqur.to-leet.com/api/v1/users/me", {
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
    return token ? <Component {...props} token={token} /> : null;
  };
}

export default privateRoute;
