/* eslint-disable react/no-unescaped-entities */
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Card, Typography, Input, Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";
import lottiImage from "../image/66268-signinanimation (1).json";
import Lottie from "lottie-react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Head from "next/head";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
  agree:boolean
};
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  // const provider = new GoogleAuthProvider();
  const [agree, setAgree] = useState(false);
  const { createUserByEmail, providerGoogleLogIn, setSignUpUserInfo }: any =
    useContext(AuthContext);

  // const handleSignUp = (event: any) => {
  //   event.preventDefault();
  //   // setSignUpError("");
  //   createUserByEmail(event.target.email.value, event.target.password.value)
  //     .then((result: any) => {
  //       const user = result.user;
  //     })
  //     .catch((error: any) => {
  //       // setSignUpError(error.message)
  //       setSignUpError(error.message);
  //     });
  // };

  const handleSignUp: SubmitHandler<FormValues> = async (data: any) => {
    const info = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      agree:agree
    };
    const res = await fetch("http://localhost:5000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setSignUpUserInfo(result);
    router.push(`/signIn`);
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

  const handleAgree=()=>{
    setAgree(!agree)
  }

  const lang = localStorage.getItem("lan")
  return (
   <>
    <Head>
    <title>To-Leet - Sign up</title>
  </Head>
    <section className="lg:w-10/12 lg:mx-auto grid lg:grid-cols-2 gap-20 my-10">
      <div className="hidden lg:flex">
        <Lottie
          className="scale-110"
          animationData={lottiImage}
          loop={true}
        ></Lottie>
      </div>
      <Card className="w-10/12 mx-auto" color="transparent">
       {
        lang ?  <Typography className="px-4 mt-2" variant="h4" color="blue-gray">
        Sign Up
      </Typography>:  <Typography className="px-4 mt-2" variant="h4" color="blue-gray">
        সাইন আপ
        </Typography>
       }
       {
        lang ?  <Typography color="gray" className="mt-1 font-normal px-4">
        Enter your details to register.
      </Typography>:  <Typography color="gray" className="mt-1 font-normal px-4">
      নিবন্ধন করতে আপনার বিবরণ লিখুন.
        </Typography>
       }
        <div className="mt-8 mb-2 w-full px-4">
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="mb-4 flex flex-col gap-6 relative"
          >
            <div className="lg:flex-row lg:gap-2 flex flex-col gap-6">
              <Input label={lang ? "First Name*":"নামের প্রথম অংশ*"} {...register("firstName",{ required: true })} />
              <Input label={lang ? "Last Name*": "নামের শেষের অংশ*"} {...register("lastName",{ required: true })} />
            </div>
            <Input label={lang ? "Email*":"ইমেইল*"} {...register("email",{ required: true })} />
            <Input
              type={passHidden ? "password" : "text"}
              label={lang ? "Password*":"পাসওয়ার্ড*"}
              {...register("password",{ required: true })}
            />
            <div
              className="cursor-pointer absolute right-4 top-[136px]"
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
              label={lang ? "Confirm Password*":"পাসওয়ার্ড নিশ্চিত হন*"}
              {...register("confirmPassword",{ required: true })}
              name="confirmPassword"
            />
            <div
              className="cursor-pointer absolute right-4 top-[200px]"
              onClick={handleCoPass}
            >
              {coPassHidden ? (
                <FaEyeSlash className="text-2xl"></FaEyeSlash>
              ) : (
                <FaEye className="text-2xl"></FaEye>
              )}
            </div>
           {
            lang ?  <div onClick={handleAgree} className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
            />
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          </div>:  <div onClick={handleAgree} className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              />
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
               
               আমি শর্তাবলী পড়েছি এবং সম্মতি দিচ্ছি। 
              </Typography>
            </div>
           }
         {errors.email && errors.password && (
            <span className="text-red-500 ">{lang ? "All These field is required" :"আপনাকে অবশ্যই সকল তথ্য দিতে হবে।"}  </span>
          )}
           {
            lang ?  <button disabled= { agree ? false : true} className={agree ? "mt- w-full bg-gradient-to-r from-success via-accent to-success py-2 rounded-lg font-semibold text-gray-800" : "mt- w-full bg-gray-300 py-2 rounded-lg font-semibold text-gray-800"}>Sign Up</button> :  <button disabled= { agree ? false : true} className={agree ? "mt- w-full bg-gradient-to-r from-success via-accent to-success py-2 rounded-lg font-semibold text-gray-800" : "mt- w-full bg-gray-300 py-2 rounded-lg font-semibold text-gray-800"}>সাইন আপ</button>
           }
          </form>

         {
          lang ?  <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>:  <Typography color="gray" className="mt-4 text-center font-normal">
            আপনার কি অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signIn"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              সাইন ইন
            </Link>
          </Typography>
         }
        </div>
      </Card>
    </section></>
  );
}

export default SignUp;
