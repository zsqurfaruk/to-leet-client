import Link from "next/link";
import { useState } from "react";


const Products = ({ product, handleDelete }: any) => {
  // const [postDelete, setPostDelete] = useState([])
  const post = 
   "4l5gJNnHjXPcI5jCtff8vWW8vR#4oaWbB0TKs204^%$ACcaBTpXPwH00LczlXf8vWWCtC"
 

  return (
    <div>
      <Link  
      href={{
        pathname: `/product/${product._id}`,
        query: { post: encodeURIComponent(JSON.stringify(post)) },
      }}>
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
          
          <figure>
            {/* <Image
                src={product?.photo}
                alt="Picture of the author"
                width={100}
                height={100}
                // className="hidden md:flex"
              ></Image> */}
            <img src={product?.img1} alt="Shoes" className="h-40 w-full" /> 
          </figure>
          <div className="card-body">
            <h2> {product?.title}</h2>
            <h2> {product?.district}</h2>
            <h2> {product?.rentType}</h2>
            <h2> {product?.email}</h2>
            <p> {product.description.slice(0, 75)}...<span className="text-blue-500">see more</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
      <button onClick={() => handleDelete(product._id)}>delete</button>
    </div>
  );
};

export default Products;
