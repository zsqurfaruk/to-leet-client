import { APIContext } from "@/Context/ApiContext/ApiContext";
import React, { useContext, useState, useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/app/store";
import { getAllPosts } from "@/redux/features/AllPosts/AllPostsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import userPic from "../../../image/team.png";
import adsPic from "../../../image/counter-icon-1 (1).svg";
import insPic from "../../../image/lecture.png";
import feedback from "../../../image/feedback.png";
import image from "../../../image/slide-2.jpg";
import { useUserData } from "@/components/API/Api";

function PostCounter() {
  const lang = useSelector((state: any) => state.language.language);
  const { feedbacks }: any = useContext(APIContext);
  const [startCounting, setStartCounting] = useState(false);
  const [count, setCount] = useState(300);
  const [userCount, setUserCount] = useState(150);
  const [feedbackCount, setFeedbackCount] = useState(1);
  const [instituteCount, setInstituteCount] = useState(10);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { allPosts } = useSelector((state: RootState) => state.allPosts);
  const filterPost = allPosts?.filter((item: any) =>
    item.hasOwnProperty("university")
  );

  const { data: userCounter, isLoading, error } = useUserData();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);


  useEffect(() => {
    setStartCounting(true);
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= allPosts?.length) {
          clearInterval(interval); // Stop counting animation
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 3);

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
    }, 3);

    return () => {
      clearInterval(interval);
    };
  }, [userCounter?.length]);

  useEffect(() => {
    setStartCounting(true);
    const interval = setInterval(() => {
      setFeedbackCount((prevCount) => {
        if (prevCount >= feedbacks?.length) {
          clearInterval(interval); // Stop counting animation
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 3);

    return () => {
      clearInterval(interval);
    };
  }, [feedbacks?.length]);

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
    }, 3);

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
  const banglaNumberFeedback = feedbackCount
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
  const banglaInstitutePost = instituteCount
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
    <section>
      <div
        className="relative h-96 md:h-64 lg:h-72 bg-fixed"
        style={{
          backgroundImage: `url('https://i.ibb.co/xYDkFdC/Depositphotos-65899635-original-2000x1500.jpg')`,
          backgroundSize: "cover", // or 'contain' or any other size value
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute top-0 bg-black h-full w-full bg-opacity-80"></div>
        <div className="absolute top-1 left-[7%] md:left-[2%] lg:left-[8%]  grid grid-cols-2 md:grid-cols-4 gap-4 w-10/12 md:w-11/12 lg:w-10/12 mx-auto mb-20 mt-8">
          <div className="text-primary md:px-0 lg:px-16 md:py-8 rounded mb-5 md:mb-0 text-center">
            {!lang ? (
              <>
                <Image
                  className={"h-16 w-16   mx-auto"}
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
                  className={"h-16 w-16   mx-auto"}
                  src={adsPic}
                  alt={"Male"}
                ></Image>
                <h1 className="text-4xl font-semibold mt-2">
                  {startCounting && (
                    <CountUp
                      end={count}
                      duration={1}
                      formattingFn={() => banglaNumber}
                    />
                  )}
                </h1>
                <h2 className="text-sm mt-1">মোট বিজ্ঞাপন</h2>
              </>
            )}
          </div>
          <div className="text-primary md:px-0 lg:px-16 md:py-8 rounded mb-5 md:mb-0 text-center">
            {!lang ? (
              <>
                <Image
                  className={"h-16 w-16   mx-auto"}
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
                  className={"h-16 w-16   mx-auto"}
                  src={insPic}
                  alt={"Male"}
                ></Image>
                <h1 className="text-4xl font-semibold mt-2">
                  {startCounting && (
                    <CountUp
                      end={count}
                      duration={1}
                      formattingFn={() => banglaInstitutePost}
                    />
                  )}
                </h1>
                <h2 className="text-sm mt-1">শিক্ষা প্রতিষ্ঠানের পাশে</h2>
              </>
            )}
          </div>
          <div className="text-primary md:px-0 lg:px-16 md:py-8 rounded text-center">
            {!lang ? (
              <>
                <Image
                  className={"h-16 w-16   mx-auto"}
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
                  className={"h-16 w-16   mx-auto"}
                  src={userPic}
                  alt={"Male"}
                ></Image>
                <h1 className="text-4xl font-semibold mt-2">
                  {startCounting && (
                    <CountUp
                      end={userCount}
                      duration={1}
                      formattingFn={() => banglaNumberUser}
                    />
                  )}{" "}
                </h1>
                <h2 className="text-sm mt-1">মোট ব্যবহারকারী</h2>
              </>
            )}
          </div>
          <div className="text-primary text-center mt-2 md:mt-0">
            {!lang ? (
              <div className="md:px-0 lg:px-16 md:py-8">
                <Image
                  className={"h-16 w-16   mx-auto"}
                  src={feedback}
                  alt={"feedback"}
                ></Image>
                <h1 className="text-4xl  font-semibold md:mt-2">
                  <CountUp end={feedbacks?.length} duration={3} />
                </h1>
                <h2>Total Feedback</h2>
              </div>
            ) : (
              <div className=" md:px-0 lg:px-16 md:py-8">
                <Image
                  className={"h-16 w-16     mx-auto"}
                  src={feedback}
                  alt={"feedback"}
                ></Image>
                <h1 className="text-4xl font-semibold md:mt-2">
                  {startCounting && (
                    <CountUp
                      end={userCount}
                      duration={1}
                      formattingFn={() => banglaNumberFeedback}
                    />
                  )}{" "}
                </h1>
                <h2 className="text-sm mt-1"> মোট মন্তব্য</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default PostCounter;
