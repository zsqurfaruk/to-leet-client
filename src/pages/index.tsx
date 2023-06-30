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
  const title = `The Ultimate Rental Solution`;

  document.title = title;
  return (
    <>
      <Head>
      <title> {document.title = title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for a hassle-free renting experience. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, toleet, Basa Vara, Vara, Rent, rent, leet, house rent , havenly , haven , flat rent in dhaka , flat rent , flat rent dhaka , apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - The Ultimate Rental Solution | ToLet | Rent in bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta property="og:image" content="https://i.ibb.co/gv3DdvJ/Simple-Box-Solution-Game-Store-Logo-2.jpg" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://quickvara.com/sitemap.xml"/>
        <meta name="title" content="QuickVara - The Ultimate Rental Solution | ToLet | Rent in bangladesh" />
        <meta name="keywords" />
        <meta
          name="description"
          content="Find your rental solution with quickvara's extensive listings for a hassle-free renting experience. QuickVara is the most secure and easy online home, mess, hostel, office, garage, and shop rental service company which aims to simplify your rental experience."
        />
        <meta name="author" content="quickvara.com" />
        <meta
          name="keyword"
          content="QuickVara, To Let, To-Let, toleet, Basa Vara, Vara, Rent, rent, leet, house rent , havenly , haven , flat rent in dhaka , flat rent , flat rent dhaka , apartment rent, real estate, bikroy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickvara.com/" />
        <meta
          property="og:title"
          content="QuickVara - The Ultimate Rental Solution | ToLet | Rent in bangladesh"
        />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="quickvara.com" />
        <meta property="og:image" content="https://i.ibb.co/gv3DdvJ/Simple-Box-Solution-Game-Store-Logo-2.jpg" />
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
