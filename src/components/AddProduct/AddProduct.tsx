import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import privateRoute from "@/pages/privateRoute";
import { useContext, useState } from "react";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import axios from "axios";
import OtpInput from "react-otp-input";
import Loading from "../Loading/Loading";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

type FormValues = {
  bedNumber: number;
  bedrooms: number;
  bathrooms: number;
  houseSize: number;
  unit: string;
  address: string;
  title: string;
  description: string;
  amount: number;
  negotiable: boolean;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  name: string;
  email: any;
  phone: number;
  terms: boolean;
  rentType: string;
};

const AddProduct = ({ districtLocation, rentType }: any) => {
  const [houseSize, setHouseSize] = useState();
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");
  const [value, setValue] = useState();
  const { user }: any = useContext(AuthContext);
 
  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();
  const handlePost: SubmitHandler<FormValues> = async (data) => {
    const values = {
      bedrooms: data?.bedrooms,
      bathrooms: data?.bathrooms,
      bedNumber: data?.bedNumber,
      houseSize: data?.houseSize,
      unit: data?.unit,
      address: data?.address,
      title: data?.title,
      description: data?.description,
      amount: data?.amount,
      negotiable: data?.negotiable,
      img1: imageUrl1,
      img2: imageUrl2,
      img3: imageUrl3,
      img4: imageUrl4,
      img5: imageUrl5,
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      terms: data?.terms,
      district: districtLocation,
      rentType: rentType,
    };
    const res = await fetch("http://localhost:5000/api/v1/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await res.json();
    router.push(`/${rentType}`);
  };

  const imageUploadHandler = (event: any, setImg: any) => {
    // console.log(event.target.files[0]);

    const imageData = new FormData();
    imageData.set("key", "c49cb06155adb366044d147043658858");
    imageData.append("image", event.target.files[0]);
    imageData.append("image", event.target.files[1]);
    imageData.append("image", event.target.files[2]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
        // console.log(response.data.data.display_url);
      })
      .catch(function (error) {});
  };

  const handleHouseSize = (e: any) => {
    setHouseSize(e.target.value);
     
  };

  return (
    <div className="bg-white p-5 lg:w-10/12 mx-auto">
      <div>
        <div className="flex justify-between py-5">
          <h1>Fill In The Details</h1>
          <h2> 
            <span className="font-bold">District</span> : {districtLocation}
          </h2>
          <h1>Houses For Rent</h1>
        </div>
        <hr className="text-black" />
        <h1 className="flex justify-end">See our posting rules</h1>
      </div>
      <div>
        <div>
          {rentType === "House"  || rentType === "Apartment" ? (
            <div className="form-control lg:w-6/12 mx-auto">
              <label className="label">
                <span className="label-text">Bedrooms</span>
              </label>
              <select
                {...register("bedrooms", { required: true })}
                className="select select-bordered bg-primary"
              >
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
                {/* <option>10+</option> */}
              </select>
              {errors.bedrooms && (
                <span className="text-red-500 pt-4">
                  This field is required
                </span>
              )}
            </div>
          ) : (
            <div className="form-control lg:w-6/12 mx-auto">
              <label className="label">
                <span className="label-text">Bed Number/Numbers</span>
              </label>
              <select
                {...register("bedNumber", { required: true })}
                className="select select-bordered bg-primary"
              >
                <option disabled selected>
                  Bed Number/Numbers
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                {/* <option>10+</option> */}
              </select>
              {errors.bedNumber && (
                <span className="text-red-500 pt-4">
                  This field is required
                </span>
              )}
            </div>
          )}
          {rentType === "House" || rentType === "Apartment" &&(
            <div className="form-control lg:w-6/12 mx-auto mt-16">
              <label className="label">
                <span className="label-text">Bathrooms</span>
              </label>
              <select
                {...register("bathrooms", { required: true })}
                className="select select-bordered bg-primary"
              >
                <option disabled selected>
                  Bathrooms
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                {/* <option>5+</option> */}
              </select>
              {errors.bathrooms && (
                <span className="text-red-500 pt-4">
                  This field is required
                </span>
              )}
            </div>
          )}
          <div className="flex gap-5 lg:w-6/12 mx-auto mt-16">
            <div className="w-full">
              <label className="label">
                <span className="label-text">House size (Optional)</span>
              </label>
              <input
                {...register("houseSize")}
                type="text"
                onChange={handleHouseSize}
                placeholder="Type here"
                name="houseSize"
                className="input input-bordered w-full bg-primary"
              />
              {errors.houseSize && (
                <span className="text-red-500 pt-4">
                  This field is required
                </span>
              )}
            </div>
            {houseSize && (
              <div>
                <label className="label">
                  <span className="label-text">Unit</span>
                </label>
                <select
                  {...register("unit", { required: true })}
                  className="select select-bordered bg-primary"
                >
                  <option disabled selected>
                    Unit
                  </option>
                  <option>katha </option>
                  <option>bigha</option>
                  <option>acres</option>
                  <option>shotok</option>
                  <option>decimal</option>
                </select>
                {errors.unit && (
                  <span className="text-red-500 pt-4">
                    This field is required
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="lg:w-6/12 mx-auto mt-16">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              {...register("address", { required: true })}
              type="text"
              placeholder="Enter your street, house number, and/or post code"
              className="input input-bordered w-full bg-primary"
            />
            {errors.address && (
              <span className="text-red-500 pt-4">This field is required</span>
            )}
          </div>
          <div className="lg:w-6/12 mx-auto mt-16">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Short Title"
              className="input input-bordered w-full bg-primary"
            />
            {errors.title && (
              <span className="text-red-500 pt-4">This field is required</span>
            )}
          </div>
          <div className="lg:w-6/12 mx-auto mt-16">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full h-32 bg-primary"
              placeholder="More Details"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 pt-4">This field is required</span>
            )}
          </div>
          <div className="lg:w-6/12 mx-auto mt-16">
            <label className="label">
              <span className="label-text">Rent Amount (Tk)</span>
            </label>
            <input
              {...register("amount", { required: true })}
              type="text"
              placeholder="Rent Amount"
              className="input input-bordered w-full bg-primary"
            />
            {errors.description && (
              <span className="text-red-500 pt-4">This field is required</span>
            )}
          </div>
          <div className="flex gap-2 lg:w-1/2 mx-auto mt-10">
            <input
              {...register("negotiable")}
              type="checkbox"
              className="text-black h-4 w-4"
            />
            <h1 className="-mt-1">Negotiable</h1>
          </div>
          <hr className="my-10" />
          <div className="lg:w-6/12 mx-auto mb-20">
            <label className="label">
              <span className="text-xl font-bold">Add up to 5 photos</span>
            </label>
            <div className="md:col-span-5">
              {
                !imageUrl1? <div>
                  <label>Image 1</label>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl1)}
                type="file"
                // multiple={true}
                accept="image/*"
                placeholder="Upload Images"
                className="file-input file-input-primary w-full"
                required
              />
                </div> :  <img className="h-12 w-12" src={imageUrl1} alt="" />
              }
              {!imageUrl1 && (
                <p className="text-red-500"> Please add at least one image.</p>
              )}
            </div>
            <div className="md:col-span-5">
              <label>Image 2</label>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl2)}
                type="file"
                // multiple={true}
                accept="image/*"
                placeholder="Upload Images"
                className="file-input file-input-primary w-full"
              />
            </div>
            <div className="md:col-span-5">
              <label>Image 3</label>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl3)}
                type="file"
                // multiple={true}
                accept="image/*"
                placeholder="Upload Images"
                className="file-input file-input-primary w-full"
              />
            </div>
            <div className="md:col-span-5">
              <label>Image 4</label>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl4)}
                type="file"
                // multiple={true}
                accept="image/*"
                placeholder="Upload Images"
                className="file-input file-input-primary w-full"
              />
            </div>
            <div className="md:col-span-5">
              <label>Image 5</label>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl5)}
                type="file"
                // multiple={true}
                accept="image/*"
                placeholder="Upload Images"
                className="file-input file-input-primary w-full"
              />
            </div>
            {/* <div className="flex gap-2">
              <div>
                <input   {...register("image",{ required: true })} type="file" multiple/> <br />
                {errors.image && <span className="text-red-500 pt-4">This field is required</span>}
              </div> */}
          </div>
        </div>
        <hr className="my-10" />

        {/* contact part  */}
        <div className="lg:w-1/2 mx-auto">
          <h1 className="text-xl font-bold">Contact details</h1>
          <div className="mt-10">
            <h5>Name</h5>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full bg-primary"
            />
          </div>
          <div className="mt-10">
            <h5>Email</h5>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input input-bordered w-full bg-primary"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="mt-10 border border-secondary p-5">
            <h5>Add A Phone Number</h5>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              name="phone"
              onChange={(e:any)=>setValue(e)}
            />
            {/* <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props}  className="border border-black mx-1 text-2xl w-10 rounded-md"/>}
            /> */}
            {/* <input
              {...register("phone", { required: true })}
              type="text"
              placeholder="Add A Phone Number"
              className="input input-bordered w-full mt-5 bg-primary"
            />
            {errors.phone && (
              <span className="text-red-500 pt-3 mr-6">
                This field is required
              </span>
            )} */}
            <button className="btn btn-secondary btn-sm mt-5">
              <span> Verify otp</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 lg:w-1/2 mx-auto mt-10">
        <input
          {...register("terms")}
          type="checkbox"
          className="text-black h-4 w-4"
        />
        <h1 className="-mt-1">
          I have read and accept the Terms and Conditions
        </h1>
      </div>
      <div className="lg:w-1/2 mx-auto flex justify-end">
        <button
          onClick={handleSubmit(handlePost)}
          className="btn btn-secondary mt-5"
        >
          Post Now
        </button>
      </div>
    </div>
  );
};

export default privateRoute(AddProduct);

// console.log(districtLocation);
// const { user }: any = useContext(AuthContext);
// const router = useRouter();
// const {
//   formState: { errors },
//   register,
//   handleSubmit,
// } = useForm<FormValues>();
// const handlePost: SubmitHandler<FormValues> = async (data) => {
//   const values = {
//     bedrooms: data?.bedrooms,
//     bathrooms: data?.bathrooms,
//     houseSize: data?.houseSize,
//     unit: data?.unit,
//     address: data?.address,
//     title: data?.title,
//     description: data?.description,
//     amount: data?.amount,
//     negotiable: data?.negotiable,
//     name: data?.name,
//     email: data?.email,
//     phone: data?.phone,
//     terms: data?.terms,
//     district: districtLocation,
//   };
//   const res = await fetch("http://localhost:5000/api/v1/product", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });
//   const result = await res.json();
//   router.push("/");
// };

// const handlePostImage = async (data:any) => {
//   const image = data?.image[0];
//   const formData = new FormData();
//   formData.append("image", image);
//   const url =
//     "https://api.imgbb.com/1/upload?key=c49cb06155adb366044d147043658858";
//   fetch(url, {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then(async (imgData) => {
//       console.log(imgData);

//       const images = {
//         image: imgData?.data?.url,
//       };

//       const res = await fetch("http://localhost:5000/api/v1/product", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(images),
//       });
//       const result = await res.json();
//       console.log(result)
//     });
// };
