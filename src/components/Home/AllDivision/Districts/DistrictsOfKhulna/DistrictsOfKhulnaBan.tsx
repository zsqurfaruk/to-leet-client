import React from 'react'

function DistrictsOfKhulnaBan() {
  return (
    <div>
       <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="খুলনা"
            />
            <span className="-mt-[2px]">খুলনা</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="বাগেরহাট"
            />
            <span className="-mt-[2px]">বাগেরহাট</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="চুয়াডাঙ্গা"
            />
            <span className="-mt-[2px]">চুয়াডাঙ্গা</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="যশোর"
            />
            <span className="-mt-[2px]">যশোর</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="ঝিনাইদহ"
            />
            <span className="-mt-[2px]">ঝিনাইদহ</span>
          </label>
        </li>

        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="কুষ্টিয়া"
            />
            <span className="-mt-[2px]">কুষ্টিয়া</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="মাগুরা"
            />
            <span className="-mt-[2px]">মাগুরা</span>
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="মেহেরপুর"
            />
            <span className="-mt-[2px]">মেহেরপুর</span>
          </label>{" "}
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="নড়াইল"
            />
            <span className="-mt-[2px]">নড়াইল</span>
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="সাতক্ষীরা"
            />
            <span className="-mt-[2px]">সাতক্ষীরা</span>
          </label>
        </li>
      </ul>
      </div>
  )
}
export default DistrictsOfKhulnaBan