import { Checkbox } from '@material-tailwind/react';
import React from 'react';

const PopularAreaOfMymBan = () => {
    return (
        <section>
        <div className="lg:mr-10 lg:-ml-8 ml-12">
          <ul className="grid grid-cols-2 md:grid-cols-3 text-black">
            <li>
              <Checkbox
                color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Dhaka"
              />{" "}
             গাঙ্গিনার পাড়
            </li>
            <li>
              <Checkbox
                color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Chittagong"
              />{" "}
              চরপাড়া
            </li>
            <li>
              <Checkbox
                color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Rajshahi"
              />{" "}
            ভালুকা
            </li>
            <li>
              <Checkbox
                color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Sylhet"
              />{" "}
             টাউন হল
            </li>
            <li>
              <Checkbox
                color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Barisal"
              />{" "}
            মুক্তাগাছা
            </li>
            <li>
              <Checkbox
                color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Khulna"
              />{" "}
            অন্যান্য এলাকা 
            </li>
          </ul>
        </div>
      </section>
    );
};
 

export default PopularAreaOfMymBan;