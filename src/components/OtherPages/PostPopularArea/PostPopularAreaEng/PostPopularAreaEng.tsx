import React, { useContext } from "react";
import DhaPopularArea from "../PostAllPopularAres/DhaPopularArea/DhaPopularArea";
import ChittPopularAreaEng from "../PostAllPopularAres/ChittPopularArea/ChittPopularAreaEng";
import RajPopularAreaEng from "../PostAllPopularAres/RajPopularArea/RajPopularAreaEng";
import RangPopularAreaEng from "../PostAllPopularAres/RangPopularArea/RangPopularAreaEng";
import KhulnaPopularAreaEng from "../PostAllPopularAres/KhulnaPopularArea/KhulnaPopularAreaEng";
import SylPopularAreaEng from "../PostAllPopularAres/SylPopularArea/SylPopularAreaEng";
import BariPopularAreaEng from "../PostAllPopularAres/BariPopularArea/BariPopularAreaEng";
import MymPopularAreaEng from "../PostAllPopularAres/MymPopularArea/MymPopularAreaEng";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
const PostPopularAresEng = () => {
    const { postCityNameEng, postCityNameBan, setPostCityNameEng, setPostCityNameBan }: any =
    useContext(PostStateContext);
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
     {lang && (
        <h1 className="text-2xl mb-5 pb-1 pl-2 border-l-4 border-b-4 border-accent text-black">
          Popular area of {postCityNameEng}{" "}
          {(lang && postCityNameBan === "ঢাকা" && "Dhaka") ||
            (postCityNameBan === "চট্টগ্রাম" && "Chittagong") ||
            (postCityNameBan === "রাজশাহী" && "Rajshahi") ||
            (postCityNameBan === "সিলেট" && "Sylhet") ||
            (postCityNameBan === "বরিশাল" && "Barisal") ||
            (postCityNameBan === "খুলনা" && "Khulna") ||
            (postCityNameBan === "রংপুর" && "Rangpur") ||
            (postCityNameBan === "ময়মনসিংহ" && "Mymensingh")}
        </h1>
      ) }
    <div>
      {lang && (postCityNameEng === "Dhaka" || postCityNameBan === "ঢাকা") && (
         <DhaPopularArea></DhaPopularArea>
      )}

      {lang && (postCityNameEng === "Chittagong" || postCityNameBan === "চট্টগ্রাম") && (
        <ChittPopularAreaEng></ChittPopularAreaEng>
      )}

      {lang && (postCityNameEng === "Rajshahi" || postCityNameBan === "রাজশাহী") && (
         <RajPopularAreaEng></RajPopularAreaEng>
      )}

      {lang && (postCityNameEng === "Sylhet" || postCityNameBan === "সিলেট") && (
        <SylPopularAreaEng></SylPopularAreaEng>
      )}

      {lang && (postCityNameEng === "Rangpur" || postCityNameBan === "রংপুর") && (
        <RangPopularAreaEng></RangPopularAreaEng>
      )}

      {lang && (postCityNameEng === "Barisal" || postCityNameBan === "বরিশাল") && (
        <BariPopularAreaEng></BariPopularAreaEng>
      )}

      {lang && (postCityNameEng === "Khulna" || postCityNameBan === "খুলনা") && (
        <KhulnaPopularAreaEng></KhulnaPopularAreaEng>
      )}

      {lang && (postCityNameEng === "Mymensingh" || postCityNameBan === "ময়মনসিংহ") && (
        <MymPopularAreaEng></MymPopularAreaEng>
      )}
    </div>
   </section>
  );
};

export default PostPopularAresEng;
