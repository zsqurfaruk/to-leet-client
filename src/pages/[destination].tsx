/* eslint-disable react-hooks/rules-of-hooks */
import { NameContext } from "@/Context/NamInfo";
import Products from "@/components/Products/Products";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import privateRoute from "./privateRoute";

const ShowAllPost = ({ products }: any) => {
  const [deleteAndFilterPost, setDeleteAndFilterPost] = useState(products);
  const handleDelete = async (id: any) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const res = await fetch(`http://localhost:5000/api/v1/product/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.message === "success") {
        setDeleteAndFilterPost(
          deleteAndFilterPost?.filter(
            (deletedPost: any) => deletedPost._id !== id
          )
        );
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {deleteAndFilterPost.length &&
        deleteAndFilterPost?.map((product: any) => (
          <Products
            key={product._id}
            product={product}
            handleDelete={handleDelete}
          ></Products>
        ))}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/product/rentType/${params.destination}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
export default ShowAllPost;
