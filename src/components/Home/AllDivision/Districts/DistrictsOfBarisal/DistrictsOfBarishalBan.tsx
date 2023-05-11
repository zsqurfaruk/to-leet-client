import React from 'react'

function DistrictsOfBarishalBan() {
  return (
    <div> 
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="বরগুনা"
            />
            <span className="-mt-[2px]">বরগুনা</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="বরিশাল"
            />
            <span className="-mt-[2px]">বরিশাল</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="ভোলা"
            />
            <span className="-mt-[2px]">ভোলা</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="ঝালকাঠি"
            />
            <span className="-mt-[2px]">ঝালকাঠি</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="পটুয়াখালী"
            />
            <span className="-mt-[2px]">পটুয়াখালী</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="পিরোজপুর"
              // onClick={(e: any) => setDistrictLocation(e.target.name)}
            />
            <span className="-mt-[2px]">পিরোজপুর</span>
          </label>{" "}
        </li>
      </ul>
    </div>
  )
}
 
export default DistrictsOfBarishalBan