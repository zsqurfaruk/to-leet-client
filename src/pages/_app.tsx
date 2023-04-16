import Footer from "@/components/OtherPages/Footer/Footer";
import Header from "@/components/Shared/NavBar/NavBar";
import AuthProvider from "@/Context/AuthProvider/AuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
   
  return (
    <AuthProvider>
      <Header></Header>
      <div className="lg:mx-6">
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </AuthProvider>
  );
}
