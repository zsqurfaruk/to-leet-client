import React, { useEffect, useState } from "react";
import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import ApiContext from "@/Context/ApiContext/ApiContext";
import PostInfo from "@/Context/PostStateContext/PostStateContext";
import StateInfo from "@/Context/StateContext/StateContext";
import DisableRightClick from "@/DisableRightClick/DisableRightClick";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { persistor, store } from "@/redux/app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "@/components/Loading/Loading";
 

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-VZQZNKVB27";
    script.async = true;
    document.body.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-VZQZNKVB27');
    `;
    document.body.appendChild(inlineScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain period of time
    }, 1200);

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    // <DisableRightClick>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <StateInfo>
          <PostInfo>
            <ApiContext>
              <NavBar></NavBar>
              <Component {...pageProps} />
              <Toaster />
              <Footer></Footer>
            </ApiContext>
          </PostInfo>
        </StateInfo>
        </PersistGate>
      </Provider>
      
    // </DisableRightClick>
  );
}
