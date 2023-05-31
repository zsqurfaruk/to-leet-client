/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

const Products = ({ product, handleDelete }: any) => {
  // const [postDelete, setPostDelete] = useState([])
  const post =
    "4l5gJNnHjXPcI5jCtff8vWW8vR#4oaWbB0TKs204^%$ACcaBTpXPwH00LczlXf8vWWCtC";
  const lang = localStorage.getItem("lan");
  return (
    <div>
      <Link
        href={{
          pathname: `/details/${product._id}`,
          query: { post: encodeURIComponent(JSON.stringify(post)) },
        }}
      >
        <div className="card card-compact bg-base-100 shadow-xl my-10">
          <figure>
            <img src={product?.img1} alt="Shoes" className="h-40  w-full" />
          </figure>
          <div className="card-body h-64">
            <h2 className="text-xl font-bold"> {product?.title}</h2>
            <div className="flex justify-between">
              {!lang ? (
                <h2 className="font-semibold"> {product?.type?.eng}</h2>
              ) : (
                <h2 className="font-semibold"> {product?.type?.ban}</h2>
              )}
              <h2>Date: {product?.updatedAt?.slice(0, 10)}</h2>
            </div>
            {product?.division?.eng && (
              <div className="flex justify-between">
                {!lang ? (
                  <h2  >Division: {product?.division?.eng}</h2>
                ) : (
                  <h2  > বিভাগ: {product?.division?.ban}</h2>
                )}
                {!lang ? (
                  <h2>District: {product?.districts?.eng}</h2>
                ) : (
                  <h2>জেলা: {product?.districts?.ban}</h2>
                )}
              </div>
            )}
            {product?.cityName?.eng && (
              <div className="flex justify-between">
                {!lang ? (
                  <h2 >City: {product?.cityName?.eng}</h2>
                ) : (
                  <h2 >শহর: {product?.cityName?.ban}</h2>
                )}
                {!lang ? (
                  <h2>Area: {product?.areaName?.eng}</h2>
                ) : (
                  <h2>এলাকা: {product?.areaName?.ban}</h2>
                )}
              </div>
            )}
            {/* {product?.university?.eng && (
              <div>
                <h2 className="">Beside: {product?.university?.eng}</h2>
              </div>
            )} */}
            <div className="flex justify-between">
              {
                product?.bedrooms?.eng && <div>{!lang ? (
                  <h2>Bedroom: {product?.bedrooms?.eng}</h2>
                ) : (
                  <h2> বেডরুম সংখ্যা: {product?.bedrooms?.ban}</h2>
                )}</div>
              }
              {!lang ? (
                <h2>Bathroom: {product?.bathrooms?.eng}</h2>
              ) : (
                <h2> বাথরুম সংখ্যা: {product?.bathrooms?.ban}</h2>
              )}
              {product?.bedNumber && (
                <div>
                  {!lang ? (
                    <h2>Bed Number:{product?.bedNumber?.eng}</h2>
                  ) : (
                    <h2> বেড সংখ্যা:{product?.bedNumber?.ban}</h2>
                  )}
                </div>
              )}
            </div>
            <h2>
              {" "}
              {product?.description.slice(0, 50)}...
              {
                !lang ? <span className="text-blue-500">see more</span> : <span className="text-blue-500 text-xs"> আরও দেখুন</span>
              }
            </h2>
          </div>
        </div>
      </Link>
      {/* <button onClick={() => handleDelete(product._id)} className="btn">
        delete
      </button> */}
    </div>
  );
};

export default Products;
