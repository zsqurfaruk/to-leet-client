import { Checkbox } from '@material-tailwind/react';
import React from 'react';

const PopularAreaOfChittagongBan = () => {
    return (
        <section>
      <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 text-black text-sm">
          <li>
            {" "}
            <Checkbox
           color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />{" "}
           আগ্রাবাদ
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
        চকবাজার
          </li>
          <li>
            <Checkbox
             color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
       কোতয়ালী
          </li>
          <li>
            <Checkbox
             color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
       হালিশহর
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
        নাসিরাবাদ
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


export default PopularAreaOfChittagongBan;
