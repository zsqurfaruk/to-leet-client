/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useContext, useState } from "react";
import axios from "axios";
import Link from "next/link";
import PrivateRoute from "@/routes/privateRoute";
import AdditionalInfoPostPage from "@/components/AdditionalInfoPostPage/AdditionalInfoPostPage";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import PostModal from "@/components/OtherPages/PostModal/PostModal";
import { BsImage } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { Button, Input } from "@material-tailwind/react";
import Spinner from "@/components/Spinner/Spinner";
import Head from "next/head";
import Select from "react-select";
import { optionBan } from "../../../components/PostData/DataBan";
import { optionEng } from "../../../components/PostData/DataEng";
import { wifiBan } from "../../../components/PostData/WifiBan";
import { wifiEng } from "../../../components/PostData/WifiEng";
import { totalBedBan } from "../../../components/PostData/TotalBedBan";
import { totalBedEng } from "../../../components/PostData/TotalBed";
import { APIContext } from "@/Context/ApiContext/ApiContext";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import parsePhoneNumberFromString from "libphonenumber-js";
import { AiOutlineMinus } from "react-icons/ai";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import style from "../../../styles/banner.module.css"
const selectStyles = {
  control: (styles:any, { isFocused }:any) => ({
    ...styles,
    borderColor: isFocused ? '#1598ac' : '#1598ac',
    boxShadow: isFocused ? '0 0 0 1px #1598ac' : 'none',
  }),
};
type FormValues = {
  bedNumber: object;
  totalBed: object;
  bedrooms: object;
  bathrooms: object;
  wifiFacility: object;
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
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");
  const [error, setError] = useState("");
  const [validAmount, setValidAmount] = useState();
  const [amountError, setAmountError] = useState("");
  const [amountErrorBan, setAmountErrorBan] = useState("");
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [countryNumber, setCountryNumber] = useState();
  const [isValid, setIsValid] = useState(true);
  const [isValidNum, setIsValidNum] = useState(true);
  const [anotherNumber, setAnotherNumber] = useState(false);
  const [minusNumber, setMinusNumber] = useState(false);

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
    bedNumbers,
    setBedNumbers,
    bedRooms,
    setBedRooms,
    bathRooms,
    setBathRooms,
    wifi,
    setWifi,
    totalBed,
    setTotalBed,
  }: any = useContext(PostStateContext);
  const {lang}:any = useContext(FilterContext)
  const { reload, setReload }: any = useContext(APIContext);

  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();

  if (bedNumbers?.name === "eng") {
    const newName = {
      eng: bedNumbers?.label,
      ban: bedNumbers?.value,
    };
    setBedNumbers(newName);
  } else if (bedNumbers?.name === "ban") {
    const newName = {
      eng: bedNumbers?.value,
      ban: bedNumbers?.label,
    };
    setBedNumbers(newName);
  }

  if (bedRooms?.name === "eng") {
    const newName = {
      eng: bedRooms?.label,
      ban: bedRooms?.value,
    };
    setBedRooms(newName);
  } else if (bedRooms?.name === "ban") {
    const newName = {
      eng: bedRooms?.value,
      ban: bedRooms?.label,
    };
    setBedRooms(newName);
  }

  if (bathRooms?.name === "eng") {
    const newName = {
      eng: bathRooms?.label,
      ban: bathRooms?.value,
    };
    setBathRooms(newName);
  } else if (bathRooms?.name === "ban") {
    const newName = {
      eng: bathRooms?.value,
      ban: bathRooms?.label,
    };
    setBathRooms(newName);
  }

  if (totalBed?.name === "eng") {
    const newName = {
      eng: totalBed?.label,
      ban: totalBed?.value,
    };
    setTotalBed(newName);
  } else if (totalBed?.name === "ban") {
    const newName = {
      eng: totalBed?.value,
      ban: totalBed?.label,
    };
    setTotalBed(newName);
  }

  if (wifi?.name === "eng") {
    const newName = {
      eng: wifi?.label,
      ban: wifi?.value,
    };
    setWifi(newName);
  } else if (wifi?.name === "ban") {
    const newName = {
      eng: wifi?.value,
      ban: wifi?.label,
    };
    setWifi(newName);
  }

  const handleCountryNumberValue = (value: any) => {
    setCountryNumber(value);
    const phoneNumber = parsePhoneNumberFromString(value, "BD");
    const isValidNumber = phoneNumber
      ? phoneNumber.isValid() && phoneNumber.country === "BD"
      : false;
    const isFixedLength = value.length === 13;
    const startsWithFixedNumber =
      /^88017|^88016|^88015|^88014|^88013|^88018|^88019/.test(value);
    setIsValid(isValidNumber && isFixedLength);
    setIsValidNum(startsWithFixedNumber);
  };
  const cookieValue = Cookies.get('token');
  const tkn = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
  const handlePost: SubmitHandler<FormValues> = async (data) => {
    const values = {
      bedrooms: bedRooms,
      bathrooms: bathRooms,
      bedNumber: bedNumbers,
      totalBed: totalBed,
      wifiFacility: wifi,
      address: data?.address,
      title: data?.title,
      description: data?.description,
      amount: validAmount,
      negotiable: data?.negotiable,
      img1: imageUrl1,
      img2: imageUrl2,
      img3: imageUrl3,
      img4: imageUrl4,
      img5: imageUrl5,
      name: data?.name,
      phone: countryNumber || data?.phone,
      email: data?.email,
      terms: data?.terms,
      areaName: getPostPopularAreaName,
      cityName: postCityNameEng,
      districts: postDistrictsName,
      division: postDivisionNameEng,
      type: modalValue,
      university: getUniversityModalValue,
    };
    setPostLoading(true);
    const res = await fetch("https://zsqur.to-leet.com/api/v1/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${tkn}`,
      },
      body: JSON.stringify(values),
    });
    const result = await res.json();
    setError(result?.error);
    setPostOpenModal(false);
    setGetUniversityModalValue({});
    setGetPostPopularAreaName({});
    setPostCityNameEng({});
    setPostDistrictsName({});
    setPostDivisionNameEng({});
    if (result?.message === "success") {
      if(lang){
        toast.success("আপনার বিজ্ঞাপনের জন্য আপনাকে ধন্যবাদ.")
      }else{
        toast.success("Thank you for your ads.");
      }
      setReload(!reload);
      router.push(`/${modalValue.eng}`);
      setPostLoading(false);
    }
  };

  const imageUploadHandler = (event: any, setImg: any) => {
    
    const imageData = new FormData();
    imageData.set("key", "49a57cce0acfac6a6e93d404f46d3e5a");
    imageData.append("image", event.target.files[0]);
    imageData.append("image", event.target.files[1]);
    imageData.append("image", event.target.files[2]);
    imageData.append("image", event.target.files[3]);
    imageData.append("image", event.target.files[4]);
    setLoading(true);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response?.data?.data?.display_url);
        setLoading(false);
      })
      .catch(function (error) {});
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

  const handleCancel11 = () => {
    setImageUrl1("");
  };
  const handleCancel12 = () => {
    setImageUrl2("");
  };
  const handleCancel13 = () => {
    setImageUrl3("");
  };
  const handleCancel14 = () => {
    setImageUrl4("");
  };
  const handleCancel15 = () => {
    setImageUrl5("");
  };

  // const checkNumber = (e: any) => {
  //   if (e && isNaN(e)) {
  //     setNumberError(
  //       "English is the recommended language for writing valid mobile number."
  //     );
  //     setNumberErrorBan("সঠিক মোবাইল নাম্বার ইংরেজিতে লিখুন।");
  //   } else if (e && !isNaN(e)) {
  //     setValidNumber(e);
  //     setNumberError("");
  //     setNumberErrorBan("");
  //   } else if (!e) {
  //     setNumberError("");
  //     setNumberErrorBan("");
  //   }
  // };
  const checkAmountValidity = (e: any) => {
    if (e && isNaN(e)) {
      setAmountError("Please write the amount in English.");
      setAmountErrorBan("টাকার পরিমাণ সথিকভাবে ইংরেজিতে লিখুন।");
    } else if (e && !isNaN(e)) {
      setValidAmount(e);
      setAmountError("");
      setAmountErrorBan("");
    } else if (!e) {
      setAmountError("");
      setAmountErrorBan("");
    }
  };

  
  const authentication = Cookies.get("authentication");
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const name = firstName + " " + lastName;

  let getNumber;
  let checkAuthentication;
  if (authentication) {
    if (!isNaN(parseInt(authentication))) {
      // setNumber(inputValue)
      getNumber = authentication;
    } else if (authentication.includes("@") && authentication.includes(".")) {
      checkAuthentication = authentication;
    }
  }

  const handleAnotherNumber = () => {
    setAnotherNumber(!anotherNumber);
    setMinusNumber(!minusNumber);
  };

  const handleCancel = () => {
    setAnotherNumber(!anotherNumber);
    setMinusNumber(!minusNumber);
  };
  const handleMinus = () => {
    setMinusNumber(!minusNumber);
  };
  return (
    <>
      <Head>
        <title>To-Leet - Post Details</title>
      </Head>
      <div>
        <div className="bg-white p-5 lg:w-10/12 mx-auto">
          <AdditionalInfoPostPage></AdditionalInfoPostPage>
          {!modalValue.eng && (
            <div className="flex justify-center text-red-300 mt-2">
              {!lang ? (
                <h5>You have to select rent type before post.</h5>
              ) : (
                <h5>পোস্ট করার আগে আপনাকে ভাড়ার ধরন নির্বাচন করতে হবে।</h5>
              )}
            </div>
          )}
          {getUniversityModalValue?.eng && (
            <div>
              {!lang ? (
                <h2 className="text-center text-lg mt-2">
                  {" "}
                  You have selected{" "}
                  <span className="lowercase">
                    {getUniversityModalValue?.eng}
                  </span>
                </h2>
              ) : (
                <h2 className="text-center mt-2">
                  আপনি নির্বাচন করেছেন {getUniversityModalValue?.ban}
                </h2>
              )}
            </div>
          )}
          <div>
            <div className="my-8 ">
              {!lang ? (
                <div>
                  {modalValue?.eng && (
                    <div className="flex justify-center gap-2 md:text-xl lg:-ml-10">
                      <h1 className="cursor-pointer">
                        Is the{" "}
                        <span className="text-warning">{modalValue?.eng}</span>{" "}
                        near university or medical college?
                      </h1>
                      <h2
                        className="flex gap-2 border shadow-md shadow-warning border-warning rounded px-2 cursor-pointer"
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
                        <span className="text-warning">{modalValue?.ban}</span>{" "}
                        কি বিশ্ববিদ্যালয় বা মেডিকেল কলেজের পাশে?
                      </h1>
                      <h1
                        className="border shadow-md shadow-warning border-warning rounded px-3 cursor-pointer text-center"
                        onClick={() =>
                          setPostUniversityModalValue({
                            eng: "yes",
                            ban: "হ্যাঁ",
                          })
                        }
                      >
                        হ্যাঁ
                      </h1>
                    </div>
                  )}

                  <PostModal></PostModal>
                </div>
              )}
            </div>

            <div>
              <div
                className={
                  modalValue.eng === "Mess-(Male)" ||
                  modalValue.eng === "Mess-(Female)" ||
                  modalValue.eng === "Sublet-(Male)" ||
                  modalValue.eng === "Sublet-(Female)" ||
                  modalValue.eng === "Hostel"
                    ? "block"
                    : "hidden"
                }
              >
                {!lang ? (
                  <div className="form-control lg:w-6/12 mx-auto mb-8">
                    <label className="label">
                      <span className="label-text">
                        Total Bed Number/ Numbers
                      </span>
                    </label>
                    <Select
                      placeholder="Total Bed Number/ Numbers"
                      isSearchable
                      options={totalBedEng}
                      onChange={setTotalBed}
                      className="bg-primary border-warning  text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                ) : (
                  <div className="form-control lg:w-6/12 mx-auto mb-8">
                    <label className="label">
                      <span className="label-text">মোট বেড সংখ্যা </span>
                    </label>
                    <Select
                      placeholder="মোট বেড সংখ্যা"
                      isSearchable
                      options={totalBedBan}
                      onChange={setTotalBed}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  modalValue.eng === "Mess-(Male)" ||
                  modalValue.eng === "Mess-(Female)" ||
                  modalValue.eng === "Sublet-(Male)" ||
                  modalValue.eng === "Sublet-(Female)" ||
                  modalValue.eng === "Hostel"
                    ? "block"
                    : "hidden"
                }
              >
                {!lang ? (
                  <div className="form-control lg:w-6/12 mx-auto mb-8">
                    <label className="label">
                      <span className="label-text">
                        Empty Bed number / numbers
                      </span>
                    </label>
                    <Select
                      placeholder="Empty Bed number / numbers"
                      isSearchable
                      options={optionEng}
                      onChange={setBedNumbers}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                ) : (
                  <div className="form-control lg:w-6/12 mx-auto mb-8">
                    <label className="label">
                      <span className="label-text">ফাঁকা বেড সংখ্যা </span>
                    </label>
                    <Select
                      placeholder="ফাঁকা বেড সংখ্যা"
                      isSearchable
                      options={optionBan}
                      onChange={setBedNumbers}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                )}
              </div>

              <div
                className={
                  modalValue.eng === "Mess-(Male)" ||
                  modalValue.eng === "Mess-(Female)" ||
                  modalValue.eng === "Hostel" ||
                  modalValue.eng === "Office" ||
                  modalValue.eng === "Shop" ||
                  modalValue.eng === "Vehicles" ||
                  modalValue.eng === "Sublet-(Male)" ||
                  modalValue.eng === "Sublet-(Female)" ||
                  modalValue.eng === "Garage"
                    ? "hidden"
                    : "block"
                }
              >
                {!lang ? (
                  <div className="form-control lg:w-6/12 mx-auto mb-8">
                    <label className="label">
                      <span className="label-text">
                        Bedroom number / numbers
                      </span>
                    </label>
                    <Select
                      placeholder="Bedroom number / numbers"
                      isSearchable
                      options={optionEng}
                      onChange={setBedRooms}
                      className="bg-primary  border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                ) : (
                  <div className="form-control lg:w-6/12 mx-auto mb-8">
                    <label className="label">
                      <span className="label-text">বেডরুম সংখ্যা</span>
                    </label>
                    <Select
                      placeholder="বেডরুম সংখ্যা"
                      isSearchable
                      options={optionBan}
                      onChange={setBedRooms}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                )}
              </div>

              <div
                className={
                  modalValue.eng === "Office" ||
                  modalValue.eng === "Shop" ||
                  modalValue.eng === "Vehicles" ||
                  modalValue.eng === "Garage"
                    ? "hidden"
                    : "block"
                }
              >
                {!lang ? (
                  <div className="form-control lg:w-6/12 mx-auto mt-10">
                    <label className="label">
                      <span className="label-text">
                        Washroom number/ numbers
                      </span>
                    </label>
                    <Select
                      placeholder="Washroom number / numbers"
                      isSearchable
                      options={optionEng}
                      onChange={setBathRooms}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                ) : (
                  <div className="form-control lg:w-6/12 mx-auto mt-10">
                    <label className="label">
                      <span className="label-text"> ওয়াশরুম সংখ্যা</span>
                    </label>
                    <Select
                      placeholder="ওয়াশরুম সংখ্যা"
                      isSearchable
                      options={optionBan}
                      onChange={setBathRooms}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  modalValue?.eng === "Office" ||
                  modalValue?.eng === "Shop" ||
                  modalValue?.eng === "Vehicles" ||
                  modalValue?.eng === "Garage"
                    ? "hidden"
                    : "block mt-10 mb-10"
                }
              >
                {!lang ? (
                  <div className="form-control lg:w-6/12 mx-auto">
                    <label className="label">
                      <span className="label-text">Wifi Facilities</span>
                    </label>
                    <Select
                      placeholder="Wifi Facilities"
                      isSearchable
                      options={wifiEng}
                      onChange={setWifi}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                ) : (
                  <div className="form-control lg:w-6/12 mx-auto  ">
                    <label className="label">
                      <span className="label-text">ওয়াইফাই সুবিধাঃ</span>
                    </label>
                    <Select
                      placeholder="ওয়াইফাই সুবিধাঃ"
                      isSearchable
                      options={wifiBan}
                      onChange={setWifi}
                      className="bg-primary border-none text-sm h-4 text-gray-700 font-medium"
                      styles={selectStyles}
                    />
                  </div>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto ">
                <label className="label">
                  {!lang ? (
                    <span className="label-text">Address</span>
                  ) : (
                    <span className="label-text">ঠিকানা</span>
                  )}
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder={
                    !lang
                      ? "Enter your street, house number, and/or post code"
                      : "এখানে আপনার পূর্ণ ঠিকানা লিখুন।"
                  }
                  className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full"
                />
                {errors.address && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-6">
                <label className="label">
                  {!lang ? (
                    <span className="label-text">Short Title</span>
                  ) : (
                    <span className="label-text"> টাইটেল লিখুন </span>
                  )}
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder={!lang ? "Short Title" : "টাইটেল লিখুন"}
                  className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full"
                />
                {errors.title && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-8">
                <label className="label">
                  {!lang ? (
                    <span className="label-text">Description</span>
                  ) : (
                    <span className="label-text">বিস্তারিত লিখুন</span>
                  )}
                </label>
                <textarea
                  {...register("description")}
                  className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full h-32"
                  placeholder={!lang ? "More Details" : "বিস্তারিত লিখুন"}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="lg:w-6/12 mx-auto mt-8">
                <label className="label">
                  {!lang ? (
                    <span className="label-text">Rent Amount (Tk)</span>
                  ) : (
                    <span className="label-text"> টাকার পরিমান লিখুন</span>
                  )}
                </label>
                <input
                  {...register("amount", { required: true })}
                  type="text"
                  placeholder={!lang ? "Rent Amount" : "টাকার পরিমান লিখুন"}
                  className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full"
                  onChange={(e: any) => checkAmountValidity(e.target.value)}
                />
                {errors.description && (
                  <span className="text-red-500 pt-4">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
                {!lang ? (
                  <span className="text-red-300 mt-1">{amountError}</span>
                ) : (
                  <span className="text-red-300 mt-1 text-sm">
                    {amountErrorBan}
                  </span>
                )}
              </div>
              <div className="flex gap-2 lg:w-1/2 mx-auto mt-10">
                <input
                  {...register("negotiable")}
                  type="checkbox"
                  className="text-gray-700 h-4 w-4"
                />
                {!lang ? (
                  <h1 className="-mt-1">Negotiable</h1>
                ) : (
                  "আলোচনা সাপেক্ষে"
                )}
              </div>
              <hr className="my-10" />

              <div className="lg:w-6/12 mx-auto mb-20">
                <label className="label">
                  {!lang ? (
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
                    <div className="mt-9 ml-5">
                      {" "}
                      <Spinner></Spinner>
                    </div>
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
                            onClick={handleCancel11}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button >
                          {!lang ? (
                            <label>Image 1</label>
                          ) : (
                            <label>ছবি-১</label>
                          )}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl1)
                            }
                            type="file"
                            id="file1"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden cursor-pointer"
                            required
                          />
                          <div className="mt-1">
                            <label htmlFor="file1">
                              {!lang ? (
                                <div className="rounded border border-warning p-2 cursor-pointer">
                                  <BsImage className="h-6 w-6 ml-7 md:ml-12 lg:ml-7" />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div className="rounded border border-warning p-2 cursor-pointer">
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
                    <div className="mt-9 ml-5">
                      {" "}
                      <Spinner></Spinner>
                    </div>
                  ) : (
                    <>
                      {imageUrl2 ? (
                        <div className="relative">
                          <img
                            className="h-16 w-24 mt-7"
                            src={imageUrl2}
                            alt=""
                          />
                          <button
                            onClick={handleCancel12}
                            className="bg-primary absolute top-7 right-1"
                          >
                            <RxCrossCircled />
                          </button>
                        </div>
                      ) : (
                        <button>
                          {!lang ? (
                            <label>Image 2</label>
                          ) : (
                            <label>ছবি-২</label>
                          )}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl2)
                            }
                            type="file"
                            id="file2"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden"
                            disabled={imageUrl1 ? false : true}
                          />
                          <div className="mt-1">
                            <label htmlFor="file2">
                              {!lang ? (
                                <div
                                  className={
                                    imageUrl1
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border   border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl1
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div
                                  className={
                                    imageUrl1
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl1
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </>
                  )}

                  {imageUrl1 && imageUrl2 && !imageUrl3 && loading ? (
                    <div className="mt-9 ml-5">
                      {" "}
                      <Spinner></Spinner>
                    </div>
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
                            onClick={handleCancel13}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button>
                          {!lang ? (
                            <label>Image 3</label>
                          ) : (
                            <label>ছবি-৩</label>
                          )}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl3)
                            }
                            type="file"
                            id="file3"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden cursor-pointer"
                            disabled={imageUrl1 && imageUrl2 ? false : true}
                          />
                          <div className="mt-1">
                            <label htmlFor="file3">
                              {!lang ? (
                                <div
                                  className={
                                    imageUrl1 && imageUrl2
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl1 && imageUrl2
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div
                                  className={
                                    imageUrl1 && imageUrl2
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl1 && imageUrl2
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </>
                  )}
                  {imageUrl3 && !imageUrl4 && loading ? (
                    <div className="mt-9 ml-5">
                      {" "}
                      <Spinner></Spinner>
                    </div>
                  ) : (
                    <>
                      {imageUrl4 ? (
                        <div className="relative">
                          <img
                            className="h-16 w-24 mt-7"
                            src={imageUrl4}
                            alt=""
                          />
                          <button
                            onClick={handleCancel14}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button>
                          {!lang ? (
                            <label>Image 4</label>
                          ) : (
                            <label>ছবি-৪</label>
                          )}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl4)
                            }
                            type="file"
                            id="file4"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden"
                            disabled={imageUrl3 ? false : true}
                          />
                          <div className="mt-1">
                            <label htmlFor="file4">
                              {!lang ? (
                                <div
                                  className={
                                    imageUrl3
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl3
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div
                                  className={
                                    imageUrl3
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl3
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </>
                  )}
                  {imageUrl4 && !imageUrl5 && loading ? (
                    <div className="mt-9 ml-5">
                      {" "}
                      <Spinner></Spinner>
                    </div>
                  ) : (
                    <>
                      {imageUrl5 ? (
                        <div className="relative">
                          <img
                            className="h-16 w-24 mt-7"
                            src={imageUrl5}
                            alt=""
                          />
                          <button
                            onClick={handleCancel15}
                            className="bg-primary absolute top-7 right-1"
                          >
                            {" "}
                            <RxCrossCircled />{" "}
                          </button>
                        </div>
                      ) : (
                        <button>
                          {!lang ? (
                            <label>Image 5</label>
                          ) : (
                            <label>ছবি-৫</label>
                          )}
                          <input
                            onChange={(e) =>
                              imageUploadHandler(e, setImageUrl5)
                            }
                            type="file"
                            id="file"
                            accept="image/*"
                            placeholder="Upload Images"
                            className="file-input file-input-primary w-full hidden"
                            disabled={imageUrl4 ? false : true}
                          />
                          <div className="mt-1">
                            <label htmlFor="file">
                              {!lang ? (
                                <div
                                  className={
                                    imageUrl4
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl4
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small>Upload Photo</small>
                                </div>
                              ) : (
                                <div
                                  className={
                                    imageUrl4
                                      ? "rounded border border-warning p-2 cursor-pointer"
                                      : "rounded border border-gray-400 p-2"
                                  }
                                >
                                  <BsImage
                                    className={
                                      imageUrl4
                                        ? "h-6 w-6 ml-7 md:ml-12 lg:ml-7"
                                        : "h-6 w-6 ml-7 md:ml-12 lg:ml-7 text-gray-400"
                                    }
                                  />
                                  <small> ছবি যুক্ত করুন</small>
                                </div>
                              )}
                            </label>
                          </div>
                        </button>
                      )}
                    </>
                  )}
                </div>
                {!imageUrl1 && !loading && (
                  <>
                    {" "}
                    {!lang ? (
                      <span className="text-sm pt-4 text-red-300">
                        You must upload at least one image.
                      </span>
                    ) : (
                      <span className="text-xs pt-4 text-red-300">
                        আপনাকে অন্তত একটি ছবি আপলোড করতে হবে।
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
            <hr className="my-10" />

            {/* contact part  */}
            <div className="lg:w-1/2 mx-auto">
              {!lang ? (
                <h1 className="text-xl font-bold">Contact details</h1>
              ) : (
                <h1 className="text-xl font-bold">
                  {" "}
                  আপনার সম্মন্ধে বিস্তারিতঃ{" "}
                </h1>
              )}
              <div className="mt-10">
                {!lang ? <h5>Name:</h5> : <h5>নামঃ</h5>}
                <input
                  {...register("name")}
                  type="text"
                  className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full mt-2"
                  placeholder="Enter your full name."
                  defaultValue={name}
                />
              </div>
              <div className="mt-10">
                <div className="flex gap-6">
                  {!lang ? <h5>Email</h5> : <h5>ইমেইলঃ </h5>}

                  {checkAuthentication && (
                    <>
                      {!lang ? (
                        <small className="text-blue-400 pt-1">
                          You can't change your email. To change please contact
                          the admin.
                        </small>
                      ) : (
                        <small className="text-blue-400 pt-1">
                          আপনি ইমেইল পরিবর্তন করতে পারবেন না। পরিবর্তন করতে
                          এডমিনের সাথে যোগাযোগ করুন।
                        </small>
                      )}
                    </>
                  )}
                </div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full mt-2"
                  defaultValue={checkAuthentication}
                  placeholder="Enter your email."
                  readOnly={checkAuthentication ? true : false}
                />
                {errors.email && (
                  <span className="text-red-300 pt-5">
                    {!lang
                      ? " This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}
                  </span>
                )}
              </div>
              <div className="mt-10 border border-warning py-7 px-5">
                {!lang ? (
                  <h5 className="mb-2">Add A Mobile Number:</h5>
                ) : (
                  <h5 className="mb-2">একটি মোবাইল নাম্বার দিনঃ</h5>
                )}
                <div className="mb-3">
                  {!lang && !isValidNum && (
                    <p className="text-red-300">
                      {" "}
                      19 | 18 | 17 | 16 | 15 | 14 | 13 | use anyone to start.{" "}
                    </p>
                  )}
                  {lang && !isValidNum && (
                    <p className="text-red-300 text-sm">
                      19 | 18 | 17 | 16 | 15 | 14 | 13 । যে কোন একটি দিয়ে শুরু
                      করুন।{" "}
                    </p>
                  )}
                  <div className={!isValidNum ? "hidden" : "flex"}>
                    {!lang ? (
                      <>
                        {!isValid && (
                          <p className="text-red-300">
                            Please enter a valid full mobile number.
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        {!isValid && (
                          <p className="text-red-300">
                            {" "}
                            সঠিক পূর্ণ মোবাইল নাম্বার দিন।{" "}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="relative">
                  {getNumber ? (
                    <>
                      {!minusNumber && (
                        <input
                          {...register("phone")}
                          type="text"
                          placeholder="Add A Mobile Number"
                          className="border border-warning p-2 focus:border-warning focus:outline-none focus:ring-1 focus:ring-warning rounded  w-full mt-5"
                          // onChange={(e: any) => checkNumber(e.target.value)}
                          defaultValue={minusNumber ? "" : getNumber}
                          readOnly
                        />
                      )}

                      {!minusNumber && (
                        <button
                          onClick={handleMinus}
                          className="absolute top-5 right-0 bg-red-400 px-1 text-primary rounded"
                        >
                          {" "}
                          <AiOutlineMinus />
                        </button>
                      )}
                      {!lang ? (
                        <button
                          disabled={anotherNumber ? true : false}
                          onClick={handleAnotherNumber}
                          className={
                            anotherNumber
                              ? "text-gray-400 my-2"
                              : "my-2 text-warning"
                          }
                        >
                          <span
                            className={
                              anotherNumber
                                ? "text-gray-400"
                                : "bg-warning text-primary rounded-full px-1"
                            }
                          >
                            +
                          </span>{" "}
                          Use Another mobile number
                        </button>
                      ) : (
                        <button
                          disabled={anotherNumber ? true : false}
                          onClick={handleAnotherNumber}
                          className={
                            anotherNumber
                              ? "text-gray-400 my-2"
                              : "my-2 text-warning"
                          }
                        >
                          <span
                            className={
                              anotherNumber
                                ? "text-gray-400"
                                : "bg-warning text-primary rounded-full px-1"
                            }
                          >
                            +
                          </span>{" "}
                          অন্য নাম্বার যোগ করুন{" "}
                        </button>
                      )}
                      {anotherNumber && (
                        <PhoneInput
                          value={countryNumber}
                          onChange={handleCountryNumberValue}
                          countryCodeEditable={false}
                          placeholder="Enter full number***"
                          inputStyle={{
                            width: "100%",
                            paddingTop: "7px",
                            paddingBottom: "7px",
                          }}
                          country="bd"
                          onlyCountries={["bd"]}
                          inputProps={{
                            name: "phone",
                            required: true,
                            autoFocus: false,
                          }}
                          isValid={(value: any, country: any) => {
                            if (value.match(/12345/)) {
                              return (
                                "Invalid value: " + value + ", " + country.name
                              );
                            } else if (value.match(/1234/)) {
                              return false;
                            } else {
                              return true;
                            }
                          }}
                        />
                      )}
                      {anotherNumber && (
                        <div className="flex justify-end mt-2">
                          {!lang ? (
                            <button onClick={handleCancel} className=" ">
                              Cancel
                            </button>
                          ) : (
                            <button onClick={handleCancel}>বাতিল করুন</button>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    //   <input
                    //   {...register("phone",{ required: true })}
                    //   type="text"
                    //   placeholder="Add A Mobile Number"
                    //   className="input input-bordered w-full mt-5 bg-primary"
                    //   onChange={(e: any) => checkNumber(e.target.value)}

                    // />

                    <PhoneInput
                      value={countryNumber}
                      onChange={handleCountryNumberValue}
                      countryCodeEditable={false}
                      placeholder="Enter full number***"
                      inputStyle={{
                        width: "100%",
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        // backgroundColor: "#f1feff",
                      }}
                      country="bd"
                      onlyCountries={["bd"]}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                      }}
                      isValid={(value: any, country: any) => {
                        if (value.match(/12345/)) {
                          return (
                            "Invalid value: " + value + ", " + country.name
                          );
                        } else if (value.match(/1234/)) {
                          return false;
                        } else {
                          return true;
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-2 lg:w-1/2 mx-auto mt-10"> */}
          {/* <input
              {...register("terms")}
              type="checkbox"
              className="text-gray-700 h-4 w-4"
            /> */}
          {/* <h1 className="-mt-1">
              I have read and accept the Terms and Conditions
            </h1> */}
          {/* </div> */}

          <div className="text-center mt-5">
            {error && (
              <div className=" ">
                <h1 className="my-1 text-warning">{error}</h1>
                {!lang ? (
                  <h1 className="text-red-300 mb-5">
                    Please fill all the fields carefully. Or back to{" "}
                    <Link className="underline text-warning" href={"/"}>
                      Home
                    </Link>
                  </h1>
                ) : (
                  <h1 className="text-red-300 text-sm mb-5">
                    {" "}
                    অনুগ্রহ করে সথিকভাবে সব গুলো ফিল্ড পূরণ পুরন করুন। অথবা{" "}
                    <Link className="underline text-warning" href={"/"}>
                      হোম
                    </Link>{" "}
                    এ ফিরে যান।
                  </h1>
                )}
              </div>
            )}
          </div>
          <div className="lg:w-1/2 mx-auto flex justify-end">
            <Button
              onClick={handleSubmit(handlePost)}
              className={
                postLoading
                  ? "text-primary w-1/2 mb-10 mt-5 font-semibold  bg-gray-800 "
                  : "text-primary w-1/2 mb-10 mt-5 font-semibold  bg-warning"
              }
              disabled={
                modalValue?.eng && isValid && isValidNum && !error
                  ? false
                  : true
              }
            >
              {postLoading ? (
                <> {!lang ? "Posting" : "পোস্ট হচ্ছে..."}</>
              ) : (
                <> {!lang ? " Post Now" : "পোস্ট করুন"}</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateRoute(PostDetails);
