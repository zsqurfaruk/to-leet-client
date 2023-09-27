import { useSelector } from "react-redux";
import image from "../../image/Quick logo without background.png";
import Image from "next/image";
import { RootState } from "@/redux/app/store";
import { useUserData } from "../API/Api";

function Loading() {
  // const { loading } = useSelector((state: RootState) => state.allPosts);
  // const { isLoading } = useUserData();
  return (
    <div className="sweet-loading flex justify-center h-screen items-center bg-neutral">
      { 
        (  (
          <Image
            src={image}
            alt=""
            className="h-40 w-44 flex items-center justify-center mx-auto text-white duration-700 animate-pulse"
          ></Image>
        ))}
    </div>
  );
}

export default Loading;
