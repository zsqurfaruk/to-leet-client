import React from "react";

const PopularCityOfRajshahi = () => {
  return (
    <section>
      <div className="lg:mr-10 lg:-ml-4 ml-12">
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 text-black">
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> New Market</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> Shaheb Bazar</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> Uposahar</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> Kazla</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> Motihar</span>
            </label>
          </li>
          <li>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
                // onClick={(e: any) => setDivisionNameEng(e.target.name)}
                name="Dhaka"
              />
              <span className="-mt-[2px]"> Select others</span>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularCityOfRajshahi;
