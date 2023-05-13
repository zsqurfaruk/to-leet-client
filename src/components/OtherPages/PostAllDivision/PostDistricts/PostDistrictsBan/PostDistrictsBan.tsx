import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import PostDhaDistrictsBan from "../../PostAllDistricts/PostDhaDistricts/PostDhaDistrictsBan";
import PostChittDistrictsBan from "../../PostAllDistricts/PostChittDistricts/PostChittDistrictsBan";
import PostRajDistrictsBan from "../../PostAllDistricts/PostRajDistricts/PostRajDistrictsBan";
import PostSylDistrictsBan from "../../PostAllDistricts/PostSylDistricts/PostSylDistrictsBan";
import PostRangDistrictsBan from "../../PostAllDistricts/PostRangDistricts/PostRangDistrictsBan";
import PostBariDistrictsBan from "../../PostAllDistricts/PostBariDistricts/PostBariDistrictsBan";
import PostKhulnaDistrictsBan from "../../PostAllDistricts/PostKhulnaDistricts/PostKhulnaDistrictsBan";
import PostMymDistrictsBan from "../../PostAllDistricts/PostMymDistricts/PostMymDistrictsBan";
 

const PostDistrictsBan = () => {
  const { postDivisionNameEng , setPostDivisionNameEng, postDivisionNameBan, setPostDivisionNameBan }: any =
    useContext(PostStateContext);
  const handlePrevious = () => {
    setPostDivisionNameEng("");
    setPostDivisionNameBan("");
  };

  const lang = localStorage.getItem("lan");

  return (
    <section  className="lg:ml-4">
      <div>
      <h1
        onClick={handlePrevious}
        className="text-secondary text-sm mb-5 cursor-pointer hover:underline lg:-ml-4"
      >
        {lang ? "Change Division?" : "বিভাগ পরিবর্তন?"}
      </h1>

      {lang ? (
        <h1 className="text-2xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
         Districts of {postDivisionNameEng}{" "}
          {(lang && postDivisionNameBan === "ঢাকা" && "Dhaka") ||
            (postDivisionNameBan === "চট্টগ্রাম" && "Chittagong") ||
            (postDivisionNameBan === "রাজশাহী" && "Rajshahi") ||
            (postDivisionNameBan === "সিলেট" && "Sylhet") ||
            (postDivisionNameBan === "বরিশাল" && "Barisal") ||
            (postDivisionNameBan === "খুলনা" && "Khulna") ||
            (postDivisionNameBan === "রংপুর" && "Rangpur") ||
            (postDivisionNameBan === "ময়মনসিংহ" && "Mymensingh")}
        </h1>
      ) : (
        <h1 className="text-xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
          {postDivisionNameBan}
          {(!lang && postDivisionNameEng === "Dhaka" && "ঢাকা") ||
            (postDivisionNameEng === "Chittagong" && "চট্টগ্রাম") ||
            (postDivisionNameEng === "Rajshahi" && "রাজশাহী") ||
            (postDivisionNameEng === "Sylhet" && "সিলেট") ||
            (postDivisionNameEng === "Barisal" && "বরিশাল") ||
            (postDivisionNameEng === "Khulna" && "খুলনা") ||
            (postDivisionNameEng === "Rangpur" && "রংপুর") ||
            (postDivisionNameEng === "Mymensingh" && "ময়মনসিংহ")}{" "}
          এর জেলাসমূহ
        </h1>
      )}
      
      {
         !lang &&(postDivisionNameEng === "Dhaka" || postDivisionNameBan === "ঢাকা")  &&  <PostDhaDistrictsBan></PostDhaDistrictsBan>
      }
       
      {
         !lang && (postDivisionNameEng === "Chittagong" || postDivisionNameBan==="চট্টগ্রাম") && <PostChittDistrictsBan></PostChittDistrictsBan>
      }
      
      {!lang && (postDivisionNameEng === "Rajshahi" || postDivisionNameBan==="রাজশাহী") && (
         <PostRajDistrictsBan></PostRajDistrictsBan>
      )}

       
      {!lang && (postDivisionNameEng === "Sylhet" || postDivisionNameBan==="সিলেট") &&  <PostSylDistrictsBan></PostSylDistrictsBan>}

       
      {!lang && (postDivisionNameEng === "Rangpur" || postDivisionNameBan==="রংপুর") &&  <PostRangDistrictsBan></PostRangDistrictsBan>}

       
      {!lang && (postDivisionNameEng === "Barisal" || postDivisionNameBan==="বরিশাল") &&  <PostBariDistrictsBan></PostBariDistrictsBan>}

       
      {!lang && (postDivisionNameEng === "Khulna" || postDivisionNameBan==="খুলনা") &&  <PostKhulnaDistrictsBan></PostKhulnaDistrictsBan>}

       
      {!lang && (postDivisionNameEng === "Mymensingh" || postDivisionNameBan==="ময়মনসিংহ")  && (
       <PostMymDistrictsBan></PostMymDistrictsBan>
      )}
      </div>
    </section>
  );
};

export default PostDistrictsBan;
