import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';
import React, { useContext } from 'react';

const DistrictsOfBarisal = () => {
    const {setDistrictLocation}:any= useContext(StateContext)
    return (
        <div className="grid grid-cols-2 lg:gap-5">
        <ul>
          {" "}
          <li>
            {" "}
            <Checkbox
              onClick={(e: any) => setDistrictLocation(e.target.name)}
              name="Barguna"
            />{" "}
            Barguna
          </li>
          <li>
            {" "}
            <Checkbox
              onClick={(e: any) => setDistrictLocation(e.target.name)}
              name="Barishal"
            />{" "}
            Barisal
          </li>
          <li>
            {" "}
            <Checkbox
              onClick={(e: any) => setDistrictLocation(e.target.name)}
              name="Bhola"
            />{" "}
            Bhola
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <Checkbox
              onClick={(e: any) => setDistrictLocation(e.target.name)}
              name="Jholokati"
            />{" "}
            Jhalokati
          </li>
          <li>
            {" "}
            <Checkbox
              onClick={(e: any) => setDistrictLocation(e.target.name)}
              name="Patuakhali"
            />{" "}
            Patuakhali
          </li>
          <li>
            {" "}
            <Checkbox
              onClick={(e: any) => setDistrictLocation(e.target.name)}
              name="Pirojpur"
            />{" "}
            Pirojpur
          </li>
        </ul>
      </div>
    );
};

export default DistrictsOfBarisal;