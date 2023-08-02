import { StateContext } from "@/Context/StateContext/StateContext";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setSignInOpen } from "@/redux/features/SignInModal/SignInModalSlice";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import { decryptFunction } from "@/Encrypt/DecryptFunction/DecryptFunction";

function PrivateRoute(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const { tokenValidation, setTokenValidation,setFilterModal,handleOpenModalEng }: any =
      useContext(StateContext);
    const router = useRouter();
    const token = decryptTransform(Cookies.get("qv-tn"));
    // const token = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
    const dispatch = useDispatch();
    useEffect(() => {
      if (!token || tokenValidation === "Invalid token") {
        Cookies.remove("qv-tn");
        Cookies.remove("qv-acn");
        Cookies.remove("qv-fn");
        Cookies.remove("qv-ln");
        const { asPath } = router;
        router.push(`/signIn?next=${asPath}`);
        setFilterModal(false);
        dispatch(setSignInOpen(true));
      } else {
        fetch("https://zsqur.quickvara.com/api/v1/users/me", {
          method: "POST",
          headers: {
            "content-type": "application/json",
             authorization: `bearer ${token}`,
          },
        })
          .then((res) => res.text())
          .then((data) => {
            const decryptedData = decryptFunction(data);
            const parsedData = JSON.parse(decryptedData);
            setTokenValidation(parsedData?.error)});
      }
    }, [dispatch, handleOpenModalEng, router, setFilterModal, setTokenValidation, token, tokenValidation]);
    return token ? <Component {...props} token={token} /> : null;
  };
}

export default PrivateRoute;
