import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StateContext } from "@/Context/StateContext/StateContext";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import Cookies from "js-cookie";
import styles from "../../../styles/response.module.css";
import { useDispatch } from "react-redux";
import { toggleLanguage } from "@/redux/features/Language/LanguageSlice";
import Image from "next/image";
import logo from "../../../image/Quick_Vara_logo_2_full.png";
import logoShort from "../../../image/Quick_Vara_logo_Q2_short.png";
import { setCityName } from "@/redux/features/FilterCity/FilterCitySlice";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
import { setFilterModalValue } from "@/redux/features/FilterModalSlice/FilterModalSlice";
import { setDivisionNameEng } from "@/redux/features/DivisionFilter/DivisionFilterSlice";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";
import { setOpenModalValue } from "@/redux/features/UniversitySlice/UniversitySlice";
import { setSignInOpen } from "@/redux/features/SignInModal/SignInModalSlice";
import { setSignUpOpen } from "@/redux/features/SignUpModal/SignUpModal";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
import { FaUserAlt } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { SiGoogleads } from "react-icons/si";
import { PiSignInBold } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const {
    setFilterTypeCity,
    setFilterTypeDivision,
    setFilterModal,
    handleOpenModalEng,
    setOpenModalEng,
  }: any = useContext(StateContext);
  const {
    setPostCityNameEng,
    setPostDivisionNameEng,
    setPostOpenModal,
    setGetPostPopularAreaName,
    setPostDistrictsName,
    setGetUniversityModalValue,
  }: any = useContext(PostStateContext);
  const [authenticated, setAuthenticated] = useState(false);
  const { push, pathname } = useRouter();
  const token = decryptTransform(Cookies.get("qv-tn"));
  // const token = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : null;
  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    } else if (!token) {
      setAuthenticated(false);
    }
  }, [pathname, token]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logOut = () => {
    setAuthenticated(false);
    Cookies.remove("qv-tn");
    Cookies.remove("qv-fn");
    Cookies.remove("qv-ln");
    Cookies.remove("qv-acn");
    Cookies.remove("city");
    Cookies.remove("area");
    Cookies.remove("district");
    Cookies.remove("division");
    Cookies.remove("filterMV");
    Cookies.remove("openMV");
    Cookies.remove("next-auth.session-token");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("paged");
    sessionStorage.removeItem("pageU");
    sessionStorage.removeItem("pageF");
    sessionStorage.removeItem("pageFT");
    sessionStorage.removeItem("persist");
    sessionStorage.removeItem("qv-ap");
    sessionStorage.removeItem("qv-utf");
    return push("/");
  };

  const handleLogOut = () => {
    logOut();
  };

  const dispatch = useDispatch();
  const handleLanguageChange = () => {
    const newLanguage = !lang;
    dispatch(toggleLanguage(newLanguage));
    localStorage.setItem("lan", JSON.stringify(newLanguage));
    setLang(newLanguage);
  };

  const storedLanguage = localStorage.getItem("lan");
  const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : false;

  const [lang, setLang] = useState(initialLanguage);
  useEffect(() => {
    if (storedLanguage) {
      dispatch(toggleLanguage(initialLanguage));
    }
  }, [dispatch, initialLanguage, storedLanguage]);

  const handleHome = () => {
    dispatch(
      setCityName({
        eng: "",
        ban: "",
      })
    );
    dispatch(
      setHomePopularAreaName({
        eng: "",
        ban: "",
      })
    );
    dispatch(
      setFilterModalValue({
        eng: "",
        ban: "",
      })
    );
    dispatch(
      setDivisionNameEng({
        eng: "",
        ban: "",
      })
    );
    dispatch(
      setDistrictsName({
        eng: "",
        ban: "",
      })
    );
    dispatch(
      setOpenModalValue({
        eng: null,
        ban: null,
      })
    );
    // dispatch(universityTypeValue(""))
    handleOpenModalEng(false);
    setOpenModalEng(false);
    setFilterModal(false);
    setFilterTypeCity(false);
    setFilterTypeDivision(false);
    setPostCityNameEng({}),
      setGetPostPopularAreaName({}),
      setPostDivisionNameEng({}),
      setPostOpenModal(false);
    setPostDistrictsName({});
    setGetUniversityModalValue({});
    Cookies.remove("openMV");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("paged");
    sessionStorage.removeItem("pageU");
    sessionStorage.removeItem("pageF");
    sessionStorage.removeItem("pageFT");
    sessionStorage.removeItem("persist");
    sessionStorage.removeItem("qv-ap");
    sessionStorage.removeItem("qv-utf");
  };
  const handleSignInOpen = () => {
    dispatch(setSignInOpen(true));
  };
  const handleSignUpOpen = () => {
    dispatch(setSignUpOpen(true));
  };

  const email = decryptTransform(Cookies.get("qv-acn"));
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="flex justify-start px-10 border-b border-t py-2 lg:border-none">
        <Link onClick={() => setOpenNav(false)} href={"/contact-by-message"} className="flex gap-2">
          <AiFillWechat className="h-7 w-7 text-white" />{" "}
          {!lang ? (
            <span className="mt-[6px] text-primary">Chat</span>
          ) : (
            <span className="mt-[5px] text-primary text-[15px]">চ্যাট</span>
          )}
        </Link>
      </li>

      <li className="flex lg:hidden justify-start px-10 border-b pb-2 lg:border-none">
        <Link href="/add-post" passHref>
          <div className=" ">
            <Typography onClick={() => setOpenNav(false)}>
              {!lang ? (
                <h2 className="flex gap-2">
                  {" "}
                  <SiGoogleads className="mt-1"></SiGoogleads>{" "}
                  <span>Post your ads</span>
                </h2>
              ) : (
                <h2 className="flex gap-2">
                  <SiGoogleads className="mt-1"></SiGoogleads>{" "}
                  <span>আপনার বিজ্ঞাপন দিন</span>
                </h2>
              )}
            </Typography>
          </div>
        </Link>
      </li>
      <li className="flex justify-start px-10 lg:px-0 lg:justify-center lg:block">
        {!authenticated && !email ? (
          <Typography
            className="p-1 font-normal"
            
            onClick={() => setOpenNav(false)}
          >
            <Link href="/signIn" passHref>
              <span
                onClick={() => setOpenNav(false)}
                className="text-primary  hidden lg:flex"
              >
                {!lang ? (
                  <span onClick={handleSignInOpen} className="text-base">
                    SignIn
                  </span>
                ) : (
                  <span onClick={handleSignInOpen} className="text-[15px] mt-1">
                    সাইন ইন
                  </span>
                )}
              </span>
            </Link>
          </Typography>
        ) : (
          <Typography
            className="lg:p-1 font-normal"
            
            onClick={() => setOpenNav(false)}
          >
            <Link href="/dashboard/profile" passHref>
              <div
                onClick={() => setOpenNav(false)}
                className="text-primary -mb-2 lg:mt-0"
              >
                {!lang ? (
                  <h2 className="flex gap-2 text-[16.5px] lg:text-base">
                    {" "}
                    <FaUserAlt className="mt-1" /> <span>Account</span>
                  </h2>
                ) : (
                  <h2 className="flex gap-2">
                    <FaUserAlt className="mt-1" /> <span> অ্যাকাউন্ট</span>
                  </h2>
                )}
              </div>
            </Link>
          </Typography>
        )}
      </li>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 bg-warning bg-opacity-100 h-max min-w-full rounded-none py-2 px-1 md:px-0 lg:px-8 lg:py-4 border-none text-primary shadow-sm">
        <div className="flex items-center justify-between text-blue-gray-900 px-4 md:px-5  lg:w-11/12 lg:px-8 mx-auto">
          <div className={`${styles.gapStyle} flex md:gap-32`}>
            <Link onClick={handleHome} href={"/"} passHref>
              <Image
                className="h-12 pb-1 md:pb-0  ml-5 md:ml-5 w-full md:w-full scale-110 hidden lg:flex"
                src={logo}
                alt={""}
              ></Image>
              <Image
                className="h-11 w-[52px] ml-5 scale-110 md:ml-5 lg:hidden"
                src={logoShort}
                alt={""}
              ></Image>
            </Link>
            <div className="mt-2 mb-1 hidden lg:flex">
              {!lang ? (
                <Link
                  href="/ads"
                  className="font-semibold border border-success text-primary  rounded cursor-pointer px-2 mb-[3px] pt-[3px]"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="font-semibold border border-success  text-primary  rounded cursor-pointer px-2 mb-[3px] pt-[4px]"
                >
                  সকল বিজ্ঞাপন
                </Link>
              )}
            </div>
            <div className="mt-2 mb-1 lg:hidden flex">
              {!lang ? (
                <Link
                  href="/ads"
                  className="text-primary  rounded cursor-pointer border border-success px-2 py-1 text-sm"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="text-primary  rounded cursor-pointer border border-success px-[6px] pb-[4px] pt-[6px] text-xs"
                >
                  সকল বিজ্ঞাপন
                </Link>
              )}
            </div>
          </div>
          <div className="hidden md:flex">
            {!lang ? (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[3.5px] pb-[2.5px] text-primary px-2 rounded cursor-pointer"
              >
                বাংলা
              </span>
            ) : (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[3.5px] pb-[3px] text-primary px-2 rounded cursor-pointer"
              >
                English
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <>
              <Link href="/add-post" passHref className="hidden lg:flex">
                <div className="navbar-end">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                    onClick={() => setOpenNav(false)}
                  >
                    {!lang ? (
                      <Button className="lg:w-48  text-warning lg:text-[14px] bg-accent  lg:font-semibold rounded">
                        Post your ads
                      </Button>
                    ) : (
                      <>
                        <Button className="lg:w-48  text-warning lg:text-[14px] bg-accent  lg:font-semibold rounded">
                          আপনার বিজ্ঞাপন দিন
                        </Button>
                      </>
                    )}
                  </Typography>
                </div>
              </Link>
            </>
            <IconButton
              variant="text"
              className="mt-3 font-semibold ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  text-primary"
              
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-7 w-7"
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
                  className="h-7 w-7"
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
        <Collapse open={openNav}>
          <div className="mt-10"> {navList}</div>
          <div className="flex justify-start w-full">
            {/* {authenticated ? (
              <div onClick={handleLogOut}>
                {" "}
                {!lang ? (
                  <Button
                    className="text-gray-700 w-[149px] -ml-1/12 py-2 -mt-[6px] bg-accent rounded md:mb-5 md:-mt-[5px]"
                    onClick={() => setOpenNav(false)}
                  >
                    LogOut
                  </Button>
                ) : (
                  <Button
                    className="text-gray-700 w-[162px] -ml-1/12 py-2 -mt-[10px] bg-accent rounded md:mb-5 md:-mt-[8px]"
                    onClick={() => setOpenNav(false)}
                  >
                    লগআউট
                  </Button>
                )}
              </div>
            ) :  */}

            {!authenticated && (
              <Link
                href={"/signIn"}
                className="flex justify-start px-10 -mt-6 pb-2"
              >
                {!lang ? (
                  <h2 className="flex gap-2" onClick={handleSignInOpen}>
                    <PiSignInBold className="mt-1"></PiSignInBold>
                    <span onClick={() => setOpenNav(false)}>SignIn</span>
                  </h2>
                ) : (
                  <h2 className="flex gap-2" onClick={handleSignInOpen}>
                    <PiSignInBold className="mt-1"></PiSignInBold>
                    <span
                      className="text-[15px]"
                      onClick={() => setOpenNav(false)}
                    >
                      সাইন ইন
                    </span>
                  </h2>
                )}
              </Link>
            )}
            {/* )} */}
          </div>
          <div className="flex justify-start   rounded-full md:hidden mb-5">
            {!lang ? (
              <h2
                onClick={handleLanguageChange}
                className="font-semibold border-t border-b py-2 w-full  cursor-pointer px-10 text-accent flex gap-2"
              >
                <GrLanguage className="text-accent mt-1"></GrLanguage>{" "}
                <span>বাংলা</span>
              </h2>
            ) : (
              <h2
                onClick={handleLanguageChange}
                className=" border-t border-b py-2 text-accent font-bold w-full  px-10 cursor-pointer flex gap-2"
              >
                <GrLanguage className="text-accent mt-1"></GrLanguage>{" "}
                <span>English</span>
              </h2>
            )}
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
