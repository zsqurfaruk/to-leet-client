/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useContext, useState } from "react";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import privateRoute from "@/routes/privateRoute";
import AdditionalInfoPostPage from "@/components/AdditionalInfoPostPage/AdditionalInfoPostPage";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import ModalEng from "@/components/Home/Banner/Modal/ModalEng";
import { StateContext } from "@/Context/StateContext/StateContext";
import PostModal from "@/components/OtherPages/PostModal/PostModal";
import { BsImage } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { Button } from "@material-tailwind/react";
import Spinner from "@/components/Spinner/Spinner";
import 'react-day-picker/dist/style.css';

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
  email: string | number;
  phone: number;
  terms: boolean;
  areaName: object;
  cityName: object;
  type: object;
  university: object;
  division: object;
  districts: object;
};
const PostDetails = () => {
  const [houseSize, setHouseSize] = useState();
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  // const { userInfo }: any = useContext(AuthContext);
  //  const { userCounter}:any = useContext(APIContext)
  //  console.log(userCounter)
  const {
    modalValue,
    postCityNameEng,
    getPostPopularAreaName,
    setPostOpenModal,
    setGetPostPopularAreaName,
    setPostCityNameEng,
    setPostUniversityModal,
    postUniversityModalValue,
    setPostUniversityModalValue,
    getUniversityModalValue,
    setGetUniversityModalValue,
    postDistrictsName,
    setPostDistrictsName,
    postDivisionNameEng,
    setPostDivisionNameEng,
  }: any = useContext(PostStateContext);

  // const name = userInfo.firstName + " " + userInfo.lastName;
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
      areaName: getPostPopularAreaName,
      cityName: postCityNameEng,
      districts: postDistrictsName,
      division: postDivisionNameEng,
      type: modalValue,
      university: getUniversityModalValue,
    };
    const res = await fetch("http://localhost:5000/api/v1/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await res.json();
    setError(result?.message);
    setPostOpenModal(false);
    setGetUniversityModalValue({})
    setGetPostPopularAreaName({});
    setPostCityNameEng({});
    setPostDistrictsName({});
    setPostDivisionNameEng({});
    router.push(`/${modalValue.eng}`);
  };

  const imageUploadHandler = (event: any, setImg: any) => {
    setLoading(true);
    const imageData = new FormData();
    imageData.set("key", "c49cb06155adb366044d147043658858");
    imageData.append("image", event.target.files[0]);
    imageData.append("image", event.target.files[1]);
    imageData.append("image", event.target.files[2]);
    imageData.append("image", event.target.files[3]);
    imageData.append("image", event.target.files[4]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response?.data?.data?.display_url);
        setLoading(false);
        // console.log(response.data.data.display_url);
      })
      .catch(function (error) {});
  };
  const handleHouseSize = (e: any) => {
    setHouseSize(e.target.value);
  };
  if (postUniversityModalValue?.eng) {
    setPostUniversityModal(true);
  }
  if (getUniversityModalValue?.name === "eng") {
    const newName = {
      eng: getUniversityModalValue?.label,
      ban: getUniversityModalValue?.value,
    };
    setGetUniversityModalValue(newName);
  } else if (getUniversityModalValue?.name === "ban") {
    const newName = {
      eng: getUniversityModalValue?.value,
      ban: getUniversityModalValue?.label,
    };
    setGetUniversityModalValue(newName);
  }

  const handleCancel = () => {
    setImageUrl1("");
    setImageUrl2("");
    setImageUrl3("");
    setImageUrl4("");
    setImageUrl5("");
  };
  const lang = localStorage.getItem("lan");
  const userEmail = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const name = firstName + " " + lastName;
  return (
    <div>
      {error ? (
        <div className="h-96 flex items-center justify-center">
          {" "}
         <div>
         <h1>{error}</h1>{" "}
          <Link className="text-secondary underline" href={"/"}>Home</Link>
         </div>
        </div>
      ) : (
        <div className="bg-white p-5 lg:w-10/12 mx-auto">
          <AdditionalInfoPostPage></AdditionalInfoPostPage>
          {getUniversityModalValue?.eng && (
            <div>
              {lang ? (
                <p className="text-center text-lg">
                  {" "}
                  You have selected {getUniversityModalValue?.eng}
                </p>
              ) : (
                <p className="text-center">
                  আপনি নির্বাচন করেছেন {getUniversityModalValue?.ban}
                </p>
              )}
            </div>
          )}
          <div>
            <div className="my-8 ">
              {lang ? (
                <div>
                  {modalValue?.eng && (
                    <div className="flex justify-center gap-2 md:text-xl lg:-ml-10">
                      <h1 className="cursor-pointer">
                        Is the{" "}
                        <span className="text-success">{modalValue?.eng}</span>{" "}
                        near university or medical college?
                      </h1>
                      <h2
                        className="flex gap-2 border shadow-md shadow-accent border-accent rounded-lg px-2 cursor-pointer"
                        onClick={() =>
                          setPostUniversityModalValue({
                            eng: "yes",
                            ban: "হ্যাঁ",
                          })
                        }
                      >
                        Yes
                      </h2>
                    </div>
                  )}

                  <PostModal></PostModal>
                </div>
              ) : (
                <div>
                  {modalValue.ban && (
                    <div className="flex justify-center gap-2 text-sm md:text-base lg:-ml-32">
                      <h1>
                        <span className="text-success">{modalValue?.ban}</span>{" "}
                        কি বিশ্ববিদ্যালয় বা মেডিকেল কলেজের পাশে?
                      </h1>
                      <h2
                        className="border shadow-md shadow-accent border-accent rounded-lg px-3 cursor-pointer text-center"
                        onClick={() =>
                          setPostUniversityModalValue({
                            eng: "yes",
                            ban: "হ্যাঁ",
                          })
                        }
                      >
                        হ্যাঁ
                      </h2>
                    </div>
                  )}

                  <PostModal></PostModal>
                </div>
              )}
            </div>

            <div>
              {lang ? (
                <div className="form-control lg:w-6/12 mx-auto mb-8">
                  <label className="label">
                    <span className="label-text">Bedroom number/numbers</span>
                  </label>
                  <select
                    {...register("bedrooms")}
                    className="select select-bordered bg-primary"
                  >
                    <option disabled selected>
                      Bedroom number/numbers
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>৭</option>
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
                <div className="form-control lg:w-6/12 mx-auto mb-8">
                  <label className="label">
                    <span className="label-text">বেডরুম সংখা</span>
                  </label>
                  <select
                    {...register("bedrooms")}
                    className="select select-bordered bg-primary"
                  >
                    <option disabled selected>
                      বেডরুম সংখা
                    </option>
                    <option>১</option>
                    <option>২</option>
                    <option>৩</option>
                    <option>৪</option>
                    <option>৫</option>
                    <option>৬</option>
                    <option>৭</option>
                    <option>৮</option>
                    <option>৯</option>
                    <option>১০</option>
                    {/* <option>10+</option> */}
                  </select>
                  {errors.bedrooms && (
                    <span className="text-red-500 pt-4">
                      আপনাকে অবশ্যই এটা পূরণ করতে হবে।
                    </span>
                  )}
                </div>
              )}
              {modalValue?.eng === "Mess-Male" ||
                (modalValue?.eng === "Mess-Female" && (
                  <div className="form-control lg:w-6/12 mx-auto">
                    <label className="label">
                      <span className="label-text">Bed Number/Numbers</span>
                    </label>
                    <select
                      {...register("bedNumber")}
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
                ))}
              {lang ? (
                <div className="form-control lg:w-6/12 mx-auto mt-8">
                  <label className="label">
                    <span className="label-text">Bathroom number/numbers</span>
                  </label>
                  <select
                    {...register("bathrooms")}
                    className="select select-bordered bg-primary"
                  >
                    <option disabled selected>
                      Bathrooms number/numbers
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
              ) : (
                <div className="form-control lg:w-6/12 mx-auto mt-8">
                  <label className="label">
                    <span className="label-text">বাথরুম সংখা</span>
                  </label>
                  <select
                    {...register("bathrooms")}
                    className="select select-bordered bg-primary"
                  >
                    <option disabled selected>
                      বাথরুম সংখা
                    </option>
                    <option>১</option>
                    <option>২</option>
                    <option>৩</option>
                    <option>৪</option>
                    <option>৫</option>
                    {/* <option>5+</option> */}
                  </select>
                  {errors.bathrooms && (
                    <span className="text-red-500 pt-4">
                      আপনাকে অবশ্যই এটা পূরণ করতে হবে।
                    </span>
                  )}
                </div>
              )}
              <div className="flex gap-5 lg:w-6/12 mx-auto mt-8">
                <div className="w-full">
                  <label className="label">
                    {lang ? (
                      <span className="label-text">House size (Optional)</span>
                    ) : (
                      <span className="label-text">রুমের সাইজ (ঐচ্ছিক)</span>
                    )}
                  </label>
                  <input
                    {...register("houseSize")}
                    type="text"
                    onChange={handleHouseSize}
                    placeholder={lang ? "Type here" : "এখানে লিখুন"}
                    className="input input-bordered w-full bg-primary"
                  />
                  {errors.houseSize && (
                    <span className="text-red-500 pt-4">
                      {lang
                        ? " This field is required"
                        : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                    </span>
                  )}
                </div>
                {houseSize && (
                  <div>
                    <label className="label">
                      <span className="label-text">Unit</span>
                    </label>
                    <select
                      {...register("unit")}
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
                        {lang
                          ? " This field is required"
                          : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-8">
                <label className="label">
                  {lang ? (
                    <span className="label-text">Address</span>
                  ) : (
                    <span className="label-text">ঠিকানা</span>
                  )}
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder={
                    lang
                      ? "Enter your street, house number, and/or post code"
                      : "এখানে আপনার পূর্ণ ঠিকানা লিখুন।"
                  }
                  className="input input-bordered w-full bg-primary"
                />
                {errors.address && (
                  <span className="text-red-500 pt-4">
                    {lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-8">
                <label className="label">
                  {lang ? (
                    <span className="label-text">Title</span>
                  ) : (
                    <span className="label-text"> টাইটেল লিখুন </span>
                  )}
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder={lang ? "Short Title" : "টাইটেল লিখুন"}
                  className="input input-bordered w-full bg-primary"
                />
                {errors.title && (
                  <span className="text-red-500 pt-4">
                    {lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-8">
                <label className="label">
                  {lang ? (
                    <span className="label-text">Description</span>
                  ) : (
                    <span className="label-text">বিস্তারিত লিখুন</span>
                  )}
                </label>
                <textarea
                  {...register("description")}
                  className="textarea textarea-bordered w-full h-32 bg-primary"
                  placeholder={lang ? "More Details" : "বিস্তারিত লিখুন"}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 pt-4">
                    {lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-8">
                <label className="label">
                  {lang ? (
                    <span className="label-text">Rent Amount (Tk)</span>
                  ) : (
                    <span className="label-text"> টাকার পরিমান লিখুন</span>
                  )}
                </label>
                <input
                  {...register("amount")}
                  type="text"
                  placeholder={lang ? "Rent Amount" : "টাকার পরিমান লিখুন"}
                  className="input input-bordered w-full bg-primary"
                />
                {errors.description && (
                  <span className="text-red-500 pt-4">
                    {lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="flex gap-2 lg:w-1/2 mx-auto mt-10">
                <input
                  {...register("negotiable")}
                  type="checkbox"
                  className="text-black h-4 w-4"
                />
                {lang ? (
                  <h1 className="-mt-1">Negotiable</h1>
                ) : (
                  "আলোচনা সাপেক্ষে"
                )}
              </div>
              <hr className="my-10" />

              <div className="lg:w-6/12 mx-auto mb-20">
                <label className="label">
                  {lang ? (
                    <span className="text-xl font-bold">
                      Add up to 5 photos
                    </span>
                  ) : (
                    <span className="text-lg font-bold">
                      {" "}
                      সর্বোচ্চ পাঁচটি ছবি যুক্ত করুন{" "}
                    </span>
                  )}
                </label>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-7">
                  {!imageUrl1 && loading ? (
                    <Spinner></Spinner>
                  ) : (
                    <>
                      {imageUrl1 ? (
                        <div className="relative">
                          <img
                            className="h-16 w-24 mt-7"
                            src={imageUrl1}
                            alt=""
                          />
                          <button
                            onClick={handleCancel}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button>
                          {lang ? <label>Image 1</label> : <label>ছবি-১</label>}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl1)
                            }
                            type="file"
                            id="file1"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden"
                          />
                          <div className="mt-1">
                            <label htmlFor="file1">
                              {lang ? (
                                <div className="rounded border border-secondary p-2">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div className="rounded border border-secondary p-2">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </>
                  )}
                  {imageUrl1 && !imageUrl2 && loading ? (
                    "loading.."
                  ) : (
                    <div>
                      {imageUrl2 ? (
                        <div className="relative">
                          <img
                            className="h-16 w-24 mt-7"
                            src={imageUrl2}
                            alt=""
                          />
                          <button
                            onClick={handleCancel}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button>
                          {lang ? <label>Image 2</label> : <label>ছবি-২</label>}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl2)
                            }
                            type="file"
                            id="file2"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden"
                          />
                          <div className="mt-1">
                            <label htmlFor="file2">
                              {lang ? (
                                <div className="rounded border border-secondary p-2">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div className="rounded border border-secondary p-2">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </div>
                  )}

                  {imageUrl1 && imageUrl2 && !imageUrl3 && loading ? (
                    "loading"
                  ) : (
                    <>
                      {imageUrl3 ? (
                        <div className="relative">
                          <img
                            className="h-16 w-24 mt-7"
                            src={imageUrl3}
                            alt=""
                          />
                          <button
                            onClick={handleCancel}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button>
                          {lang ? <label>Image 3</label> : <label>ছবি-৩</label>}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl3)
                            }
                            type="file"
                            id="file3"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden"
                          />
                          <div className="mt-1">
                            <label htmlFor="file3">
                              {lang ? (
                                <div className="rounded border border-secondary p-2">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div className="rounded border border-secondary p-2">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </>
                  )}
                  {imageUrl4 ? (
                    <div className="relative">
                      <img className="h-16 w-24 mt-7" src={imageUrl4} alt="" />
                      <button
                        onClick={handleCancel}
                        className="bg-primary absolute top-7 right-1"
                      >
                        {" "}
                        <RxCrossCircled />{" "}
                      </button>
                    </div>
                  ) : (
                    <button>
                      {lang ? <label>Image 4</label> : <label>ছবি-৪</label>}
                      <input
                        onChange={(e) => imageUploadHandler(e, setImageUrl4)}
                        type="file"
                        id="file4"
                        accept="image/*"
                        placeholder="Upload Images"
                        className="file-input file-input-primary w-full hidden"
                      />
                      <div className="mt-1">
                        <label htmlFor="file4">
                          {lang ? (
                            <div className="rounded border border-secondary p-2">
                              <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                              <small>Upload Photo</small>
                            </div>
                          ) : (
                            <div className="rounded border border-secondary p-2">
                              <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                              <small> ছবি যুক্ত করুন</small>
                            </div>
                          )}
                        </label>
                      </div>
                    </button>
                  )}
                  {imageUrl5 ? (
                    <div className="relative">
                      <img className="h-16 w-24 mt-7" src={imageUrl4} alt="" />
                      <button
                        onClick={handleCancel}
                        className="bg-primary absolute top-7 right-1"
                      >
                        {" "}
                        <RxCrossCircled />{" "}
                      </button>
                    </div>
                  ) : (
                    <button>
                      {lang ? <label>Image 5</label> : <label>ছবি-৫</label>}
                      <input
                        onChange={(e) => imageUploadHandler(e, setImageUrl5)}
                        type="file"
                        id="file"
                        accept="image/*"
                        placeholder="Upload Images"
                        className="file-input file-input-primary w-full hidden"
                      />
                      <div className="mt-1">
                        <label htmlFor="file">
                          {lang ? (
                            <div className="rounded border border-secondary p-2">
                              <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                              <small>Upload Photo</small>
                            </div>
                          ) : (
                            <div className="rounded border border-secondary p-2">
                              <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                              <small> ছবি যুক্ত করুন</small>
                            </div>
                          )}
                        </label>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <hr className="my-10" />

            {/* contact part  */}
            <div className="lg:w-1/2 mx-auto">
              <h1 className="text-xl font-bold">Contact details</h1>
              <div className="mt-10">
                <h5>Name</h5>
                <input
                  {...register("name")}
                  type="text"
                  className="input input-bordered w-full bg-primary"
                  defaultValue={name}
                />
              </div>
              <div className="mt-10">
                <div className="flex gap-6">
                  <h5>Email</h5>{" "}
                  <small className="text-blue-400">
                    You can't change your email. To change please{" "}
                    <Link className="underline font-semibold" href="/signUp">
                      sign up
                    </Link>{" "}
                    again or contact the admin.
                  </small>
                </div>
                <input
                  {...register("email")}
                  type="email"
                  className="input input-bordered w-full bg-primary"
                  defaultValue={userEmail}
                />
              </div>
              <div className="mt-10 border border-secondary p-5">
                <h5>Add A Phone Number</h5>
                {/* <PhoneInput
                placeholder="Enter phone number"
                value={value}
                name="phone"
                onChange={(e: any) => setValue(e)}
              /> */}
                {/* <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props}  className="border border-black mx-1 text-2xl w-10 rounded-md"/>}
            /> */}
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Add A Phone Number"
                  className="input input-bordered w-full mt-5 bg-primary"
                />
                {errors.phone && (
                  <span className="text-red-500 pt-3 mr-6">
                    This field is required
                  </span>
                )}
                {/* <button className="btn btn-secondary btn-sm mt-5">
                <span> Verify otp</span>
              </button> */}
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
            <Button
              onClick={handleSubmit(handlePost)}
              className="text-gray-800 font-semibold text-lg mt-5 bg-gradient-to-r from-success via-accent to-success"
            >
              Post Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default privateRoute(PostDetails);
