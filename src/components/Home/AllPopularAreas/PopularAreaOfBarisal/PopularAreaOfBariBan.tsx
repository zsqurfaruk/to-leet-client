import { Checkbox } from '@material-tailwind/react';
import React from 'react';

const PopularAreaOfBariBan = () => {
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
           সদর রোড
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
           নথুল্লাবাদ
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
       রুপাতলি
          </li>
          <li>
            <Checkbox
           color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
          গৌরনদী
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
         নবগ্রাম রোড
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

 

export default PopularAreaOfBariBan;