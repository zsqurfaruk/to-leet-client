/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { NameContext } from "@/Context/NamInfo";
import { FcHome, FcShop } from "react-icons/fc";
import { StateContext } from "@/Context/StateContext/StateContext";
import Image from "next/image";
import man from "../../../image/man (1).png";
import female from "../../../image/worker.png";
import subletMale from "../../../image/male-and-female.png";
import subletFemale from "../../../image/gender.png";
import family from "../../../image/family-silhouette.png";
import hotel from "../../../image/mansion.png";
import office from "../../../image/working-with-laptop.png";
import car from "../../../image/car.png";
import garage from "../../../image/garage.png";
import { APIContext } from "@/Context/ApiContext/ApiContext";
const DesEng = () => {
  const { setRentName }: any = useContext(NameContext);
  const { counter }: any = useContext(APIContext);   const { filterTypeCity, filterTypeDivision,typeCount,counterPosts }: any = useContext(StateContext);
  
   
 
  return (
    <div className="w-10/12 mx-auto  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-5 md:gap-2 gap-5 mt-10 md:mt-8">
      <Link
        href={{
          pathname: "/Bachelor-(Male)",
        }}
        onClick={() => setRentName("Bachelor-(Male)")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1"
              }
              src={man}
              alt={"Male"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Bachelor (Male)
              </Typography>
              <Typography> {counterPosts?.type?.eng} Ads</Typography>
              {/* <Typography className="text-sm">The Ultimate Rental Solution</Typography> */}
              
            </div>
          </div>
        </Card>
      </Link>

      <Link
        href={{
          pathname: "/Bachelor-(Female)",
        }}
        onClick={() => setRentName("Bachelor-(Female)")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1"
              }
              src={female}
              alt={"Female"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Bachelor (Female)
              </Typography>
              <Typography> 0 Ads</Typography>
              {/* <Typography className="text-sm">The Ultimate Rental Solution</Typography> */}
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Mess-(Male)",
        }}
        onClick={() => setRentName("Mess-(Male)")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <FcHome
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary"
                  : "h-14 w-14 border rounded-lg"
              }
            ></FcHome>
            <div>
              <Typography variant="h5" className="mb-2">
                Mess (Male)
              </Typography>
              <Typography> 0 Ads</Typography>
              {/* <Typography className="text-sm">The Ultimate Rental Solution</Typography> */}
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Mess-(Female)",
        }}
        onClick={() => setRentName("Mess-(Female)")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <FcHome
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary"
                  : "h-14 w-14 border rounded-lg"
              }
            ></FcHome>

            <div>
              <Typography variant="h5" className="mb-2">
                Mess (Female)
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Sublet-(Male)",
        }}
        onClick={() => setRentName("Sublet-(Male)")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1 bg-white"
              }
              src={subletMale}
              alt={"subletMale"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Sublet (Male)
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Sublet-(Female)",
        }}
        onClick={() => setRentName("Sublet-(Female)")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1 bg-white"
              }
              src={subletFemale}
              alt={"subletFemale"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Sublet (Female)
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Family",
        }}
        onClick={() => setRentName("Family")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1 bg-white"
              }
              src={family}
              alt={"family"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Family
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
     
      <Link
        href={{
          pathname: "/Hostel",
        }}
        onClick={() => setRentName("Hostel")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1"
              }
              src={hotel}
              alt={"hotel"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                {" "}
                Hostel
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Office",
        }}
        onClick={() => setRentName("Office")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1 bg-white"
              }
              src={office}
              alt={"office"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Office
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Shop",
        }}
        onClick={() => setRentName("Shop")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <FcShop
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary "
                  : "h-14 w-14 border rounded-lg "
              }
            ></FcShop>
            <div>
              <Typography variant="h5" className="mb-2">
                Shop
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Vehicles",
        }}
        onClick={() => setRentName("Vehicles")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1"
              }
              src={car}
              alt={"car"}
            ></Image>

            <div>
              <Typography variant="h5" className="mb-2">
                Vehicles
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Garage",
        }}
        onClick={() => setRentName("Garage")}
      >
        <Card
          className={
            filterTypeCity || filterTypeDivision
              ? "bg-transparent text-black border border-secondary"
              : "bg-transparent text-white border border-accent"
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                filterTypeCity || filterTypeDivision
                  ? "h-14 w-14 border rounded-lg border-secondary px-1"
                  : "h-14 w-14 border rounded-lg px-1"
              }
              src={garage}
              alt={"garage"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                Garage
              </Typography>
              <Typography> 0 Ads</Typography>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default DesEng;
