import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";
import Select from "react-select";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { colourOptions } from "../../Home/Banner/Modal/DataEng";
import { colourOption } from "../../Home/Banner/Modal/DataBan";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

export default function PostModal() {
  const {
    handlePostUniversityModal,
    postUniversityModal,
    getUniversityModalValue,
    setPostUniversityModal,
    setPostUniversityModalValue,
    setGetUniversityModalValue,
  }: any = useContext(PostStateContext);
  // const { lang }: any = useContext(FilterContext);
  const handleCancel = () => {
    setPostUniversityModal(false);
    setPostUniversityModalValue({});
  }
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <Dialog
        open={postUniversityModal}
        handler={handlePostUniversityModal}
        className="bg-transparent lg:bg-primary lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogHeader className="text-xl hidden lg:flex">
          {!lang ? (
            <span> Select your University or Medical College</span>
          ) : (
            <span className="text-lg">
              {" "}
              আপনার বিশ্ববিদ্যালয় বা মেডিকেল কলেজ নির্বাচন করুনঃ
            </span>
          )}
        </DialogHeader>
        <DialogBody className="-mt-10 md:-mt-44 lg:mt-0 text-xs">
          {!lang ? (
            <Select
              placeholder="Search according to your needs:"
              isSearchable
              options={colourOptions}
              onChange={setGetUniversityModalValue}
              className="text-sm bg-primary w-12/12 md:w-12/12 lg:w-full mx-auto text-gray-700 font-medium"
            />
          ) : (
            <Select
              placeholder="আপনার বিশ্ববিদ্যালয় বা মেডিকেল কলেজ নির্বাচন করুনঃ"
              isSearchable
              options={colourOption}
              onChange={setGetUniversityModalValue}
              className="text-sm bg-primary w-12/12 md:w-12/12 lg:w-full mx-auto text-gray-700 font-medium"
            />
          )}
        </DialogBody>
        <div className="flex lg:hidden justify-evenly gap-5 py-3 w-12/12 md:w-12/12 lg:w-full">
          <Button
            className="text-red-500 bg-red-100 font-semibold rounded px-4"
            onClick={handleCancel}
          >
            {!lang ? "Cancel" : "বাতিল"}
          </Button>
          <button
            className={
              getUniversityModalValue?.eng
                ? "text-primary bg-gradient-to-r from-accent to-warning px-3 py-2 rounded font-semibold"
                : "text-primary bg-gradient-to-r from-accent to-warning px-3 py-2 rounded font-semibold opacity-60"
            }
            onClick={handleCancel}
            disabled={getUniversityModalValue?.eng ? false : true}
          >
            {!lang ? " Confirm" : "নিশ্চিত করুন"}
          </button>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1  hidden lg:flex"
          >
            {!lang ? " Cancel" : "বাতিল"}
          </Button>
          <Button
            className={
              postUniversityModal
                ? "bg-gradient-to-r from-accent to-cyan-500  hidden lg:flex"
                : "bg-gray-600  hidden lg:flex"
            }
            onClick={handleCancel}
            disabled={getUniversityModalValue?.eng ? false : true}
          >
            {!lang ? " Confirm" : "নিশ্চিত করুন"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
