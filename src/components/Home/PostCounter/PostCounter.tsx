import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext, useState, useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { getAllPosts } from "@/redux/features/AllPosts/AllPostsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import userPic from "../../../image/team.png"
import adsPic from "../../../image/counter-icon-1 (1).svg"

function PostCounter() {
   const lang = useSelector((state:any) => state.language.language);
  const {userCounter }: any = useContext(APIContext);
  const [startCounting, setStartCounting] = useState(false);
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { allPosts } = useSelector((state: RootState) => state.allPosts);

 useEffect(() => {
  dispatch(getAllPosts());
}, [dispatch]);

  useEffect(() => {
    setStartCounting(true);
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= allPosts.length) {
          clearInterval(interval); // Stop counting animation
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, [allPosts.length]);

  useEffect(() => {
    setStartCounting(true);
    const interval = setInterval(() => {
      setUserCount((prevCount) => {
        if (prevCount >= userCounter.length) {
          clearInterval(interval); // Stop counting animation
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 60);

    return () => {
      clearInterval(interval);
    };
  }, [userCounter.length]);

  const banglaNumber = count
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
    .replace(/9/g, "৯");
  const banglaNumberUser = userCount
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
    .replace(/9/g, "৯");

   
  return (
    <div className="bg-warning">
      <hr className="w-10/12 mx-auto" />
      <div className="flex justify-evenly gap-2 w-10/12 mx-auto pb-20 pt-10 mt-10">
        <div className="text-primary border-2 border-accent shadow-md shadow-accent p-8 md:p-11 rounded">
          {!lang ? (
            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning ml-3 mr-1"
                
            }
            src={adsPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold mt-2 ml-3">
              <CountUp end={allPosts?.length} duration={3} />
            </h1>
            <h2 className="ml-3">Total Ads</h2>
            </>
          ) : (

            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning ml-3"
                
            }
            src={adsPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold ml-2 mt-2">
              
              {startCounting && (
                <CountUp
                  end={count}
                  duration={3}
                  formattingFn={() => banglaNumber}
                />
              )} 
              
            </h1>
            <h2 className="text-xs md:text-sm mt-1 ml-1">মোট বিজ্ঞাপন</h2>
            </>
          )}
        </div>
        <div className="text-primary  border-2 border-accent shadow-md shadow-accent p-8 md:p-10 rounded">
          {!lang ? (
           <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning  ml-3"
                
            }
            src={userPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl  font-semibold mt-2 ml-3">
               <CountUp end={userCounter?.length} duration={3} />
            </h1>
            <h2 className="ml-3">Total User</h2>
            </>
          ) : (
            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning  ml-3"
                
            }
            src={userPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold ml-3 mt-2">
              
              {startCounting && (
                <CountUp
                  end={userCount}
                  duration={3}
                  formattingFn={() => banglaNumberUser}
                />
              )}{" "}
            </h1>
            <h2 className="text-xs md:text-sm mt-1">মোট ব্যবহারকারী</h2>
            </>
          )}
        </div>
      </div>
      <hr className="w-10/12 mx-auto" />
    </div>
  );
}
export default PostCounter;
