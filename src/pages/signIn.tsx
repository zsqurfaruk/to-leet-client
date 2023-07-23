/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Card, Typography, Input } from "@material-tailwind/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Head from "next/head";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { MdCancel } from "react-icons/md";
import { RootState } from "@/redux/app/store";
import { setSignInOpen } from "@/redux/features/SignInModal/SignInModalSlice";
import { setSignUpOpen } from "@/redux/features/SignUpModal/SignUpModal";
import Home from ".";

type FormValues = {
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
};
const SignIn = () => {
  const [signInError, setSignInError] = useState("");
  const [signInErrorBan, setSignInErrorBan] = useState("");
  const [passHidden, setPassHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const [numberMethod, setNumberMethod] = useState("");
  const [emailMethod, setEmailMethod] = useState("");
  const [countryNumber, setCountryNumber] = useState();
  const [isValid, setIsValid] = useState(true);
  const [isValidNum, setIsValidNum] = useState(true);
  const router = useRouter();
  const signInOpen = useSelector((state: RootState) => state.signInModal.signInOpen);
  const dispatch = useDispatch();

  const handleSignInOpen = () => {
    dispatch(setSignInOpen(true));
  };
  const handleSignUpOpen = () => {
    dispatch(setSignUpOpen(true));
    dispatch(setSignInOpen(false));
  };

  const handleSignInClose=()=>{
    dispatch(setSignInOpen(false))
  }
  useEffect(() => {
  if(signInOpen){
    handleSignInOpen()
  }  
  else{
    router.push("/")
  }   

  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const cookieValue = Cookies.get("token");
  const tkn = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
  const handleSignIn = async (data: any) => {
    const info = {
      email: countryNumber || data?.email,
      password: data.password,
    };
    setLoading(true);
    const res = await fetch("https://zsqur.quickvara.com/api/v1/users/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${tkn}`,
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setLoading(false);
    setSignInError(result?.error?.eng);
    setSignInErrorBan(result?.error?.ban);
    const token = result?.data?.token;
    if (token) {
      Cookies.set("token", encodeURIComponent(JSON.stringify(token)), {
        expires: 5,
      });
      Cookies.set("authentication", result?.data?.user?.email, { expires: 5 });
      Cookies.set("firstName", result?.data?.user.firstName, { expires: 5 });
      Cookies.set("lastName", result?.data?.user.lastName, { expires: 5 });
      setLoading(false);
      const { query }: any = router;
      const nextPage = query.next || "/";
      router.push(nextPage);
      toast.success("Sign In Successful.");
    }
  };

  const handle = () => {
    setPassHidden(!passHidden);
  };

  const handleLoginMethodNumber = () => {
    setNumberMethod("number");
    Cookies.set("nm", "number", { expires: 3 });
    setEmailMethod("");
    Cookies.remove("em");
  };
  const handleLoginMethodEmail = () => {
    setEmailMethod("email");
    Cookies.set("em", "email", { expires: 3 });
    setNumberMethod("");
    Cookies.remove("nm");
  };

  const handleCountryNumberValue = (value: any) => {
    setCountryNumber(value);
    const phoneNumber = parsePhoneNumberFromString(value, "BD");
    const isValidNumber = phoneNumber
      ? phoneNumber.isValid() && phoneNumber.country === "BD"
      : false;
    const isFixedLength = value?.length === 13;
    const startsWithFixedNumber =
      /^88017|^88016|^88015|^88014|^88013|^88018|^88019/.test(value);
    setIsValid(isValidNumber && isFixedLength);
    setIsValidNum(startsWithFixedNumber);
  };
  const getNm = Cookies.get("nm");
  const getEm = Cookies.get("em");
  const lang = useSelector((state: any) => state.language.language);

  return (
    <>
      <Head>
        <title>QuickVara - Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Let's connect to find your rental solution with quickvara's extensive listings for rent."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, ToLet, To-Let, quickvara, Basa Vara, Vara, Rent, rent, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | real estate"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Sign In | Tolet | Basa Vara | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="QuickVara - Sign In | Tolet | Basa Vara | rent"
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Let's connect to find your rental solution with quickvara's extensive listings for rent."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, ToLet, To-Let, quickvara, Basa Vara, Vara, Rent, rent, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - Sign In | Tolet | Basa Vara | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className="flex">
        <Dialog open={signInOpen} handler={handleSignInOpen} className="bg-transparent">
          <DialogBody>
            <Card className="w-full lg:w-11/12 mx-auto px-1 lg:px-5 border-4 border-neutral bg-neutral shadow-none md:shadow-2xl">
              <div className="flex justify-between">
                <div>
                  {!lang ? (
                    <Typography className="mt-2 text-warning" variant="h4">
                      Sign In
                    </Typography>
                  ) : (
                    <Typography className="mt-2 text-warning" variant="h4">
                      সাইন ইন
                    </Typography>
                  )}
                </div>
                <Link href={"/"} passHref>
                  <button
                    onClick={handleSignInClose}
                    className="mr-1 flex justify-end mt-4"
                  >
                    <MdCancel className="text-warning h-6 w-6"></MdCancel>
                  </button>
                </Link>
              </div>

              {!lang && !getEm && (
                <Typography color="gray" className="mt-1 font-normal  ">
                  Enter registered mobile number and password to signin.
                </Typography>
              )}
              {lang && !getEm && (
                <Typography color="gray" className="mt-1 font-normal   text-sm">
                  সাইন ইন করতে নিবন্ধিত মোবাইল নাম্বার এবং পাসওয়ার্ড লিখুন।
                </Typography>
              )}
              {!lang && getEm && !getNm && (
                <Typography color="gray" className="mt-1 font-normal  ">
                  Enter your registered email and password to signin.
                </Typography>
              )}
              {lang && getEm && !getNm && (
                <Typography color="gray" className="mt-1 font-normal   text-sm">
                  সাইন ইন করতে আপনার নিবন্ধিত ইমেল এবং পাসওয়ার্ড লিখুন।
                </Typography>
              )}
              {!getNm && getEm && (
                <>
                  {!lang ? (
                    <button
                      onClick={handleLoginMethodNumber}
                      className="bg-warning text-primary  py-2 font-medium rounded  mt-5"
                    >
                      Continue with Mobile Number.
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginMethodNumber}
                      className="bg-warning text-primary text-[15px] py-2 font-medium rounded  mt-5"
                    >
                      মোবাইল নাম্বার দিয়ে চালিয়ে যান।
                    </button>
                  )}
                </>
              )}

              {!getEm && (
                <>
                  {!lang ? (
                    <button
                      onClick={handleLoginMethodEmail}
                      className="bg-warning text-primary  py-2 font-medium rounded  mt-5"
                    >
                      Continue with Email.
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginMethodEmail}
                      className="bg-warning text-primary text-[15px] py-2 font-medium rounded  mt-5"
                    >
                      ইমেইল দিয়ে চালিয়ে যান।
                    </button>
                  )}
                </>
              )}
              <div className="divider">OR</div>
              <div className={getEm ? "hidden" : "flex"}>
                {!lang && !isValidNum && (
                  <p className="text-red-400">
                    {" "}
                    19 | 18 | 17 | 16 | 15 | 14 | 13 | use anyone to start.{" "}
                  </p>
                )}
                {lang && !isValidNum && (
                  <p className="text-red-400 text-sm">
                    19 | 18 | 17 | 16 | 15 | 14 | 13 । যে কোন একটি দিয়ে শুরু
                    করুন।{" "}
                  </p>
                )}
                <div className={!isValidNum ? "hidden" : "flex"}>
                  {!lang ? (
                    <>
                      {!isValid && (
                        <p className="text-red-400">
                          Please enter a valid full mobile number.
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {!isValid && (
                        <p className="text-red-400">
                          {" "}
                          সঠিক পূর্ণ মোবাইল নাম্বার দিন।{" "}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
              {!getEm && (
                <div className="mb-2 w-full -mt-6">
                  <form
                    onSubmit={handleSubmit(handleSignIn)}
                    className="-pt-5 mb-4 flex flex-col gap-5 relative"
                  >
                    {
                      <div className="pt-10">
                        <PhoneInput
                          value={countryNumber}
                          onChange={handleCountryNumberValue}
                          countryCodeEditable={false}
                          inputStyle={{
                            width: "100%",
                            paddingTop: "7px",
                            paddingBottom: "7px",
                            backgroundColor: "#f1feff",
                          }}
                          enableAreaCodes={true}
                          country="bd"
                          onlyCountries={["bd"]}
                          inputProps={{
                            name: "phone",
                            required: true,
                            autoFocus: false,
                          }}
                          isValid={(value: any, country: any) => {
                            if (value.match(/1234/)) {
                              return (
                                "Invalid value: " + value + ", " + country.name
                              );
                            } else if (value.match(/123/)) {
                              return false;
                            } else if (value.length > 13) {
                              return false;
                            } else {
                              return true;
                            }
                          }}
                        />
                      </div>
                    }
                    <Input
                      type={passHidden ? "password" : "text"}
                      label={!lang ? "Password***" : "পাসওয়ার্ড***"}
                      {...register("password", { required: true })}
                    />{" "}
                    <div
                      className="cursor-pointer absolute right-4 top-[103px]"
                      onClick={handle}
                    >
                      {passHidden ? (
                        <FaEyeSlash className="text-2xl"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-2xl"></FaEye>
                      )}
                    </div>
                    {!countryNumber && errors?.password && (
                      <span className="text-red-500 ">
                        {!lang ? (
                          "All These field is required"
                        ) : (
                          <span className="text-sm">
                            আপনাকে অবশ্যই মোবাইল নাম্বার এবং পাসওয়ার্ড দিতে
                            হবে।
                          </span>
                        )}
                      </span>
                    )}
                    <div>
                      <Link href={"/reset"}>
                        {!lang ? (
                          <span className="hover:underline">
                            Forgot password?
                          </span>
                        ) : (
                          <span className="text-sm hover:underline">
                            {" "}
                            পাসওয়ার্ড ভুলে গেছেন?
                          </span>
                        )}
                      </Link>
                    </div>
                    <div className="flex gap-2 -mt-3 mb-5">
                      {" "}
                      {!lang ? (
                        <span className="text-red-400">{signInError}</span>
                      ) : (
                        <span className="text-red-400">{signInErrorBan}</span>
                      )}
                    </div>
                    {!lang ? (
                      <button
                        className={
                          loading || !isValid || !isValidNum
                            ? "w-full bg-gray-800 py-2  rounded font-semibold text-white -mt-8"
                            : "w-full bg-warning py-2  rounded font-semibold text-primary -mt-8"
                        }
                        disabled={!isValid || !isValidNum ? true : false}
                      >
                        {loading ? "Signing..." : "Sign In"}
                      </button>
                    ) : (
                      <button
                        className={
                          loading || !isValid || !isValidNum
                            ? "w-full bg-gray-800 py-2   rounded font-semibold text-primary -mt-8"
                            : "w-full bg-warning  py-2   rounded font-semibold text-primary -mt-8"
                        }
                        disabled={!isValid || !isValidNum ? true : false}
                      >
                        {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                      </button>
                    )}
                  </form>

                  {!lang ? (
                    <Typography
                      color="gray"
                      className="mt-4 text-center font-normal"
                      onClick={handleSignUpOpen}
                    >
                      Don't have an account?{" "}
                      <Link href="/signUp" className="font-medium text-warning hover:underline">
                        Sign Up
                      </Link>
                    </Typography>
                  ) : (
                    <Typography
                      color="gray"
                      className="mt-4 text-sm text-center font-normal"
                      onClick={handleSignUpOpen}
                    >
                      আপনার কি অ্যাকাউন্ট আছে?{" "}
                      <Link href="/signUp" className="font-medium text-warning hover:underline">
                        সাইন আপ
                      </Link>
                    </Typography>
                  )}
                </div>
              )}

              {getEm && (
                <div className="mb-2 w-full mt-3">
                  <form
                    onSubmit={handleSubmit(handleSignIn)}
                    className="-pt-5 mb-4 flex flex-col gap-5 relative"
                  >
                    {getEm && (
                      <Input
                        label={!lang ? "Email***" : "ইমেইল***"}
                        {...register("email", { required: true })}
                      />
                    )}
                    <Input
                      type={passHidden ? "password" : "text"}
                      label={!lang ? "Password***" : "পাসওয়ার্ড***"}
                      {...register("password", { required: true })}
                    />{" "}
                    <div
                      className="cursor-pointer absolute right-4 top-[68px]"
                      onClick={handle}
                    >
                      {passHidden ? (
                        <FaEyeSlash className="text-2xl"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-2xl"></FaEye>
                      )}
                    </div>
                    {errors.email && errors.password && (
                      <span className="text-red-500 ">
                        {!lang
                          ? "All These field is required"
                          : "আপনাকে অবশ্যই ইমেইল এবং পাসওয়ার্ড দিতে হবে।"}{" "}
                      </span>
                    )}
                    <div>
                      <Link href={"/reset"}>
                        {!lang ? (
                          <span className="hover:underline">
                            Forgot password?
                          </span>
                        ) : (
                          <span className="text-sm hover:underline">
                            {" "}
                            পাসওয়ার্ড ভুলে গেছেন?
                          </span>
                        )}
                      </Link>
                    </div>
                    <div className="flex gap-2 -mt-3 mb-5">
                      {" "}
                      {!lang ? (
                        <span className="text-red-400">{signInError}</span>
                      ) : (
                        <span className="text-red-400">{signInErrorBan}</span>
                      )}
                    </div>
                    {!lang ? (
                      <button
                        className={
                          loading
                            ? "w-full bg-gray-800 py-2 rounded font-semibold text-white -mt-8"
                            : "w-full bg-warning  py-2 rounded font-semibold text-primary -mt-8"
                        }
                      >
                        {loading ? "Signing..." : "Sign In"}
                      </button>
                    ) : (
                      <button
                        className={
                          loading
                            ? "w-full bg-gray-800 py-2 rounded font-semibold text-primary -mt-8"
                            : "w-full bg-warning  py-2 rounded font-semibold text-primary -mt-8"
                        }
                      >
                        {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                      </button>
                    )}
                  </form>

                  {!lang ? (
                    <Typography
                      color="gray"
                      className="mt-4 text-center font-normal"
                      onClick={handleSignUpOpen}
                    >
                      Don't have an account?
                      <Link href="/signUp" className="font-medium text-warning hover:underline"> Sign Up
                      </Link>
                    </Typography>
                  ) : (
                    <Typography
                      color="gray"
                      className="mt-4 text-sm text-center font-normal"
                      onClick={handleSignUpOpen}
                    >
                      আপনার কি অ্যাকাউন্ট আছে?{" "}
                      <Link href="/signUp" className="font-medium text-warning hover:underline">
                        সাইন আপ
                      </Link>
                    </Typography>
                  )}
                </div>
              )}
            </Card>
          </DialogBody>
        </Dialog>
       <div className="pb-10">
       <Home></Home>
       </div>
      </section>
    </>
  );
};

export default SignIn;
