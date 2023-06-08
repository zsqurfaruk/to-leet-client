import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { StateContext } from "@/Context/StateContext/StateContext";
import React from "react";
import Select from "react-select";
import { colourOptions } from "./DataEng";
import { colourOption } from "./DataBan";
import Link from "next/link";
import Cookies from 'js-cookie';
import { APIContext } from "@/Context/ApiContext/ApiContext";

export default function ModalEng() {
  const {
    handleOpenModalEng,
    openModalEng,
    openModalValue,
    setOpenModalValue,
  }: any = useContext(StateContext);

  const { handleFilterUniversity}: any = useContext(APIContext);
  const handleCancel = () => {
    handleOpenModalEng();
    setOpenModalValue({});
  };
  if (openModalValue?.name === "eng") {
    const newName = {
      eng: openModalValue?.label,
      ban: openModalValue?.value,
    };
    setOpenModalValue(newName);
    Cookies.set("openMV",newName?.eng)
  } else if (openModalValue?.name === "ban") {
    const newName = {
      eng: openModalValue?.value,
      ban: openModalValue?.label,
    };
    setOpenModalValue(newName);
    Cookies.set("openMV",newName?.eng)
  }

  const lang = Cookies.get("lan");
  return (
    <div>
    
      <Dialog
        open={openModalEng}
        handler={handleOpenModalEng}
        className="bg-transparent lg:bg-neutral lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        {!lang ? (
          <DialogHeader className="text-xl hidden lg:flex">
            Select your University or Medical College
          </DialogHeader>
        ) : (
          <DialogHeader className="text-xl hidden lg:flex mt-5">
            আপনার প্রয়োজন অনুযায়ী বিশ্ববিদ্যালয় এবং মেডিকেল কলেজ নির্বাচন করুন:
          </DialogHeader>
        )}
        {!lang ? (
          <DialogBody className="-mt-10 md:-mt-44 lg:mt-0 text-xs">
            <Select
              placeholder="Search according to your needs:"
              isSearchable
              options={colourOptions}
              onChange={setOpenModalValue}
              className="text-sm bg-primary w-80 md:w-[40rem]  mr-10 md:mr-12 lg:mr-0 lg:w-full -ml-24 md:-ml-40 lg:ml-0 mx-auto text-gray-700 font-medium"
            />
          </DialogBody>
        ) : (
          <DialogBody className="-mt-10 md:-mt-44 lg:mt-0  text-xs">
            <h2 className="text-primary text-lg md:text-xl mb-5 w-80 md:w-[600px] -ml-24 md:-ml-40 lg:ml-0 flex lg:hidden">
              আপনার প্রয়োজন অনুযায়ী বিশ্ববিদ্যালয় এবং মেডিকেল কলেজ নির্বাচন
              করুন:{" "}
            </h2>
            <Select
              placeholder="অনুসন্ধান করতে ক্লিক করুন এবং আপনার প্রয়োজন অনুযায়ী নির্বাচন করুন"
              isSearchable
              options={colourOption}
              onChange={setOpenModalValue}
              className="text-sm bg-primary w-80 md:w-[40rem] lg:w-full mr-10 md:mr-12 lg:mr-0  -ml-24 md:-ml-40 lg:ml-0 mx-auto text-gray-700 font-medium"
            />
          </DialogBody>
        )}
        <div className="flex lg:hidden justify-around py-3 w-80 -ml-20 md:-ml-1">
          <button
            className="text-red-500 bg-red-100 font-semibold rounded px-3"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <Link
            href={{
              pathname: "/beside-institute",
              query: {
                type: encodeURIComponent(JSON.stringify(openModalValue.eng)),
              },
            }}
          >
            <button
              className="text-primary bg-gradient-to-r from-accent to-warning px-3 py-2 rounded font-semibold"
              onClick={handleFilterUniversity}
            >
              Confirm
            </button>
          </Link>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1  hidden lg:flex"
          >
            <span>Cancel</span>
          </Button>
          <Link
            href={{
              pathname: "/beside-institute",
              query: {
                type: encodeURIComponent(JSON.stringify(openModalValue.eng)),
              },
            }}
          >
            <Button
              className={
                openModalValue?.eng
                  ? "bg-gradient-to-r from-accent to-warning  hidden lg:flex"
                  : "bg-gray-600  hidden lg:flex"
              }
              onClick={handleFilterUniversity}
              disabled={!openModalValue?.eng ? true : false}
            >
              <span  >Confirm</span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
