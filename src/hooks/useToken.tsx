import Loading from "@/components/Loading/Loading";
import { useEffect, useState } from "react";

const useToken = (email: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.token) {
            <Loading></Loading>;
          } else {
            localStorage.setItem("token", data.token);
            setToken(data.token);
          }
        });
    }
  }, [email]);
  return [token];
};
export default useToken;
