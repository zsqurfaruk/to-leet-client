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
import PostDestinationType from "@/components/OtherPages/PostDestinationType/PostDestinationType";

export default function PostAreaModalEng() {
  const {
    handlePostOpenModal,
    postOpenModal,
    setPostOpenModal,
    setGetPopularAreaName,
    postCityNameEng,
    getPopularAreaName
  }: any = useContext(PostStateContext);
  console.log(postOpenModal);

  const handleCancel = () => {
    setPostOpenModal(false);
    setGetPopularAreaName("");
  };
  return (
    <div>
      <Dialog
        open={postOpenModal}
        handler={handlePostOpenModal}
        className="bg-transparent lg:bg-primary lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        {/* <DialogHeader className="text-xl hidden lg:flex mt-5 justify-evenly">
          <span>City: {postCityNameEng}</span> <span>Area: {getPopularAreaName}</span>
        </DialogHeader> */}
        <DialogBody className="-mt-52 md:-mt-72 lg:mt-0  text-xs">
           <PostDestinationType></PostDestinationType>
        </DialogBody>
      
        <DialogFooter className="hidden lg:flex">
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1"
          >
            <span>বাতিল</span>
          </Button>
          {/* <Button
            className={
              postOpenModal?.label
                ? "bg-gradient-to-r from-accent to-cyan-500"
                : "bg-gray-600"
            }
            onClick={handlePostOpenModal}
            disabled={!postOpenModal?.label ? true : false}
          >
            <span>নিশ্চিত করুন</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </div>
  );
}
