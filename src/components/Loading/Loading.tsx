import image from "../../image/Quick logo without background.png"
import Image from "next/image";

function Loading() {
  return (
    <div className="sweet-loading flex justify-center h-screen items-center bg-neutral">
      <Image 
      src={image}
      alt=""
      className="h-40 w-40 flex items-center justify-center mx-auto text-white duration-700 animate-pulse"
      ></Image>
    </div>
  );
}

export default Loading;
