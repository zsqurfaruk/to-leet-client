import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch("http://localhost:5000/api/v1/product");
      // ...
      const data = await res.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const txt = event.target.search.value;
    const newProducts=product.filter((sp:any)=>{
    return sp.division === txt

    })
    // console.log(txt);
    setProduct(newProducts)
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="h-64 flex items-center justify-center relative"
      >
        <input
          type="text"
          name="search"
          placeholder="Type here"
          className="text-start pl-5 h-14 input-primary w-full text-black rounded-3xl"
        />
        <button className="btn btn-circle bg-secondary hover:bg-secondary text-white absolute right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      {product?.map((pro: any) => (
        <p key={pro._id}>{pro?.title} {pro?.division}</p>
      ))}
    </div>
  );
};

export default Products;