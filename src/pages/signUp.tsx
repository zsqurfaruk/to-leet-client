/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useState, useContext } from "react";
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
import { APIContext } from "@/Context/ApiContext/ApiContext";

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
  const { loading, setLoading }: any = useContext(APIContext);

  const handleSignUp: SubmitHandler<FormValues> = async (data: any) => {
    const info = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      agree: agree,
      ToLeet: "to-leet",
    };
    setLoading(true);
    const res = await fetch("http://localhost:5000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setLoading(false);
    if (result.message === "error") {
      return setError("emailError");
    } else {
      toast.success("Sign Up Successful.");
      router.push(`/signIn`);
    }
    // setSignUpUserInfo(result);
  };
  // const handleGoogleSignUp = () => {
  //   providerGoogleLogIn(provider)
  //     .then((result: any) => {
  //       const user = result.user;
  //       const category = "buyer";
  //       // saveUser(user?.displayName, user?.email,category);
  //       // navigate(from, { replace: true });
  //     })
  //     .catch((error: any) => setSignUpError(error.message));
  // };
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

  const lang = Cookies.get("lan");
  return (
    <>
      <Head>
        <title>To Leet - Sign up</title>
      </Head>
      <section className="lg:w-10/12 lg:mx-auto grid lg:grid-cols-2 gap-20 my-10">
        <div className="hidden lg:flex">
          <Lottie
            className="scale-110 opacity-50"
            animationData={lottiImage}
            loop={true}
          ></Lottie>
        </div>
        <Card className="w-10/12 mx-auto border-4 border-neutral bg-neutral shadow-2xl">
          {!lang ? (
            <Typography className="px-4 mt-2 text-warning" variant="h4">
              Sign Up
            </Typography>
          ) : (
            <Typography className="px-4 mt-2 text-warning" variant="h4">
              সাইন আপ
            </Typography>
          )}
          {!lang ? (
            <Typography className="mt-1 font-normal px-4 text-gray-700">
              Enter your details to register.
            </Typography>
          ) : (
            <Typography className="mt-1 font-normal px-4 text-gray-700">
              নিবন্ধন করতে আপনার বিবরণ লিখুন.
            </Typography>
          )}
          <div className="mt-8 mb-2 w-full px-4">
            <form
              onSubmit={handleSubmit(handleSignUp)}
              className="mb-4 flex flex-col gap-6 relative"
            >
              <div className="lg:flex-row lg:gap-2 flex flex-col gap-6">
                <Input
                  label={!lang ? "First Name*" : "নামের প্রথম অংশ*"}
                  {...register("firstName", { required: true })}
                />
                <Input
                  label={!lang ? "Last Name*" : "নামের শেষের অংশ*"}
                  {...register("lastName", { required: true })}
                />
              </div>
              <Input
                label={!lang ? "Email*" : "ইমেইল*"}
                {...register("email", { required: true })}
              />
              <Input
                type={passHidden ? "password" : "text"}
                label={!lang ? "Password*" : "পাসওয়ার্ড*"}
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
                label={!lang ? "Confirm Password*" : "পাসওয়ার্ড নিশ্চিত হন*"}
                {...register("confirmPassword", { required: true })}
                name="confirmPassword"
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
                <small className="text-warning text-sm">
                  ( The password must contain one uppercase, three lowercase
                  letter, one number and one special symbol.)
                </small>
              ) : (
                <small className="text-warning">
                  ( পাসওয়ার্ডে একটি বড় হাতের অক্ষর, তিনটি ছোট হাতের অক্ষর,
                  একটি নাম্বার এবং একটি বিশেষ চিহ্ন থাকতে হবে। )
                </small>
              )}
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
              <p className="text-red-500">
                {error &&
                  !lang &&
                  "Something went wrong, please try a unique email or check password rules."}
              </p>
              <p className="text-red-500 text-sm -mt-5">
                {error &&
                  lang &&
                  "কিছু ভুল হয়েছে, অনুগ্রহ করে একটি নতুন ইমেল দিয়ে চেষ্টা করুন বা পাসওয়ার্ডের নিয়মগুলি পরীক্ষা করুন৷"}
              </p>
              {!lang ? (
                <button
                  disabled={agree ? false : true}
                  className={
                    agree
                      ? "mt- w-full bg-warning bg-opacity-70 py-2 rounded font-semibold text-primary"
                      : "mt- w-full bg-gray-300 py-2 rounded font-semibold text-gray-800"
                  }
                >
                  {" "}
                  {loading ? "Creating..." : "Sign Up"}{" "}
                </button>
              ) : (
                <button
                  disabled={agree ? false : true}
                  className={
                    agree
                      ? "mt- w-full bg-warning bg-opacity-70 py-2 rounded font-semibold text-primary"
                      : "mt- w-full bg-gray-300 py-2 rounded font-semibold text-gray-800"
                  }
                >
                  {loading ? "অপেক্ষা করুন..." : "সাইন আপ"}
                </button>
              )}
            </form>

            {!lang ? (
              <Typography className="mt-4 text-center font-normal text-gray-700">
                Already have an account?{" "}
                <Link
                  href="/signIn"
                  className="font-medium text-warning transition-colors hover:underline"
                >
                  Sign In
                </Link>
              </Typography>
            ) : (
              <Typography className="mt-4 text-center font-normal text-gray-700">
                আপনার কি অ্যাকাউন্ট আছে?{" "}
                <Link
                  href="/signIn"
                  className="font-medium text-warning transition-colors hover:text-blue-700"
                >
                  সাইন ইন
                </Link>
              </Typography>
            )}
          </div>
        </Card>
      </section>
    </>
  );
}

export default SignUp;
