import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { StateContext } from "@/Context/StateContext/StateContext";
import { Button, Card, Typography } from "@material-tailwind/react";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import React, { useContext } from "react";

const FilterDestinationType = () => {
  const {
    setFilterModal,
    setDistrictsName,
    setHomePopularAreaName,
    setFilterModalValue,
    districtsName,
    divisionNameEng,
    cityName,
    homePopularAreaName,
    filterModalValue,
    setFilterValue,
    filterValue,
  }: any = useContext(StateContext)
  const {lang}:any = useContext(FilterContext)
  const router = useRouter();
  const handleFilter = (v: any) => {
    setFilterModalValue(v);
    setFilterValue({ ...filterValue, filterModalValue: v });
    Cookies.set("filterMV", JSON.stringify(v),{ expires: 1 })
    router.push(
      `/ads/${cityName?.eng || divisionNameEng?.eng}/${
        homePopularAreaName?.eng || districtsName?.eng
      }`
    );
  };

  const handleCancel = () => {
    setFilterModal(false);
    setHomePopularAreaName({});
    setDistrictsName({});
  };

  
  return (
    <div className="bg-neutral text-gray-700 w-12/12 md:w-12/12 lg:w-full rounded-md mt-40 lg:mt-0 p-5 ">
      <div>
        {districtsName?.eng ? (
          <h1 className="flex justify-evenly text-lg pt-5">
            {!lang ? (
              <span>Division: {divisionNameEng?.eng}</span>
            ) : (
              <span> বিভাগ: {divisionNameEng?.ban}</span>
            )}
            {!lang ? (
              <span>District: {districtsName?.eng} </span>
            ) : (
              <span>জেলা : {districtsName?.ban} </span>
            )}
          </h1>
        ) : (
          <h1 className="flex justify-evenly text-lg pt-5">
            {!lang ? (
              <span>City: {cityName?.eng}</span>
            ) : (
              <span>শহর: {cityName?.ban}</span>
            )}
            {!lang ? (
              <span>Area: {homePopularAreaName?.eng} </span>
            ) : (
              <span> এলাকা: {homePopularAreaName?.ban} </span>
            )}
          </h1>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-2 gap-1 mt-3 md:mt-8">
        <Card
          className="border border-warning cursor-pointer"
          onClick={() =>
            handleFilter({
              eng: "Bachelor-(Male)",
              ban: "ব্যাচেলর-(ছেলে)",
            })
          }
        >
          {!lang ? (
            <Typography className="text-center">Bachelor (Male)</Typography>
          ) : (
            <Typography className="text-center">ব্যাচেলর (ছেলে)</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() =>
            handleFilter({
              eng: "Bachelor-(Female)",
              ban: "ব্যাচেলর-(মেয়ে)",
            })
          }
        >
          {!lang ? (
            <Typography className="text-center">Bachelor (Female)</Typography>
          ) : (
            <Typography className="text-center">ব্যাচেলর (মেয়ে)</Typography>
          )}
        </Card>
        <Card
          className="border border-warning cursor-pointer"
          onClick={() =>
            handleFilter({ eng: "Mess-(Male)", ban: "মেস-(ছেলে)" })
          }
        >
          {!lang ? (
            <Typography className="text-center">Mess (Male)</Typography>
          ) : (
            <Typography className="text-center">মেস (ছেলে)</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() =>
            handleFilter({ eng: "Mess-(Female)", ban: "মেস-(মেয়ে)" })
          }
        >
          {!lang ? (
            <Typography className="text-center">Mess (Female)</Typography>
          ) : (
            <Typography className="text-center">মেস (মেয়ে)</Typography>
          )}
        </Card>
        <Card
          className="border border-warning cursor-pointer"
          onClick={() =>
            handleFilter({ eng: "Sublet-(Male)", ban: "সাবলেট-(ছেলে)" })
          }
        >
          {!lang ? (
            <Typography className="text-center">Sublet (Male)</Typography>
          ) : (
            <Typography className="text-center">সাবলেট (ছেলে)</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() =>
            handleFilter({
              eng: "Sublet-(Female)",
              ban: "সাবলেট-(মেয়ে)",
            })
          }
        >
          {!lang ? (
            <Typography className="text-center">Sublet (Female)</Typography>
          ) : (
            <Typography className="text-center">সাবলেট (মেয়ে)</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() => handleFilter({ eng: "Family", ban: "পরিবার" })}
        >
          {!lang ? (
            <Typography className="text-center">Family</Typography>
          ) : (
            <Typography className="text-center">পরিবার</Typography>
          )}
        </Card>

       

        <Card
          className="border border-warning cursor-pointer"
          onClick={() => handleFilter({ eng: "Hostel", ban: "আবাসিক-হোস্টেল" })}
        >
          {!lang ? (
            <Typography className="text-center"> Hostel</Typography>
          ) : (
            <Typography className="text-center"> আবাসিক হোস্টেল</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() => handleFilter({ eng: "Office", ban: "অফিস" })}
        >
          {!lang ? (
            <Typography className="text-center">Office</Typography>
          ) : (
            <Typography className="text-center">অফিস</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() => handleFilter({ eng: "Shop", ban: "দোকান" })}
        >
          {!lang ? (
            <Typography className="text-center">Shop</Typography>
          ) : (
            <Typography className="text-center">দোকান</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() => handleFilter({ eng: "Vehicles", ban: "যানবাহন" })}
        >
          {!lang ? (
            <Typography className="text-center">Vehicles</Typography>
          ) : (
            <Typography className="text-center">যানবাহন</Typography>
          )}
        </Card>

        <Card
          className="border border-warning cursor-pointer"
          onClick={() => handleFilter({ eng: "Garage", ban: "গ্যারেজ" })}
        >
          {!lang ? (
            <Typography className="text-center">Garage</Typography>
          ) : (
            <Typography className="text-center">গ্যারেজ</Typography>
          )}
        </Card>
      </div>
      <div className="flex lg:hidden justify-end py-3 mr-7">
        <Button
          className="text-red-500 bg-red-100 font-semibold rounded px-5 py-3"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default FilterDestinationType;
