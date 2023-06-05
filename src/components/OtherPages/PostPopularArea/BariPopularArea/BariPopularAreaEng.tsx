import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import React, { useContext } from "react";
import Select from "react-select";
import { options } from "./DataBariBan";
import { option } from "./DataBariEng";
import Cookies from 'js-cookie';

const BariPopularAreaEng = () => {
  const {
    getPostPopularAreaName,
    setGetPostPopularAreaName,
    setPostOpenModal,
  }: any = useContext(PostStateContext);

  if (getPostPopularAreaName?.name === "eng") {
    const newName = {
      eng: getPostPopularAreaName?.label,
      ban: getPostPopularAreaName?.value,
    };
    setGetPostPopularAreaName(newName);
    setPostOpenModal(true);
  } else if (getPostPopularAreaName?.name === "ban") {
    const newName = {
      eng: getPostPopularAreaName?.value,
      ban: getPostPopularAreaName?.label,
    };
    setGetPostPopularAreaName(newName);
    setPostOpenModal(true);
  }


  if (
    getPostPopularAreaName?.eng === "Sadar Road" ||
    getPostPopularAreaName?.eng === "Nattullabad" ||
    getPostPopularAreaName?.eng === "Rupatali" ||
    getPostPopularAreaName?.eng === "Gournadi" ||
    getPostPopularAreaName?.eng === "Nobogram Road" ||
    getPostPopularAreaName?.eng === "Kashipur Bazar" ||
    getPostPopularAreaName?.eng === "Amtala"
  ) {
    setPostOpenModal(true);
  }
  const lang = Cookies.get("lan");
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
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Sadar Road",
                    ban: "সদর রোড",
                  })
                }
                // name={!lang ? '' : ""}
              />
              {!lang ? (
                <span className="-mt-[2px]"> Sadar Road</span>
              ) : (
                <span className="-mt-[2px]"> সদর রোড</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setGetPostPopularAreaName({
                    eng: "Nattullabad",
                    ban: "নথুল্লাবাদ",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Nattullabad</span>
              ) : (
                <span className="-mt-[2px]"> নথুল্লাবাদ</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setGetPostPopularAreaName({ eng: "Rupatali", ban: "রুপাতলি" })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Rupatali</span>
              ) : (
                <span className="-mt-[2px]"> রুপাতলি</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href={"/AddProduct"}> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Gournadi", ban: "গৌরনদী" })
                }
                name="Gournadi"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Gournadi</span>
              ) : (
                <span className="-mt-[2px]"> গৌরনদী</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setGetPostPopularAreaName({
                    eng: "Nobogram Road",
                    ban: "নবগ্রাম রোড",
                  })
                }
              />
              {!lang ? (
                <span className="-mt-[2px]"> Nobogram Road</span>
              ) : (
                <span className="-mt-[2px]"> নবগ্রাম রোড</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({
                    eng: "Kashipur Bazar",
                    ban: "কাসিপুর বাজার",
                  })
                }
                name="Kashipur-Bazar"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Kashipur Bazar</span>
              ) : (
                <span className="-mt-[2px]"> কাসিপুর বাজার</span>
              )}
            </label>
          </li>
          {/* </Link>
          <Link href="/AddProduct"> */}
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={() =>
                  setGetPostPopularAreaName({ eng: "Amtala", ban: "আমতলা" })
                }
                name="Amtala"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Amtala</span>
              ) : (
                <span className="-mt-[2px]"> আমতলা</span>
              )}
            </label>
          </li>
          {/* </Link> */}

          <li
            className={
              getPostPopularAreaName?.eng === "Select others"
                ? "hidden"
                : "flex"
            }
          >
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                onClick={(e: any) =>
                  setGetPostPopularAreaName({
                    eng: "Select others",
                    ban: "অন্যান্য এলাকা",
                  })
                }
                name="Select-others"
              />
              {!lang ? (
                <span className="-mt-[2px]"> Select others</span>
              ) : (
                <span className="-mt-[2px]"> অন্যান্য এলাকা</span>
              )}
            </label>
          </li>

          {!lang ? (
            <div>
              {getPostPopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="Search"
                    isSearchable
                    options={option}
                    onChange={setGetPostPopularAreaName}
                    className="bg-primary border-none text-sm h-4 text-black font-medium"
                  />
                </li>
              )}
            </div>
          ) : (
            <div>
              {getPostPopularAreaName?.eng === "Select others" && (
                <li>
                  <Select
                    placeholder="অনুসন্ধান"
                    isSearchable
                    options={options}
                    onChange={setGetPostPopularAreaName}
                    className="bg-primary border-none text-sm h-4 text-black font-medium"
                  />
                </li>
              )}
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default BariPopularAreaEng;
