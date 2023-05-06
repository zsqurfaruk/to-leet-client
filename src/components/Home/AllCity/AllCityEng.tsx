import React, {useContext} from 'react';
import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';

const AllCityEng = () => {
    const { setCityName }: any = useContext(StateContext);
    return (
        <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 text-black">
          <li>
            {" "}
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />{" "}
            Dhaka
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
            Chittagong
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
            Rajshahi
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
            Sylhet
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
            Barisal
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Khulna"
            />{" "}
            Khulna
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Rangpur"
            />{" "}
            Rangpur
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityName(e.target.name)}
              name="Mymensingh"
            />{" "}
            Mymensingh
          </li>
        </ul>
      </div>
    );
};

export default AllCityEng;