import React from "react";
import Head from "next/head";
import DestinationType from "@/components/Home/DestinationType/DestinationType";
import PostCounter from "@/components/Home/PostCounter/PostCounter";
import Banner from "@/components/Home/Banner/Banner";
import About from "@/components/About/About";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import FeedbackPost from "@/components/FeedbackPost/FeedbackPost";
import FindUsCity from "@/components/Home/FinUsCity/FindUsCity";
import image from "../image/Quick logo without Shadow.png"

function Home() {
  return (
    <>
      <Head>
        <title>
          QuickVara - The Ultimate Rental Solution | Basa Vara | ToLet | Rent in
          Bangladesh
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for a hassle-free renting experience. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, ToLet, To-Let, Basa Vara, Vara, Rent, rent, house rent , flat rent in dhaka , flat rent , flat rent dhaka , apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - The Ultimate Rental Solution | Basa Vara | ToLet | Rent in Bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta
          property="og:image"
          content="https://i.ibb.co/f8fRycR/Quick-logo-without-Shadow.png"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="QuickVara - The Ultimate Rental Solution | Basa Vara | ToLet | Rent in Bangladesh"
        />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for a hassle-free renting experience. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, ToLet, To-Let, Basa Vara, Vara, Rent, rent, house rent , flat rent in dhaka , flat rent , flat rent dhaka , apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - The Ultimate Rental Solution | Basa Vara | ToLet | Rent in Bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta
          property="og:image"
          content="https://i.ibb.co/f8fRycR/Quick-logo-without-Shadow.png"
        />
      </Head>
      <main className="bg-white">
        <Banner></Banner>
        <DestinationType></DestinationType>
        <FindUsCity></FindUsCity>
        <PostCounter></PostCounter>
        <FeedbackPost></FeedbackPost>
        <ContactUs></ContactUs>
        <About></About>
      </main>
    </>
  );
}

export default Home;
