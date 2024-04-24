import styles from "./page.module.css";
import Image from "next/image";
import contact from "public/contact.svg";

export default function Contact() {
  return (
    <div className="px-6">
      <h1 className="text-4xl font-bold mb-6 flex  justify-center mt-10">
        Let's Keep in Touch{" "}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex-1">
          <Image src={contact} alt="" className="w-full" />
        </div>
        <div className="flex-1">
          <form action="" className="flex flex-col border-none gap-2">
            <input
              type="text"
              placeholder="name"
              className="border-2 bg-transparent p-2 rounded-lg outline-none"
            />
            <input
              type="email"
              placeholder="email"
              className="border-2 bg-transparent p-2 rounded-lg outline-none"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border-2 bg-transparent p-2 rounded-lg outline-none"
            ></textarea>
          </form>
          <div className="mt-2">
            <button className="bg-teal-700 rounded-lg p-2 text-[#bbb]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
