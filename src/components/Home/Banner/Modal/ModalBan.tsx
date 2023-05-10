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
import { colourOptions } from "../data";

export default function ModalBan() {
  const { handleOpenModalBan, setOpenModalBan, openModalBan }: any =
    useContext(StateContext);

  console.log(openModalBan?.label);
  return (
    <div>
      <Dialog
        open={openModalBan}
        handler={handleOpenModalBan}
        className="bg-primary lg:px-10 w-40"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -60 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogHeader>Select your university</DialogHeader>
        <DialogBody divider>
          <Select
            placeholder="Search your university"
            isSearchable
            options={colourOptions}
            onChange={setOpenModalBan}
            className="text-sm bg-primary"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenModalBan}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className={
              openModalBan?.label
                ? "bg-gradient-to-r from-accent to-cyan-500"
                : "bg-gray-200"
            }
            onClick={handleOpenModalBan}
            disabled={!openModalBan?.label ? true : false}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
