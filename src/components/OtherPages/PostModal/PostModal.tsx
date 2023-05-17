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

export default function PostModal() {
  const {
    handlePostUniversityModal,
    postUniversityModal,
    setPostUniversityModal,
    setPostUniversityModalValue,
    setGetUniversityModalValue,
  }: any = useContext(PostStateContext);
  const handleCancel = () => {
    setPostUniversityModal(false);
    setPostUniversityModalValue({});
  };

  const lang = localStorage.getItem("lan");
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
          {lang ? (
            <span> Select your University or Medical College</span>
          ) : (
            <span className="text-lg">
              {" "}
              আপনার বিশ্ববিদ্যালয় বা মেডিকেল কলেজ নির্বাচন
              করুনঃ
            </span>
          )}
        </DialogHeader>
        <DialogBody className="-mt-52 md:-mt-72 lg:mt-0 text-xs">
          {lang ? (
            <Select
              placeholder="Search according to your needs:"
              isSearchable
              options={colourOptions}
              onChange={setGetUniversityModalValue}
              className="text-sm bg-primary w-80 md:w-[40rem]  mr-10 md:mr-12 lg:mr-0 lg:w-full -ml-24 md:-ml-40 lg:ml-0 mx-auto text-black font-medium"
            />
          ) : (
            <Select
              placeholder="আপনার বিশ্ববিদ্যালয় বা মেডিকেল কলেজ নির্বাচন করুনঃ"
              isSearchable
              options={colourOption}
              onChange={setGetUniversityModalValue}
              className="text-sm bg-primary w-80 md:w-[40rem]  mr-10 md:mr-12 lg:mr-0 lg:w-full -ml-24 md:-ml-40 lg:ml-0 mx-auto text-black font-medium"
            />
          )}
        </DialogBody>
        <div className="flex lg:hidden justify-around py-3 w-80 -ml-20 md:-ml-1">
          <button
            className="text-red-500 bg-red-100 font-semibold rounded px-3"
            onClick={handleCancel}
          >
            {lang ? " Cancel" : "বাতিল"}
          </button>
          <button
            className="text-secondary bg-accent px-2 rounded font-semibold"
            onClick={handleCancel}
          >
            {lang ? " Confirm" : "নিশ্চিত করুন"}
          </button>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1  hidden lg:flex"
          >
            {lang ? " Cancel" : "বাতিল"}
          </Button>
          <Button
            className={
              postUniversityModal
                ? "bg-gradient-to-r from-accent to-cyan-500  hidden lg:flex"
                : "bg-gray-600  hidden lg:flex"
            }
            onClick={handleCancel}
            // disabled={postUniversityModal === true ? false : true}
          >
            {lang ? " Confirm" : "নিশ্চিত করুন"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
