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
import { colourOptions } from "../DataBan";

export default function ModalEng() {
  const { handleOpenModalEng, setOpenModalEng, openModalEng }: any =
    useContext(StateContext);

  return (
    <div>
      <Dialog
        open={openModalEng}
        handler={handleOpenModalEng}
        className="bg-transparent lg:bg-primary lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogHeader className="text-xl hidden lg:flex">
          বিশ্ববিদ্যালয় এবং মেডিকেল কলেজ নির্বাচন করুন
        </DialogHeader>
        <DialogBody className="-mt-52 md:-mt-72 lg:mt-0 text-xs">
          <Select
            placeholder="অনুসন্ধান করতে ক্লিক করুন এবং আপনার প্রয়োজন অনুযায়ী নির্বাচন করুন"
            isSearchable
            options={colourOptions}
            onChange={setOpenModalEng}
            className="text-sm bg-primary w-80 md:w-[40rem]  mr-10 md:mr-12 lg:mr-0 lg:w-full -ml-24 md:-ml-40 lg:ml-0 mx-auto text-black font-medium"
          />
        </DialogBody>
        <div className="flex lg:hidden justify-around py-3 w-80 -ml-20 md:-ml-1">
          <button
            className="text-red-500 bg-red-100 font-semibold rounded px-3"
            onClick={handleOpenModalEng}
          >
            Cancel
          </button>
          <button
            className="text-secondary bg-accent px-2 rounded font-semibold"
            onClick={handleOpenModalEng}
          >
            Confirm
          </button>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenModalEng}
            className="mr-1  hidden lg:flex"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className={
              openModalEng?.label
                ? "bg-gradient-to-r from-accent to-cyan-500  hidden lg:flex"
                : "bg-gray-600  hidden lg:flex"
            }
            onClick={handleOpenModalEng}
            disabled={!openModalEng?.label ? true : false}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
