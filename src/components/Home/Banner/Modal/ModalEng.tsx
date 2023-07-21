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
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalValue } from "@/redux/features/UniversitySlice/UniversitySlice";
import { AppDispatch} from "@/redux/app/store";
import { fetchAndFilterUniversityData } from "@/redux/features/UniversityFilter/UniversityFilerSlice";
const selectStyles = {
  control: (styles:any, { isFocused }:any) => ({
    ...styles,
    borderColor: isFocused ? '#1598ac' : '#1598ac',
    boxShadow: isFocused ? '0 0 0 1px #1598ac' : 'none',
  }),
};

export default function ModalEng() {
  const {
    handleOpenModalEng,
    openModalEng,
  }: any = useContext(StateContext);
   const [localEng, setLocalEng] = useState<string | null>(null);
  const handleCancel = () => {
    handleOpenModalEng();
    dispatch(setOpenModalValue({
      eng: "",
      ban: ""
    }))
    setLocalEng("")
  };
 
  const openModalValue = useSelector((state:any) => state.openModalValue );
  const dispatch = useDispatch<AppDispatch>()
  
  const handleSelectChange = (newValue:any) => {
    const newName =
      newValue.name === 'eng'
        ? { eng: newValue.label, ban: newValue.value }
        : { eng: newValue.value, ban: newValue.label };
    dispatch(setOpenModalValue(newName));
    setLocalEng(newName?.eng );
  };
  const handleFilterUniversity = () => {
    dispatch(fetchAndFilterUniversityData());
  };

  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
    
      <Dialog
        open={openModalEng}
        handler={handleOpenModalEng}
        className="bg-transparent lg:bg-neutral lg:px-10"
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
            আপনার প্রয়োজন অনুযায়ী বিশ্ববিদ্যালয় বা মেডিকেল কলেজ নির্বাচন করুন:
          </DialogHeader>
        )}
        {!lang ? (
          <DialogBody className="-mt-10 md:-mt-44 lg:mt-0 text-xs">
            <Select
              placeholder="Search according to your needs:"
              isSearchable
              options={colourOptions}
              onChange={handleSelectChange}
              className="text-sm bg-primary w-12/12 md:w-12/12 lg:w-full mx-auto text-gray-700 font-medium"
              styles={selectStyles}
            />
          </DialogBody>
        ) : (
          <DialogBody className="-mt-10 md:-mt-44 lg:mt-0  text-xs">
            <h2 className="text-primary text-lg md:text-xl mb-5 w-12/12 md:w-12/12 lg:w-full flex lg:hidden">
              আপনার প্রয়োজন অনুযায়ী বিশ্ববিদ্যালয় বা মেডিকেল কলেজ নির্বাচন
              করুন:{" "}
            </h2>
            <Select
              placeholder="অনুসন্ধান করতে প্রয়োজন অনুযায়ী নির্বাচন করুন"
              isSearchable
              options={colourOption}
              onChange={handleSelectChange}
              className="text-sm bg-primary w-12/12 md:w-12/12 lg:w-full mx-auto text-gray-700 font-medium"
              styles={selectStyles}
            />
          </DialogBody>
        )}
        <div className="flex lg:hidden justify-around py-3 w-12/12 md:w-12/12 lg:w-full">
          <Button
            className="text-red-500 bg-red-100 font-semibold rounded px-3"
            onClick={handleCancel}
          >
            {!lang ? " Cancel" : "বাতিল"}
          </Button>
          <Link
             href={
              localEng
                ? {
                    pathname: `/beside-institute/${localEng}`,
                    // query: {
                    //   type: encodeURIComponent(JSON.stringify(openModalValue.eng)),
                    // },
                  }
                : ''
            }
            passHref
          >
            <button
              className="text-primary bg-gradient-to-r from-accent to-warning px-3 py-2 rounded font-semibold"
              onClick={handleFilterUniversity}
              disabled={!openModalValue?.eng?.eng ? true : false}
            >
              {!lang ? " Confirm" : "নিশ্চিত করুন"}
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
            <span> {!lang ? " Cancel" : "বাতিল"}</span>
          </Button>
          <Link
             href={
              localEng
                ? {
                    pathname: `/beside-institute/${localEng}`,
                    // query: {
                    //   type: encodeURIComponent(JSON.stringify(openModalValue.eng)),
                    // },
                  }
                : ''
            }
            passHref
          >
            <Button
              className={
                openModalValue?.eng
                  ? "bg-gradient-to-r from-accent to-warning  hidden lg:flex"
                  : "bg-gray-600  hidden lg:flex"
              }
              onClick={handleFilterUniversity}
              disabled={!openModalValue?.eng?.eng ? true : false}
            >
              <span> {!lang ? " Confirm" : "নিশ্চিত করুন"}</span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
