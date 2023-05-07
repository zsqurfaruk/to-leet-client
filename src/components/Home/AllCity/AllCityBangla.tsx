import React, {useContext} from 'react';
import { StateContext } from '@/Context/StateContext/StateContext';
import { Checkbox } from '@material-tailwind/react';

const AllCityBan = () => {
    const { setCityNameBan }: any = useContext(StateContext);
    return (
        <div className="lg:mr-10 lg:-ml-8 ml-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 text-black">
          <li>
            {" "}
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="ঢাকা"
            />{" "}
           ঢাকা
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="চট্টগ্রাম"
            />{" "}
           চট্টগ্রাম
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="রাজশাহী"
            />{" "}
         রাজশাহী
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="সিলেট"
            />{" "}
           সিলেট
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="বরিশাল"
            />{" "}
         বরিশাল
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="খুলনা"
            />{" "}
           খুলনা
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="রংপুর"
            />{" "}
            রংপুর
          </li>
          <li>
            <Checkbox
              color="teal"
              onClick={(e: any) => setCityNameBan(e.target.name)}
              name="ময়মনসিংহ"
            />{" "}
            ময়মনসিংহ
          </li>
        </ul>
      </div>
    );
};

export default AllCityBan;