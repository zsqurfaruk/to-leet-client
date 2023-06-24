/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import Head from "next/head";
import DestinationType from "@/components/Home/DestinationType/DestinationType";
import PostCounter from "@/components/Home/PostCounter/PostCounter";
import Banner from "@/components/Home/Banner/Banner";
import { StateContext } from "@/Context/StateContext/StateContext";
import About from "@/components/About/About";

function Home() {
  const { isOpen }: any = useContext(StateContext);
  return (
    <>
      <Head>
        <title>The Ultimate Rental Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with To-Leet's extensive listings for rent. To-Leet is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="to-leet.com" />
        <meta
          name="keyword"
          content="To Let,To-Let, to let, to-let,to leet, toleet, To-Leet, To Leet, To Leet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  |  tolet  |  real estate "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://to-leet.com/" />
        <meta
          property="og:title"
          content="To-Leet - The Ultimate Rental Solution | ToLet | Rent in bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="to-leet.com" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="To-Leet - The Ultimate Rental Solution | ToLet | Rent in bangladesh" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with To-Leet's extensive listings for rent. To-Leet is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="to-leet.com" />
        <meta
          name="keyword"
          content="To-Let,To Let,tolet, ToLet, to let, to-let,to leet, toleet, To-Leet, To Leet, To Leet, Basa Vara, Vara, Rent, rent, leet, house rent | flat rent in dhaka | flat rent | flat rent dhaka | apartment rent |  to-let  |  real estate , bikroy,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://to-leet.com/" />
        <meta
          property="og:title"
          content="To-Leet - The Ultimate Rental Solution | ToLet | Rent in bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="to-leet.com" />
      </Head>
      <main className="bg-white">
        <Banner></Banner>
        <DestinationType></DestinationType>
        <PostCounter></PostCounter>
        <About></About>
      </main>
    </>
  );
}

export default Home;
