import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import Loading from "@/components/Loading/Loading";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [signUpUserInfo, setSignUpUserInfo] = useState("");
 
//   const handleNavChange = () => {
//    const token = localStorage.getItem("token");
//    return setAuthenticated(!token);
//   };
// console.log(authenticated)
  // const createUserByEmail = (email: string, password: string & Number) => {
  //   setLoading(true);
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const accountLogIn = (email: string, password: string & Number) => {
  //   setLoading(true);
  //   return signInWithEmailAndPassword(auth, email, password);
  // };
  const providerGoogleLogIn = (provider: any) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //   const updateUser = (profile) => {
  //     setLoading(true);
  //     return updateProfile(auth.currentUser, profile)
  //   };

  
  // const handleReload = () => {
  //   const token = localStorage.getItem("token");
  //   if (getToken && token) {
  //     fetch("http://localhost:5000/api/v1/users/me")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }

  //   console.log(token);
  // };
  // if (localStorage.getItem("token")) {
  //   console.log(getToken);
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    // user,
    // loading,
    // setLoading,
    // createUserByEmail,
    // accountLogIn,
    // logOut,
    providerGoogleLogIn,
    setLanguage,
    language,
    // handleLogIn,
    userInfo,
    setUserInfo,
    signUpUserInfo,
    setSignUpUserInfo
    // updateUser,
    // removeUser
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <Loading></Loading> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
