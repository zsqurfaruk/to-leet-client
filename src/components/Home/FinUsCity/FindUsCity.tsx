import React from "react";
import dhaka from "../../../image/places/dhaka.avif";
import rajshahi from "../../../image/places/rajshahi.jpg";
import chittagong from "../../../image/places/chittagong.jpg";
import barisal from "../../../image/places/barisal.jpg";
import sylhet from "../../../image/places/Sylhet.jpg";
import khulna from "../../../image/places/khulna.jpg";
import rangpur from "../../../image/places/Rangpur.jpg";
import mymensingh from "../../../image/places/Mymensingh.jpg";
import Image from "next/image";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const FindUsCity = () => {
  const lang = useSelector((state: any) => state.language.language);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50px",
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
          centerPadding: "50px",
        },
      },
    ],
  };
  return (
    <div className="lg:w-10/12 mx-auto mt-10 mb-20">
      {!lang ? (
        <h1 className="text-center text-3xl md:text-4xl mb-5 font-semibold text-warning">
          Find us in these cities, divisions, and many more!
        </h1>
      ) : (
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-5 text-warning">
          আমাদেরকে আপনার শহর এবং বিভাগে পাবেন!
        </h1>
      )}
      {/* Dekstop start*/}
      <div className="hidden lg:grid grid-cols-4 gap-5">
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={dhaka}
            alt={"dhaka"}
          ></Image>
           <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Dhaka
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              ঢাকা
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={rajshahi}
            alt={"rajshahi"}
          ></Image>
           <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Rajshahi
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              রাজশাহী
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={chittagong}
            alt={"chittagong"}
          ></Image>
          <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Chittagong
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              চট্টগ্রাম
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={barisal}
            alt={"barisal"}
          ></Image>
          <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Barisal
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              বরিশাল
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={sylhet}
            alt={"sylhet"}
          ></Image>
          <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Sylhet
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              সিলেট
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={khulna}
            alt={"khulna"}
          ></Image>
          <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Khulna
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              খুলনা
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={rangpur}
            alt={"rangpur"}
          ></Image>
          <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Rangpur
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              রংপুর
            </h1>
          )}
        </div>
        <div className="relative">
          <Image
            className={
              "h-full w-full hover:scale-105 ease-in-out duration-700 rounded"
            }
            src={mymensingh}
            alt={"mymensingh"}
          ></Image>
          <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
          {!lang ? (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              Mymensingh
            </h1>
          ) : (
            <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
              ময়মনসিংহ
            </h1>
          )}
        </div>
      </div>
      {/* Dekstop end  */}
      <div className="lg:hidden px-5">
        <Slider {...settings} className="">
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={dhaka}
              alt={"dhaka"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Dhaka
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                ঢাকা
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={rajshahi}
              alt={"rajshahi"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Rajshahi
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                রাজশাহী
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={chittagong}
              alt={"chittagong"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Chittagong
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                চট্টগ্রাম
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={barisal}
              alt={"barisal"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Barisal
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                বরিশাল
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={sylhet}
              alt={"sylhet"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Sylhet
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                সিলেট
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={khulna}
              alt={"khulna"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Khulna
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                খুলনা
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={rangpur}
              alt={"rangpur"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Rangpur
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                রংপুর
              </h1>
            )}
          </div>
          <div className="relative">
            <Image
              className={
                "h-72 md:h-80 w-full hover:scale-105 ease-in-out duration-700 rounded"
              }
              src={mymensingh}
              alt={"mymensingh"}
            ></Image>
            <div className="absolute h-full w-full hover:bg-opacity-50 top-0 hover:bg-black ease-in-out duration-700"></div>
            {!lang ? (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                Mymensingh
              </h1>
            ) : (
              <h1 className="absolute left-5 bottom-5 bg-white text-2xl font-semibold px-1 rounded">
                ময়মনসিংহ
              </h1>
            )}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FindUsCity;
