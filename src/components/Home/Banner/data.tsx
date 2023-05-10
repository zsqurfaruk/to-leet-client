export interface ColourOption {
  value: number;
  label: string; 
}

export const colourOptions:readonly ColourOption[] = [
  {
    value: 1,
    label: "University of Dhaka",
  },
  {
    value: 2,
    label: "University of Rajshahi",
  },
  {
    value: 3,
    label: "University of Chittagong",
  },
  {
    value: 4,
    label: "Jahangirnagar University",
  },
  {
    value: 5,
    label: "Jagannath University",
  },
  {
    value: 6,
    label: "Bangladesh University of Engineering & Technology",
  },
  {
    value: 7,
    label: "Islamic University, Bangladesh",
  },
  {
    value: 8,
    label: "Shahjalal University of Science & Technology",
  },
  {
    value: 9,
    label: "Khulna University",
  },
  {
    value: 10,
    label: "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
  },
  {
    value: 11,
    label: "Hajee Mohammad Danesh Science & Technology University",
  },
  {
    value: 12,
    label: "Mawlana Bhashani Science & Technology University",
  },
  {
    value: 13,
    label: "Patuakhali Science And Technology University",
  },
  {
    value: 14,
    label: "Sher-e-Bangla Agricultural University",
  },
  {
    value: 15,
    label: "Chittagong University of Engineering & Technology",
  },
  {
    value: 16,
    label: "Rajshahi University of Engineering & Technology",
  },
  {
    value: 17,
    label: "Khulna University of Engineering & Technology",
  },
  {
    value: 18,
    label: "Dhaka University of Engineering & Technology",
  },
  {
    value: 19,
    label: "Noakhali Science & Technology University",
  },
  {
    value: 20,
    label: "Bangladesh Agricultural University",
  },
  {
    value: 21,
    label: "Comilla University",
  },
  {
    value: 22,
    label: "Jatiya Kabi Kazi Nazrul Islam University",
  },
  {
    value: 23,
    label: "Chittagong Veterinary and Animal Sciences University",
  },
  {
    value: 24,
    label: "Sylhet Agricultural University",
  },
  {
    value: 25,
    label: "Jessore University of Science & Technology",
  },
  {
    value: 26,
    label: "Pabna University of Science and Technology",
  },
  {
    value: 27,
    label: "Begum Rokeya University, Rangpur",
  },
  {
    value: 28,
    label: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
  },
  {
    value: 29,
    label: "University of Barishal",
  },
  {
    value: 30,
    label: "Rangamati Science and Technology University",
  },
  {
    value: 31,
    label: "Bangabandhu Sheikh Mujibur Rahman Maritime University, Bangladesh",
  },
  {
    value: 32,
    label: "Islamic Arabic University",
  },
  {
    value: 33,
    label: "Chittagong Medical University",
  },
  {
    value: 34,
    label: "Rajshahi Medical University",
  },
  {
    value: 35,
    label: "Sylhet Medical University",
  },
  {
    value: 36,
    label: "Dhaka Medical University",
  },
  {
    value: 37,
    label: "Rabindra University, Bangladesh",
  },
  {
    value: 38,
    label: "Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh",
  },
  {
    value: 39,
    label: "Sheikh Hasina University",
  },
  {
    value: 40,
    label: "Khulna Agricultural University",
  },
  {
    value: 41,
    label: "Chandpur Science and Technology University",
  },
  {
    value: 42,
    label: "Bangabandhu Sheikh Mujibur Rahman University, Kishoreganj",
  },
  {
    value: 43,
    label: "Hobiganj Agricultural University",
  },
  {
    value: 44,
    label: "Sheikh Hasina Medical University, Khulna",
  },
  {
    value: 45,
    label: "Kurigram Agricultural University",
  },
  {
    value: 46,
    label: "Sunamganj Science and Technology University",
  },
  {
    value: 47,
    label:
      "Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Pirojpur",
  },
];



import { useRouter } from "next/router";

import { Fragment, useState, useContext } from "react";
import {
  //   Button,
  //   Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
// import { StateContext } from "@/Context/StateContext/StateContext";
// import style from "../../../../styles/banner.module.css"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import Select from "react-dropdown-select";

import React from "react";
import { StateContext } from "@/Context/StateContext/StateContext";
// import Select from "react-select";
// import { colourOptions } from "../data";

export default function ModalBanMob() {
  const { open, setOpen, handleClickOpen }: any = useContext(StateContext);

  const handleClose = () => {
    setOpen(false);
  };
  interface IData {
    value: number;
    name: string;
  }
  const [values, setValues] = useState<IData[]>([]);

  const options = [
    {
      value: 1,
      name: "University of Dhaka",
    },
    {
      value: 2,
      name: "University of Rajshahi",
    },
    {
      value: 3,
      name: "University of Chittagong",
    },
    {
      value: 4,
      name: "Jahangirnagar University",
    },
    {
      value: 5,
      name: "Jagannath University",
    },
    {
      value: 6,
      name: "Bangladesh University of Engineering & Technology",
    },
    {
      value: 7,
      name: "Islamic University, Bangladesh",
    },
    {
      value: 8,
      name: "Shahjalal University of Science & Technology",
    },
    {
      value: 9,
      name: "Khulna University",
    },
    {
      value: 10,
      name: "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
    },
    {
      value: 11,
      name: "Hajee Mohammad Danesh Science & Technology University",
    },
    {
      value: 12,
      name: "Mawlana Bhashani Science & Technology University",
    },
    {
      value: 13,
      name: "Patuakhali Science And Technology University",
    },
    {
      value: 14,
      name: "Sher-e-Bangla Agricultural University",
    },
    {
      value: 15,
      name: "Chittagong University of Engineering & Technology",
    },
    {
      value: 16,
      name: "Rajshahi University of Engineering & Technology",
    },
    {
      value: 17,
      name: "Khulna University of Engineering & Technology",
    },
    {
      value: 18,
      name: "Dhaka University of Engineering & Technology",
    },
    {
      value: 19,
      name: "Noakhali Science & Technology University",
    },
    {
      value: 20,
      name: "Bangladesh Agricultural University",
    },
    {
      value: 21,
      name: "Comilla University",
    },
    {
      value: 22,
      name: "Jatiya Kabi Kazi Nazrul Islam University",
    },
    {
      value: 23,
      name: "Chittagong Veterinary and Animal Sciences University",
    },
    {
      value: 24,
      name: "Sylhet Agricultural University",
    },
    {
      value: 25,
      name: "Jessore University of Science & Technology",
    },
    {
      value: 26,
      name: "Pabna University of Science and Technology",
    },
    {
      value: 27,
      name: "Begum Rokeya University, Rangpur",
    },
    {
      value: 28,
      name: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
    },
    {
      value: 29,
      name: "University of Barishal",
    },
    {
      value: 30,
      name: "Rangamati Science and Technology University",
    },
    {
      value: 31,
      name: "Bangabandhu Sheikh Mujibur Rahman Maritime University, Bangladesh",
    },
    {
      value: 32,
      name: "Islamic Arabic University",
    },
    {
      value: 33,
      name: "Chittagong Medical University",
    },
    {
      value: 34,
      name: "Rajshahi Medical University",
    },
    {
      value: 35,
      name: "Sylhet Medical University",
    },
    {
      value: 36,
      name: "Dhaka Medical University",
    },
    {
      value: 37,
      name: "Rabindra University, Bangladesh",
    },
    {
      value: 38,
      name: "Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh",
    },
    {
      value: 39,
      name: "Sheikh Hasina University",
    },
    {
      value: 40,
      name: "Khulna Agricultural University",
    },
    {
      value: 41,
      name: "Chandpur Science and Technology University",
    },
    {
      value: 42,
      name: "Bangabandhu Sheikh Mujibur Rahman University, Kishoreganj",
    },
    {
      value: 43,
      name: "Hobiganj Agricultural University",
    },
    {
      value: 44,
      name: "Sheikh Hasina Medical University, Khulna",
    },
    {
      value: 45,
      name: "Kurigram Agricultural University",
    },
    {
      value: 46,
      name: "Sunamganj Science and Technology University",
    },
    {
      value: 47,
      name: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Pirojpur",
    },
  ];
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className=" items-center mt-20 rounded-md"
        // Add your desired Tailwind CSS classes to the className prop
      >
        <DialogContent className="w-96 mx-auto h-96">
          <p onClick={handleClose}>
            <Select
              options={options}
              labelField="name"
              searchable
              onChange={(values: any) => setValues(values)}
              className="mt-2"
              values={values}
            />
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

{
  /* <div>
<Dialog
  open={openModalBan}
  handler={handleOpenModalBan}
  className="bg-primary lg:px-10 w-40"
  id={style.modalChange}
  animate={{
    mount: { scale: 1, y: -60, innerWidth:100},
    unmount: { scale: 2, y: -100},
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
      className={openModalBan?.label ? "bg-gradient-to-r from-accent to-cyan-500" : "bg-gray-200"}
      onClick={handleOpenModalBan} 
      disabled = {!openModalBan?.label ? true : false}
    >
      <span>Confirm</span>
    </Button>
  </DialogFooter>
</Dialog>
</div> */
}
