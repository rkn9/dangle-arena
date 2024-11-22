"use client";
import DownloadSection from "@/components/Section/DownloadSection";
import EventHome from "@/components/Section/EventHome";
import LiveHomeSection from "@/components/Section/LiveHomeSection";
import NewsSection from "@/components/Section/NewsSection";

export default function Home() {
  return (
    <div className="p-7">
      <EventHome />
      <NewsSection />
      <LiveHomeSection />
      <DownloadSection />
    </div>
  );
}
