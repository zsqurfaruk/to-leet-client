import { useContext } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { StateContext } from "@/Context/StateContext/StateContext";
import React from "react";
import FilterDestinationType from "@/components/OtherPages/PostDestinationType/FilterDestinationType";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useSelector } from "react-redux";

export default function FilterModal() {
  const {
    filterModal,
    setFilterModal,
    handleFilterModal,
    setHomePopularAreaName,
    setDistrictsName
  }: any = useContext(StateContext);
  // const {lang}:any = useContext(FilterContext)
  const handleCancel = () => {
    setFilterModal(false);
    setHomePopularAreaName({});
    setDistrictsName({})
  };
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <Dialog
        open={filterModal}
        handler={handleFilterModal}
        className="bg-transparent lg:bg-neutral lg:px-10"
        // id={style.modalChange}
        animate={{
          mount: { scale: 1, y: -80 },
          unmount: { scale: 1, y: -100 },
        }}
      >
        <DialogBody className="-mt-20 md:-mt-72 lg:mt-0 text-xs">
          <FilterDestinationType></FilterDestinationType>
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
