import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { Button, Card, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useContext } from "react";
import Cookies from 'js-cookie';
import { FilterContext } from "@/Context/FilterContext/FilterContext";

const PostDestinationType = () => {
  const {
    getPostPopularAreaName,
    postCityNameEng,
    setPostOpenModal,
    setGetPostPopularAreaName,
    setModalValue,
    postDistrictsName,
    postDivisionNameEng,
    setPostDistrictsName
  }: any = useContext(PostStateContext)
  const {lang}:any = useContext(FilterContext)
  const handleCancel = () => {
    setPostOpenModal(false);
    setGetPostPopularAreaName({});
    setPostDistrictsName({})
  };
   
  return (
    <div className="bg-neutral text-gray-700 w-12/12 md:w-12/12 lg:w-full rounded-md mt-40 lg:mt-0 p-5 ">
      <div>
        {
          postDistrictsName?.eng ?
          <h1 className="flex justify-evenly text-lg pt-5">
          {!lang ? (
            <span>Division: {postDivisionNameEng?.eng}</span>
          ) : (
            <span> বিভাগ: {postDivisionNameEng?.ban}</span>
          )}
          {!lang ? (
            <span>District: {postDistrictsName?.eng} </span>
          ) : (
            <span>জেলা : {postDistrictsName?.ban} </span>
          )}
        </h1> :
          <h1 className="flex justify-evenly text-lg pt-5">
          {!lang ? (
            <span>City: {postCityNameEng?.eng}</span>
          ) : (
            <span>শহর: {postCityNameEng?.ban}</span>
          )}
          {!lang ? (
            <span>Area: {getPostPopularAreaName?.eng} </span>
          ) : (
            <span> এলাকা: {getPostPopularAreaName?.ban} </span>
          )}
        </h1> 
        }
      </div>
      <div className=" p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-2 gap-1  md:mt-8">
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({
              eng: "Bachelor-(Male)",
              ban: "ব্যাচেলর-(ছেলে)",
            })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">
                    Bachelor (Male)
                  </Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">
                    ব্যাচেলর (ছেলে)
                  </Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>

        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({
              eng: "Bachelor-(Female)",
              ban: "ব্যাচেলর-(মেয়ে)",
            })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center text-[15px] py-[6px] px-[1px] border border-warning rounded-full">
                    Bachelor (Female)
                  </Typography>
                ) : (
                  <Typography className="text-center   border border-warning rounded-full">
                    ব্যাচেলর (মেয়ে)
                  </Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Mess-(Male)", ban: "মেস-(ছেলে)" })
          }
        >
          <Card>
            <div className="text-center">
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Mess (Male)</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">মেস (ছেলে)</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Mess-(Female)", ban: "মেস-(মেয়ে)" })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Mess (Female)</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">মেস (মেয়ে)</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Sublet-(Male)", ban: "সাবলেট-(ছেলে)" })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Sublet (Male)</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">সাবলেট (ছেলে)</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({
              eng: "Sublet-(Female)",
              ban: "সাবলেট-(মেয়ে)",
            })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">
                    Sublet (Female)
                  </Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">সাবলেট (মেয়ে)</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Family", ban: "পরিবার" })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Family</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">পরিবার</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
      
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Hostel", ban: "আবাসিক-হোস্টেল" })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full"> Hostel</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">
                    {" "}
                    আবাসিক হোস্টেল
                  </Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() => setModalValue({ eng: "Office", ban: "অফিস" })}
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Office</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">অফিস</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() => setModalValue({ eng: "Shop", ban: "দোকান" })}
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Shop</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">দোকান</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Vehicles", ban: "যানবাহন" })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Vehicles</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">যানবাহন</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({ eng: "Garage", ban: "গ্যারেজ" })
          }
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className="text-center border border-warning rounded-full">Garage</Typography>
                ) : (
                  <Typography className="text-center border border-warning rounded-full">গ্যারেজ</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
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

export default PostDestinationType;
