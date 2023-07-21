import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { Button, Card, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useContext } from "react";
import style from "../../../styles/postDes.module.css"
import { useSelector } from "react-redux";

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
   const handleCancel = () => {
    setPostOpenModal(false);
    setGetPostPopularAreaName({});
    setPostDistrictsName({})
  }
  const lang = useSelector((state:any) => state.language.language);
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
      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-2 gap-1  md:mt-8">
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>
                    Bachelor-Male
                  </Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>
                    ব্যাচেলর-ছেলে
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>
                    Bachelor-Female
                  </Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>
                    ব্যাচেলর-মেয়ে
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
          passHref
        >
          <Card>
            <div className="text-center">
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded  ${style.fontSize} `}>Mess-Male</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>মেস-ছেলে</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Mess-Female</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>মেস-মেয়ে</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Sublet-Male</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>সাবলেট-ছেলে</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>
                    Sublet-Female
                  </Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>সাবলেট-মেয়ে</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Family</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>পরিবার</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}> Hostel</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Office</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>অফিস</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Shop</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>দোকান</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Vehicles</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>যানবাহন</Typography>
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
          passHref
        >
          <Card>
            <div>
              <div>
                {!lang ? (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>Garage</Typography>
                ) : (
                  <Typography className={`text-center border border-warning rounded ${style.fontSize}`}>গ্যারেজ</Typography>
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
