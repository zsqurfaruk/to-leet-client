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
import Cookies from 'js-cookie';
import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import PostDestinationType from "@/components/OtherPages/PostDestinationType/PostDestinationType";
 import { useSelector } from "react-redux";

export default function PostAreaModalEng() {
  const {
    handlePostOpenModal,
    postOpenModal,
    setPostOpenModal,
    setGetPostPopularAreaName,
    setPostDistrictsName
  }: any = useContext(PostStateContext);
   const handleCancel = () => {
    setPostOpenModal(false);
    setGetPostPopularAreaName({});
    setPostDistrictsName({})
  };
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <Dialog
        open={postOpenModal}
        handler={handlePostOpenModal}
        className="bg-transparent lg:bg-neutral lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogBody className="-mt-20 md:-mt-72 lg:mt-0 text-xs">
          <PostDestinationType></PostDestinationType>
        </DialogBody>

        <DialogFooter className="hidden lg:flex">
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1"
          >
            {!lang ? <span>Cancel</span> : <span>বাতিল</span>}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
