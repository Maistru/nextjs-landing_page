import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { icons } from "./Icons";

export default function Footer() {
  return (
    <footer className="mb-10">
      <div className=" flex flex-col-reverse md:flex-row px-6 justify-between space-y-8 md:space-x-0">
        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-2 md:items-start">
          <div className="text-center mt-6 md:mt-0">
            &copy;2023 Maistu. All rights reserved.
          </div>
          <Image src={"/next.svg"} width={150} height={0}></Image>
          <div className="flex space-x-2">
            {icons.map((icon) => (
              <Link href="">
                <Image
                  key={icon.src}
                  src={icon.src}
                  width={20}
                  height={20}
                  alt="social-media"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-around space-x-32 ml-4">
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-slate-500">
              Home
            </a>
            <a href="#" className="hover:text-slate-500">
              Portfolio
            </a>
            <a href="#" className="hover:text-slate-500">
              Blog
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-slate-500">
              About
            </a>
            <a href="#" className="hover:text-slate-500">
              Contact
            </a>
            <a href="#" className="hover:text-slate-500">
              Dashboard
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="flex-1 py-2 px-6 rounded-full bg-slate-200 "
              />
              <button className="bg-teal-700 hover:bg-slate-500 rounded-full text-[#bbb] px-4 py-2">
                Go
              </button>
            </div>
          </form>
          <div className="hidden md:block">
            &copy;2023 Maistu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
