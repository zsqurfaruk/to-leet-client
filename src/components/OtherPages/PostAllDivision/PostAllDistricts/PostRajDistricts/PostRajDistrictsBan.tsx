import React from 'react';

const PostRajDistrictsBan = () => {
    return (
        <div>
             <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-3 text-black text-sm lg:text-base">
        {" "}
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="রাজশাহী"
            />
            <span className="-mt-[2px]">রাজশাহী</span>
          </label>
       
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="সিরাজগঞ্জ"
            />
            <span className="-mt-[2px]">সিরাজগঞ্জ</span>
          </label>
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="পাবনা"
            />
            <span className="-mt-[2px]">পাবনা</span>
          </label>
       
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="বগুড়া"
            />
            <span className="-mt-[2px]">বগুড়া</span>
          </label>
         
          
        </li>
       
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="জয়পুরহাট"
            />
            <span className="-mt-[2px]">জয়পুরহাট</span>
          </label>
         
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="নওগাঁ"
            />
            <span className="-mt-[2px]">নওগাঁ</span>
          </label>
        
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="Natore"
            />
            <span className="-mt-[2px]">নাটোর</span>
          </label>
         
        </li>
        <li>
        <label className="flex gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-accent border-secondary h-[18px] w-[19px]"
              name="চাঁপাইনবাবগঞ্জ"
            />
            <span className="-mt-[2px]">চাঁপাইনবাবগঞ্জ</span>
          </label>
         
        </li>
      </ul> 
        </div>
    );
};
 
export default PostRajDistrictsBan;