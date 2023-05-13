import React, { useContext } from "react";
import DhaPopularAreaBan from "../PostAllPopularAres/DhaPopularArea/DhaPopularAreaBan";
import ChittPopularAreaBan from "../PostAllPopularAres/ChittPopularArea/ChittPopularAreaBan";
import RajPopularAreaBan from "../PostAllPopularAres/RajPopularArea/RajPopularAreaBan";
import SylPopularAreaBan from "../PostAllPopularAres/SylPopularArea/SylPopularAreaBan";
import RangPopularAreaBan from "../PostAllPopularAres/RangPopularArea/RangPopularAreaBan";
import BariPopularAreaBan from "../PostAllPopularAres/BariPopularArea/BariPopularAreaBan";
import KhulnaPopularAreaBan from "../PostAllPopularAres/KhulnaPopularArea/KhulnaPopularAreaBan";
import MymPopularAreaBan from "../PostAllPopularAres/MymPopularArea/MymPopularAreaBan";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
const PostPopularAresBan = () => {
  const { postCityNameEng, postCityNameBan,setPostCityNameEng,setPostCityNameBan }: any = useContext(PostStateContext);
  const lang = localStorage.getItem("lan");
  const handlePrevious=()=>{
    setPostCityNameEng("")
    setPostCityNameBan("")
  }
  return (
    <section>
      <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline"
      >
        {lang ? "Change city?" : "শহর পরিবর্তন?"}
      </h1>
      {!lang && (
        <h1 className="text-xl mb-5 pl-2 pb-1 border-l-4 border-b-4 border-accent text-black">
          {postCityNameBan}
          {(!lang && postCityNameEng === "Dhaka" && "ঢাকা") ||
            (postCityNameEng === "Chittagong" && "চট্টগ্রাম") ||
            (postCityNameEng === "Rajshahi" && "রাজশাহী") ||
            (postCityNameEng === "Sylhet" && "সিলেট") ||
            (postCityNameEng === "Barisal" && "বরিশাল") ||
            (postCityNameEng === "Khulna" && "খুলনা") ||
            (postCityNameEng === "Rangpur" && "রংপুর") ||
            (postCityNameEng === "Mymensingh" && "ময়মনসিংহ")}{" "}
          এর জনপ্রিয় এলাকাসমূহ
        </h1>
      )}
      <div>
        {!lang &&
          (postCityNameEng === "Dhaka" || postCityNameBan === "ঢাকা") && (
            <DhaPopularAreaBan></DhaPopularAreaBan>
          )}
        {!lang &&
          (postCityNameEng === "Chittagong" ||
            postCityNameBan === "চট্টগ্রাম") && (
            <ChittPopularAreaBan></ChittPopularAreaBan>
          )}
        {!lang &&
          (postCityNameEng === "Rajshahi" || postCityNameBan === "রাজশাহী") && (
            <RajPopularAreaBan></RajPopularAreaBan>
          )}
        {!lang &&
          (postCityNameEng === "Sylhet" || postCityNameBan === "সিলেট") && (
            <SylPopularAreaBan></SylPopularAreaBan>
          )}

        {!lang &&
          (postCityNameEng === "Rangpur" || postCityNameBan === "রংপুর") && (
            <RangPopularAreaBan></RangPopularAreaBan>
          )}
        {!lang &&
          (postCityNameEng === "Barisal" || postCityNameBan === "বরিশাল") && (
            <BariPopularAreaBan></BariPopularAreaBan>
          )}
        {!lang &&
          (postCityNameEng === "Khulna" || postCityNameBan === "খুলনা") && (
            <KhulnaPopularAreaBan></KhulnaPopularAreaBan>
          )}
        {!lang &&
          (postCityNameEng === "Mymensingh" ||
            postCityNameBan === "ময়মনসিংহ") && (
            <MymPopularAreaBan></MymPopularAreaBan>
          )}
      </div>
    </section>
  );
};

export default PostPopularAresBan;
