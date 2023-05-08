import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';
import React, { useContext } from 'react';

const DistrictsOfSylhet = () => {
    const {setDistrictLocation}:any= useContext(StateContext)
    return (
        <div>
             <ul>
                  <li>
                    {" "}
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Sylhet"
                    />{" "}
                    Sylhet
                  </li>
                  <li>
                    {" "}
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Moulvibazar"
                    />{" "}
                    Moulvibazar
                  </li>
                  <li>
                    {" "}
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Habiganj"
                    />{" "}
                    Habiganj
                  </li>
                  <li>
                    {" "}
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Sunamganj"
                    />{" "}
                    Sunamganj
                  </li>
                </ul>
        </div>
    );
};

export default DistrictsOfSylhet;