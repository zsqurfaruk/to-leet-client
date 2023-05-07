import { Checkbox } from '@material-tailwind/react';
import React from 'react';

const PopularAreaOfRajBan = () => {
    return (
        <section>
      <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 text-black">
          <li>
            {" "}
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Dhaka"
            />{" "}
           নিউ মার্কেট
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Chittagong"
            />{" "}
           সাহেববাজার
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Rajshahi"
            />{" "}
          উপশহর
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Sylhet"
            />{" "}
           কাজলা
          </li>
          <li>
            <Checkbox
            color="teal"
              // onClick={(e: any) => setCityName(e.target.name)}
              name="Barisal"
            />{" "}
           মতিহার
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

export default PopularAreaOfRajBan;