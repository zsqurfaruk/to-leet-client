import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { StateContext } from "@/Context/StateContext/StateContext";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { setLanguage, language, userInfo }: any = useContext(AuthContext);
  const { tokenValidation }: any = useContext(StateContext);
  const [authenticated, setAuthenticated] = useState(false);
  const { locales, push, pathname } = useRouter();
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    } else if (!token) {
      setAuthenticated(false);
    }
  }, [pathname]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if (tokenValidation === "Invalid token") {
      // setAuthenticated(false);
      return localStorage.removeItem("token");
    }
  }, [tokenValidation]);

  const logOut = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    return push("/signIn");
  };

  const handleLogOut = () => {
    logOut();
  };

  // const handleLanguage = () => {
  //   setLanguage(!language);
  // };

  const handleTran = (l: any)=>() => {
    push("/", undefined, { locale: l });
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {!authenticated && !userInfo?.email ? (
        <div className="navbar-end">
          {/* <Link href="/SignUp">  */}
          <Link href="/signUp">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
              onClick={() => setOpenNav(false)}
            >
              <a href="#" className="flex items-center  text-primary">
                PostNow
              </a>
            </Typography>
            {/* </Link> */}
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          {/* <Link href="/SignUp">  */}
          <Link href="/add-post">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
              onClick={() => setOpenNav(false)}
            >
              <a href="#" className="flex items-center  text-primary">
                PostNow
              </a>
            </Typography>
            {/* </Link> */}
          </Link>
        </div>
      )}
      {!authenticated && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          ripple={false}
          onClick={() => setOpenNav(false)}
        >
          <Link href="/signIn">
            <li
              onClick={() => setOpenNav(false)}
              className="flex items-center  text-primary"
            >
              SignIn
            </li>
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-75 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-none text-primary shadow-sm">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href={"/"}>
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium text-primary">
              Blog
            </Typography>
          </Link>
          <div className="hidden md:flex">
            {locales?.map((l) => (
              <div
                className="text-primary cursor-pointer"
                key={l}
                onClick={handleTran(l)}
              >
                {/* <p>{l === "bn" && " বাংলা"}</p> 
                <p>{l === "en" && "English"}</p> */}
                {!translate && <p>{l === "bn" ? <>বাংলা</> : <>English</>}</p>}
                {/* {l} */}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {authenticated ? (
              <Button
                onClick={handleLogOut}
                // variant="gradient"
                size="sm"
                className="hidden lg:inline-block text-primary bg-cyan-500"
              >
                <span>LogOut</span>
              </Button>
            ) : (
              <Link href={"/signUp"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block text-primary"
                >
                  <span>SignUp</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  text-primary"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {authenticated ? (
            <Button
              className="text-primary "
              onClick={handleLogOut}
              variant="gradient"
              size="sm"
            >
              <span onClick={() => setOpenNav(false)}> LogOut </span>
            </Button>
          ) : (
            <Link href={"/signUp"}>
              <Button
                variant="gradient"
                size="sm"
                className="w-full rounded-full mb-3 text-primary"
              >
                <span onClick={() => setOpenNav(false)}>SignUp</span>
              </Button>
            </Link>
          )}
          <div className="flex justify-center rounded-full md:hidden bg-primary text-secondary mb-5">
            {/* {language ? (
              <span
                onClick={() => setOpenNav(false)}
                className="font-semibold border border-primary py-1 rounded-full
          "
              >
                বাংলা
              </span>
            ) : (
              <span
                onClick={() => setOpenNav(false)}
                className="font-semibold border border-primary  py-1 rounded-full
          "
              >
                English
              </span>
            )} */}
            {locales?.map((l) => (
              <div
                className="text-secondary py-1 cursor-pointer"
                key={l}
                onClick={() => handleTran(setTranslate(l))}
              >
                {translate === "en" && <span> {l === "bn" && "বাংলা"}</span>}
                {translate === "bn" && <span>{l === "en" && "English"}</span>}
                {!translate && <span>{l === "bn" && " বাংলা "}</span>}
              </div>
            ))}
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
}

// export async function getServerSideProps(context:any) {
//   const { req } = context;
//   const token = req.cookies.token || localStorage.getItem('token');
//   const isLoggedIn = !!token;
//   return { props: { isLoggedIn } };
// }

// import { AuthContext } from "@/Context/AuthProvider/AuthProvider";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useContext } from "react";
// import image from "../../../image/logo.png";

// const Header = () => {
//   const { user, logOut }: any = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut();
//   };

//   return (
//     <nav className="flex">
//       <div className="bg-secondary   w-full">
//         <div className="navbar text-white">
//           <div className="navbar-start">
//             {/* <img src={image} alt="" /> */}
//             <Link href="/">
//               <Image
//                 src={image}
//                 alt="Picture of the author"
//                 width={100}
//                 height={100}
//                 className="hidden md:flex"
//               ></Image>
//             </Link>
//             {/* <Image></Image> */}
//             <div className="dropdown">
//               <label
//                 htmlFor="nav-drawer"
//                 tabIndex={0}
//                 className="btn btn-ghost btn-circle lg:hidden"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h7"
//                   />
//                 </svg>
//               </label>
//             </div>
//           </div>
//           <div className="navbar-center">
//             <p className=" normal-case text-white font-bold text-4xl hidden md:flex">
//               Havenly
//             </p>
//           </div>
//           {!user ?
//             <div className="navbar-end">
//               {/* <Link href="/SignUp">  */}
//               <Link href="/signUp">
//                 <label className="mr-3 bg-primary rounded-2xl text-secondary p-2 px-8 font-medium cursor-pointer hidden md:flex">
//                   POST NOW
//                 </label>
//                 {/* </Link> */}
//               </Link>
//             </div> : <div className="navbar-end">
//               {/* <Link href="/SignUp">  */}
//               <Link href="/addProduct">
//                 <label className="mr-3 bg-primary rounded-2xl text-secondary p-2 px-8 font-medium cursor-pointer hidden md:flex">
//                   POST NOW
//                 </label>
//                 {/* </Link> */}
//               </Link>
//             </div>
//           }
//         </div>
//       </div>
//       {user ? (
//         <button className="bg-accent px-10 py-5 text-white font-medium text-xl" onClick={handleLogOut}>LogOut</button>
//       ) : (
//         <Link href="/signIn">
//           <p className="bg-accent px-10 py-5 text-white font-medium cursor-pointer text-xl">
//             SIGNIN
//           </p>
//         </Link>
//       )}
//     </nav>
//   );
// };

// export default Header;