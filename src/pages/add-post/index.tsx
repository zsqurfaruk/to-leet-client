import { Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";
import privateRoute from "../privateRoute";
import AddProduct from "../../components/AddProduct/AddProduct";
import RentType from "@/components/AddProduct/RentType";

const AddPost = () => {
  const [divisionLocation, setDivisionLocation] = useState<string[]>([]);
  const [districtLocation, setDistrictLocation] = useState("");
  const [rentType, setRentType] = useState("");
 
  const handleDivisionLocation = (e: any) => {
    const newLocations = [...divisionLocation];
    if (e.target.checked) {
      newLocations.push(e.target.name);
      setDivisionLocation(newLocations);
    } else if (!e.target.checked) {
      setDivisionLocation(newLocations.filter((lc) => lc !== e.target.name));
    }
  };
  return (
   <section>
    {
      !districtLocation &&  <div className="lg:w-6/12 lg:mx-auto bg-white p-5 lg:p-14 lg:my-16">
      <h1 className="text-2xl font-bold pb-10">Select Your Location</h1>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="dhaka"
        />
        <span>Dhaka</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("dhaka") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  <Checkbox
                    onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Dhaka"
                  />{" "}
                  Dhaka
                </li>
                <li>
                  {" "}
                  <Checkbox   onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Faridpur"/> Faridpur
                </li>
                <li>
                  {" "}
                  <Checkbox
                  onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gazipur"
                  />{" "}
                  Gazipur
                </li>
                <li>
                  {" "}
                  <Checkbox
                   onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gopalganj"
                  />{" "}
                  Gopalganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jamalpur"/> Jamalpur
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kishoreganj"/> Kishoreganj
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Madaripur"/> Madaripur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Manikganj"/> Manikganj
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Munshiganj"/> Munshiganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narayanganj"/> Narayanganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narsingdi"/> Narsingdi
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Netrokona"/> Netrokona
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rajbari"/> Rajbari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Shariatpur"/> Shariatpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sherpur"/> Sherpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Tangail"/> Tangail
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="chittagong"
        />
        <span> Chittagong</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("chittagong") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
              
                <li>
                
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chittagong"/> Chittagong
                </li>
                <li>
              
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Brahmanbaria"/> Brahmanbaria
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Comilla"/> Comilla
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chandpur"/> Chandpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Cox's bazar"/> Coxs Bazar
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Feni"/> Feni
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Khagrachhari"/> Khagrachhari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Lakshmipur"/> Lakshmipur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Noakhali"/> Noakhali
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rangamati"/> Rangamati
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bandarban"/> Bandarban
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="rajshahi"
        />
        <span> Rajshahi</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("rajshahi") && (
            <div className="grid grid-cols-2 lg:gap-5">
              {" "}
              <ul>
                {" "}
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rajshahi"/> Rajshahi
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sirajganj"/> Sirajganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Pabna"/> Pabna
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bogra"/> Bogra
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chapainawabganj"/> Chapainawabganj
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Joypurhat"/> Joypurhat
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Naogaon"/> Naogaon
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Natore"/> Natore
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="sylhet"
        />
        <span> Sylhet</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("sylhet") && (
            <ul>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sylhet"/> Sylhet  
              </li>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Moulvibazar"/> Moulvibazar  
              </li>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Habiganj"/> Habiganj  
              </li>
              <li>
                {" "}
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sunamganj"/> Sunamganj 
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="barisal"
        />
        <span> Barisal</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("barisal") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                {" "}
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Barguna"/> Barguna
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Barishal"/> Barisal
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bhola"/> Bhola
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jholokati"/> Jhalokati
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Patuakhali"/> Patuakhali
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Pirojpur"/> Pirojpur
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="khulna"
        />
        <span> Khulna</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("khulna") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Khulna"/> Khulna
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Bagerhat"/> Bagerhat
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Chuadanga"/> Chuadanga
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jessore"/> Jessore
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jhenaidah"/> Jhenaidah
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kushtia"/> Kushtia
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Magura"/> Magura
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Meherpur"/> Meherpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Narail"/> Narail
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Satkhira"/> Satkhira
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="rangpur"
        />
        <span> Rangpur</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("rangpur") && (
            <div className="grid grid-cols-2 lg:gap-5">
              <ul>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Rangpur"/> Rangpur
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Panchagarh"/> Panchagarh
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Thakurgaon"/> Thakurgaon
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Dinajpur"/> Dinajpur
                </li>
              </ul>
              <ul>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Kurigram"/> Kurigram
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Nilphamari"/> Nilphamari
                </li>
                <li>
                  {" "}
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Lalmonirhat"/> Lalmonirhat
                </li>
                <li>
                  <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Gaibandha"/> Gaibandha
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Checkbox
          onClick={(e: any) => handleDivisionLocation(e)}
          name="mymensingh"
        />
        <span> Mymensingh</span>
        <div className="flex justify-end transition duration-500">
          {divisionLocation.includes("mymensingh") && (
            <ul>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Mymensingh"/> Mymensingh
              </li>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Jamalpur"/> Jamalpur
              </li>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Netrokona"/> Netrokona
              </li>
              <li>
                <Checkbox onClick={(e: any) => setDistrictLocation(e.target.name)}
                    name="Sherpur"/> Sherpur
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
    }
    {
      districtLocation && !rentType && <RentType setRentType={setRentType}></RentType>
    }

    {
      rentType && <AddProduct rentType={rentType} districtLocation={districtLocation}></AddProduct>
    }
   </section>
  );
};

export default privateRoute(AddPost);
