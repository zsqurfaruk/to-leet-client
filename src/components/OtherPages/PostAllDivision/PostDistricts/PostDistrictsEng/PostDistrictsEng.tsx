// import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
// import React, { useContext } from "react";
// import PostDhaDistrictsEng from "../../PostAllDistricts/PostDhaDistricts/PostDhaDistrictsEng";
// import PostChittDistrictsEng from "../../PostAllDistricts/PostChittDistricts/PostChittDistrictsEng";
// import PostRajDistrictsEng from "../../PostAllDistricts/PostRajDistricts/PostRajDistrictsEng";
// import PostSylDistrictsEng from "../../PostAllDistricts/PostSylDistricts/PostSylDistrictsEng";
// import PostRangDistrictsEng from "../../PostAllDistricts/PostRangDistricts/PostRangDistrictsEng";
// import PostBariDistrictsEng from "../../PostAllDistricts/PostBariDistricts/PostBariDistrictsEng";
// import PostKhulnaDistrictsEng from "../../PostAllDistricts/PostKhulnaDistricts/PostKhulnaDistrictsEng";
// import PostMymDistrictsEng from "../../PostAllDistricts/PostMymDistricts/PostMymDistrictsEng";

// const PostDistrictsEng = () => {
//   const {
//     postDivisionNameEng,
//     setPostDivisionNameEng,
//     postDivisionNameBan,
//     setPostDivisionNameBan,
//   }: any = useContext(PostStateContext);
//   const handlePrevious = () => {
//     setPostDivisionNameEng("");
//     setPostDivisionNameBan("");
//   };

//   const lang = localStorage.getItem("lan");

//   return (
//     <section className="lg:ml-4">
//       <div>
//         <h1
//           onClick={handlePrevious}
//           className="text-secondary text-sm mb-5 cursor-pointer hover:underline lg:-ml-4"
//         >
//           {lang ? "Change Division?" : "বিভাগ পরিবর্তন?"}
//         </h1>

//         {lang ? (
//           <h1 className="text-2xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
//             Districts of {postDivisionNameEng}{" "}
//             {(lang && postDivisionNameBan === "ঢাকা" && "Dhaka") ||
//               (postDivisionNameBan === "চট্টগ্রাম" && "Chittagong") ||
//               (postDivisionNameBan === "রাজশাহী" && "Rajshahi") ||
//               (postDivisionNameBan === "সিলেট" && "Sylhet") ||
//               (postDivisionNameBan === "বরিশাল" && "Barisal") ||
//               (postDivisionNameBan === "খুলনা" && "Khulna") ||
//               (postDivisionNameBan === "রংপুর" && "Rangpur") ||
//               (postDivisionNameBan === "ময়মনসিংহ" && "Mymensingh")}
//           </h1>
//         ) : (
//           <h1 className="text-xl mb-5 pb-1 border-l-4 border-b-4 border-accent lg:-ml-4 pl-2 text-black">
//             {postDivisionNameBan}
//             {(!lang && postDivisionNameEng === "Dhaka" && "ঢাকা") ||
//               (postDivisionNameEng === "Chittagong" && "চট্টগ্রাম") ||
//               (postDivisionNameEng === "Rajshahi" && "রাজশাহী") ||
//               (postDivisionNameEng === "Sylhet" && "সিলেট") ||
//               (postDivisionNameEng === "Barisal" && "বরিশাল") ||
//               (postDivisionNameEng === "Khulna" && "খুলনা") ||
//               (postDivisionNameEng === "Rangpur" && "রংপুর") ||
//               (postDivisionNameEng === "Mymensingh" && "ময়মনসিংহ")}{" "}
//             এর জেলাসমূহ
//           </h1>
//         )}
//         {lang &&
//           (postDivisionNameEng === "Dhaka" ||
//             postDivisionNameBan === "ঢাকা") && (
//             <PostDhaDistrictsEng></PostDhaDistrictsEng>
//           )}

//         {lang &&
//           (postDivisionNameEng === "Chittagong" ||
//             postDivisionNameBan === "চট্টগ্রাম") && (
//             <PostChittDistrictsEng></PostChittDistrictsEng>
//           )}

//         {lang && postDivisionNameEng === "Rajshahi" && (
//           <PostRajDistrictsEng></PostRajDistrictsEng>
//         )}

//         {lang &&
//           (postDivisionNameEng === "Sylhet" ||
//             postDivisionNameBan === "সিলেট") && (
//             <PostSylDistrictsEng></PostSylDistrictsEng>
//           )}

//         {lang &&
//           (postDivisionNameEng === "Rangpur" ||
//             postDivisionNameBan === "রংপুর") && (
//             <PostRangDistrictsEng></PostRangDistrictsEng>
//           )}

//         {lang &&
//           (postDivisionNameEng === "Barisal" ||
//             postDivisionNameBan === "বরিশাল") && (
//             <PostBariDistrictsEng></PostBariDistrictsEng>
//           )}

//         {lang &&
//           (postDivisionNameEng === "Khulna" ||
//             postDivisionNameBan === "খুলনা") && (
//             <PostKhulnaDistrictsEng></PostKhulnaDistrictsEng>
//           )}

//         {lang &&
//           (postDivisionNameEng === "Mymensingh" ||
//             postDivisionNameBan === "ময়মনসিংহ") && (
//             <PostMymDistrictsEng></PostMymDistrictsEng>
//           )}
//       </div>
//     </section>
//   );
// };

// export default PostDistrictsEng;
