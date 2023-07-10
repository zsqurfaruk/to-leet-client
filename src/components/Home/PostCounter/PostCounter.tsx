import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext, useState, useEffect } from "react";
import CountUp from "react-countup";
import Cookies from "js-cookie";
import { FilterContext } from "@/Context/FilterContext/FilterContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { getAllPosts } from "@/redux/features/AllPosts/AllPostsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

function PostCounter() {
  // const {lang}:any = useContext(FilterContext)
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
    }, 70);

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
    }, 70);

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
        <div className="text-primary border-2 border-accent shadow-md shadow-accent text-xl md:text-3xl md:font-semibold  p-10 rounded">
          {!lang ? (
            <span>
              Total Ads: <CountUp end={allPosts?.length} duration={5} />
            </span>
          ) : (
            <span className="text-lg md:text-2xl">
              মোট বিজ্ঞাপনঃ{" "}
              {startCounting && (
                <CountUp
                  end={count}
                  duration={3}
                  formattingFn={() => banglaNumber}
                />
              )}{" "}
              টি
            </span>
          )}
        </div>
        <div className="text-primary text-xl md:text-3xl md:font-semibold  border-2 border-accent shadow-md shadow-accent p-8 md:p-10 rounded">
          {!lang ? (
            <span>
              Total Users: <CountUp end={userCounter?.length} duration={5} />
            </span>
          ) : (
            <span className="text-lg md:text-2xl">
              মোট ব্যবহারকারীঃ{" "}
              {startCounting && (
                <CountUp
                  end={userCount}
                  duration={5}
                  formattingFn={() => banglaNumberUser}
                />
              )}{" "}
            </span>
          )}
        </div>
      </div>
      <hr className="w-10/12 mx-auto" />
    </div>
  );
}
export default PostCounter;
