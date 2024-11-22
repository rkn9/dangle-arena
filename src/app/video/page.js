import LiveNewsCard from "@/components/Cards/LiveNewsCard";
import Newscard from "@/components/Cards/Newscard";
import Heading from "@/components/Heading";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <Heading />
      <div className="flex p-5 gap-5 whitespace-nowrap overflow-x-auto  ">
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
        <LiveNewsCard />
      </div>

      <Heading />
      <div className="flex p-5 gap-5 news-card">
        <Newscard />
        <Newscard />
        <Newscard />
      </div>
      <Heading />
      <div className="flex p-5 gap-5 news-card">
        <Newscard />
        <Newscard />
        <Newscard />
      </div>
    </div>
  );
};

export default page;
