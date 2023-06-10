import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Typography, Input } from "@material-tailwind/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import lottiImage from "../image/lf20_s50p1rff.json";
import Lottie from "lottie-react";
import Head from "next/head";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
 
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
  // const {
  //   accountLogIn,
  //   providerGoogleLogIn,
  //   setUserInfo,
  //   signUpUserInfo,
  // }: any = useContext(AuthContext);
  // const provider = new GoogleAuthProvider();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const handleLogin = (event: any) => {
  //   accountLogIn(event.target.email.value, event.target.password.value)
  //     .then((result: any) => {
  //       const user = result.user;
  //       // setLogInUserEmail(data.email);
  //       // toast.success('Login success')
  //       router.push("/");
  //     })
  //     .catch((error: any) => setSignInError(error.message && error.code));
  // };
  const handleSignIn = async (data: any) => {
    const info = {
      email: countryNumber || data?.email,
      password: data.password,
    };
    setLoading(true);
    const res = await fetch("https://zsqur.to-leet.com/api/v1/users/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setLoading(false);
    setSignInError(result?.error?.eng);
    setSignInErrorBan(result?.error?.ban);
    const token = result?.data?.token;
    if (token) {
      // Cookies.set('token', encodeURIComponent(JSON.stringify(token)));
      Cookies.set("token", token);
      Cookies.set("authentication", result?.data?.user?.email);
      // Cookies.set("token", token);
      // Cookies.set("email", result?.data?.user.email);
      Cookies.set("firstName", result?.data?.user.firstName);
      Cookies.set("lastName", result?.data?.user.lastName);
      setLoading(false);
      toast.success("Sign In Successful.");
      const { query }: any = router;
      const nextPage = query.next || "/";
      router.push(nextPage);
    }
  };
  // const cookieValue = Cookies.get('token');
  // if(cookieValue){
  //   const data = decodeURIComponent(JSON.parse(cookieValue ||""))
  //   console.log(data)

  const handle = () => {
    setPassHidden(!passHidden);
  };
  const lang = Cookies.get("lan");

  const handleLoginMethodNumber = () => {
    setNumberMethod("number");
    Cookies.set("nm", "number",{ expires: 3 });
    setEmailMethod("");
    Cookies.remove("em");
  };
  const handleLoginMethodEmail = () => {
    setEmailMethod("email");
    Cookies.set("em", "email",{ expires: 3 });
    setNumberMethod("");
    Cookies.remove("nm");
  };

  const handleCountryNumberValue = (value: any) => {
    setCountryNumber(value);
  };
  const getNm = Cookies.get("nm");
  const getEm = Cookies.get("em");
  return (
    <>
      <Head>
        <title>To Leet - Sign in</title>
      </Head>
      <section className="lg:w-10/12 lg:mx-auto grid lg:grid-cols-2 gap-20 my-10 lg:my-24  py-5">
        <div className="hidden lg:flex">
          <Lottie
            className="-mt-16 scale-110 opacity-60"
            animationData={lottiImage}
            loop={true}
          ></Lottie>
        </div>
        <Card className="lg:w-9/12 mx-auto px-5 border-4 border-neutral bg-neutral shadow-2xl">
          {!lang ? (
            <Typography className="  mt-2 text-warning" variant="h4">
              Sign In
            </Typography>
          ) : (
            <Typography className="  mt-2 text-warning" variant="h4">
              সাইন ইন
            </Typography>
          )}
          {!lang && !getEm && (
            <Typography color="gray" className="mt-1 font-normal  ">
              Enter your registered mobile number and password to signin.
            </Typography>
          )}
          {lang && !getEm && (
            <Typography color="gray" className="mt-1 font-normal   text-sm">
              সাইন ইন করতে আপনার নিবন্ধিত মোবাইল নাম্বার এবং পাসওয়ার্ড লিখুন।
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
                  className="bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
                >
                  Continue with Mobile Number.
                </button>
              ) : (
                <button
                  onClick={handleLoginMethodNumber}
                  className="bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
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
                  className="bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
                >
                  Continue with Email
                </button>
              ) : (
                <button
                  onClick={handleLoginMethodEmail}
                  className="bg-warning text-primary text-lg py-[6px] font-medium rounded  mt-5"
                >
                  ইমেইল দিয়ে চালিয়ে যান।
                </button>
              )}
            </>
          )}
          <div className="divider">OR</div>
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
                        আপনাকে অবশ্যই মোবাইল নাম্বার এবং পাসওয়ার্ড দিতে হবে।
                      </span>
                    )}
                  </span>
                )}
                <div>
                  <Link href={"/reset"}>
                    {!lang ? (
                      <span className="hover:underline">Forgot password?</span>
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
                        : "w-full bg-warning py-2 rounded font-semibold text-primary -mt-8"
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
                >
                  Already have an account?{" "}
                  <Link href="/signUp" className="font-medium text-warning">
                    Sign Up
                  </Link>
                </Typography>
              ) : (
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  আপনার কি অ্যাকাউন্ট আছে?{" "}
                  <Link href="/signUp" className="font-medium text-warning">
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
                      <span className="hover:underline">Forgot password?</span>
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
                >
                  Already have an account?{" "}
                  <Link href="/signUp" className="font-medium text-warning">
                    Sign Up
                  </Link>
                </Typography>
              ) : (
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  আপনার কি অ্যাকাউন্ট আছে?{" "}
                  <Link href="/signUp" className="font-medium text-warning">
                    সাইন আপ
                  </Link>
                </Typography>
              )}
            </div>
          )}
        </Card>
      </section>
    </>
  );
};

export default SignIn;
