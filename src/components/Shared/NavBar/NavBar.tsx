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
import styles from "../../../styles/response.module.css"
import { useDispatch } from "react-redux";
import { toggleLanguage } from "@/redux/features/Language/LanguageSlice";
import Image from "next/image";
import logo from "../../../image/Quick_Vara_logo_2_full.png"
import logoShort from "../../../image/Quick_Vara_logo_Q2_short.png"
import { setCityName } from "@/redux/features/FilterCity/FilterCitySlice";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
import { setFilterModalValue } from "@/redux/features/FilterModalSlice/FilterModalSlice";
import { setDivisionNameEng } from "@/redux/features/DivisionFilter/DivisionFilterSlice";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";
import { setOpenModalValue } from "@/redux/features/UniversitySlice/UniversitySlice";
import { setSignInOpen } from "@/redux/features/SignInModal/SignInModalSlice";
import { setSignUpOpen } from "@/redux/features/SignUpModal/SignUpModal";
import { decryptTransform } from "@/Encrypt/EncryptionTransform";
 
 
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
    sessionStorage.removeItem("page")
    sessionStorage.removeItem("paged")
    sessionStorage.removeItem("pageU")
    sessionStorage.removeItem("pageF")
    sessionStorage.removeItem("pageFT")
    sessionStorage.removeItem("persist")
    sessionStorage.removeItem("qv-ap")
    sessionStorage.removeItem("qv-utf")
    return push("/");
  };

  const handleLogOut = () => {
    logOut();
  };
 
  const dispatch = useDispatch();
  const handleLanguageChange = () => {
    const newLanguage = !lang;
    dispatch(toggleLanguage(newLanguage));
    localStorage.setItem('lan', JSON.stringify(newLanguage));
    setLang(newLanguage);
  };
  
 const storedLanguage = localStorage.getItem('lan');
 const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : false;

const [lang, setLang] = useState(initialLanguage);
useEffect(() => {
  if (storedLanguage) {
    dispatch(toggleLanguage(initialLanguage));
  }
}, [dispatch, initialLanguage, storedLanguage]);

  const handleHome = () => {
    dispatch(setCityName({
      eng: "",
      ban: ""
    }));
    dispatch(setHomePopularAreaName({
      eng: "",
      ban: ""
    }));
    dispatch(setFilterModalValue({
      eng: "",
      ban: ""
    }));
    dispatch(setDivisionNameEng({
      eng: "",
      ban: ""
    }));
    dispatch(setDistrictsName({
      eng: "",
      ban: ""
    }));
    dispatch(setOpenModalValue({
      eng: null,
      ban: null
    }));
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
    sessionStorage.removeItem("page")
    sessionStorage.removeItem("paged")
    sessionStorage.removeItem("pageU")
    sessionStorage.removeItem("pageF")
    sessionStorage.removeItem("pageFT")
    sessionStorage.removeItem("persist")
    sessionStorage.removeItem("qv-ap")
    sessionStorage.removeItem("qv-utf")
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
      <li className="flex justify-center lg:ml-0 lg:block">
        <Link href="/add-post" passHref>
          <div className="navbar-end">
            <Typography
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
              onClick={() => setOpenNav(false)}
            >
              {!lang ? (
                <Button className="w-[148px] lg:w-[212px] -ml-1/12 lg:ml-36 text-primary -my-2 py-[6px] lg:py-2 lg:text-[15px] bg-transparent border border-accent  font-normal lg:font-semibold rounded">
                  Post your ads
                </Button>
              ) : (
                <>
                  <Button className="w-[162px] lg:w-[212px] -ml-1/12 lg:ml-36 text-primary -my-2 py-2 lg:text-[15px] bg-transparent border border-accent font-normal lg:font-semibold rounded hidden lg:flex">
                    আপনার বিজ্ঞাপন দিন
                  </Button>
                  <Button className="w-[163px] lg:w-[212px] -ml-1/12 lg:ml-36 text-primary -my-2 py-[7.5px]  lg:text-[13px] bg-transparent border border-accent font-normal lg:font-semibold rounded flex lg:hidden">
                  আপনার বিজ্ঞাপন দিন
                  </Button>
                </>
              )}
            </Typography>
          </div>
        </Link>
      </li>
      <li className="flex justify-center lg:block">
        {!authenticated && !email ? (
          <Typography
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            ripple="false"
            onClick={() => setOpenNav(false)}
          >
            <Link href="/signIn" passHref>
              <span
                onClick={() => setOpenNav(false)}
                className="text-primary hidden lg:flex"
              >
                {!lang ? <span onClick={handleSignInOpen}>SignIn</span> : <span onClick={handleSignInOpen}>সাইন ইন</span>}
              </span>
            </Link>
          </Typography>
        ) : (
          <Typography
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
            ripple={"false"}
            onClick={() => setOpenNav(false)}
          >
            <Link href="/dashboard/profile" passHref>
              <div
                onClick={() => setOpenNav(false)}
                className="text-primary mt-1 lg:mt-0"
              >
                {!lang ? (
                  <span className="border border-accent px-12 -ml-1/12 lg:px-2 lg:ml-0 pt-[5px] pb-[6px] lg:py-[6.5px] rounded lg:text-base">
                    {" "}
                    Account
                  </span>
                ) : (
                  <span className="border border-accent px-[49.7px] -ml-1/12 lg:px-2 lg:ml-0 pt-[6px] pb-[6px] lg:py-[7px] rounded">
                    অ্যাকাউন্ট
                  </span>
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
                className="h-10 pb-1 md:pb-0 mt-1 md:mt-0 md:h-10 ml-5 md:ml-5 w-full md:w-full scale-125 hidden lg:flex"
                src={logo}
                alt={""}
              ></Image>
              <Image
                className="h-10 pb-1 md:pb-0 mt-1 md:mt-0 md:h-10 ml-5 md:ml-5 w-full md:w-full   scale-125 lg:hidden"
                src={logoShort}
                alt={""}
              ></Image>
            </Link>
            <div className="mt-1 mb-1 hidden lg:flex">
              {!lang ? (
                <Link
                  href="/ads"
                  className="font-semibold border border-success text-primary  rounded cursor-pointer px-2 py-[3px]"
                >
                  All Ads
                </Link>
              ) : (
                <Link
                  href="/ads"
                  className="font-semibold border border-success  text-primary  rounded cursor-pointer px-2 py-[3px]"
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
            {authenticated ? (
              <Button
                onClick={handleLogOut}
                size="sm"
                className="hidden lg:inline-block text-gray-700 -my-2 bg-accent rounded"
              >
                {!lang ? <span>LogOut</span> : <span>লগআউট</span>}
              </Button>
            ) : (
              <Link href={"/signUp"} passHref>
                <Button
                  size="sm"
                  className="hidden lg:inline-block text-gray-700 -my-2 bg-accent  rounded"
                  onClick={handleSignUpOpen}
                >
                  {!lang ? <span>SignUp</span> : <span>সাইন আপ</span>}
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="mt-3 font-semibold ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  text-primary"
              ripple={false}
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
        <Collapse  open={openNav}>
          <div className="mt-10"> {navList}</div>
          <div className="flex justify-center">
            {authenticated ? (
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
            ) : (
              <Link href={"/signIn"}>
                {!lang ? (
                  <Button
                    size="sm"
                    className="w-[150px] -ml-1/12 text-gray-700 -mt-3 bg-accent rounded"
                    onClick={handleSignInOpen}
                  >
                    <span onClick={() => setOpenNav(false)}>SignIn</span>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-[163px] -ml-1/12 rounded pt-[10px] pb-[6px] text-gray-700 -mt-4 bg-accent"
                    onClick={handleSignInOpen}
                  >
                    <span
                      className="text-[15px]"
                      onClick={() => setOpenNav(false)}
                    >
                      সাইন ইন
                    </span>
                  </Button>
                )}
              </Link>
            )}
          </div>
          <div className="flex justify-center rounded-full md:hidden pt-5 mb-5">
            {!lang ? (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[3.5px] pb-[2.5px] text-primary rounded cursor-pointer shadow-lg shadow-accent px-[53px] -ml-1/12"
              >
                বাংলা
              </span>
            ) : (
              <span
                onClick={handleLanguageChange}
                className="font-semibold border border-success pt-[4px] pb-[3px] text-primary px-[51px] -ml-1/12 rounded cursor-pointer shadow-lg shadow-accent"
              >
                English
              </span>
            )}
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
