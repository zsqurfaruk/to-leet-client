import { Button, Input } from "@material-tailwind/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

type FormValues = {
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
};
const Reset = () => {
  const [passHidden, setPassHidden] = useState(true);
  const [coPassHidden, setCoPassHidden] = useState(true);
  const [getEmail, setGetEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageBan, setErrorMessageBan] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleResetPass = async (data: any) => {
    const info = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    setLoading(true)
    const res = await fetch("https://zsqur.to-leet.com/api/v1/users/reset/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setLoading(false)
    setErrorMessage(result?.error?.eng);
    setErrorMessageBan(result?.error?.eng);
    if (result.status === "success") {
      router.push("/signIn");
      toast.success("Password reset Successful.")
    }
  };

  const handlePass = () => {
    setPassHidden(!passHidden);
  };
  const handleCoPass = () => {
    setCoPassHidden(!coPassHidden);
  };

  const lang = Cookies.get("lan");
  return (
    <>
      <Head>
        <title>To Leet - Reset Password</title>
      </Head>
      <div className="md:w-10/12 lg:w-4/12 mx-auto my-20 shadow-2xl p-10 rounded">
       {
        !lang ?  <h1 className="mb-1 text-xl text-warning ">Enter your registered email.</h1> :  <h1 className="mb-1 text-xl text-warning "> আপনার নিবন্ধন করা ইমেইল দিন।</h1> 
       }
        <form
          onSubmit={handleSubmit(handleResetPass)}
          className="mb-4 flex flex-col gap-6 relative"
        >
          <Input
            label={!lang ? "Email*" : "ইমেইল*"}
            {...register("email", { required: true })}
            onBlur={(e: any) => setGetEmail(e.target.value)}
          />
          
          {/* )} */}
          {getEmail && (
            <>
              <Input
                type={passHidden ? "password" : "text"}
                label={!lang ? "Password*" : "পাসওয়ার্ড*"}
                {...register("password", { required: true })}
              />{" "}
               
              <div
                className="cursor-pointer absolute right-4 top-[72px]"
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
              {errors.confirmPassword && (
            <span className="text-red-500 ">{!lang ? "This field is required" :"আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}  </span>
          )}
              <div
                className="cursor-pointer absolute right-4 top-[135px]"
                onClick={handleCoPass}
              >
                {coPassHidden ? (
                  <FaEyeSlash className="text-2xl"></FaEyeSlash>
                ) : (
                  <FaEye className="text-2xl"></FaEye>
                )}
              </div>
            </>
          )}
          {!lang ? (
            <span className="text-red-400">{errorMessage}</span>
          ) : (
            <span className="text-red-400">{errorMessageBan}</span>
          )}
          {
            loading ?  <button className="w-full bg-gray-700 py-2 rounded font-semibold text-primary">
            {!lang ? "Working..." : "পরিবর্তন হচ্ছে..."}
          </button> :  <button className="w-full bg-warning py-2 rounded font-semibold text-primary">
            {!lang ? "Submit" : "সাবমিট"}
          </button>
          }
          
        </form>
      </div>
    </>
  );
};

export default Reset;
