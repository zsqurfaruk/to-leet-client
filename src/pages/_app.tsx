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
