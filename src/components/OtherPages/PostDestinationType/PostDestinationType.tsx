import { PostStateContext } from "@/Context/PostStateContext/PostStateContext";
import { Card, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useContext, useState } from "react";

const PostDestinationType = () => {
  const {
    getPopularAreaName,
    postCityNameEng,
    setPostOpenModal,
    setGetPopularAreaName,
    modalValue, setModalValue
  }: any = useContext(PostStateContext);
  const handleCancel = () => {
    setPostOpenModal(false);
    setGetPopularAreaName("");
  };

  return (
    <div className="bg-primary  w-80 md:w-[40rem] lg:w-full -ml-24 md:-ml-44 lg:ml-0 rounded-md mt-40 lg:mt-0">
      <h1 className="flex justify-evenly text-lg pt-5">
        {" "}
        <span>City: {postCityNameEng}</span>
        <span>Area: {getPopularAreaName}</span>
      </h1>
      <div className=" p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-2 gap-1  md:mt-8">
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Bachelor-Male")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Bachelor (Male)</Typography>
              </div>
            </div>
          </Card>
        </Link>

        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Bachelor-Female")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">
                  Bachelor (Female)
                </Typography>
              </div>
            </div>
          </Card>
        </Link>

        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Sublet-Male")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Sublet (Male)</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Sublet-Female")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Sublet (Female)</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Family")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Family</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Mess-Male")}
        >
          <Card
         
          >
            <div className="text-center">
              <div>
                <Typography className="text-center">Mess (Male)</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Mess-Female")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Mess (Female)</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Hostel")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center"> Hostel</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Office")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Office</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Shop")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Shop</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Vehicles")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Vehicles</Typography>
              </div>
            </div>
          </Card>
        </Link>
        <Link
          href={{
            pathname: "/add-post/post-details",
          }}
            onClick={() => setModalValue("Garage")}
        >
          <Card
         
          >
            <div>
              <div>
                <Typography className="text-center">Garage</Typography>
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
