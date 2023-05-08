import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';
import React, { useContext } from 'react';

const DistrictsOfChittagong = () => {
    const {setDistrictLocation}:any= useContext(StateContext)
    return (
        <div>
             <div className="grid grid-cols-2 lg:gap-5">
                  <ul>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Chittagong"
                      />{" "}
                      Chittagong
                    </li>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Brahmanbaria"
                      />{" "}
                      Brahmanbaria
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Comilla"
                      />{" "}
                      Comilla
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Chandpur"
                      />{" "}
                      Chandpur
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Cox's bazar"
                      />{" "}
                      Coxs Bazar
                    </li>
                  </ul>
                  <ul>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Feni"
                      />{" "}
                      Feni
                    </li>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Khagrachhari"
                      />{" "}
                      Khagrachhari
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Lakshmipur"
                      />{" "}
                      Lakshmipur
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Noakhali"
                      />{" "}
                      Noakhali
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Rangamati"
                      />{" "}
                      Rangamati
                    </li>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Bandarban"
                      />{" "}
                      Bandarban
                    </li>
                  </ul>
                </div>
        </div>
    );
};

export default DistrictsOfChittagong;