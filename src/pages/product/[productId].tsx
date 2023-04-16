import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProductDetails = ({ products }: any) => {
  const { img1, img2, img3, img4, img5 } = products;

  const images = [
    { id: 0, value: img1 },
    { id: 1, value: img2 },
    { id: 2, value: img3 },
    { id: 3, value: img4 },
    { id: 4, value: img5 },
  ];

  const [slideImage, setSlideImage] = useState(images[0]);

  const handleImageChange = (index: any) => {
    const slider = images[index];
    setSlideImage(slider);
  };

  return (
    <div className="w-full lg:w-6/12 mx-auto">
      <div>
        <div className="card card-compact bg-base-100 shadow-xl my-10">
          <PhotoProvider>
            <PhotoView src={slideImage?.value}>
              <img src={slideImage?.value} alt="" className="h-96 w-full" />
            </PhotoView>
          </PhotoProvider>
          <div className="flex gap-4 mx-auto my-7">
            {images.map((img, i) => (
              <div key={img.id}>
                {img?.value && (
                  <img
                    src={img?.value}
                    onClick={() => handleImageChange(i)}
                    alt=""
                    className="lg:h-20 h-16 w-14 lg:w-32 rounded"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="card-body">
            <h2 className="card-title"> {products?.title}</h2>
            <p> {products.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/product/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

export default ProductDetails;
