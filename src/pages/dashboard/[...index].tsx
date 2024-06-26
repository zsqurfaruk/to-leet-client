/* eslint-disable @next/next/no-img-element */
import { APIContext } from "@/Context/ApiContext/ApiContext";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import MyAds from "@/components/AccountsDetails/MyAds";
import Setting from "@/components/AccountsDetails/Setting";
import axios from "axios";
import Spinner from "@/components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPersonalPosts,
  useUserData,
} from "@/components/API/Api";
import Loader from "@/components/Loading/Loader";
 
interface PersonalPostsProps {
  email: string;
  token: string;
  setPersonalPost: React.Dispatch<React.SetStateAction<any | null>>;
  setProfileLoading: React.Dispatch<React.SetStateAction<boolean>>;
  reload: boolean;
}

const Dashboard = () => {
  const lang = useSelector((state: any) => state.language.language);
  const [profileImageLoading, setProfileImageLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [profileImageFromMongo, setProfileImageFromMongo] = useState(null);
  const {
    setPersonalPost,
    reload,
    setProfileLoading,

    setProfileImageReload,
  }: any = useContext(APIContext);
  const firstName = decryptTransform(Cookies.get("qv-fn"));
  const lastName = decryptTransform(Cookies.get("qv-ln"));
  const email = decryptTransform(Cookies.get("qv-acn"));
  const token = decryptTransform(Cookies.get("qv-tn"));
  const { data: userCounter, refetch } = useUserData();
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");

  const { data: personalPost, isLoading: profileLoading } = useQuery(
    ["personalPost", email, token, reload],
    () => fetchPersonalPosts(email, token),
    {
      enabled: !!email && !!token,
      onSuccess: (data) => {
        setPersonalPost(data);
        setProfileLoading(false);
      },
    }
  );

  let getNumber;
  let checkAuthentication;
  if (email) {
    if (!isNaN(parseInt(email))) {
      getNumber = email;
    } else if (email.includes("@") && email.includes(".")) {
      checkAuthentication = email;
    }
  }

  const handlePhoto = (event: any, setImg: any) => {
    const imageData = new FormData();
    imageData.set("key", "49a57cce0acfac6a6e93d404f46d3e5a");
    imageData.append("image", event.target.files[0]);

    setProfileImageLoading(true);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response?.data?.data?.display_url);
        setProfileImageLoading(false);
      })
      .catch(function (error) {
        if (error.AxiosError.timeOut) {
          setProfileImageLoading(false);
        }
      });
  };

  const updateImage = () => {
    const updateImage = {
      profileImage,
    };
    fetch(
      `https://zsqur.quickvara.com/api/v1/users/update/${email}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateImage),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Cookies.set("qv-up", data?.updateUser?.acknowledged);
        setProfileImage("")
        refetch();
      });
  };
  useEffect(() => {
    if (userCounter) {
      const matchedImage = userCounter.find(
        (image: any) => email === image?.email
      );

      if (matchedImage) {
        setProfileImageFromMongo(matchedImage?.profileImage);
        setProfileImageReload(true);
      }

      // Perform other conditional actions here based on your needs
    }
  }, [userCounter, email, setProfileImageFromMongo, setProfileImageReload]);
  if (profileLoading) {
    return <Loader></Loader>;
  }

  if (!personalPost) {
    return (
      <div className="py-20 text-center text-2xl font-semibold text-red-400">
        Error fetching data.
      </div>
    );
  }
  const changeButton = Cookies.get("qv-up");
 
  return (
    <div>
      <div className="lg:flex gap-10 w-full lg:w-10/12 mx-auto my-5 md:my-10">
        <div className="basis-1/5 pb-5 mb-5 bg-white px-5">
          <div>
            {profileImageFromMongo && (
              <img
                className="h-20 w-20 rounded-full mx-auto mt-3"
                src={profileImageFromMongo}
                alt=""
              />
            )}

            <div className="divider my-1 md:my-2"></div>
            <Link
              href="/dashboard/profile"
              className={
                refreshParams[2] === "profile"
                  ? "flex justify-between my-1 text-primary btn btn-warning"
                  : "flex justify-between my-1 text-gray-900"
              }
            >
              {!lang ? <span>Profile</span> : <span>প্রোফাইল</span>}
              <IoIosArrowForward className="h-5 w-5"></IoIosArrowForward>
            </Link>
            <div className="divider my-1 md:my-2"></div>

            <Link
              href="/dashboard/my-ads"
              className={
                refreshParams[2] === "my-ads"
                  ? "flex justify-between my-1 text-primary btn btn-warning"
                  : "flex justify-between my-1 text-gray-900"
              }
            >
              {!lang ? <span>My Ads</span> : <span> আমার বিজ্ঞাপন</span>}
              <IoIosArrowForward className="h-5 w-5"></IoIosArrowForward>
            </Link>

            <div className="divider my-1 md:my-2"></div>
            <Link
              href="/dashboard/setting"
              className={
                refreshParams[2] === "setting"
                  ? "flex justify-between my-1 text-primary btn btn-warning"
                  : "flex justify-between my-1 text-gray-900"
              }
            >
              {!lang ? <span>Settings</span> : <span>সেটিংস</span>}
              <IoIosArrowForward className="h-5 w-5"></IoIosArrowForward>
            </Link>
            <div className="divider my-1 md:my-2"></div>
            <h1 className=""></h1>
          </div>
         
        </div>
        <div className="basis-4/5  pb-5 mb-5 bg-white">
          <div className="md:pl-20">
            {refreshParams[2] === "profile" && (
              <div className=" md:flex">
                <div>
                  {profileImageLoading ? (
                    <div className="pt-20 md:pl-5 text-center">
                      <Spinner></Spinner>
                    </div>
                  ) : (
                    <>
                      {
                        // Map over userCounter and return JSX elements conditionally
                        profileImageFromMongo && !profileImage ? (
                          <img
                            className="h-32 w-32 md:h-40 md:w-40 mt-3 text-gray-700 mx-auto md:mx-0 rounded-full"
                            src={profileImageFromMongo}
                            alt=""
                          />
                        ) : (
                          <>
                            {profileImage ? (
                              <img
                                className="h-32 w-32 md:h-40 md:w-40 mt-3 text-gray-700 mx-auto md:mx-0 rounded-full"
                                src={profileImage}
                                alt=""
                              />
                            ) : (
                              <MdAccountCircle className="h-32 w-32 md:h-40 md:w-40 mt-3 text-gray-700 mx-auto md:mx-0"></MdAccountCircle>
                            )}
                          </>
                        )
                      }
                    </>
                  )}
                  {/* <MdAccountCircle className="h-32 w-32 md:h-40 md:w-40 mt-3 text-gray-700 mx-auto md:mx-0"></MdAccountCircle> */}
                  <div className="flex justify-center md:justify-normal">
                    {/* <button >Edit Photo</button> */}
                    {/* <input onClick={(event:any)=>handlePhoto(event)} className="md:ml-6 btn btn-warning btn-sm" type="file" name="" id="" /> */}
                    <input
                      onChange={(e: any) => handlePhoto(e, setProfileImage)}
                      type="file"
                      id="file"
                      accept="image/*"
                      placeholder="Upload Images"
                      className="file-input file-input-primary w-full   cursor-pointer hidden"
                    />
                    {profileImage ? (
                      <>
                        {!lang ? (
                          <>
                           {
                            changeButton === "true" && !profileImage ?
                            <label
                              htmlFor="file"
                              className="btn btn-warning btn-sm md:ml-6 mt-2"
                            >
                               
                                <small>  Edit Photo  </small>
                              
                              {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
                            </label>
                              : <button
                            onClick={updateImage}
                            className="btn btn-warning btn-sm md:ml-12 mt-2"
                          >
                             Save 
                          </button>
                           }
                          </>
                        ) : (
                          <>
                            {changeButton === "true" ? (
                              <label
                              htmlFor="file"
                              className="btn btn-warning btn-sm md:ml-4 mt-2"
                            >
                               
                                <small> ছবি পরিবর্তন করুন </small>
                              
                              {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
                            </label>
                               
                            ) : (
                              <button
                                onClick={updateImage}
                                className="btn btn-warning btn-sm md:ml-7 mt-2"
                              >
                                <small>সেভ করুন</small>
                              </button>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                      {
                        changeButton === "true" ? <label
                        htmlFor="file"
                        className="md:ml-4 btn btn-warning btn-sm mt-2"
                      >
                        {!lang ? (
                          <small className="px-4"> Edit Photo</small>
                        ) : (
                          <small> ছবি পরিবর্তন করুন </small>
                        )}
                        {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
                      </label> : <label
                        htmlFor="file"
                        className="md:ml-6 btn btn-warning btn-sm mt-2"
                      >
                        {!lang ? (
                          <small> Upload Photo</small>
                        ) : (
                          <small> ছবি যুক্ত করুন </small>
                        )}
                        {/* <ImFolderPlus className="h-6 w-7 p-1"/> */}
                      </label>
                      }
                      </>
                    )}
                  </div>
                </div>
                <div className="pl-10 pt-8">
                  <h2 className="">
                    {!lang ? <span>Full Name </span> : <span> পূর্ণ নাম </span>}
                    <h2 className="text-2xl py-2">
                      {firstName} {lastName}
                    </h2>
                  </h2>
                  <div>
                    {getNumber && (
                      <>
                        {!lang ? (
                          <span>Phone Number</span>
                        ) : (
                          <span> ফোন নাম্বার </span>
                        )}
                        <span className="text-2xl">
                          {" "}
                          {getNumber && (
                            <h2 className="text-2xl py-2">+{getNumber}</h2>
                          )}
                        </span>
                      </>
                    )}
                  </div>
                  <div>
                    {checkAuthentication && (
                      <>
                        {!lang ? <span> Email </span> : <span> ইমেইল </span>}
                        {checkAuthentication && (
                          <h2 className="text-2xl py-2">
                            {checkAuthentication}
                          </h2>
                        )}
                      </>
                    )}
                  </div>
                  <div>
                    {!lang ? (
                      <h2>My Total Ads</h2>
                    ) : (
                      <h2> আমার মোট বিজ্ঞাপন</h2>
                    )}
                    <h3 className="text-2xl py-2">{personalPost?.length}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          {refreshParams[2] === "my-ads" && <MyAds></MyAds>}
          {refreshParams[2] === "setting" && <Setting></Setting>}
        </div>
      </div>
    </div>
  );
};
 
export default Dashboard;
