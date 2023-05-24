import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import ApiContext from "@/Context/ApiContext/ApiContext";
import FilterInfo from "@/Context/FilterContext/FilterContext";
import NamInfo from "@/Context/NamInfo";
import PostInfo from "@/Context/PostStateContext/PostStateContext";
import StateInfo from "@/Context/StateContext/StateContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterInfo>
      <PostInfo>
        <StateInfo>
          <ApiContext>
            <NamInfo>
              <NavBar></NavBar>
              <div>
                <Component {...pageProps} />
              </div>
              <Footer></Footer>
            </NamInfo>
          </ApiContext>
        </StateInfo>
      </PostInfo>
    </FilterInfo>
  );
}
