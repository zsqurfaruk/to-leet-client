import { useContext } from "react";
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
import { colourOption } from "./DataBan";

export default function ModalBan() {
  const { handleOpenModalBan, setOpenModalBan, openModalBan }: any =
    useContext(StateContext);

  return (
    <div>
      <Dialog
        open={openModalBan}
        handler={handleOpenModalBan}
        className="bg-transparent lg:bg-primary lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogHeader className="text-xl hidden lg:flex mt-5">
        আপনার প্রয়োজন অনুযায়ী বিশ্ববিদ্যালয় এবং মেডিকেল কলেজ নির্বাচন করুন:
        </DialogHeader>
        <DialogBody className="-mt-52 md:-mt-72 lg:mt-0  text-xs">
          <h2 className="text-primary text-lg md:text-xl mb-5 w-80 md:w-[600px] -ml-24 md:-ml-40 lg:ml-0 flex lg:hidden">আপনার প্রয়োজন অনুযায়ী বিশ্ববিদ্যালয় এবং মেডিকেল কলেজ নির্বাচন করুন: </h2>
          <Select
            placeholder="অনুসন্ধান করতে ক্লিক করুন এবং আপনার প্রয়োজন অনুযায়ী নির্বাচন করুন"
            isSearchable
            options={colourOption}
            onChange={setOpenModalBan}
            className="text-sm bg-primary w-80 md:w-[40rem] lg:w-full mr-10 md:mr-12 lg:mr-0  -ml-24 md:-ml-40 lg:ml-0 mx-auto text-black font-medium"
          />
        </DialogBody>
        <div className="flex lg:hidden justify-around py-3 w-80 -ml-20 md:-ml-1">
          <button
            className="text-red-500 bg-red-100 font-semibold rounded px-3"
            onClick={handleOpenModalBan}
          >
            বাতিল
          </button>
          <button
            className="text-secondary bg-accent px-2 rounded font-semibold"
            onClick={handleOpenModalBan}
          >
            নিশ্চিত করুন
          </button>
        </div>
        <DialogFooter className="hidden lg:flex">
          <Button
            variant="text"
            color="red"
            onClick={handleOpenModalBan}
            className="mr-1"
          >
            <span>বাতিল</span>
          </Button>
          <Button
            className={
              openModalBan?.label
                ? "bg-gradient-to-r from-accent to-cyan-500"
                : "bg-gray-600"
            }
            onClick={handleOpenModalBan}
            disabled={!openModalBan?.label ? true : false}
          >
            <span>নিশ্চিত করুন</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
