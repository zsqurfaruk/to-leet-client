import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext, useState } from "react";

function SignUp() {
  const provider = new GoogleAuthProvider();
  const [signUpError, setSignUpError] = useState("");
  const { createUserByEmail, providerGoogleLogIn }: any =
    useContext(AuthContext);

  const handleSignUp = (event: any) => {
    event.preventDefault();
    // setSignUpError("");
    createUserByEmail(event.target.email.value, event.target.password.value)
      .then((result: any) => {
        const user = result.user;
        // toast.success("User Created Successful");
        // const profile = {
        //   displayName: data.name,
        //   category: data.category,
        // };
        // updateUser(profile)
        //   .then(() => {
        //     saveUser(data.name, data.email, data.category);
        //   })
        // .catch((error) => {
        //   console.log(error);
        // });
      })
      .catch((error: any) => {
        // setSignUpError(error.message)
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    providerGoogleLogIn(provider)
      .then((result: any) => {
        const user = result.user;
        const category = "buyer";
        // saveUser(user?.displayName, user?.email,category);
        // navigate(from, { replace: true });
      })
      .catch((error: any) => setSignUpError(error.message));
  };
  return (
    <div>
      <div className="hero text-black lg:mt-20 w-10/12 mx-auto">
        <div className="hero-content flex">
          <div className="text-center lg:text-left hidden lg:flex">
            <div>
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
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
                  {/* <span className="link link-hover"> */}
                  {/* {!data && <SignIn></SignIn>}SignIn  */}
                  {/* </span> */}
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
      </div>
    </div>
  );
}

export default SignUp;
