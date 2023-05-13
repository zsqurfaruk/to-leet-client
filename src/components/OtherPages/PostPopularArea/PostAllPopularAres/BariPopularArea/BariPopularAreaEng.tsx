import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataBariEng";
import { useRouter } from "next/router";
import PostDetails from "@/pages/add-post/post-details";
import Link from "next/link";
const BariPopularAreaEng = () => {
  const {
    getPopularAreaName,
    setGetPopularAreaName,
    handlePostOpenModal,
    setPostOpenModal,
    postOpenModal,
  }: any = useContext(PostStateContext);
  const router = useRouter();
  if (getPopularAreaName?.label) {
    setGetPopularAreaName(getPopularAreaName?.label);
    // router.push("/AddProduct");
    // handlePostOpenModal();
    setPostOpenModal(true);
  }
  // if(getPopularAreaName){

  //   setPostOpenModal(true)
  // }
  if (
    getPopularAreaName === "Sadar-Road" ||
    getPopularAreaName === "Nattullabad" ||
    getPopularAreaName === "Rupatali" ||
    getPopularAreaName === "Gournadi" ||
    getPopularAreaName === "Nobogram-Road" ||
    getPopularAreaName === "Kashipur-Bazar" ||
    getPopularAreaName === "Amtala"
  ) {
    setPostOpenModal(true);
    // router.push("/AddProduct");
  }
  console.log(getPopularAreaName);
  return (
    <section>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
          {/* <Link href={"/AddProduct"}> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Sadar-Road"
              />
              <span className="-mt-[2px]"> Sadar Road</span>
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Nattullabad"
              />
              <span className="-mt-[2px]"> Nattullabad</span>
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Rupatali"
              />
              <span className="-mt-[2px]"> Rupatali</span>
            </label>
          </li>
          {/* </Link>
          <Link href={"/AddProduct"}> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Gournadi"
              />
              <span className="-mt-[2px]"> Gournadi</span>
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Nobogram-Road"
              />
              <span className="-mt-[2px]"> Nobogram Road</span>
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Kashipur-Bazar"
              />
              <span className="-mt-[2px]"> Kashipur Bazar</span>
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Amtala"
              />
              <span className="-mt-[2px]"> Amtala</span>
            </label>
          </li>
          {/* </Link> */}

          <li
            className={
              getPopularAreaName === "Select-others" ? "hidden" : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) => setGetPopularAreaName(e.target.name)}
                name="Select-others"
              />
              <span className="-mt-[2px]"> Select others</span>
            </label>
          </li>

          {getPopularAreaName === "Select-others" && (
            <li>
              <Select
                placeholder="Search"
                isSearchable
                options={options}
                onChange={setGetPopularAreaName}
                className="bg-primary border-none text-sm h-4 text-black font-medium"
              />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default BariPopularAreaEng;
