import { StateContext } from "@/Context/StateContext/StateContext";
import { useContext, useState } from "react";
import Select from "react-dropdown-select";

export default function ModalEng() {
  interface IData {
    value: number;
    name: string;
  }
  const [values, setValues] = useState<IData[]>([]);
  const { openModalEng, setOpenModalEng }: any = useContext(StateContext);

  if (values[0]?.name) {
    setOpenModalEng(values[0]?.name);
      
  }else{
    setOpenModalEng("")
  }
  console.log(openModalEng);

  const options: any = [
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
    <div className="text-black text-sm">
      <h1 className="text-2xl">Select your university</h1>

      <label htmlFor={values[0]?.name ? "EngModal" : "d"}>
        <Select
          options={options}
          labelField="name"
          onChange={(values: any) => setValues(values)}
          values={values}
        />
       
      </label>
    </div>
  );
}
