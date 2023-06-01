import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import ApiContext from "@/Context/ApiContext/ApiContext";
import FilterInfo from "@/Context/FilterContext/FilterContext";
import NamInfo from "@/Context/NameInfo";
import PostInfo from "@/Context/PostStateContext/PostStateContext";
import StateInfo from "@/Context/StateContext/StateContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import  { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterInfo>
      <PostInfo>
        <StateInfo>
          <NamInfo>
          <ApiContext>
            <NavBar></NavBar>
            <div>
              <Component {...pageProps} />
            </div>
            <Toaster />
            <Footer></Footer>
          </ApiContext>
          </NamInfo>
        </StateInfo>
      </PostInfo>
    </FilterInfo>
  );
}
