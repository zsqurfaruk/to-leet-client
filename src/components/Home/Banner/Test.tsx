import { StateContext } from "@/Context/StateContext/StateContext";
import React, { useState, useContext } from "react";
import Select from "react-dropdown-select";

const Test = () => {
  const { handleClickOpen, isOpen, setIsOpen }: any =
    useContext(StateContext);

  const handleClose = () => {
    setIsOpen(false);
    console.log("close");
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
      <button onClick={handleClickOpen}>show modal</button>
      {isOpen && (
        <dialog
          open={isOpen}
          onClose={handleClose}
          className="h-96 w-96 bg-red-200"
        >
          <p>
            <Select
              options={options}
              labelField="name"
              onChange={(values: any) => setValues(values)}
              values={[]}
            />
          </p>
          <button onClick={handleClose}>close</button>
        </dialog>
      )}
    </div>
  );
};

export default Test;



// import { useRouter } from "next/router";

// import { Fragment, useState, useContext } from "react";
// import {
//   //   Button,
//   //   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// // import { StateContext } from "@/Context/StateContext/StateContext";
// // import style from "../../../../styles/banner.module.css"
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@material-ui/core";
// import Select from "react-dropdown-select";

// import React from "react";
// import { StateContext } from "@/Context/StateContext/StateContext";
// // import Select from "react-select";
// // import { colourOptions } from "../data";

// export default function ModalBanMob() {
//   const { open, setOpen, handleClickOpen }: any = useContext(StateContext);

//   const handleClose = () => {
//     setOpen(false);
//   };
//   interface IData {
//     value: number;
//     name: string;
//   }
//   const [values, setValues] = useState<IData[]>([]);

//   const options = [
//     {
//       value: 1,
//       name: "University of Dhaka",
//     },
//     {
//       value: 2,
//       name: "University of Rajshahi",
//     },
//     {
//       value: 3,
//       name: "University of Chittagong",
//     },
//     {
//       value: 4,
//       name: "Jahangirnagar University",
//     },
//     {
//       value: 5,
//       name: "Jagannath University",
//     },
//     {
//       value: 6,
//       name: "Bangladesh University of Engineering & Technology",
//     },
//     {
//       value: 7,
//       name: "Islamic University, Bangladesh",
//     },
//     {
//       value: 8,
//       name: "Shahjalal University of Science & Technology",
//     },
//     {
//       value: 9,
//       name: "Khulna University",
//     },
//     {
//       value: 10,
//       name: "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
//     },
//     {
//       value: 11,
//       name: "Hajee Mohammad Danesh Science & Technology University",
//     },
//     {
//       value: 12,
//       name: "Mawlana Bhashani Science & Technology University",
//     },
//     {
//       value: 13,
//       name: "Patuakhali Science And Technology University",
//     },
//     {
//       value: 14,
//       name: "Sher-e-Bangla Agricultural University",
//     },
//     {
//       value: 15,
//       name: "Chittagong University of Engineering & Technology",
//     },
//     {
//       value: 16,
//       name: "Rajshahi University of Engineering & Technology",
//     },
//     {
//       value: 17,
//       name: "Khulna University of Engineering & Technology",
//     },
//     {
//       value: 18,
//       name: "Dhaka University of Engineering & Technology",
//     },
//     {
//       value: 19,
//       name: "Noakhali Science & Technology University",
//     },
//     {
//       value: 20,
//       name: "Bangladesh Agricultural University",
//     },
//     {
//       value: 21,
//       name: "Comilla University",
//     },
//     {
//       value: 22,
//       name: "Jatiya Kabi Kazi Nazrul Islam University",
//     },
//     {
//       value: 23,
//       name: "Chittagong Veterinary and Animal Sciences University",
//     },
//     {
//       value: 24,
//       name: "Sylhet Agricultural University",
//     },
//     {
//       value: 25,
//       name: "Jessore University of Science & Technology",
//     },
//     {
//       value: 26,
//       name: "Pabna University of Science and Technology",
//     },
//     {
//       value: 27,
//       name: "Begum Rokeya University, Rangpur",
//     },
//     {
//       value: 28,
//       name: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
//     },
//     {
//       value: 29,
//       name: "University of Barishal",
//     },
//     {
//       value: 30,
//       name: "Rangamati Science and Technology University",
//     },
//     {
//       value: 31,
//       name: "Bangabandhu Sheikh Mujibur Rahman Maritime University, Bangladesh",
//     },
//     {
//       value: 32,
//       name: "Islamic Arabic University",
//     },
//     {
//       value: 33,
//       name: "Chittagong Medical University",
//     },
//     {
//       value: 34,
//       name: "Rajshahi Medical University",
//     },
//     {
//       value: 35,
//       name: "Sylhet Medical University",
//     },
//     {
//       value: 36,
//       name: "Dhaka Medical University",
//     },
//     {
//       value: 37,
//       name: "Rabindra University, Bangladesh",
//     },
//     {
//       value: 38,
//       name: "Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh",
//     },
//     {
//       value: 39,
//       name: "Sheikh Hasina University",
//     },
//     {
//       value: 40,
//       name: "Khulna Agricultural University",
//     },
//     {
//       value: 41,
//       name: "Chandpur Science and Technology University",
//     },
//     {
//       value: 42,
//       name: "Bangabandhu Sheikh Mujibur Rahman University, Kishoreganj",
//     },
//     {
//       value: 43,
//       name: "Hobiganj Agricultural University",
//     },
//     {
//       value: 44,
//       name: "Sheikh Hasina Medical University, Khulna",
//     },
//     {
//       value: 45,
//       name: "Kurigram Agricultural University",
//     },
//     {
//       value: 46,
//       name: "Sunamganj Science and Technology University",
//     },
//     {
//       value: 47,
//       name: "Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Pirojpur",
//     },
//   ];
//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         className=" items-center mt-20 rounded-md"
//         // Add your desired Tailwind CSS classes to the className prop
//       >
//         <DialogContent className="w-96 mx-auto h-96">
//           <p onClick={handleClose}>
//             <Select
//               options={options}
//               labelField="name"
//               searchable
//               onChange={(values: any) => setValues(values)}
//               className="mt-2"
//               values={values}
//             />
//           </p>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       mobileeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
//     </div>
//   );
// }