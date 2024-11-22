import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";

import Image from "next/image";
const LiveNewsCard = () => {
  return (
    <div>
      <div className="live-news-main  w-[350px]">
        <div className="relative">
          <Image
            src="https://s3-alpha-sig.figma.com/img/53fe/e8a8/67d6e9156710089f2e7892b1c6ab26c4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EtQdFJVUy8qGhsWeC8gKPex4FZ5c09jkpt5p2vfbUNxKHVOnuIZEgpVuHPDS4YWKZp8QvI~xPuLK-OQ0UgebTfTJxRyrPVzLSbmmXn4sd8EFRy9dJU3cu93U7fB4LBx9S0lDNwmF6XLMGaXDeJ9mkmuKbS8mq93sbtJGdp24kUs~E57lLtxZCLBMrk6lRwILxyL6wYWBdqSR~J7NOVQj6kQw77O7k1fjZUpCX5af6vlDGvz1~VBQ6M-o2X5jwJH6kIqnvAkp3DacB8E-R2G94zwr7ASFjhHvYbdEH3F86oQu-9q8t6MrFCF4eMb7pzDtMOLFeWvabiMGDNY0zFU1nQ__"
            width={500}
            height={500}
            className="newscard-image"
            alt="Picture of the Players"
          />
          <a
            href="##"
            className="flex items-center gap-2 bg-orange w-fit p-2 rounded-full absolute bottom-[10px] right-[10px]"
          >
            {" "}
            <CgMediaLive /> <span className="block ">Live</span>
          </a>
        </div>
        <div className="live-cards-h3 p-2">
          <h3 className=" font-semibold">
            Sushil, Geeta, Sakshi: 5 Indians to Watch <br /> in Pro Wrestling
            League
          </h3>

          <div>
            <p className="flex items-center  gap-2 mt-2">
              {" "}
              <FaCalendarAlt color="orange" fontSize={20} />
              Sep 13, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNewsCard;
