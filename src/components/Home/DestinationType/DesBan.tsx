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
import style from "../../../styles/des.module.css"
import { StateContext } from "@/Context/StateContext/StateContext";

const DesBan = () => {
  const { counter }: any = useContext(APIContext);
  const { setDestinationType }: any = useContext(StateContext);
  const getCount = (value: any) => {
    return counter.find((item: any) => item.type.eng === value) || null;
  };
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-5 md:gap-2 gap-5 mt-5 md:mt-7">
      <Link
        href={{
          pathname: "/Bachelor-(Male)",
        }}
        onClick={()=>setDestinationType("Bachelor Male")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                ব্যাচেলর (ছেলে)
              </Typography>
              {/* <Typography>০ টি বিজ্ঞাপন</Typography> */}
              <Typography className="text-sm">
                {" "}
                {getCount("Bachelor-(Male)")
                  ? getCount("Bachelor-(Male)")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>

      <Link
        href={{
          pathname: "/Bachelor-(Female)",
        }}
        onClick={()=>setDestinationType("Bachelor Female")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                ব্যাচেলর (মেয়ে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Bachelor-(Female)")
                  ? getCount("Bachelor-(Female)")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"}{" "}
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
        onClick={()=>setDestinationType("Mess Male")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                মেস (ছেলে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Mess-(Male)")
                  ? getCount("Mess-(Male)")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"}{" "}
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
        onClick={()=>setDestinationType("Mess Female")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                মেস (মেয়ে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Mess-(Female)")
                  ? getCount("Mess-(Female)")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"}{" "}
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
        onClick={()=>setDestinationType("Sublet Male")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                সাবলেট (ছেলে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Sublet-(Male)")
                  ? getCount("Sublet-(Male)")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"}{" "}
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
        onClick={()=>setDestinationType("Sublet Female")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                সাবলেট (মেয়ে)
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Sublet-(Female)")
                  ? getCount("Sublet-(Female)")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"}{" "}
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
        onClick={()=>setDestinationType("Family")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                পরিবার
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Family") ? getCount("Family")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>

      <Link
        href={{
          pathname: "/Hostel",
        }}
        onClick={()=>setDestinationType("Hostel")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                {" "}
                আবাসিক হোটেল
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Hostel") ? getCount("Hostel")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Office",
        }}
        onClick={()=>setDestinationType("Office")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                অফিস
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Office") ? getCount("Office")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Shop",
        }}
        onClick={()=>setDestinationType("Shop")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                দোকান
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Shop") ? getCount("Shop")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
      <Link
        href={{
          pathname: "/Vehicles",
        }}
        onClick={()=>setDestinationType("Vehicles")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                যানবাহন
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Vehicles") ? getCount("Vehicles")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি
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
        onClick={()=>setDestinationType("Garage")}
        passHref
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
              <Typography variant="h5" className={`mb-2 ${style.fontSize}`}>
                গ্যারেজ
              </Typography>
              <Typography className="text-sm">
                {" "}
                {getCount("Garage") ? getCount("Garage")?.count
                  .toString()
                  .replace(/0/g, "০")
                  .replace(/1/g, "১")
                  .replace(/2/g, "২")
                  .replace(/3/g, "৩")
                  .replace(/4/g, "৪")
                  .replace(/5/g, "৫")
                  .replace(/6/g, "৬")
                  .replace(/7/g, "৭")
                  .replace(/8/g, "৮")
                  .replace(/9/g, "৯"): "০"} টি বিজ্ঞাপন
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default DesBan;
