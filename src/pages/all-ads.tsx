import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext } from "react";
import Select from "react-select";
import { cityOptionEng } from "@/components/Home/AllPost/FilterCityEng";
import { cityOptionBan } from "@/components/Home/AllPost/FilterCityDataBan";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import AllPost from "@/components/Home/AllPost/AllPost";

function AllAds() {
  const { counterPosts, handleFilter }: any = useContext(APIContext);

  const { filterCity, setFilterCity }: any = useContext(FilterContext);
  if (filterCity?.name === "eng") {
    const newName = {
      eng: filterCity?.label,
      ban: filterCity?.value,
    };
    setFilterCity(newName);
  } else if (filterCity?.name === "ban") {
    const newName = {
      eng: filterCity?.value,
      ban: filterCity?.label,
    };
    setFilterCity(newName);
  }
  const lang = localStorage.getItem("lan");
  return (
    <section className="lg:flex block lg:gap-5 w-10/12 mx-auto bg-white px-10">
      <div className="basis-1/4 lg:border-r-2 border-accent ">
        <div className="pt-10 mr-5">
          <h1>Filter:</h1>
          {lang ? (
            <Select
              placeholder="Search"
              isSearchable
              options={cityOptionEng}
              onChange={setFilterCity}
              className="bg-primary border-none text-sm h-4 text-black font-medium"
            />
          ) : (
            <Select
              placeholder="অনুসন্ধান"
              isSearchable
              options={cityOptionBan}
              onChange={setFilterCity}
              className="bg-primary border-none text-sm h-4 text-black font-medium"
            />
          )}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {counterPosts.map((post: any) => (
          <AllPost key={post._id} post={post}></AllPost>
        ))}
      </div>
    </section>
  );
}
export default AllAds;
