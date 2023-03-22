import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext, useState } from "react";

function SignUp() {
  const provider = new GoogleAuthProvider();
  // const [data, setData] = useState("");
  const {createUserByEmail, providerGoogleLogIn}:any = useContext(AuthContext)
 
  const handleSignUp = (event:any) => {
    event.preventDefault()
    // setSignUpError("");
    createUserByEmail(event.target.email.value, event.target.password.value)
      .then((result:any) => {
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
      .catch((error:any) => {
        // setSignUpError(error.message)
        console.log(error)
      });
  };

  const handleGoogleSignUp = () => {
    providerGoogleLogIn(provider)
      .then((result:any) => {
        const user = result.user;
        const category = 'buyer'
        // saveUser(user?.displayName, user?.email,category);
        // navigate(from, { replace: true });
      })
      .catch((error:string) => console.log(error));
  };
  return (
    <div>
    <div className="hero text-black lg:mt-20">
      <div className="hero-content flex">
        <div className="text-center lg:text-left hidden lg:flex">
          <div>
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque
            aut repudiandae et a id nisi.
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
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {/* <label className="label">
                <a className="link link-hover">
                  Already have an account? <p> {!data && <SignIn></SignIn>}SignIn</p>
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <label className="label">
              <p>
                Already have an account? <Link href="/SignIn">Sign In</Link>
                {/* <span className="link link-hover"> */}
               {/* {!data && <SignIn></SignIn>}SignIn  */}
                {/* </span> */}
              </p>
            </label>
          </form>
          <button className="btn btn-secondary mb-10" onClick={handleGoogleSignUp}>Google</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SignUp;
