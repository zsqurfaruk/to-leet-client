import { Checkbox } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import AddProduct from "../../components/AddProduct/AddProduct";
import RentType from "@/components/AddProduct/RentType";
import privateRoute from "@/routes/privateRoute";
import { StateContext } from "@/Context/StateContext/StateContext";
import DistrictsOfDhaka from "@/components/Home/AllDivision/Districts/DistrictsOfDhaka/DistrictsOfDhaka";
import DistrictsOfChittagong from "@/components/Home/AllDivision/Districts/AllDistricts/DistrictsOfChittagong/DistrictsOfChittagong";
import DistrictsOfRajshahi from "@/components/Home/AllDivision/Districts/AllDistricts/DistrictsOfRajshahi/DistrictsOfRajshahi";
import DistrictsOfSylhet from "@/components/Home/AllDivision/Districts/AllDistricts/DistrictsOfSylhet/DistrictsOfSylhet";
import DistrictsOfBarisal from "@/components/Home/AllDivision/Districts/AllDistricts/DistrictsOfBarisal/DistrictsOfBarisal";
import DistrictsOfKhulna from "@/components/Home/AllDivision/Districts/AllDistricts/DistrictsOfKhulna/DistrictsOfKhulna";

const AddPost = () => {
  const [divisionLocation, setDivisionLocation] = useState<string[]>([]);

  const { districtLocation, setDistrictLocation }: any =
    useContext(StateContext);
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
      {!districtLocation && (
        <div className="lg:w-6/12 lg:mx-auto bg-white p-5 lg:p-14 lg:my-16">
          <h1 className="text-2xl font-bold pb-10">Select Your Location</h1>
          <div>
            <Checkbox
              onClick={(e: any) => handleDivisionLocation(e)}
              name="dhaka"
            />
            <span>Dhaka</span>
            <div className="flex justify-end transition duration-500">
              {divisionLocation.includes("dhaka") && (
                <DistrictsOfDhaka></DistrictsOfDhaka>
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
               <DistrictsOfChittagong></DistrictsOfChittagong>
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
              {divisionLocation.includes("rajshahi") && <DistrictsOfRajshahi></DistrictsOfRajshahi>}
            </div>
          </div>
          <div>
            <Checkbox
              onClick={(e: any) => handleDivisionLocation(e)}
              name="sylhet"
            />
            <span> Sylhet</span>
            <div className="flex justify-end transition duration-500">
              {divisionLocation.includes("sylhet") && <DistrictsOfSylhet></DistrictsOfSylhet>}
            </div>
          </div>
          <div>
            <Checkbox
              onClick={(e: any) => handleDivisionLocation(e)}
              name="barisal"
            />
            <span> Barisal</span>
            <div className="flex justify-end transition duration-500">
              {divisionLocation.includes("barisal") &&  <DistrictsOfBarisal></DistrictsOfBarisal>}
            </div>
          </div>
          <div>
            <Checkbox
              onClick={(e: any) => handleDivisionLocation(e)}
              name="khulna"
            />
            <span> Khulna</span>
            <div className="flex justify-end transition duration-500">
              {divisionLocation.includes("khulna") &&  <DistrictsOfKhulna></DistrictsOfKhulna>}
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
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Rangpur"
                      />{" "}
                      Rangpur
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Panchagarh"
                      />{" "}
                      Panchagarh
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Thakurgaon"
                      />{" "}
                      Thakurgaon
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Dinajpur"
                      />{" "}
                      Dinajpur
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Kurigram"
                      />{" "}
                      Kurigram
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Nilphamari"
                      />{" "}
                      Nilphamari
                    </li>
                    <li>
                      {" "}
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Lalmonirhat"
                      />{" "}
                      Lalmonirhat
                    </li>
                    <li>
                      <Checkbox
                        onClick={(e: any) => setDistrictLocation(e.target.name)}
                        name="Gaibandha"
                      />{" "}
                      Gaibandha
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
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Mymensingh"
                    />{" "}
                    Mymensingh
                  </li>
                  <li>
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Jamalpur"
                    />{" "}
                    Jamalpur
                  </li>
                  <li>
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Netrokona"
                    />{" "}
                    Netrokona
                  </li>
                  <li>
                    <Checkbox
                      onClick={(e: any) => setDistrictLocation(e.target.name)}
                      name="Sherpur"
                    />{" "}
                    Sherpur
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      {districtLocation && !rentType && (
        <RentType setRentType={setRentType}></RentType>
      )}

      {rentType && (
        <AddProduct
          rentType={rentType}
          districtLocation={districtLocation}
        ></AddProduct>
      )}
    </section>
  );
};

export default privateRoute(AddPost);
