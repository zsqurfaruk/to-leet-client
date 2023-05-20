import { Button, Input } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

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
    const res = await fetch("http://localhost:5000/api/v1/users/reset/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setErrorMessage(result?.error?.eng);
    setErrorMessageBan(result?.error?.eng);
    router.push("/signIn");
 
    // const token = result?.data?.token;
    // if (token) {
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("email", result?.data?.user.email);
    //   localStorage.setItem("firstName", result?.data?.user.firstName);
    //   localStorage.setItem("lastName", result?.data?.user.lastName);
    //   // setUserInfo(result?.data?.user);
    // }
  };

  const handlePass = () => {
    setPassHidden(!passHidden);
  };
  const handleCoPass = () => {
    setCoPassHidden(!coPassHidden);
  };

  const lang = localStorage.getItem("lan");
  return (
    <div className="w-4/12 mx-auto my-20 bg-white p-10 rounded-lg">
      <form
        onSubmit={handleSubmit(handleResetPass)}
        className="mb-4 flex flex-col gap-6 relative"
      >
        {/* {!getEmail  && ( */}
        <Input
          label={lang ? "Email" : "ইমেইল"}
          {...register("email")}
          onBlur={(e: any) => setGetEmail(e.target.value)}
        />
        {/* )} */}
        {getEmail && (
          <>
            <Input
              type={passHidden ? "password" : "text"}
              label={lang ? "Password" : "পাসওয়ার্ড"}
              {...register("password")}
            />{" "}
            <div
              className="cursor-pointer absolute right-4 top-[8px]"
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
              label={lang ? "Confirm Password":"পাসওয়ার্ড নিশ্চিত হন"}
              {...register("confirmPassword")}
              name="confirmPassword"
            />
            <div
              className="cursor-pointer absolute right-4 top-[72px]"
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
       {
        lang ?  <p className="text-red-400">{errorMessage}</p> :  <p className="text-red-400">{errorMessageBan}</p>
       }
        <button className="w-full bg-gradient-to-r from-success via-accent to-success py-2 rounded-lg font-semibold text-gray-800">
          {lang ? "Submit" : "সাবমিট"}
        </button>
      </form>
    </div>
  );
};

export default Reset;
