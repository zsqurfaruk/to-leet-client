import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { Card, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useContext } from "react";

const PostDestinationType = () => {
  const {
    getPostPopularAreaName,
    postCityNameEng,
    setPostOpenModal,
    setGetPopularAreaName,
    setModalValue,
    postCityNameBan,
    modalValue,
  }: any = useContext(PostStateContext);
  const handleCancel = () => {
    setPostOpenModal(false);
    setGetPopularAreaName("");
  };
  const lang = localStorage.getItem("lan");
  return (
    <div className="bg-primary  w-80 md:w-[40rem] lg:w-full -ml-24 md:-ml-44 lg:ml-0 rounded-md mt-40 lg:mt-0">
      <h1 className="flex justify-evenly text-lg pt-5">
        {lang ? (
          <span>City: {postCityNameEng?.eng}</span>
        ) : (
          <span>শহর: {postCityNameEng?.ban}</span>
        )}
        {lang ? (
          <span>Area: {getPostPopularAreaName?.eng ? <span>{getPostPopularAreaName?.eng}</span>: <span>{getPostPopularAreaName?.label}</span>} </span>
        ) : (
          <h2> এলাকা: {getPostPopularAreaName?.ban ? <span>{getPostPopularAreaName?.ban}</span> : <span>{getPostPopularAreaName?.label}</span>} </h2>
        )}
      </h1>
      <div className=" p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-2 gap-1  md:mt-8">
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() =>
            setModalValue({
              nameEng: "Bachelor-Male",
              nameBan: "ব্যাচেলর (ছেলে)",
            })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">
                    Bachelor (Male)
                  </Typography>
                ) : (
                  <Typography className="text-center">
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
              nameEng: "Bachelor-Female",
              nameBan: "ব্যাচেলর-মেয়ে",
            })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">
                    Bachelor (Female)
                  </Typography>
                ) : (
                  <Typography className="text-center">
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
            setModalValue({ nameEng: "Sublet-Male", nameBan: "সাবলেট-(ছেলে)" })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Sublet (Male)</Typography>
                ) : (
                  <Typography className="text-center">সাবলেট (ছেলে)</Typography>
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
              nameEng: "Sublet-Female",
              nameBan: "সাবলেট-(মেয়ে)",
            })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">
                    Sublet (Female)
                  </Typography>
                ) : (
                  <Typography className="text-center">সাবলেট (মেয়ে)</Typography>
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
            setModalValue({ nameEng: "Family", nameBan: "পরিবার" })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Family</Typography>
                ) : (
                  <Typography className="text-center">পরিবার</Typography>
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
            setModalValue({ nameEng: "Mess-Male", nameBan: "মেস-(ছেলে)" })
          }
        >
          <Card>
            <div className="text-center">
              <div>
                {lang ? (
                  <Typography className="text-center">Mess (Male)</Typography>
                ) : (
                  <Typography className="text-center">মেস (ছেলে)</Typography>
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
            setModalValue({ nameEng: "Mess-Female", nameBan: "মেস-(মেয়ে)" })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Mess (Female)</Typography>
                ) : (
                  <Typography className="text-center">মেস (মেয়ে)</Typography>
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
            setModalValue({ nameEng: "Hostel", nameBan: "আবাসিক হোস্টেল" })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center"> Hostel</Typography>
                ) : (
                  <Typography className="text-center">
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
          onClick={() => setModalValue({ nameEng: "Office", nameBan: "অফিস" })}
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Office</Typography>
                ) : (
                  <Typography className="text-center">অফিস</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
          onClick={() => setModalValue({ nameEng: "Shop", nameBan: "দোকান" })}
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Shop</Typography>
                ) : (
                  <Typography className="text-center">দোকান</Typography>
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
            setModalValue({ nameEng: "Vehicles", nameBan: "যানবাহন" })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Vehicles</Typography>
                ) : (
                  <Typography className="text-center">যানবাহন</Typography>
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
            setModalValue({ nameEng: "Garage", nameBan: "গ্যারেজ" })
          }
        >
          <Card>
            <div>
              <div>
                {lang ? (
                  <Typography className="text-center">Garage</Typography>
                ) : (
                  <Typography className="text-center">গ্যারেজ</Typography>
                )}
              </div>
            </div>
          </Card>
        </Link>
      </div>
      <div className="flex lg:hidden justify-end py-3 mr-7">
        <button
          className="text-red-500 bg-red-100 font-semibold rounded px-5 py-3"
          onClick={handleCancel}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default PostDestinationType;
