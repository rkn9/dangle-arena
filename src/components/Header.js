"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";

const navLink = [
  { name: "Home", href: "/" },
  { name: "Video", href: "/video" },
  { name: "Live", href: "/live" },
  { name: "Events", href: "/events" },
];

function Header() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <header
      className="flex items-center justify-between
     bg-header text-white h-[60px] px-[50px] *:font-medium border-b-[4px] border-orange"
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
      <div className="*:bg-orange flex gap-3 items-center text-white *:px-3 *:py-1  *:border *:rounded-lg *:h-fit">
        <Link href="/" className="flex items-center gap-2">
          <BiLogoPlayStore color="white" />
          App Download
        </Link>
        <Link href="/">Login</Link>
      </div>
    </header>
  );
}

export default Header;
