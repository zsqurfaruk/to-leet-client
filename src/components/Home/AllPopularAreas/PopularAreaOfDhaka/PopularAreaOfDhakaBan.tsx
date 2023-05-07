import { Checkbox } from '@material-tailwind/react'
import React from 'react'

function PopularAreaOfDhakaBan() {
  return (
    <section>
    <div className="lg:mr-10 lg:-ml-8 ml-12">
      <ul className="grid grid-cols-2 md:grid-cols-3 text-black text-sm">
        <li>
          <Checkbox
            color="teal"
            // onClick={(e: any) => setCityName(e.target.name)}
            name="Dhaka"
          />{" "}
        মিরপুর
        </li>
        <li>
          <Checkbox
            color="teal"
            // onClick={(e: any) => setCityName(e.target.name)}
            name="Chittagong"
          />{" "}
      উত্তরা
        </li>
        <li>
          <Checkbox
            color="teal"
            // onClick={(e: any) => setCityName(e.target.name)}
            name="Rajshahi"
          />{" "}
         মোহাম্মদপুর
        </li>
        <li>
          <Checkbox
            color="teal"
            // onClick={(e: any) => setCityName(e.target.name)}
            name="Sylhet"
          />{" "}
         সাভার
        </li>
        <li>
          <Checkbox
            color="teal"
            // onClick={(e: any) => setCityName(e.target.name)}
            name="Barisal"
          />{" "}
         যাত্রাবাড়ি
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
  )
}

export default PopularAreaOfDhakaBan



// 

// 

// 

// 

// 
// (A-Z)
// অন্যান্য এলাকা (A-Z)

