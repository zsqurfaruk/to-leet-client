import Link from "next/link";
import { useRouter } from "next/router";
import React, {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Typography, Input } from "@material-tailwind/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
// import lottiImage from "../image/66268-signinanimation (1).json";
import lottiImage from "../image/lf20_s50p1rff.json";
import Lottie from "lottie-react";
import Head from "next/head";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { APIContext } from "@/Context/ApiContext/ApiContext";

type FormValues = {
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
};
const SignIn = () => {
  const [signInError, setSignInError] = useState("");
  const [signInErrorBan, setSignInErrorBan] = useState("");
  const [passHidden, setPassHidden] = useState(true);
  const {loading, setLoading}:any = useContext(APIContext)

   
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
      email: data.email,
      password: data.password,
    };
    setLoading(true)
    const res = await fetch("https://zsqur.to-leet.com/api/v1/users/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
         authorization: `bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(info),
    });
    const result = await res.json();
    setLoading(false)
    setSignInError(result?.error?.eng);
    setSignInErrorBan(result?.error?.ban);
    const token = result?.data?.token;
    if (token) {
      // Cookies.set('token', encodeURIComponent(JSON.stringify(token)));
      Cookies.set('token', token);
      Cookies.set('email', result?.data?.user.email);
      // Cookies.set("token", token);
      // Cookies.set("email", result?.data?.user.email);
      Cookies.set("firstName", result?.data?.user.firstName);
      Cookies.set("lastName", result?.data?.user.lastName);
      toast.success("Sign In Successful.")
      const { query }:any = router;
      const nextPage = query.next || "/";
      router.push(nextPage);
    }
  };
  // const cookieValue = Cookies.get('token');
  // if(cookieValue){
  //   const data = decodeURIComponent(JSON.parse(cookieValue ||""))
  //   console.log(data)

  // }

  // const handleGoogleLogin = () => {
  //   providerGoogleLogIn(provider)
  //     .then((result: any) => {
  //       const user = result.user;
  //       // setLogInUserEmail(user.email);
  //       router.push("/");
  //     })
  //     .catch((error: any) => setSignInError(error.message));
  // };
  const handle = () => {
    setPassHidden(!passHidden);
  };
  const lang = Cookies.get("lan");
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
        <Card className="w-10/12 mx-auto border-4 border-neutral bg-neutral shadow-2xl"  >
          {!lang ? (
            <Typography className="px-4 mt-2 text-warning" variant="h4">
              Sign In
            </Typography>
          ) : (
            <Typography className="px-4 mt-2 text-warning" variant="h4" >
              সাইন ইন
            </Typography>
          )}
          {!lang ? (
            <Typography color="gray" className="mt-1 font-normal px-4">
              Enter your registered email and password to signin.
            </Typography>
          ) : (
            <Typography color="gray" className="mt-1 font-normal px-4 text-sm">
              সাইন ইন করতে আপনার নিবন্ধিত ইমেল এবং পাসওয়ার্ড লিখুন।
            </Typography>
          )}
          <div className="mt-8 mb-2 w-full px-4">
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="mb-4 flex flex-col gap-6 relative"
            >
              <Input
                label={!lang ? "Email*" : "ইমেইল*"}
                {...register("email", { required: true })}
              />
              <Input
                type={passHidden ? "password" : "text"}
                label={!lang ? "Password*" : "পাসওয়ার্ড*"}
                {...register("password", { required: true })}
              />{" "}
              <div
                className="cursor-pointer absolute right-4 top-[71px]"
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
              <Link href={"/reset"}>
                {!lang ? (
                  <h4 className="hover:underline">Forgot password?</h4>
                ) : (
                  <h4 className="text-sm hover:underline">
                    {" "}
                    পাসওয়ার্ড ভুলে গেছেন?
                  </h4>
                )}
              </Link>
              <div className="flex gap-2">
                {" "}
                {!lang ? (
                  <span className="text-red-400">{signInError}</span>
                ) : (
                  <span className="text-red-400">{signInErrorBan}</span>
                )}
              </div>
              {!lang ? (
                <button className={loading ? "w-full bg-gray-800 py-2 rounded font-semibold text-white" : "w-full bg-warning bg-opacity-70 py-2 rounded font-semibold text-primary"}>
                 {
                  loading ? "Signing..." : "Sign In"
                 } 
                </button>
              ) : (
                <button className={loading ? "w-full bg-gray-800 py-2 rounded font-semibold text-primary" : "w-full bg-warning bg-opacity-70 py-2 rounded font-semibold text-primary"}>
                  {
                  loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"
                 } 
                </button>
              )}
            </form>

            {!lang ? (
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link
                  href="/signUp"
                  className="font-medium text-warning"
                >
                  Sign Up
                </Link>
              </Typography>
            ) : (
              <Typography color="gray" className="mt-4 text-center font-normal">
                আপনার কি অ্যাকাউন্ট আছে?{" "}
                <Link
                  href="/signUp"
                  className="font-medium text-warning"
                >
                  সাইন আপ
                </Link>
              </Typography>
            )}
          </div>
        </Card>
      </section>
    </>
  );
};

export default SignIn;
