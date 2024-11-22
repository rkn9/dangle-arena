import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import Image from "next/image";
function LiveNewsHomeCard() {
  return (
    <div>
      <div className="live-news-main ">
        <div className="relative">

          <iframe src="https://www.youtube.com/embed/xf-trlkti3Y?si=rHeAiCE15DEbKWqk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-full h-[60vw]"></iframe>
          <a
            href="##"
            className="flex items-center gap-2 bg-orange w-fit p-2 rounded-full absolute bottom-[10px] right-[10px]"
          >
            <CgMediaLive /> <span className="block ">Live</span>
          </a>
        </div>
        <div className="live-cards-h3 p-2"><div>
          <p className="flex items-center  gap-2 mt-2">
            <FaCalendarAlt color="orange" fontSize={20} />
            Sep 13, 2022
          </p>
        </div>
          <h3 className=" font-semibold">
            Sushil, Geeta, Sakshi: 5 Indians to Watch <br /> in Pro Wrestling
            League
          </h3>
        </div>
      </div>
    </div >
  )
}

export default LiveNewsHomeCard