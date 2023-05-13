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
import { colourOptions } from "./DataBan";
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import DestinationType from "../../DestinationType/DestinationType";

export default function FilterModal() {
  const { handlePostOpenModal, size, postOpenModal, setSize, setPostAreaName }: any =
    useContext(PostStateContext);

  return (
    <div>
      <Dialog
        open={size === "xxl"}
        size={size || "xxl"}
        handler={handlePostOpenModal}
        className="h-screen md:h-full"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -40 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogBody className="md:pt-32 h-screen md:h-full pt-32 pb-40 md:pb-0 mb-40 md:mb-0">
          <DestinationType></DestinationType>
        </DialogBody>
        {/* <div className="flex lg:hidden justify-around py-3 w-80 -ml-20 md:-ml-1">
          
          <button
            className="text-red-500 bg-red-100 font-semibold rounded px-3"
            onClick={handlePostOpenModal(null)}
          >
            বাতিল
          </button>
          <button
            className="text-secondary bg-accent px-2 rounded font-semibold"
            onClick={handlePostOpenModal(null)}
          >
            নিশ্চিত করুন
          </button>
        </div> */}
        <DialogFooter >
          <Button  variant="text"
            color="red" className="mr-1" onClick={()=>setPostAreaName("")}>বাতিল</Button>
          {/* <Button
            variant="text"
            color="red"
            onClick={()=>handlePostOpenModal(null)}
            
          >
            <span></span>
          </Button> */}
          <Button
            className={
              postOpenModal?.label
                ? "bg-gradient-to-r from-accent to-cyan-500"
                : "bg-gray-600"
            }
            onClick={handlePostOpenModal(null)}
            disabled={!postOpenModal?.label ? true : false}
          >
            <span>নিশ্চিত করুন</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
