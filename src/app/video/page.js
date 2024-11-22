import LiveNewsCard from "@/components/Cards/LiveNewsCard";
import Newscard from "@/components/Cards/Newscard";
import NewsSection from "@/components/Section/NewsSection";
// import Heading from "@/components/Heading";
import React from "react";

const page = () => {
  return (
    <div className="p-7">
      {/* <Heading /> */}
      <div className="flex p-5 gap-5 whitespace-nowrap overflow-x-auto scrollbar-none  ">
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
      </div>

      <NewsSection />
      <NewsSection />

    </div>
  );
};

export default page;
