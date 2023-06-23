/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import style from "../../styles/banner.module.css"

const AboutBan = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-10/12 mx-auto py-10 text-gray-700">
      <h1 className={`${style.aboutStyle} text-[17px] md:text-2xl font-semibold text-warning`}>
        To-Leet: The Ultimate Rental Solution
      </h1>
      <div className="text-justify -mt-3">
      <br />
      আজকের দ্রুত গতির এবং সদা পরিবর্তনশীল বিশ্বে, আপনার প্রয়োজনের জন্য সঠিক
      স্থান খুঁজে পাওয়া একটি কঠিন কাজ হতে পারে। আপনার জিনিসপত্রের জন্য অতিরিক্ত
      স্টোরেজ, আপনার শখ পূরণের জন্য একটি ওয়ার্কশপ বা আপনার পণ্য প্রদর্শনের জন্য
      একটি খুচরা জায়গার প্রয়োজন হোক না কেন, উপযুক্ত ভাড়ার জন্য অনুসন্ধান
      সময়সাপেক্ষ এবং হতাশাজনক হতে পারে। তবে আর চিন্তা করবেন না!
      <span className="text-warning text-lg"> To-Leet</span> - এ স্বাগতম, <span className="text-warning text-lg">To-Leet</span> হল সবচেয়ে নিরাপদ এবং সহজ অনলাইন বাড়ি, মেস, হোস্টেল, অফিস, গ্যারেজ এবং দোকান ভাড়ার পরিষেবা কোম্পানি যার লক্ষ্য আপনার ভাড়ার অভিজ্ঞতাকে সহজ করা।
      <div className="hidden lg:inline">
        <span className="text-warning text-lg">To-Leet</span> - এ, আমরা বুঝি যে
        প্রত্যেকের প্রয়োজনীয়তা অনন্য, এবং নিখুঁত স্থান খোঁজা একটি বিরামহীন
        প্রক্রিয়া হওয়া উচিত। আমরা একটি স্বজ্ঞাত এবং ব্যবহারকারী-বান্ধব অনলাইন
        প্ল্যাটফর্ম তৈরি করতে প্রযুক্তির শক্তিকে কাজে লাগিয়েছি যা ভাড়ার জন্য
        বিভিন্ন জায়গা অফার করে সম্পত্তি মালিকদের একটি বিস্তৃত নেটওয়ার্কের সাথে
        গ্রাহকদের সংযুক্ত করে।
      </div>
      <br />
      <div className={open ? " scroll-smooth" : "pb-5"}>
        <div>
          <button
            className={open ? "flex" : "hidden py-5"}
            onClick={() => setOpen(!open)}
          >
            আরও দেখুন
            <AiFillCaretDown className="mt-1 text-xl text-warning" />
          </button>
          <div className={open ? "hidden" : "block"}>
            <div className="lg:hidden inline">
              <span className="text-warning text-lg">To-Leet</span> - এ, আমরা
              বুঝি যে প্রত্যেকের প্রয়োজনীয়তা অনন্য, এবং নিখুঁত স্থান খোঁজা
              একটি বিরামহীন প্রক্রিয়া হওয়া উচিত। আমরা একটি স্বজ্ঞাত এবং
              ব্যবহারকারী-বান্ধব অনলাইন প্ল্যাটফর্ম তৈরি করতে প্রযুক্তির শক্তিকে
              কাজে লাগিয়েছি যা ভাড়ার জন্য বিভিন্ন জায়গা অফার করে সম্পত্তি
              মালিকদের একটি বিস্তৃত নেটওয়ার্কের সাথে গ্রাহকদের সংযুক্ত করে।
            </div>
            <br />
            <h1 className={"text-xl text-warning"}>
              প্রথাগত ভাড়া পরিষেবাগুলি থেকে
              <span className={"text-warning text-2xl font-semibold"}>
                'To-Leet'
              </span>
              কেনো আলাদা তা এখানে রয়েছে:
            </h1>
            <br />
            <span className={"text-lg text-warning"}>
              বিস্তৃত বিকল্প স্থান :
            </span>
            <br /> আপনি একটি আরামদায়ক অ্যাপার্টমেন্ট, একটি প্রশস্ত গ্যারেজ, বা
            একটি বাণিজ্যিক দোকান খুঁজছেন কিনা? আমাদের প্ল্যাটফর্মে বিস্তৃত
            ভাড়ার বিকল্প রয়েছে, যা বিভিন্ন প্রয়োজন এবং পছন্দগুলি পূরণ করে।
            আমাদের বিশাল নির্বাচনের সাথে, আপনি আপনার প্রয়োজনীয়তা অনুসারে আদর্শ
            স্থান খুঁজে পাবেন।
            <br />
            <br />
            <span className="text-lg text-warning">
              উন্নত অনুসন্ধান এবং ফিল্টারিং:
            </span>
            <br /> আমাদের ওয়েবসাইট একটি আধুনিক অনুসন্ধান এবং ফিল্টারিং সিস্টেম
            অফার করে, যা আপনাকে অনায়াসে আপনার বিকল্পগুলিকে সংকুচিত করতে সক্ষম
            করে। আপনার পছন্দসই অবস্থান, আকার, সুযোগ-সুবিধা এবং বাজেট নির্দিষ্ট
            করুন এবং আমাদের বুদ্ধিমান অ্যালগরিদম আপনাকে উপযোগী ফলাফল উপস্থাপন
            করবে, আপনার মূল্যবান সময় এবং শ্রম সাশ্রয় করবে।
            <br />
            <br />
            <span className="text-lg text-warning">
              সম্পত্তি সম্পর্কিত বিবরণ :
            </span>
            <br />
            <span className="text-lg text-warning">To-Leet </span> - এ
            তালিকাভুক্ত প্রতিটি ভাড়ার স্থান একটি বিস্তৃত প্রোফাইলের সাথে আসে,
            যার মধ্যে রয়েছে উচ্চ-রেজোলিউশনের ফটো, বিস্তারিত বিবরণ,
            সুযোগ-সুবিধা, প্রাপ্যতা এবং মূল্যের তথ্য। তথ্যের এই সম্পদ আপনাকে
            আপনার প্রয়োজনের সাথে কোন স্থানটি সর্বোত্তম তা সম্পর্কে একটি
            সিদ্ধান্ত নিতে দেয়।
            <br />
            <br />
            <span className="text-lg text-warning">
              স্বচ্ছ ভাড়া প্রক্রিয়াঃ
            </span>
            <br /> <span className="text-lg text-warning">To-Leet</span>
            স্বচ্ছতায় বিশ্বাস করে, যে কারণে আমরা ভাড়াটে এবং সম্পত্তির মালিকদের
            মধ্যে সরাসরি যোগাযোগের সুবিধা দিই। আমাদের সুরক্ষিত মেসেজিং সিস্টেমের
            মাধ্যমে, আপনি একটি মসৃণ এবং স্বচ্ছ ভাড়া প্রক্রিয়া নিশ্চিত করে কোনো
            মধ্যস্থতাকারী ছাড়াই প্রশ্ন জিজ্ঞাসা করতে, শর্তাবলী নিয়ে আলোচনা
            করতে এবং ভাড়া চুক্তিতে আলোচনা করতে পারেন।
            <br />
            <br />
            <span className="text-lg text-warning">
              নিরাপদ এবং বিশ্বস্ত:
            </span>
            <br /> আমরা আপনার নিরাপত্তা এবং মানসিক শান্তিকে অগ্রাধিকার দিই।
            <span className="text-lg text-warning"> To-Leet </span> সম্পত্তির
            মালিকদের পুঙ্খানুপুঙ্খভাবে যাচাই করে এবং নিশ্চিত করে যে সমস্ত তালিকা
            বৈধ এবং সঠিক।
            <br />
            <span className="text-lg text-warning"> To-Leet </span> মানুষ
            যেভাবে বাড়ি, গ্যারেজ এবং দোকান খোঁজা এবং ভাড়া নেয় তাতে বিপ্লব
            ঘটাচ্ছে৷ আমাদের উদ্ভাবনী অনলাইন প্ল্যাটফর্ম, ব্যতিক্রমী গ্রাহক
            পরিষেবার প্রতি আমাদের প্রতিশ্রুতি সহ, আপনার ভাড়ার অভিজ্ঞতাকে
            নির্বিঘ্ন, দক্ষ এবং উপভোগ্য করে তোলার লক্ষ্য।
            <br />
            <br />
            সুতরাং, আপনি যদি একজন উদ্যোক্তা হন যিনি একটি জায়গা সন্ধান করছেন,
            <span className="text-lg text-warning"> To-Leet </span> আপনাকে
            নিখুঁত সমাধান দিতে এখানে রয়েছে। আজই আমাদের ওয়েবসাইট পরিদর্শন করুন
            এবং আপনার আদর্শ ভাড়ার জায়গা খুঁজে পেতে ঝামেলা-মুক্ত যাত্রা শুরু
            করুন!
          </div>
        </div>
        <button
          className={open ? "hidden" : "flex"}
          onClick={() => setOpen(!open)}
        >
          কম দেখান <IoMdArrowDropup className="mb-1 text-3xl text-warning" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default AboutBan;
