/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { Card, Typography, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";
import lottiImage from "../image/lf20_s50p1rff.json";
import Lottie from "lottie-react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Head from "next/head";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import parsePhoneNumberFromString from "libphonenumber-js";
import { StateContext } from "@/Context/StateContext/StateContext";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Banner from "@/components/Home/Banner/Banner";
import { MdCancel } from "react-icons/md";
import { RootState } from "@/redux/app/store";
import { setSignUpOpen } from "@/redux/features/SignUpModal/SignUpModal";
import { setSignInOpen } from "@/redux/features/SignInModal/SignInModalSlice";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
  agree: boolean;
  ToLeet: string;
};
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberMethod, setNumberMethod] = useState("");
  const [emailMethod, setEmailMethod] = useState("");
  const [countryNumber, setCountryNumber] = useState();
  const [isValid, setIsValid] = useState(true);
  const [isValid2, setIsValid2] = useState(true);

  const signUpOpen = useSelector(
    (state: RootState) => state.signUpModal.signUpOpen
  );
  const dispatch = useDispatch();

  const handleSignUpOpen = () => {
    dispatch(setSignUpOpen(true));
  };
  const handleSignInOpen = () => {
    dispatch(setSignInOpen(true));
    dispatch(setSignUpOpen(false));
  };

  const handleSignUpClose = () => {
    dispatch(setSignUpOpen(false));
  };

  useEffect(() => {
    if (signUpOpen) {
      handleSignUpOpen();
    } else {
      router.push("/");
    }
  }, []);

  const handleSignUp: SubmitHandler<FormValues> = async (data: any) => {
    const info = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: countryNumber || data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      agree: agree,
      ToLeet: "quickvara",
    };
    setLoading(true);
    const res = await fetch("https://zsqur.quickvara.com/api/v1/users/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setLoading(false);
    if (result.message === "Internal server error") {
      return setError("emailError");
    } else {
      router.push(`/signIn`);
      toast.success("Sign Up Successful.");
    }
    // setSignUpUserInfo(result);
  };

  const [passHidden, setPassHidden] = useState(true);
  const [coPassHidden, setCoPassHidden] = useState(true);
  const handlePass = () => {
    setPassHidden(!passHidden);
  };
  const handleCoPass = () => {
    setCoPassHidden(!coPassHidden);
  };

  const handleAgree = () => {
    setAgree(!agree);
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
    const isFixedLength = value.length === 13;
    const startsWithFixedNumber =
      /^88017|^88016|^88015|^88014|^88013|^88018|^88019/.test(value);
    setIsValid(isValidNumber && isFixedLength);
    setIsValid2(startsWithFixedNumber);
  };
  const getNm = Cookies.get("nm");
  const getEm = Cookies.get("em");

  const lang = useSelector((state: any) => state.language.language);
  return (
    <>
      <Head>
        <title>QuickVara - Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, to let, to-let, quickvara, to Basa Vara, Vara, Rent, rent,  house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent | to-let | tolet | real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="quickvara - Sign Up | Tolet | Basa Vara | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="quickvara - Sign Up |Tolet | Basa Vara | rent"
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for rent. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To-Let, To Let, tolet, ToLet, to let, to-let, quickvara, to Basa Vara, Vara, Rent, rent,  house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  | real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="quickvara - Sign Up | Tolet | Basa Vara | rent"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
      </Head>
      <section className="flex">
        <Dialog
          open={signUpOpen}
          handler={handleSignUpOpen}
          className="bg-transparent"
        >
          <DialogBody>
            <Card className="w-full lg:w-11/12 mx-auto border-4 px-7 lg:px-5 border-neutral bg-neutral shadow-none md:shadow-2xl">
              <div className="flex justify-between">
                <div>
                  {!lang ? (
                    <Typography className="mt-2 text-warning" variant="h4">
                      Sign Up
                    </Typography>
                  ) : (
                    <Typography className="mt-2 text-warning" variant="h4">
                      সাইন আপ
                    </Typography>
                  )}
                </div>
                <Link href={"/"} passHref>
                  <button onClick={handleSignUpClose} className="mr-1 mt-5">
                    <MdCancel className="text-warning h-6 w-6"></MdCancel>
                  </button>
                </Link>
              </div>
              {!lang && (
                <Typography color="gray" className="mt-1 font-normal  ">
                  Enter your details to registration.
                </Typography>
              )}
              {lang && (
                <Typography color="gray" className="mt-1 font-normal   text-sm">
                  নিবন্ধিত করতে আপনার বিবরণ লিখুন।
                </Typography>
              )}

              {!getNm && getEm && (
                <>
                  {!lang ? (
                    <button
                      onClick={handleLoginMethodNumber}
                      className="bg-warning text-primary  py-2 font-medium rounded mt-5"
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
                      className="bg-warning text-primary py-2 font-medium rounded mt-5"
                    >
                      Continue with Email.
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginMethodEmail}
                      className="bg-warning text-primary text-[15px] py-2 font-medium rounded mt-5"
                    >
                      ইমেইল দিয়ে চালিয়ে যান।
                    </button>
                  )}
                </>
              )}
              <div className="divider">OR</div>
              <div className={getEm ? "hidden" : "flex"}>
                {!lang && !isValid2 && (
                  <p className="text-red-400">
                    {" "}
                    19 | 18 | 17 | 16 | 15 | 14 | 13 | use anyone to start.{" "}
                  </p>
                )}
                {lang && !isValid2 && (
                  <p className="text-red-400 text-sm">
                    19 | 18 | 17 | 16 | 15 | 14 | 13 । যে কোন একটি দিয়ে শুরু
                    করুন।{" "}
                  </p>
                )}
                <div className={!isValid2 ? "hidden" : "flex"}>
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
              {getEm && (
                <div className="mt-3 mb-2 w-full ">
                  <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="mb-4 flex flex-col gap-6 relative"
                  >
                    <div className="lg:flex-row lg:gap-2 flex flex-col gap-6">
                      <Input
                        label={!lang ? "First Name***" : "নামের প্রথম অংশ***"}
                        {...register("firstName", { required: true })}
                      />
                      <Input
                        label={!lang ? "Last Name***" : "নামের শেষের অংশ***"}
                        {...register("lastName", { required: true })}
                      />
                    </div>
                    <Input
                      label={!lang ? "Email***" : "ইমেইল***"}
                      {...register("email", { required: true })}
                    />
                    <Input
                      type={passHidden ? "password" : "text"}
                      label={!lang ? "Password***" : "পাসওয়ার্ড***"}
                      {...register("password", { required: true })}
                    />
                    <div
                      className="cursor-pointer absolute right-4 mt-[200px] lg:-top-[64px]"
                      onClick={handlePass}
                    >
                      {passHidden ? (
                        <FaEyeSlash className="text-2xl"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-2xl"></FaEye>
                      )}
                    </div>

                    <Input
                      type={coPassHidden ? "password" : "text"}
                      label={
                        !lang
                          ? "Confirm Password***"
                          : "পাসওয়ার্ড নিশ্চিত হন***"
                      }
                      {...register("confirmPassword", { required: true })}
                    />
                    <div
                      className="cursor-pointer absolute right-4 top-[264px] lg:top-[200px]"
                      onClick={handleCoPass}
                    >
                      {coPassHidden ? (
                        <FaEyeSlash className="text-2xl"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-2xl"></FaEye>
                      )}
                    </div>
                    {!lang ? (
                      <div onClick={handleAgree} className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-warning border-warning h-[18px] w-[19px]"
                        />
                        <Typography
                          variant="small"
                          className="flex items-center font-normal text-gray-700"
                        >
                          I agree the
                          <a
                            href="#"
                            className="font-medium transition-colors hover:text-warning"
                          >
                            &nbsp;Terms and Conditions
                          </a>
                        </Typography>
                      </div>
                    ) : (
                      <div onClick={handleAgree} className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-warning border-warning h-[18px] w-[19px]"
                        />
                        <Typography
                          variant="small"
                          className="flex items-center font-normal text-gray-700"
                        >
                          আমি শর্তাবলী পড়েছি এবং সম্মতি দিচ্ছি।
                        </Typography>
                      </div>
                    )}
                    {errors.email && errors.password && (
                      <span className="text-red-500 ">
                        {!lang
                          ? "All These field is required"
                          : "আপনাকে অবশ্যই সকল তথ্য দিতে হবে।"}{" "}
                      </span>
                    )}
                    <span className="text-red-500 -mt-3">
                      {error &&
                        !lang &&
                        "Something went wrong, please try a unique email or check password."}
                    </span>
                    <span className="text-red-500 text-sm  -mt-7 mb-5">
                      {error &&
                        lang &&
                        "কিছু ভুল হয়েছে, অনুগ্রহ করে একটি নতুন ইমেল দিয়ে চেষ্টা করুন বা পাসওয়ার্ড নিশ্চিত করুন৷"}
                    </span>
                    {!lang ? (
                      <button
                        disabled={agree ? false : true}
                        className={
                          agree
                            ? "mt- w-full bg-warning py-2 rounded font-semibold text-primary -mt-8"
                            : "mt- w-full bg-gray-300 py-2 rounded font-semibold text-gray-800 -mt-8"
                        }
                      >
                        {loading ? "Creating..." : "Sign Up"}
                      </button>
                    ) : (
                      <button
                        disabled={agree ? false : true}
                        className={
                          agree
                            ? "mt- w-full bg-warning py-2 rounded font-semibold text-primary -mt-8"
                            : "mt- w-full bg-gray-300 py-2 rounded font-semibold text-gray-800 -mt-8"
                        }
                      >
                        {loading ? "অপেক্ষা করুন..." : "সাইন আপ"}
                      </button>
                    )}
                  </form>

                  {!lang ? (
                    <Typography
                      onClick={handleSignInOpen}
                      className="mt-4 text-center font-normal text-gray-700"
                    >
                      Already have an account?{" "}
                      <Link
                        href="/signIn"
                        className="font-medium text-warning transition-colors hover:underline"
                      >
                        Sign In
                      </Link>
                    </Typography>
                  ) : (
                    <Typography
                      onClick={handleSignInOpen}
                      className="mt-4 text-center font-normal text-gray-700"
                    >
                      আপনার কি অ্যাকাউন্ট আছে?{" "}
                      <Link
                        href="/signIn"
                        className="font-medium text-warning hover:underline"
                      >
                        সাইন ইন
                      </Link>
                    </Typography>
                  )}
                </div>
              )}
              {!getEm && (
                <div className="mt-3 mb-2 w-full">
                  <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="mb-4 flex flex-col gap-6 relative"
                  >
                    <div className="lg:flex-row lg:gap-2 flex flex-col gap-6">
                      <Input
                        label={!lang ? "First Name***" : "নামের প্রথম অংশ***"}
                        {...register("firstName", { required: true })}
                      />
                      <Input
                        label={!lang ? "Last Name***" : "নামের শেষের অংশ***"}
                        {...register("lastName", { required: true })}
                      />
                    </div>
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

                    <Input
                      type={passHidden ? "password" : "text"}
                      label={!lang ? "Password***" : "পাসওয়ার্ড***"}
                      {...register("password", { required: true })}
                    />
                    <div
                      className="cursor-pointer absolute right-4 mt-[195px] lg:-top-[68px]"
                      onClick={handlePass}
                    >
                      {passHidden ? (
                        <FaEyeSlash className="text-2xl"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-2xl"></FaEye>
                      )}
                    </div>

                    <Input
                      type={coPassHidden ? "password" : "text"}
                      label={
                        !lang
                          ? "Confirm Password***"
                          : "পাসওয়ার্ড নিশ্চিত হন***"
                      }
                      {...register("confirmPassword", { required: true })}
                    />
                    <div
                      className="cursor-pointer absolute right-4 top-[260px] lg:top-[195px]"
                      onClick={handleCoPass}
                    >
                      {coPassHidden ? (
                        <FaEyeSlash className="text-2xl"></FaEyeSlash>
                      ) : (
                        <FaEye className="text-2xl"></FaEye>
                      )}
                    </div>
                    {!lang ? (
                      <div onClick={handleAgree} className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-warning border-warning h-[18px] w-[19px]"
                        />
                        <Typography
                          variant="small"
                          className="flex items-center font-normal text-gray-700"
                        >
                          I agree the
                          <a
                            href="#"
                            className="font-medium transition-colors hover:text-warning"
                          >
                            &nbsp;Terms and Conditions
                          </a>
                        </Typography>
                      </div>
                    ) : (
                      <div onClick={handleAgree} className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-warning border-warning h-[18px] w-[19px]"
                        />
                        <Typography
                          variant="small"
                          className="flex items-center font-normal text-gray-700"
                        >
                          আমি শর্তাবলী পড়েছি এবং সম্মতি দিচ্ছি।
                        </Typography>
                      </div>
                    )}
                    {!countryNumber && errors.password && (
                      <span className="text-red-500 ">
                        {!lang
                          ? "All These field is required"
                          : "আপনাকে অবশ্যই সকল তথ্য দিতে হবে।"}{" "}
                      </span>
                    )}
                    <span className="text-red-500 -mt-3">
                      {error &&
                        !lang &&
                        "Something went wrong, please try a unique mobile number or check password."}
                    </span>
                    <span className="text-red-500 text-sm  -mt-4 mb-5">
                      {error &&
                        lang &&
                        "কিছু ভুল হয়েছে, অনুগ্রহ করে একটি নতুন মোবাইল নাম্বার দিয়ে চেষ্টা করুন বা পাসওয়ার্ড নিশ্চিত করুন৷"}
                    </span>
                    {!lang ? (
                      <button
                        disabled={agree && isValid && isValid2 ? false : true}
                        className={
                          agree && !loading && isValid && isValid2
                            ? " w-full bg-warning py-2 rounded font-semibold text-primary -mt-10"
                            : " w-full bg-gray-300 py-2 rounded font-semibold text-gray-800 -mt-10"
                        }
                      >
                        {loading ? "Creating..." : "Sign Up"}
                      </button>
                    ) : (
                      <button
                        disabled={agree && isValid && isValid2 ? false : true}
                        className={
                          agree && !loading && isValid && isValid2
                            ? "w-full bg-warning py-2 rounded font-semibold text-primary -mt-10"
                            : " w-full bg-gray-300 py-2 rounded font-semibold text-gray-800 -mt-10"
                        }
                      >
                        {loading ? "অপেক্ষা করুন..." : "সাইন আপ"}
                      </button>
                    )}
                  </form>

                  {!lang ? (
                    <Typography
                      onClick={handleSignInOpen}
                      className="mt-4 text-center font-normal text-gray-700"
                    >
                      Already have an account?{" "}
                      <Link
                        href="/signIn"
                        className="font-medium text-warning transition-colors hover:underline"
                      >
                        Sign In
                      </Link>
                    </Typography>
                  ) : (
                    <Typography
                      onClick={handleSignInOpen}
                      className="mt-4 text-center font-normal text-gray-700"
                    >
                      আপনার কি অ্যাকাউন্ট আছে?{" "}
                      <Link
                        href="/signIn"
                        className="font-medium text-warning hover:underline"
                      >
                        সাইন ইন
                      </Link>
                    </Typography>
                  )}
                </div>
              )}
            </Card>
          </DialogBody>
        </Dialog>
        <Banner></Banner>
      </section>
    </>
  );
}

export default SignUp;
