import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';
import React, { useContext } from 'react';

const DistrictsOfRajshahi = () => {
    const {setDistrictLocation}:any= useContext(StateContext)
    return (
        <div>
             <div className="grid grid-cols-2 lg:gap-5">
                  {" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Rajshahi"
                      />{" "}
                      Rajshahi
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Sirajganj"
                      />{" "}
                      Sirajganj
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Pabna"
                      />{" "}
                      Pabna
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Bogra"
                      />{" "}
                      Bogra
                    </li>
                  </ul>
                  <ul>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Chapainawabganj"
                      />{" "}
                      Chapainawabganj
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Joypurhat"
                      />{" "}
                      Joypurhat
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Naogaon"
                      />{" "}
                      Naogaon
                    </li>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Natore"
                      />{" "}
                      Natore
                    </li>
                  </ul>
                </div>
        </div>
    );
};

export default DistrictsOfRajshahi;