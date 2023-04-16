import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/singleProduct.module.css";


const Products = ({ product, handleDelete }: any) => {
  // const [postDelete, setPostDelete] = useState([])

  return (
    <div>
      <Link href={`/product/${product._id}`}>
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
            {/* <img src={product?.img2} alt="Shoes" className="h-12 w-10" />
            <img src={product?.img3} alt="Shoes" className="h-12 w-10" />
            <img src={product?.img4} alt="Shoes" className="h-12 w-10" />
            <img src={product?.img5} alt="Shoes" className="h-12 w-10" /> */}
          </figure>
          <div className="card-body">
            <h2 className={styles.mainSlide}> {product?.title}</h2>
            <h2> {product?.district}</h2>
            <h2> {product?.rentType}</h2>
            <h2> {product?.email}</h2>
            <p> {product.description}</p>
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
