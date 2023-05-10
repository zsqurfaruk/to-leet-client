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

export default function ModalBanMob() {
  const { handleOpenModalBan, setOpenModalBan, openModalBan }: any =
    useContext(StateContext);

  console.log(openModalBan?.label);
  return (
    <div>
      <Dialog
        open={openModalBan}
        handler={handleOpenModalBan}
        className="lg:px-10 bg-transparent"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1.1, y: -200 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        {/* <DialogHeader>Select your university</DialogHeader> */}
        <DialogBody>
            <h1 className="text-white mb-5 w-80  -ml-24 font-semibold text-2xl">Select your university</h1>
          <Select
            placeholder="Search your university"
            isSearchable
            options={colourOptions}
            onChange={setOpenModalBan}
            className="text-sm bg-primary w-80 -ml-24 mx-auto"
          />
        </DialogBody>
        <div className="flex justify-around py-3 w-80 -ml-20">
            <button className="text-red-500 bg-red-100 font-semibold rounded px-3" onClick={handleOpenModalBan}>Cancel</button>
            <button className="text-secondary bg-accent px-2 rounded font-semibold" onClick={handleOpenModalBan}>Confirm</button>
          {/* <Button
            variant="text"
            color="red"
            onClick={handleOpenModalBan}
            className="mr-1 bg-red-200 "
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
          </Button> */}
        </div>
      </Dialog>
    </div>
  );
}
