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
import insPic from "../../../image/lecture.png"

function PostCounter() {
   const lang = useSelector((state:any) => state.language.language);
  const {userCounter }: any = useContext(APIContext);
  const [startCounting, setStartCounting] = useState(false);
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [instituteCount, setInstituteCount] = useState(0);

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { allPosts } = useSelector((state: RootState) => state.allPosts);
  const { filterPost } = useSelector(
    (state: RootState) => state['qv-uv']
  );
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
  }, [allPosts?.length]);

  useEffect(() => {
    setStartCounting(true);
    const interval = setInterval(() => {
      setUserCount((prevCount) => {
        if (prevCount >= userCounter?.length) {
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
  }, [userCounter?.length]);
  useEffect(() => {
    setStartCounting(true);
    const interval = setInterval(() => {
      setInstituteCount((prevCount) => {
        if (prevCount >= filterPost?.length) {
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
  }, [filterPost?.length]);

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
  const banglaInstitutePost = instituteCount.toString()
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
      <div className="block md:flex justify-evenly gap-2 w-10/12 mx-auto pb-20 pt-10 mt-10">
        <div className="text-primary border-2 border-accent shadow-md shadow-accent p-8 md:px-16 md:py-11 rounded mb-5 md:mb-0 text-center">
          {!lang ? (
            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning mx-auto"
                
            }
            src={adsPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold mt-2">
              <CountUp end={allPosts?.length} duration={3} />
            </h1>
            <h2>Total Ads</h2>
            </>
          ) : (

            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning mx-auto"
                
            }
            src={adsPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold mt-2">
              
              {startCounting && (
                <CountUp
                  end={count}
                  duration={3}
                  formattingFn={() => banglaNumber}
                />
              )} 
              
            </h1>
            <h2 className="text-sm mt-1">মোট বিজ্ঞাপন</h2>
            </>
          )}
        </div>
        <div className="text-primary border-2 border-accent shadow-md shadow-accent p-8 md:px-10 md:py-11 rounded mb-5 md:mb-0 text-center">
          {!lang ? (
            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning mx-auto"
                
            }
            src={insPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold mt-2">
              <CountUp end={filterPost?.length} duration={3} />
            </h1>
            <h2>Beside Institute</h2>
            </>
          ) : (

            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning mx-auto"
                
            }
            src={insPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold mt-2">
              
              {startCounting && (
                <CountUp
                  end={count}
                  duration={3}
                  formattingFn={() => banglaInstitutePost}
                />
              )} 
              
            </h1>
            <h2 className="text-sm mt-1">শিক্ষা প্রতিষ্ঠানের পাশে</h2>
            </>
          )}
        </div>
        <div className="text-primary  border-2 border-accent shadow-md shadow-accent p-8 md:px-14 md:py-11 rounded text-center">
          {!lang ? (
           <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning mx-auto"
                
            }
            src={userPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl  font-semibold mt-2">
               <CountUp end={userCounter?.length} duration={3} />
            </h1>
            <h2>Total User</h2>
            </>
          ) : (
            <>
            <Image
            className={
               "h-16 w-16 border rounded-lg border-warning mx-auto"
                
            }
            src={userPic}
            alt={"Male"}
          ></Image>
            <h1 className="text-4xl font-semibold mt-2">
              
              {startCounting && (
                <CountUp
                  end={userCount}
                  duration={3}
                  formattingFn={() => banglaNumberUser}
                />
              )}{" "}
            </h1>
            <h2 className="text-sm mt-1">মোট ব্যবহারকারী</h2>
            </>
          )}
        </div>
      </div>
      <hr className="w-10/12 mx-auto" />
    </div>
  );
}
export default PostCounter;
