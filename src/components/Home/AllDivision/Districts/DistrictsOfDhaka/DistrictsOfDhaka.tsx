import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';
import React, { useContext } from 'react';

const DistrictsOfDhaka = () => {
    const {setDistrictLocation}:any= useContext(StateContext)
    return (
        <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  <Checkbox
                    onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Dhaka"
                  />{" "}
                  Dhaka
                </li>
                <li>
                  {" "}
                  <Checkbox   onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Faridpur"/> Faridpur
                </li>
                <li>
                  {" "}
                  <Checkbox
                  onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gazipur"
                  />{" "}
                  Gazipur
                </li>
                <li>
                  {" "}
                  <Checkbox
                   onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gopalganj"
                  />{" "}
                  Gopalganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jamalpur"/> Jamalpur
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kishoreganj"/> Kishoreganj
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Madaripur"/> Madaripur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Manikganj"/> Manikganj
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Munshiganj"/> Munshiganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narayanganj"/> Narayanganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narsingdi"/> Narsingdi
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Netrokona"/> Netrokona
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rajbari"/> Rajbari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Shariatpur"/> Shariatpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sherpur"/> Sherpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Tangail"/> Tangail
                </li>
              </ul>
        </div>
    );
};

export default DistrictsOfDhaka;