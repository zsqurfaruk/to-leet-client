import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
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

  const createUserByEmail = (email: string, password: string & Number) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const accountLogIn = (email: string, password: string & Number) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const providerGoogleLogIn = (provider: any) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //   const updateUser = (profile) => {
  //     setLoading(true);
  //     return updateProfile(auth.currentUser, profile)
  //   };
  const logOut = () => {
    // localStorage.removeItem("accessToken");
    setLoading(true);
    return signOut(auth);
  };
  // const removeUser =()=>{
  //  return  deleteUser(auth.currentUser)

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
    user,
    loading,
    setLoading,
    createUserByEmail,
    accountLogIn,
    logOut,
    providerGoogleLogIn,
    // updateUser,
    // removeUser
  };
  return (
    <AuthContext.Provider value={authInfo}>  {loading ?  <Loading></Loading> : children}</AuthContext.Provider>
  );
};

export default AuthProvider;
