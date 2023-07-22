import { Input} from "@material-tailwind/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import parsePhoneNumberFromString from "libphonenumber-js";
import { StateContext } from "@/Context/StateContext/StateContext";
import { useSelector } from "react-redux";

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
  const [numberMethod, setNumberMethod] = useState("");
  const [emailMethod, setEmailMethod] = useState("");
  const [countryNumber, setCountryNumber] = useState();
  const [isValid, setIsValid] = useState(true);
  const [isValidNum, setIsValidNum] = useState(true);
  const { isOpen }: any = useContext(StateContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleResetPass = async (data: any) => {
    const info = {
      email: data?.email || countryNumber,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    setLoading(true);
    const res = await fetch(
      "https://zsqur.quickvara.com/api/v1/users/reset/email",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );
    const result = await res.json();
    setLoading(false);
    setErrorMessage(result?.error?.eng);
    setErrorMessageBan(result?.error?.eng);
    if (result.status === "success") {
      router.push("/signIn");
      toast.success("Password reset Successful.");
    }
  };

  const handlePass = () => {
    setPassHidden(!passHidden);
  };
  const handleCoPass = () => {
    setCoPassHidden(!coPassHidden);
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
    const phoneNumber = parsePhoneNumberFromString(value, 'BD');
    const isValidNumber = phoneNumber ? phoneNumber.isValid() && phoneNumber.country === 'BD' : false;
    const isFixedLength = value?.length === 13;
    const startsWithFixedNumber = /^88017|^88016|^88015|^88014|^88013|^88018|^88019/.test(value);
    setIsValid(isValidNumber && isFixedLength);
    setIsValidNum(startsWithFixedNumber);
  };
  const getNm = Cookies.get("nm");
  const getEm = Cookies.get("em");
  const lang = useSelector((state:any) => state.language.language);
  return (
    <>
      <Head>
        <title>QuickVara - Reset Password</title>
      </Head>
      <div className="md:w-10/12 lg:w-4/12 mx-auto my-10 p-10 rounded shadow-none">
        <div>
          {!getNm && getEm && (
            <>
              {!lang ? (
                <button
                  onClick={handleLoginMethodNumber}
                  className="w-full bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
                >
                  Continue with Mobile Number.
                </button>
              ) : (
                <button
                  onClick={handleLoginMethodNumber}
                  className="w-full bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
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
                  className="w-full bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
                >
                  Continue with Email.
                </button>
              ) : (
                <button
                  onClick={handleLoginMethodEmail}
                  className="w-full bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
                >
                  ইমেইল দিয়ে চালিয়ে যান।
                </button>
              )}
            </>
          )}
        </div>
        <div className="divider">OR</div>
        {!lang && getEm && (
          <h1 className="mb-2 text-lg text-warning ">
            Enter your registered email.
          </h1>
        )}
        {!lang && !getEm && (
          <h1 className="mb-2 text-lg text-warning ">
            Enter your registered mobile number.
          </h1>
        )}
        {lang && getEm && (
          <h1 className="mb-2 text-lg text-warning ">
            {" "}
            আপনার নিবন্ধন করা ইমেইল দিন।
          </h1>
        )}
        {lang && !getEm && (
          <h1 className="mb-2 text-lg text-warning ">
            {" "}
            আপনার নিবন্ধন করা মোবাইল নাম্বার দিন।
          </h1>
        )}
  <div className={getEm ? "hidden" : "flex mb-3"}>
         {
            !lang && !isValidNum && <p className="text-red-400"> 19 | 18 | 17 | 16 | 15 | 14 | 13 | use anyone to start. </p>
          }
          {
            lang && !isValidNum && <p className="text-red-400 text-sm">19 | 18 | 17 | 16 | 15 | 14 | 13 । যে কোন একটি দিয়ে শুরু করুন। </p>
          }
           <div className={!isValidNum ? "hidden" : "flex"}>
         {
            !lang ? <>{!isValid && <p className="text-red-400">Please enter a valid full mobile number.</p>}</> : <>{!isValid && <p className="text-red-400"> সঠিক পূর্ণ মোবাইল নাম্বার দিন। </p>}</>
          }
         </div>
         </div>
        {!getEm && (
          <form
            onSubmit={handleSubmit(handleResetPass)}
            className="mb-4 flex flex-col gap-6 relative"
          >
            {!getEm && (
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
                  autoFocus: true,
                }}
                isValid={(value: any, country: any) => {
                  if (value.match(/12345/)) {
                    return "Invalid value: " + value + ", " + country.name;
                  } else if (value.match(/1234/)) {
                    return false;
                  } else {
                    return true;
                  }
                }}
              />
            )}

            {/* )} */}
            {countryNumber && (
              <>
                <Input
                  type={passHidden ? "password" : "text"}
                  label={!lang ? "Password*" : "পাসওয়ার্ড*"}
                  {...register("password", { required: true })}
                />{" "}
                <div
                  className="cursor-pointer absolute right-4 top-[68px]"
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
                  <span className="text-red-500 ">
                    {!lang
                      ? "This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}{" "}
                  </span>
                )}
                <div
                  className="cursor-pointer absolute right-4 top-[131px]"
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
            {loading ? (
              <button className="w-full bg-gray-700 py-2 rounded font-semibold text-primary">
                {!lang ? "Working..." : "পরিবর্তন হচ্ছে..."}
              </button>
            ) : (
              <button className="w-full bg-warning py-2 rounded font-semibold text-primary">
                {!lang ? "Submit" : "সাবমিট"}
              </button>
            )}
          </form>
        )}
        {getEm && (
          <form
            onSubmit={handleSubmit(handleResetPass)}
            className="mb-4 flex flex-col gap-6 relative"
          >
            {getEm && (
              <Input
                label={!lang ? "Email***" : "ইমেইল***"}
                {...register("email", { required: true })}
                onBlur={(e: any) => setGetEmail(e.target.value)}
              />
            )}

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
                  <span className="text-red-500 ">
                    {!lang
                      ? "This field is required"
                      : "আপনাকে অবশ্যই এটা পূরণ করতে হবে।"}{" "}
                  </span>
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
            {loading ? (
              <button className="w-full bg-gray-700 py-2 rounded font-semibold text-primary">
                {!lang ? "Working..." : "পরিবর্তন হচ্ছে..."}
              </button>
            ) : (
              <button className="w-full bg-warning py-2 rounded font-semibold text-primary">
                {!lang ? "Submit" : "সাবমিট"}
              </button>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default Reset;
