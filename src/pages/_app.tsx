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
import { ThemeProvider } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
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
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);  
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <DisableRightClick>
    <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ThemeProvider>
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
      </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
    </DisableRightClick>
  );
}
