import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext } from "react";

const SignIn = () => {
const {accountLogIn, user, providerGoogleLogIn}:any = useContext(AuthContext)
const provider = new GoogleAuthProvider();
console.log(user)
  const handleLogin = (event:any) => {
    accountLogIn(event.target.email.value, event.target.password.value)
      .then((result:any) => {
        const user = result.user;
        // setLogInUserEmail(data.email);
        // toast.success('Login success')
      })
      .catch((error:any) => console.log(error.message));
  };
  const handleGoogleLogin=()=>{
    providerGoogleLogIn(provider)
    .then((result:any) => {
        const user = result.user;
        // setLogInUserEmail(user.email);

       

      })
      .catch((error:any) => console.log(error));
  }
  return (
    <div className="hero text-black lg:mt-28">
      <div className="hero-content flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Create a new account? <Link href="/SignUp">SignUp</Link>
            </p>
          </form>
          <button className="btn btn-secondary" onClick={handleGoogleLogin}>Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
