/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

const Products = ({ product, handleDelete }: any) => {
  // const [postDelete, setPostDelete] = useState([])
  const post =
    "4l5gJNnHjXPcI5jCtff8vWW8vR#4oaWbB0TKs204^%$ACcaBTpXPwH00LczlXf8vWWCtC";

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
            <h2 className="font-semibold"> {product?.type?.eng}</h2>
            {product?.division?.eng && (
              <div className="flex justify-between">
                <h2 className="">Division: {product?.division?.eng}</h2>
                <h2>District: {product?.districts?.eng}</h2>
              </div>
            )}
            {product?.cityName?.eng && (
              <div className="flex justify-between">
                <h2 className="">City: {product?.cityName?.eng}</h2>
                <h2>Area: {product?.areaName?.eng}</h2>
              </div>
            )}
            {/* {product?.university?.eng && (
              <div>
                <h2 className="">Beside: {product?.university?.eng}</h2>
              </div>
            )} */}
           <div className="flex justify-between">
           <h2>Bed Room: {product?.bedrooms}</h2>
            <h2>Bath Room: {product?.bathrooms}</h2>
           </div>
            <h2>
              {" "}
              {product?.description.slice(0, 50)}...
              <span className="text-blue-500">see more</span>
            </h2>
          </div>
        </div>
      </Link>
      {/* <button onClick={() => handleDelete(product._id)}>delete</button> */}
    </div>
  );
};

export default Products;
