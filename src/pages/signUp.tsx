/* eslint-disable react/no-unescaped-entities */
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { Card, Typography, Input, Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string | number;
  password: string | number;
  confirmPassword: string | number;
};
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  // const provider = new GoogleAuthProvider();
  // const [signUpError, setSignUpError] = useState("");
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
    setSignUpUserInfo(result)
    console.log(result);
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
  return (
    <section className="lg:w-10/12 lg:mx-auto grid lg:grid-cols-2 gap-20 my-10">
      <div className="hidden md:flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam quis
        velit tempora autem, a veritatis atque? Repellendus assumenda
        distinctio, expedita rem et nemo illum ab odio totam perspiciatis
        accusamus nulla, soluta commodi natus, numquam quos repellat. Error,
        praesentium, doloribus ea amet, libero ex explicabo nesciunt eligendi
        esse qui labore quia! Ratione cumque eligendi eveniet quasi maxime quae!
        Quae, nihil excepturi possimus impedit dolores soluta ex commodi atque
        expedita autem cumque deleniti? Ea consequuntur velit quos delectus
        aperiam culpa minima, aliquam dolorem autem beatae laboriosam qui minus
        nemo animi sunt maxime facere quia, incidunt deleniti hic quidem
        voluptatibus ipsam corporis.
      </div>
      <Card className="w-full lg:w-10/12" color="transparent">
        <Typography className="px-4 mt-2" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal px-4">
          Enter your details to register.
        </Typography>
        <div className="mt-8 mb-2 w-full px-4">
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="mb-4 flex flex-col gap-6"
          >
            <div className="lg:flex-row lg:gap-2 flex flex-col gap-6">
              <Input label="First Name" {...register("firstName")} />
              <Input label="Last Name" {...register("lastName")} />
            </div>
            <Input label="Email" {...register("email")} />
            <Input type="password" label="Password" {...register("password")} />
            <Input
              type="password"
              label="Confirm Password"
              {...register("confirmPassword")}
              name="confirmPassword"
            />
            <Checkbox
              label={
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
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <button className="mt- w-full btn btn-accent">Register</button>
          </form>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              href="/signIn"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </div>
      </Card>
    </section>
  );
}

export default SignUp;

//  <div className="hero text-black lg:mt-20 lg:w-9/12 lg:mx-auto">
//         <div className="hero-content flex">
//           <div className="text-center lg:text-left hidden lg:flex">
//             <div>
//               <h1 className="text-5xl font-bold">Login now!</h1>
//               <p className="py-6">
//                 Provident cupiditate voluptatem et in. Quaerat fugiat ut
//                 assumenda excepturi exercitationem quasi. In deleniti eaque aut
//                 repudiandae et a id nisi.
//               </p>
//             </div>
//           </div>
//           <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
//             <form onSubmit={handleSignUp} className="card-body">
//               <div className="flex justify-between">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">First Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="input input-bordered"
//                   name="name"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Last Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="input input-bordered"
//                   name="name"
//                   required
//                 />
//               </div>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   name="email"
//                   required
//                 />
//               </div>
{
  /* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <p className="text-red-400 py-2">{signUpError}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <label className="label">
                <p>
                  Already have an account? <Link href="/signIn">Sign In</Link>
                 
                </p>
              </label>
            </form>
            <button
              className="btn btn-secondary mb-10"
              onClick={handleGoogleSignUp}
            >
              Google
            </button>
          </div>
        </div>
      </div> */
}
