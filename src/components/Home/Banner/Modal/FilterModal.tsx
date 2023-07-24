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
 import { useDispatch, useSelector } from "react-redux";
import { setHomePopularAreaName } from "@/redux/features/FilterArea/FilterAreaSlice";
import { setDistrictsName } from "@/redux/features/DistrictsFilter/DistrictsSlice";

export default function FilterModal() {
  const {
    filterModal,
    setFilterModal,
    handleFilterModal,
  }: any = useContext(StateContext);

  const dispatch = useDispatch();
   const handleCancel = () => {
    setFilterModal(false);
    dispatch(setHomePopularAreaName({
      eng: "",
      ban: ""
    }));
    dispatch(setDistrictsName({
      eng: "",
      ban: ""
    }));
     
  };
  const lang = useSelector((state:any) => state.language.language);
  return (
    <div>
      <Dialog
        open={filterModal}
        handler={handleFilterModal}
        className="bg-transparent lg:bg-neutral lg:px-10"
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
