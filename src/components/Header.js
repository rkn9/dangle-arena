"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import HeaderSecond from "./models/HeaderSecond";
import { IoIosNotifications } from "react-icons/io";

const navLink = [
  { name: "Home", href: "/" },
  { name: "Video", href: "/video" },
  { name: "Live", href: "/live" },
  { name: "Events", href: "/events" },
];

function Header() {
  const pathName = usePathname();
  const [person, setPerson] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <header
      className="flex items-center justify-between
     bg-header text-white h-[60px] px-[32px] *:font-medium border-b-[4px] border-orange"
    >
      <Image src="/img/logo.png" width={40} height={40} alt="logo" />
      <nav className="flex gap-3">
        {navLink.map((item, id) => {
          const isActive = pathName == item.href;
          return (
            <Link
              href={`${item.href}`}
              key={id}
              className={
                isActive ? "text-orange" : "text-white hover:text-orange"
              }
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2 relative">
        <div className="*:bg-orange flex gap-3 items-center text-white *:px-3 *:py-1  *:border *:rounded-lg *:h-fit">
          <Link href="/" className="flex items-center gap-2">
            <BiLogoPlayStore color="white" />
            App Download
          </Link>
          <Link href="/" onClick={() => setLogin(!login)}>
            Login
          </Link>
        </div>
        {login ? (
          <div className="flex gap-1 items-center">
            <IoIosNotifications size={24} />
            <img
              src="https://s3-alpha-sig.figma.com/img/00e7/ca72/8d0bf49bc142aa7c117f3897c78642b2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jk1OyS36LC6-2beRTBcnOcOmb8NKHawp~8zGoLmzL~M8~CHMIaTMPBxOpw7tX-fLyOaGS1Qmjool8JByVgKgXB7pr8RxHPKKmDsMX4ex8i9U6kY5IwjFkxhXwuNBoij-Hny-8rCLJIJ~UzMO9PHMdXqq-EFHFZXTXagXIIGNYn96fEy593SRM8mEMSaIenk96~ucMSWXVUq3epWxFuBWoT1poshs9vEB~WoLFtXPBlMU8OgqfVNgOE1WkPXjzxJKeMF4qXecSFNT5gpqyiEILX3rl0Xv3RbrdU7YANV~iwN2QUeSd~UWuX4lJlcmt0mitHduWz6UIUh2u0JcRguXhQ__"
              alt=""
              className="w-[30px] cursor-pointer"
              onClick={() => setPerson(!person)}
            />
          </div>
        ) : (
          ""
        )}

        {person ? <HeaderSecond /> : ""}
      </div>
    </header>
  );
}

export default Header;
