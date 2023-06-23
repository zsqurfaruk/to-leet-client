import React, { useEffect } from "react";
import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import ApiContext from "@/Context/ApiContext/ApiContext";
import FilterInfo from "@/Context/FilterContext/FilterContext";
import PostInfo from "@/Context/PostStateContext/PostStateContext";
import StateInfo from "@/Context/StateContext/StateContext";
import DisableRightClick from "@/DisableRightClick/DisableRightClick";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-37NBKQCCGD";
    script.async = true;
    document.body.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-37NBKQCCGD');
    `;
    document.body.appendChild(inlineScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, []);
  return (
    <DisableRightClick>
      <FilterInfo>
        <PostInfo>
          <StateInfo>
            <ApiContext>
              <NavBar></NavBar>
              <Component {...pageProps} />
              <Toaster />
              <Footer></Footer>
            </ApiContext>
          </StateInfo>
        </PostInfo>
      </FilterInfo>
    </DisableRightClick>
  );
}
