/* eslint-disable react/no-unescaped-entities */
import React,{useContext} from "react";
import Head from "next/head";
import DestinationType from "@/components/Home/DestinationType/DestinationType";
import PostCounter from "@/components/Home/PostCounter/PostCounter";
import UserReviews from "@/components/Home/UserReviews/UserReviews";
import Banner from "@/components/Home/Banner/Banner";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import { StateContext } from "@/Context/StateContext/StateContext";
 

// const inter = Inter({ subsets: ["latin"] });

function Home() {
const {filterTypeCity, filterTypeDivision}:any = useContext(StateContext)
 const lan = localStorage.getItem("lan")

  return (
    <>
      <Head>
        <title>{ lan? "to-leet": "টু-লেট" }</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={filterTypeCity || filterTypeDivision ? "bg-primary" : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-70 -mx-6 text-white"}>
        <Banner></Banner>
        <DestinationType></DestinationType>
        <PostCounter></PostCounter>
        {/* <UserReviews></UserReviews> */}
      
      </main>
    </>
  );
}

export default Home;

{
  /* <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-70 lg:-mx-6">
<div className="lg:w-8/12 lg:mx-auto py-2 opacity-90">
  <div className="flex justify-between md:justify-evenly lg:w-10/12 lg:mx-auto scale-75 md:scale-100 md:pt-1 pb-3">
    <div className="pl-5 md:pl-7 pr-7 md:pr-10 py-2 rounded flex">
      <Radio
        onClick={handleFilterAll}
        name="House"
        id="html"
        // label="All Posts"
        className="bg-primary"
        checked={isChecked}
      />
      <span className="mt-3 md:mt-[11px] -ml-2">All</span>
    </div>
    <br />
    <div className="pl-5 md:pl-7 pr-7 md:pr-10 py-2 rounded flex">
      <Radio
        onClick={handleFilterHouse}
        name="House"
        id="html"
        //  label="House/Flat"
        className="bg-primary"
      />
      <span className="mt-3 md:mt-[11px] -ml-2">House/Flat</span>
    </div>
    <br />
    <div className="pl-5 md:pl-7 pr-7 md:pr-10 py-2 rounded flex">
      <Radio
        onClick={handleFilterMess}
        id="react"
        name="House"
        // label="Mess"
        className="text-white bg-primary"
      />{" "}
      <span className="mt-3 md:mt-[11px] -ml-2">Mess</span>
      {/* <input type="radio" name="radio-1" className="radio" /> */
}
//   </div>
// </div>

//   <div className="mb-5 lg:w-8/12 lg:mx-auto mx-5">
//     <p className="text-center mb-5 bg-white rounded-full py-2 text-xl">
//       {!deleteAndFilterPost.length ? (
//         <span> {products.length} </span>
//       ) : (
//         <span> {deleteAndFilterPost.length}</span>
//       )}
//       {products.length < 2 ? <span> post </span> : <span> posts </span>}
//     </p>
//     <Input
//       size="md"
//       label="Search"
//       className="input input-bordered w-full bg-white py-5 text-black"
//     />
//   </div>
//   <div>
//     {deleteAndFilterPost.length &&
//   deleteAndFilterPost?.map((product: any) => (
//     <Products
//       key={product._id}
//       product={product}
//       handleDelete={handleDelete}
//     ></Products>
//   ))}
//   </div>
// </div>
// </div> */}

//  const [deleteAndFilterPost, setDeleteAndFilterPost] = useState(products);
//   const [isChecked, setIsChecked] = useState(true);
//   const handleDelete = async (id: any) => {
//     const proceed = window.confirm("Are you sure?");
//     if (proceed) {
//       const res = await fetch(`http://localhost:5000/api/v1/product/${id}`, {
//         method: "DELETE",
//       });
//       const data = await res.json();
//       if (data.message === "success") {
//         setDeleteAndFilterPost(
//           deleteAndFilterPost?.filter(
//             (deletedPost: any) => deletedPost._id !== id
//           )
//         );
//       }
//     }
//   };

//   const handleFilterHouse = (event: any) => {
//     if (event.target.checked) {
//       setDeleteAndFilterPost(
//         products?.filter((flat: any) => flat?.rentType === "House")
//       );
//       setIsChecked(false);
//     }
//   };

//   const handleFilterMess = (event: any) => {
//     if (event.target.checked) {
//       setDeleteAndFilterPost(
//         products?.filter((mess: any) => mess?.rentType === "Mess")
//       );
//       setIsChecked(false);
//     }
//   };
//   const handleFilterAll = (event: any) => {
//     if (event.target.checked) {
//       setDeleteAndFilterPost(products);
//       setIsChecked(true);
//     }
//   };
