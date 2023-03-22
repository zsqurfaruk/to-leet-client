import { useState } from "react";
import { BsCardImage } from "react-icons/bs";

const ProductAds = () => {
  const [pro, setPro] = useState("");
  const [title, setTitle] = useState("");
  const [division, setDivision] = useState("");
  const handlePost = async () => {
    // const form = event.target;
    const askDetails = {
      propertyType: pro,
      title: title,
      description: pro,
      division,
    };
    console.log(askDetails);
    // console.log(askDetails);
    //  e.preventdefault()
    const response = await fetch("http://localhost:5000/api/v1/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(askDetails),
    });
    const data = await response.json();
    setPro(data);

    console.log({ pro });
  };

  return (
    <div className="bg-white p-5">
      <div>
        <div className="flex justify-between py-5">
          <h1>Fill In The Details</h1>
          <h1>Houses For Rent</h1>
        </div>
        <hr className="text-black" />
        <h1 className="flex justify-end">See our posting rules</h1>
      </div>
      <div>
        <div className="form-control w-6/12 mx-auto">
          <label className="label">
            <span className="label-text">Bedrooms</span>
          </label>
          <select className="select select-bordered bg-primary">
            <option disabled selected>
              Bedrooms
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>10+</option>
          </select>
        </div>
        <div className="form-control w-6/12 mx-auto mt-16">
          <label className="label">
            <span className="label-text">Bathrooms</span>
          </label>
          <select className="select select-bordered bg-primary">
            <option disabled selected>
              Bathrooms
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>5+</option>
          </select>
        </div>
        <div className="flex gap-5 w-6/12 mx-auto mt-16">
          <div className="w-full">
            <label className="label">
              <span className="label-text">House size</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-primary"
            />
          </div>
          <div className=" ">
            <label className="label">
              <span className="label-text">Unit</span>
            </label>
            <select className="select select-bordered bg-primary">
              <option disabled selected>
                Unit
              </option>
              <option>katha </option>
              <option>bigha</option>
              <option>acres</option>
              <option>shotok</option>
              <option>decimal</option>
            </select>
          </div>
        </div>
        <div className="w-6/12 mx-auto mt-16">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Enter your street, house number, and/or post code"
            className="input input-bordered w-full bg-primary"
          />
        </div>
        <div className="w-6/12 mx-auto mt-16">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Short Title"
            className="input input-bordered w-full bg-primary"
          />
        </div>
        <div className="w-6/12 mx-auto mt-16">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-32 bg-primary"
            placeholder="More Details"
          ></textarea>
        </div>
        <div className="w-6/12 mx-auto mt-16">
          <label className="label">
            <span className="label-text">Rent Amount (Tk)</span>
          </label>
          <input
            type="text"
            placeholder="Rent Amount"
            className="input input-bordered w-full bg-primary"
          />
        </div>
        <div className="flex gap-2 w-1/2 mx-auto mt-10">
          <input type="checkbox" className="text-black h-4 w-4" />
          <h1 className="-mt-1">Negotiable</h1>
        </div>
        <hr className="my-10" />
        <div className="w-6/12 mx-auto mb-20">
          <label className="label">
            <span className="text-xl font-bold">Add up to 5 photos</span>
          </label>
          <div className="flex gap-2">
            <div className="mt-10">
              <input
                className="hidden"
                type="file"
                id="file"
                accept="image/*"
                placeholder="photo"

                // {...register("image", { required: true })}
                // name="picture"
              />
              <label htmlFor="file">
                {" "}
                <BsCardImage className="ml-8 text-2xl" />
                <small className=" border border-secondary pb-6 pt-12 px-2">
                  {" "}
                  Add A Photo
                </small>
                {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
              </label>
            </div>
            <div className="mt-10">
              <input
                className="hidden"
                type="file"
                id="file"
                accept="image/*"
                placeholder="photo"
                // {...register("image", { required: true })}
                // name="picture"
              />
              <label htmlFor="file">
                {" "}
                <BsCardImage className="ml-8 text-2xl" />
                <small className="border border-secondary pb-6 pt-12 px-2">
                  Add A Photo
                </small>
                {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
              </label>
            </div>
            <div className="mt-10">
              <input
                className="hidden"
                type="file"
                id="file"
                accept="image/*"
                placeholder="photo"
                // {...register("image", { required: true })}
                // name="picture"
              />
              <label htmlFor="file">
                {" "}
                <BsCardImage className="ml-8 text-2xl" />
                <small className="border border-secondary pb-6 pt-12 px-2">
                  Add A Photo
                </small>
                {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
              </label>
            </div>
            <div className="mt-10">
              <input
                className="hidden"
                type="file"
                id="file"
                accept="image/*"
                placeholder="photo"
                // {...register("image", { required: true })}
                // name="picture"
              />
              <label htmlFor="file">
                {" "}
                <BsCardImage className="ml-8 text-2xl" />
                <small className="border border-secondary pb-6 pt-12 px-2">
                  Add A Photo
                </small>
                {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
              </label>
            </div>
            <div className="mt-10">
              <input
                className="hidden"
                type="file"
                id="file"
                accept="image/*"
                placeholder="photo"
                // {...register("image", { required: true })}
                // name="picture"
              />
              <label htmlFor="file">
          
                <BsCardImage className="ml-8 text-2xl" />
                <small className="border border-secondary pb-6 pt-12 px-2">
                  Add A Photo
                </small>
                {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
              </label>
            </div>
          </div>
        </div>
        <hr className="my-10" />

        {/* contact part  */}
        <div className="w-1/2 mx-auto">
          <h1 className="text-xl font-bold">Contact details</h1>
          <div className="mt-10">
            <h5>Name</h5>
            <h1>faruk</h1>
          </div>
          <div className="mt-10">
            <h5>Email</h5>
            <h1>faruk@gamil.com</h1>
          </div>
          <div className="mt-10 border border-secondary p-5">
            <h5>Add A Phone Number</h5>
            <input
            type="text"
            placeholder="Add A Phone Number"
            className="input input-bordered w-full mt-5 bg-primary"
          /> <button disabled className="btn btn-secondary btn-sm mt-5">Add</button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-1/2 mx-auto mt-10">
          <input type="checkbox" className="text-black h-4 w-4" />
          <h1 className="-mt-1">I have read and accept the Terms and Conditions</h1>
        </div>
     <div  className="w-1/2 mx-auto flex justify-end">
     <button className="btn btn-secondary  ">Post Now</button>
     </div>
    </div>
  );
};

export default ProductAds;
