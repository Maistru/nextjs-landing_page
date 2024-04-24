"use client";
import Link from "next/link";
import Image from "next/image";
import { links } from "../navbar/Links";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DarkMode from "../navbar/darkmode/DarkMode";
export default function Navbur() {
  const [navigation, setNavigation] = useState(false);
  const handleNavigation = () => {
    setNavigation(!navigation);
  };
  return (
    <header className="py-8 px-6">
      <nav className="flex items-center justify-between">
        <Link href={"/"} className="text-3xl">
          Logo
        </Link>

        <ul className="hidden md:flex items-center space-x-3 ">
          {links.map((link) => (
            <Link className="hover:text-teal-600" key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex gap-2 ">
          <DarkMode />
          <div className="">
            {/* <button className="bg-teal-700 rounded-full px-2 py-0 text-[#bbb]">
              Logout
            </button> */}
          </div>
        </div>

        <div onClick={handleNavigation} className="block md:hidden z-10">
          {navigation ? (
            <AiOutlineClose size={22} />
          ) : (
            <AiOutlineMenu size={22} />
          )}
        </div>

        <div
          className={
            navigation
              ? "md:hidden  bg-teal-700/10 absolute w-full h-52  flex items-center justify-center text-center top-0 bottom-0 right-0 left-0 duration-300 ease-in-out"
              : "md:hidden  bg-teal-700/10 absolute w-full h-52  flex items-center justify-center text-center top-0 bottom-0 right-0 left-[-100%] duration-300 ease-in-out"
          }
        >
          <ul className="flex flex-col gap-2" onClick={handleNavigation}>
            {links.map((link) => (
              <Link
                className="hover:text-teal-600"
                key={link.id}
                href={link.url}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
