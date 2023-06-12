/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FcHome, FcShop } from "react-icons/fc";
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
const DesBan = () => {
  const { counter }: any = useContext(APIContext);
  const getCount = (value: any) => {
    return counter.find((item: any) => item.type.eng === value) || null;
  };
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-5 md:gap-2 gap-5 mt-10 md:mt-8">
      <Link
        href={{
          pathname: "/Bachelor-(Male)",
        }}
      >
        <Card
          className={
             "bg-transparent border border-warning"
              
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                 "h-14 w-14 border rounded-lg border-warning px-1"
                  
              }
              src={man}
              alt={"Male"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                ব্যাচেলর (ছেলে)
              </Typography>
              {/* <Typography>০ টি বিজ্ঞাপন</Typography> */}
              <Typography className="text-sm">
                {" "}
                {getCount("Bachelor-(Male)")
                  ? getCount("Bachelor-(Male)")?.count
                  : 0}{" "}
                টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>

      <Link
        href={{
          pathname: "/Bachelor-(Female)",
        }}
      >
        <Card
          className={
            "bg-transparent  border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                 "h-14 w-14 border rounded-lg border-warning px-1"
                   
              }
              src={female}
              alt={"Female"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                ব্যাচেলর (মেয়ে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Bachelor-(Female)")
                  ? getCount("Bachelor-(Female)")?.count
                  : 0}{" "}
                টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Mess-(Male)",
        }}
      >
        <Card
          className={
              "bg-transparent   border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <FcHome
              className={
                  "h-14 w-14 border rounded-lg border-warning"
                  
              }
            ></FcHome>
            <div>
              <Typography variant="h5" className="mb-2">
                মেস (ছেলে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Mess-(Male)")
                  ? getCount("Mess-(Male)")?.count
                  : 0}{" "}
                টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Mess-(Female)",
        }}
      >
        <Card
          className={
             "bg-transparent border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <FcHome
              className={
                "h-14 w-14 border rounded-lg border-warning"
                  
              }
            ></FcHome>
            <div>
              <Typography variant="h5" className="mb-2">
                মেস (মেয়ে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Mess-(Female)")
                  ? getCount("Mess-(Female)")?.count
                  : 0}{" "}
                টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Sublet-(Male)",
        }}
      >
        <Card
          className={
              "bg-transparent  border border-warning"
              
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                 "h-14 w-14 rounded-lg border border-warning px-1"
                  
              }
              src={subletMale}
              alt={"subletMale"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                সাবলেট (ছেলে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Sublet-(Male)")
                  ? getCount("Sublet-(Male)")?.count
                  : 0}{" "}
                টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Sublet-(Female)",
        }}
      >
        <Card
          className={
             "bg-transparent border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                  "h-14 w-14  rounded-lg border border-warning px-1"
                   
              }
              src={subletFemale}
              alt={"subletFemale"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                সাবলেট (মেয়ে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Sublet-(Female)")
                  ? getCount("Sublet-(Female)")?.count
                  : 0}{" "}
                টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Family",
        }}
      >
        <Card
          className={
             "bg-transparent border border-warning"
              
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                 "h-14 w-14  rounded-lg border border-warning px-1"
                   
              }
              src={family}
              alt={"family"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                পরিবার
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Family") ? getCount("Family")?.count : 0} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>

      <Link
        href={{
          pathname: "/Hostel",
        }}
      >
        <Card
          className={
              "bg-transparent border border-warning"
              
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                 "h-14 w-14 rounded-lg border border-warning px-1"
                  
              }
              src={hotel}
              alt={"hotel"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                {" "}
                আবাসিক হোটেল
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Hostel") ? getCount("Hostel")?.count : 0} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Office",
        }}
      >
        <Card
          className={
             "bg-transparent border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                  "h-14 w-14  rounded-lg border border-warning px-1"
                  
              }
              src={office}
              alt={"office"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                অফিস
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Office") ? getCount("Office")?.count : 0} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Shop",
        }}
      >
        <Card
          className={
              "bg-transparent border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <FcShop
              className={
                 "h-14 w-14  rounded-lg border border-warning"
                  
              }
            ></FcShop>
            <div>
              <Typography variant="h5" className="mb-2">
                দোকান
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Shop") ? getCount("Shop")?.count : 0} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Vehicles",
        }}
      >
        <Card
          className={
            "bg-transparent border border-warning"
              
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                  "h-14 w-14  rounded-lg border border-warning px-1"
                  
              }
              src={car}
              alt={"car"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                যানবাহন
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Vehicles") ? getCount("Vehicles")?.count : 0} টি
                বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Garage",
        }}
      >
        <Card
          className={
             "bg-transparent border border-warning"
               
          }
        >
          <div className="flex mx-5 gap-5 my-2">
            <Image
              className={
                  "h-14 w-14  rounded-lg border border-warning px-1"
                  
              }
              src={garage}
              alt={"garage"}
            ></Image>
            <div>
              <Typography variant="h5" className="mb-2">
                গ্যারেজ
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Garage") ? getCount("Garage")?.count : 0} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default DesBan;
