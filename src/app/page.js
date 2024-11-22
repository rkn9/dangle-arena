"use client";

import Newscard from "@/components/Cards/Newscard";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Heading /> */}
      <div className="flex p-5 gap-5 news-card">
        <Newscard />
        <Newscard />
        <Newscard />
      </div>
    </>
  );
}
