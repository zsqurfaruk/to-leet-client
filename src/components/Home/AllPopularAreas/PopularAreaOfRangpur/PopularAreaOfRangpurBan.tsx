import { Checkbox } from '@material-tailwind/react';
import React from 'react';

const PopularAreaOfRangpurBan = () => {
    return (
        <section>
        <div className="lg:mr-10 lg:-ml-8 ml-12">
          <ul className="grid grid-cols-2 md:grid-cols-3 text-black text-[15.6px]">
            <li>
              <Checkbox
              color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Dhaka"
              />{" "}
        জাহাজ কোম্পানি মোড়
            </li>
            <li>
              <Checkbox
              color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Chittagong"
              />{" "}
        শাপলা চত্বর
            </li>
            <li>
              <Checkbox
              color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Rajshahi"
              />{" "}
             ধাপ
            </li>
            <li>
              <Checkbox
             color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Sylhet"
              />{" "}
           লালবাগ মোড়
            </li>
            <li>
              <Checkbox
              color="teal"
                // onClick={(e: any) => setCityName(e.target.name)}
                name="Barisal"
              />{" "}
           পৌর বাজার
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

 



export default PopularAreaOfRangpurBan;